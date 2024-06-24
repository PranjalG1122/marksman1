"use client";

import ChapterCard from "@/components/ChapterCard";
import Navbar from "@/components/Navbar";
import { ChapterProps } from "@/lib/types";
import { getClassChapters } from "@/server/class";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronRight } from "react-feather";
import toast from "react-hot-toast";

import class1 from "@/public/mascots/class1.png";
import class2 from "@/public/mascots/class2.png";
import class3 from "@/public/mascots/class3.png";
import class4 from "@/public/mascots/class4.png";
import class5 from "@/public/mascots/class5.png";
import Image from "next/image";

export default function Class({ params }: { params: { class: string } }) {
  const [chapters, setChapters] = useState<ChapterProps[]>();

  const classImages = [class1, class2, class3, class4, class5];

  useEffect(() => {
    (async () => {
      const res = await getClassChapters(parseInt(params.class));
      if (!res) return toast.error("Error fetching data");
      setChapters(res.chapters);
    })();
  }, []);

  return (
    <main className="h-screen overflow-y-auto flex flex-col items-center w-full">
      <Navbar />
      <div className="flex flex-col items-start gap-4 w-full max-w-3xl pt-14">
        <div className="flex flex-row items-center gap-1 w-full md:text-base text-sm">
          <Link
            href="/dashboard"
            className="text-blue-600 hover:underline hover:underine-blue-600"
          >
            Dashboard
          </Link>
          <ChevronRight className="h-5 w-5 text-blue-600" />
          <Link
            href={"/class/" + params.class}
            className="text-blue-600 hover:underline hover:underine-blue-600"
          >
            Class {params.class}
          </Link>
        </div>

        <div className="w-full flex flex-row items-center gap-2">
          <Image
            src={classImages[parseInt(params.class) - 1]}
            alt="Class 1"
            className="h-10 w-10"
          />

          <h1 className="md:text-3xl text-2xl font-semibold">
            Class {params.class}
          </h1>
        </div>

        {chapters
          ? chapters.map((chapter, i) => (
              <ChapterCard
                chapterData={chapter}
                key={i}
                chapterNumber={i + 1}
                firstSubtopic={chapter.subtopics[0].id}
              />
            ))
          : [...Array(2)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-start w-full gap-4 border border-gray-200 shadow-sm p-2 rounded"
              >
                <span className="h-6 block bg-gray-100 animate-pulse w-64 rounded" />
                <ul className="flex flex-col items-start gap-2 w-full">
                  {[...Array(5)].map((_, i) => (
                    <li key={i}>
                      <span className="block h-6 w-96 bg-gray-100 animate-pulse rounded" />
                    </li>
                  ))}
                </ul>
                <span className="h-8 w-32 rounded bg-gray-100 animate-pulse" />
              </div>
            ))}
      </div>
    </main>
  );
}
