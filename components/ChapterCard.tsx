import Link from "next/link";
import { Button, variants } from "@/components/Button";
import { ChapterProps } from "@/lib/types";

export default function ChapterCard({
  chapterData,
  chapterNumber,
  firstSubtopic,
}: {
  chapterData: ChapterProps;
  chapterNumber: number;
  firstSubtopic: string;
}) {
  return (
    <div className="flex flex-col gap-4 w-full border border-gray-200 shadow-sm rounded p-2">
      <h1 className="text-base font-semibold">
        Chapter {chapterNumber}: {chapterData.chapterName}
      </h1>
      <ul className="flex flex-col items-center w-full gap-2">
        {chapterData.subtopics.map((subtopic, i) => {
          return (
            <li key={i} className="flex flex-row items-center gap-2 w-full">
              <span className="flex items-center justify-center h-6 w-6 rounded-full border border-gray-300 shadow-sm font-semibold">
                {i + 1}
              </span>
              <Link
                href={"/chapter/" + chapterData.id + "/" + subtopic.id}
                className="hover:underline transition-all"
              >
                {subtopic.subtopicName}
              </Link>
            </li>
          );
        })}
      </ul>
      <Link
        href={"/chapter/" + chapterData.id + "/" + firstSubtopic}
        className={variants({ variant: "primary" }) + " w-fit"}
      >
        Get Started
      </Link>
    </div>
  );
}
