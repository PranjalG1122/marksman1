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
      (subtopic) => subtopic.id === params.subtopicId,
    );
    if (!subtopic) {
      return;
    }
    const index = subTopics.indexOf(subtopic);
    if (index === subTopics.length - 1)
      return router.push(
        "/chapter/" + params.chapterId + "/" + subTopics[0].id,
      );

    return router.push(
      "/chapter/" + params.chapterId + "/" + subTopics[index + 1].id,
    );
  };

  return (
    <div className="flex w-full flex-col items-center overflow-y-auto">
      <nav className="sticky top-0 flex h-12 w-full flex-row items-center justify-between border-b border-b-gray-300 bg-white px-4">
        <div className="flex flex-row items-center gap-4">
          <button
            onClick={() => {
              router.back();
            }}
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-xl font-medium">{subTopicTitle}</h1>
        </div>
        {subTopics.find((subtopic) => subtopic.id === params.subtopicId)
          ?.subtopicUserProgress.length === 0 && (
          <Button onClick={handleMarkDone}>Mark as completed</Button>
        )}
      </nav>
      <div className="min-h-container flex w-full max-w-3xl flex-col items-start gap-4 py-4">
        {subTopicData ? (
          <div className="flex w-full flex-col gap-4 text-lg">
            {subTopicData.split(".").map((line, i) => (
              <div className={"w-full p-2 rounded" }>
                <p key={i}>{line}.</p>
              </div>
            ))}
          </div>
        ) : (
          <ul className="items-startw-full flex flex-col gap-4 p-4">
            {[...Array(4)].map((_, i) => (
              <li
                key={i}
                className="flex w-full flex-col items-start gap-2 rounded p-4"
              >
                <span className="block h-4 w-full animate-pulse rounded bg-gray-100" />
                <span className="block h-4 w-96 animate-pulse rounded bg-gray-100" />{" "}
                <span className="block h-4 w-full animate-pulse rounded bg-gray-100" />
                <span className="block h-4 w-96 animate-pulse rounded bg-gray-100" />
              </li>
            ))}
          </ul>
        )}
        <div className="flex w-full justify-start">
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
