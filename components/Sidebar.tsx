import Image from "next/image";

import logo from "@/public/logo.png";
import Link from "next/link";
import { SubTopicListProps } from "@/lib/types";

export default function Sidebar({
  chapterName,
  classNum,
  subTopics,
  params,
  quizUserProgress,
}: {
  chapterName: string;
  classNum: number;
  subTopics: SubTopicListProps[];
  params: { chapterId: string; subtopicId: string };
  quizUserProgress: { chapterId: string }[];
}) {
  console.log(quizUserProgress)
  return (
    <aside className="flex min-h-screen w-full max-w-xs flex-col items-start gap-2 border-r border-r-gray-300 p-4">
      <Link href="/dashboard">
        <Image src={logo} alt="logo" className="w-64" unoptimized={true} />
      </Link>
      <div className="flex flex-row items-center gap-2">
        <h1 className="text-lg font-semibold md:text-xl">Class {classNum}</h1>
        {" - "}
        <h1 className="text-lg font-semibold md:text-xl">{chapterName}</h1>
      </div>
      <ul className="flex h-full w-full flex-1 flex-col items-center gap-2">
        {subTopics
          ? subTopics.map((subtopic, i) => {
              return (
                <li key={i} className="w-full">
                  <Link
                    href={"/chapter/" + params.chapterId + "/" + subtopic.id}
                    className={
                      "flex w-full flex-row items-center gap-2 rounded p-1 transition-all hover:bg-indigo-200 " +
                      (subtopic.id === params.subtopicId && "bg-indigo-200")
                    }
                  >
                    <span
                      className={
                        "flex h-6 w-full max-w-6 items-center justify-center rounded-full border font-medium " +
                        (subtopic.subtopicUserProgress.length > 0
                          ? "border border-indigo-600 bg-indigo-500 text-indigo-100"
                          : "border-indigo-300")
                      }
                    >
                      {i + 1}
                    </span>
                    <p className="font-medium">{subtopic.subtopicName}</p>
                  </Link>
                </li>
              );
            })
          : [...Array(7)].map((_, i) => {
              return (
                <li className="w-full" key={i}>
                  <span className="flex h-8 w-full animate-pulse rounded bg-gray-200" />
                </li>
              );
            })}
        <li className="w-full">
          <Link
            href={"/quiz/" + params.chapterId}
            className="flex w-full flex-row items-center gap-2 rounded p-1 transition-all hover:bg-indigo-200"
          >
            <span
              className={
                "flex h-6 w-full max-w-6 items-center justify-center rounded-full border font-medium " +
                (quizUserProgress.length > 0  
                  ? "border border-indigo-600 bg-indigo-500 text-indigo-100"
                  : "border-indigo-300")
              }
            >
              {subTopics.length + 1}
            </span>
            <p className="font-medium">Quiz</p>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
