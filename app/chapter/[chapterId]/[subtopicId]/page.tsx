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

  useEffect(() => {
    (async () => {
      if (!params.chapterId) return;
      const res = await fetchChapters(params.chapterId);
      if (!res) return toast.error("Error fetching data");
      setClassNum(res.class.classNumber);
      setSubTopics(res.subtopics);
      setChapterName(res.chapterName);
    })();
  }, [params]);

  return (
    chapterName &&
    classNum &&
    subTopics && (
      <main className="flex flex-row items-center w-screen min-h-screen flex-1 h-full">
        <Sidebar
          chapterName={chapterName}
          classNum={classNum}
          subTopics={subTopics}
          params={params}
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
