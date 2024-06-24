"use client";

import Sidebar from "@/components/Sidebar";
import SubTopicContent from "@/components/SubTopicContent";
import { SubTopicListProps } from "@/lib/types";
import { fetchChapters } from "@/server/chapter";
import { useEffect, useState } from "react";
import { MessageSquare } from "react-feather";
import toast from "react-hot-toast";

export default function Chapter({
  params,
}: {
  params: { chapterId: string; subtopicId: string };
}) {
  const [showChat, setShowChat] = useState<boolean>(false);

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
    <main className="flex flex-row items-center w-screen min-h-screen flex-1 h-full">
      {chapterName && classNum && subTopics && (
        <>
          <Sidebar
            chapterName={chapterName}
            classNum={classNum}
            subTopics={subTopics}
            params={params}
          />
          <SubTopicContent params={params} subTopics={subTopics} />
        </>
      )}
      <div className="fixed bottom-10 right-10">
        <button
          className="bg- p-4 rounded-full transition-all shadow-md bg-indigo-500 text-white hover:bg-indigo-600"
          onClick={() => setShowChat(!showChat)}
        >
          <MessageSquare />
        </button>

        {showChat && (
          <div className="absolute right-0 bottom-12 p-2 rounded bg-gray-50 shadow-md w-full min-w-96">
            Chatbot
          </div>
        )}
      </div>
    </main>
  );
}
