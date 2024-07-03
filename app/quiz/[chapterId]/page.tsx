"use client";

import { Button } from "@/components/Button";
import Navbar from "@/components/Navbar";
import { QuizProps } from "@/lib/types";
import { checkUserQuizProgress, generateQuiz, submitQuiz } from "@/server/quiz";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Quiz({ params }: { params: { chapterId: string } }) {
  const [quiz, setQuiz] = useState<QuizProps[]>([]);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);
  const [progressData, setProgressData] = useState<{
    score: number;
    chapter: {
      chapterName: string;
    };
  }>();

  useEffect(() => {
    (async () => {
      const progress = await checkUserQuizProgress(params.chapterId);
      if (progress) {
        setQuizCompleted(true);
        setProgressData(progress);
      } else {
        const res = await generateQuiz(params.chapterId);
        if (!res) return toast.error("Failed to fetch quiz");
        try {
          const quizData: {
            questions: QuizProps[];
          } = JSON.parse(res);
          setQuiz(
            quizData.questions.map((q) => {
              return {
                question: q.question,
                options: q.options,
                correct_option: q.correct_option,
                user_option: "",
              };
            })
          );
        } catch (err) {
          console.error(err);
          return toast.error("Unabled to fetch quiz");
        }
      }
    })();
  }, []);

  const handleSubmit = async () => {
    const correctAnswers = quiz.filter(
      (q) => q.correct_option === q.user_option
    ).length;

    const res = await submitQuiz(params.chapterId, correctAnswers);
    if (!res) return toast.error("Failed to submit quiz");
    window.location.reload();
  };

  return (
    <main className="w-full h-full flex flex-col items-center">
      <Navbar />
      {!quizCompleted ? (
        <div className="w-full max-w-3xl py-16 flex flex-col gap-6">
          {quiz && (
            <>
              <ul className="flex flex-col w-full gap-6">
                {quiz.map((question, questionIndex) => (
                  <li key={questionIndex} className="flex flex-col gap-2">
                    <h2 className="font-semibold text-lg">
                      {question.question}
                    </h2>
                    <ul className="grid grid-cols-2 grid-rows-2 gap-2">
                      {question.options.map((option, optionIndex) => (
                        <li key={optionIndex} className="w-full">
                          <button
                            className={
                              "px-4 py-2 rounded border border-indigo-500 w-full h-full flex-1 hover:bg-indigo-500 text-start hover:text-white " +
                              (question.user_option === option
                                ? "bg-indigo-500 text-white"
                                : "bg-white text-black")
                            }
                            onClick={() => {
                              setQuiz((prev) => {
                                const newQuiz = [...prev];
                                newQuiz[questionIndex].user_option = option;
                                return newQuiz;
                              });
                            }}
                          >
                            {option}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
              <Button onClick={handleSubmit} className="w-fit" disabled={!quiz}>
                Submit
              </Button>
            </>
          )}
        </div>
      ) : (
        <div className="w-full max-w-3xl py-16 flex flex-col gap-6">
          {progressData && (
            <>
              <h1 className="text-3xl font-semibold">Quiz Completed</h1>
              <h2 className="text-lg font-semibold">
                {progressData.chapter.chapterName}
              </h2>
              <h3 className="text-lg font-semibold">
                Score: {progressData.score} / 10
              </h3>
            </>
          )}
        </div>
      )}
    </main>
  );
}
