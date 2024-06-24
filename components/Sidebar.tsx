import Image from "next/image";

import logo from "@/public/logo.png";
import Link from "next/link";
import { SubTopicListProps } from "@/lib/types";

export default function Sidebar({
  chapterName,
  classNum,
  subTopics,
  params,
}: {
  chapterName: string;
  classNum: number;
  subTopics: SubTopicListProps[];
  params: { chapterId: string; subtopicId: string };
}) {
  return (
    <aside className="flex flex-col items-start gap-2 w-full max-w-xs p-4 border-r border-r-gray-300 min-h-screen">
      <Link href="/dashboard">
        <Image src={logo} alt="logo" className="w-64" unoptimized={true} />
      </Link>
      <div className="flex flex-row items-center gap-2">
        <h1 className="md:text-xl text-lg font-semibold">Class {classNum}</h1>
        {" - "}
        <h1 className="md:text-xl text-lg font-semibold">{chapterName}</h1>
      </div>
      <ul className="flex flex-col items-center gap-2 w-full h-full flex-1">
        {subTopics
          ? subTopics.map((subtopic, i) => {
              return (
                <li key={i} className="w-full">
                  <Link
                    href={"/chapter/" + params.chapterId + "/" + subtopic.id}
                    className={
                      "flex flex-row items-center gap-2 p-1 rounded w-full transition-all hover:bg-indigo-200 " +
                      (subtopic.id === params.subtopicId && "bg-indigo-200")
                    }
                  >
                    <span
                      className={
                        "flex items-center justify-center h-6 w-6 rounded-full border font-medium " +
                        (subtopic.subtopicUserProgress.length > 0
                          ? "bg-indigo-500 border border-indigo-600 text-white"
                          : "border-indigo-200")
                      }
                    >
                      {subtopic.subtopicNumber}
                    </span>
                    <p className="font-medium">{subtopic.subtopicName}</p>
                  </Link>
                </li>
              );
            })
          : [...Array(7)].map((_, i) => {
              return (
                <li className="w-full" key={i}>
                  <span className="flex w-full h-8 rounded bg-gray-200 animate-pulse" />
                </li>
              );
            })}
      </ul>
    </aside>
  );
}
