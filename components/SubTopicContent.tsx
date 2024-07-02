import { SubTopicContentProps, SubTopicListProps } from "@/lib/types";
import { fetchSubTopicContent, updateMarkDone } from "@/server/chapter";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/Button";
import { ArrowLeft } from "react-feather";
import SpeakerButton from "@/components/SpeakerButton";

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

  const [subTopicData, setSubTopicData] = useState<string>();
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
        <div className="flex flex-row items-center gap-4">
          <button
            onClick={() => {
              router.back();
            }}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-medium ">{subTopicTitle}</h1>
        </div>
        {subTopics.find((subtopic) => subtopic.id === params.subtopicId)
          ?.subtopicUserProgress.length === 0 && (
          <Button onClick={handleMarkDone}>Mark as completed</Button>
        )}
      </nav>
      <div className="min-h-container w-full flex flex-col items-start overflow-y-auto max-w-3xl gap-4 py-4">
        {subTopicData ? (
          <p className="text-lg">{subTopicData}</p>
        ) : (
          <ul className="flex flex-col items-startw-full p-4 gap-4">
            {[...Array(4)].map((_, i) => (
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
        )}
        <div className="flex justify-start w-full">
          <SpeakerButton
            onClick={function (): void {
              toast.success("playing...");
            }}
          />
        </div>
      </div>
    </div>
  );
}
