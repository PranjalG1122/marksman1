"use client";

import Chatbot from "@/components/Chatbot";
import Sidebar from "@/components/Sidebar";
import SubTopicContent from "@/components/SubTopicContent";

export default function Chapter({
  params,
}: {
  params: { chapterId: string; subtopicId: string };
}) {
  return (
    <main className="flex flex-row items-center w-screen min-h-screen flex-1 h-full">
      <Sidebar params={params} />
      <div className="flex flex-row w-full min-h-screen h-full flex-1">
        <SubTopicContent params={params} />
        <Chatbot />
      </div>
    </main>
  );
}
