import { SubTopicContentProps, SubTopicListProps } from "@/lib/types";
import { fetchSubTopicContent, updateMarkDone } from "@/server/chapter";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/Button";

export default function SubTopicContent({
  params,
  subTopics,
  classNum,
}: {
  params: { chapterId: string; subtopicId: string };
  subTopics: SubTopicListProps[];
  classNum: number;
}) {
  const router = useRouter();

  const [subTopicData, setSubTopicData] = useState<SubTopicContentProps[]>();
  const [subTopicTitle, setSubTopicTitle] = useState<string>();

  useEffect(() => {
    (async () => {
      const res = await fetchSubTopicContent(params.subtopicId);
      if (!res) {
        toast.error("No content found");
        return router.push("/dashboard");
      }
      setSubTopicData(res.subtopicContent);
      setSubTopicTitle(res.subtopicName);
    })();
  }, [params.subtopicId]);

  const handleMarkDone = async () => {
    const res = await updateMarkDone(params.subtopicId);
    if (!res) return toast.error("Error marking as done");
    if (!subTopics) {
      return;
    }
    const subtopic = subTopics.find(
      (subtopic) => subtopic.id === params.subtopicId
    );
    if (!subtopic) {
      return;
    }
    const index = subTopics.indexOf(subtopic);
    if (index === subTopics.length - 1)
      return router.push(
        "/chapter/" + params.chapterId + "/" + subTopics[0].id
      );

    return router.push(
      "/chapter/" + params.chapterId + "/" + subTopics[index + 1].id
    );
  };

  return (
    <div className="w-full flex flex-col items-center">
      <nav className="sticky top-0 w-full h-12 flex flex-row items-center justify-between px-4 border-b border-b-gray-300">
        <h1 className="text-xl font-medium ">{subTopicTitle}</h1>
        {subTopics.find((subtopic) => subtopic.id === params.subtopicId)
          ?.subtopicUserProgress.length === 0 && (
          <Button onClick={handleMarkDone}>Mark as completed</Button>
        )}
      </nav>
      <div className="min-h-container w-full flex flex-col items-center overflow-y-auto">
        <ul className="flex flex-col items-center max-w-3xl w-full p-4 gap-4">
          {subTopicData
            ? subTopicData.map((content, i) => {
                return (
                  <li
                    key={i}
                    className="flex flex-row items-center justify-center w-full"
                  >
                    <p className="">{content.content}</p>
                  </li>
                );
              })
            : [...Array(4)].map((_, i) => (
                <li
                  key={i}
                  className="flex flex-col items-start gap-2 w-full p-4 rounded"
                >
                  <span className="block w-full h-4 bg-gray-100 animate-pulse rounded" />
                  <span className="block w-96 h-4 bg-gray-100 animate-pulse rounded" />{" "}
                  <span className="block w-full h-4 bg-gray-100 animate-pulse rounded" />
                  <span className="block w-96 h-4 bg-gray-100 animate-pulse rounded" />
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
}
