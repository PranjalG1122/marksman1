"use client";

import Chatbot from "@/components/Chatbot";
import Sidebar from "@/components/Sidebar";
import SubTopicContent from "@/components/SubTopicContent";
import { SubTopicListProps } from "@/lib/types";
import { fetchChapters } from "@/server/chapter";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Chapter({
  params,
}: {
  params: { chapterId: string; subtopicId: string };
}) {
  const [subTopics, setSubTopics] = useState<SubTopicListProps[]>();
  const [classNum, setClassNum] = useState<number>();
  const [chapterName, setChapterName] = useState<string>();
  const [quizUserProgress, setQuizUserProgress] = useState<
    {
      chapterId: string;
    }[]
  >();

  useEffect(() => {
    (async () => {
      if (!params.chapterId) return;
      const res = await fetchChapters(params.chapterId);
      if (!res) return toast.error("Error fetching data");
      setClassNum(res.class.classNumber);
      setSubTopics(res.subtopics);
      setChapterName(res.chapterName);
      setQuizUserProgress(res.quizUserProgress);
    })();
  }, [params]);

  return (
    chapterName &&
    classNum &&
    subTopics &&
    quizUserProgress && (
      <main className="flex h-full min-h-screen w-screen flex-1 flex-row items-center">
        <Sidebar
          chapterName={chapterName}
          classNum={classNum}
          subTopics={subTopics}
          params={params}
          quizUserProgress={quizUserProgress}
        />
        <SubTopicContent
          params={params}
          subTopics={subTopics}
          classNum={classNum}
        />
        <Chatbot classNum={classNum} />
      </main>
    )
  );
}
