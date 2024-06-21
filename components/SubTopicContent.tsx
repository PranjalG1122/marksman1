import { SubTopicContentProps } from "@/lib/types";
import { fetchSubTopicContent } from "@/server/chapter";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function SubTopicContent({
  params,
}: {
  params: { chapterId: string; subtopicId: string };
}) {
  const router = useRouter();

  const [subTopicContent, setSubTopicContent] =
    useState<SubTopicContentProps[]>();

  useEffect(() => {
    (async () => {
      const res = await fetchSubTopicContent(params.subtopicId);
      if (!res) {
        toast.error("No content found");
        return router.push("/dashboard");
      }
      console.log(res);
      setSubTopicContent(res.subtopicContent);
    })();
  }, [params.subtopicId]);

  return (
    <ul className="flex flex-col items-center max-w-3xl w-full h-full max-h-screen p-4 gap-4">
      {subTopicContent &&
        subTopicContent.map((content, i) => {
          return (
            <li
              key={i}
              className="flex flex-row items-center justify-center w-full"
            >
              {content.type === "TEXT" ? (
                <p className="">{content.content}</p>
              ) : (
                <img src={content.content} className="w-1/2 rounded" />
              )}
            </li>
          );
        })}
    </ul>
  );
}
