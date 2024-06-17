"use client";

import ChapterCard from "@/components/ChapterCard";
import Navbar from "@/components/Navbar";
import { ClassProps } from "@/lib/types";
import { getClassChapters } from "@/server/class";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronRight } from "react-feather";

export default function Class({ params }: { params: { class: string } }) {
  const fetchData = async () => {
    const res = await getClassChapters(parseInt(params.class));
    if (!res) return console.error("Error fetching data");
    setChapters(res);
  };

  const [chapters, setChapters] = useState<ClassProps>();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="min-h-container flex flex-col items-center w-full">
      <Navbar />
      <div className="flex flex-col items-start gap-4 w-full md:max-w-3xl md:px-0 p-2">
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

        <h1 className="md:text-3xl text-2xl font-semibold">
          Class {params.class}
        </h1>

        {chapters &&
          chapters.chapters.map((chapter, i) => (
            <ChapterCard chapterData={chapter} key={i} chapterNumber={i + 1} />
          ))}
      </div>
    </main>
  );
}
