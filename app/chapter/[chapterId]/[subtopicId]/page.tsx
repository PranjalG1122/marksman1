"use client";

import Sidebar from "@/components/Sidebar";
import SubTopicContent from "@/components/SubTopicContent";
import { fetchChapterColor } from "@/server/class";
import { COLOR } from "@prisma/client";
import { useEffect, useState } from "react";

export default function Chapter({
  params,
}: {
  params: { chapterId: string; subtopicId: string };
}) {
  const [color, setColor] = useState<COLOR>();
  useEffect(() => {
    (async () => {
      const color = await fetchChapterColor(params.chapterId);
      if (!color) return;
      setColor(color);
    })();
  }, []);
  return (
    <main className="flex flex-row items-center w-screen min-h-screen flex-1 h-full">
      {color && (
        <>
          <Sidebar params={params} color={color} />
          <div className="flex flex-row w-full justify-center min-h-screen h-full flex-1 scrollbar-thin scrollbar-track-gray-500 overflow-y-auto">
            <SubTopicContent params={params} />
          </div>
        </>
      )}
    </main>
  );
}
