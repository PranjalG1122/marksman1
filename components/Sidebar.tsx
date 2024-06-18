import Image from "next/image";

import logo from "@/public/logo.png";
import defaultprofile from "@/public/defaultprofile.jpeg";
import { LogOut } from "react-feather";
import { Button } from "@/components/Button";
import { useEffect, useState } from "react";
import { fetchChapters } from "@/server/chapter";
import toast from "react-hot-toast";
import { SubTopicListProps } from "@/lib/types";
import Link from "next/link";

export default function Sidebar({
  params,
}: {
  params: { chapterId: string; subtopicId: string };
}) {
  const [subTopics, setSubTopics] = useState<SubTopicListProps[]>();
  const [classNum, setClassNum] = useState<number>();
  const [chapterName, setChapterName] = useState<string>();

  useEffect(() => {
    (async () => {
      if (!params.chapterId) return;
      const res = await fetchChapters(params.chapterId);
      if (!res) return;
      setClassNum(res.class.classNumber);
      setSubTopics(res.subtopics);
      setChapterName(res.chapterName);
    })();
  }, [params]);

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
                      "flex flex-row items-center gap-2 p-1 rounded w-full hover:bg-green-400 transition-all " +
                      (subtopic.id === params.subtopicId && "bg-green-400")
                    }
                  >
                    <span
                      className={
                        "flex items-center justify-center h-6 w-6 rounded-full border shadow-sm font-medium " +
                        (subtopic.subtopicUserProgress.length > 0
                          ? "bg-green-500 border-green-600 text-white"
                          : "border-gray-300")
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
      <div className="flex flex-row items-center gap-2 p-2 rounded w-full border border-gray-300 shadow-sm">
        <Image
          src={defaultprofile}
          alt="logo"
          className="rounded-full h-12 w-12"
        />
        <div className="flex flex-col items-start w-full md:text-sm text-xs">
          <p className="font-semibold">John Doe</p>
          <p className="text-gray-500">johndoe@email.com</p>
        </div>
        <Button variant="iconButton">
          <LogOut />
        </Button>
      </div>
    </aside>
  );
}
