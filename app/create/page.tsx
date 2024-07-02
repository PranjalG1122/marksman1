"use client";

import { ClassProps } from "@/lib/types";
import { addNewContent } from "@/server/create";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Create() {
  const [formData, setFormData] = useState<ClassProps>({
    classNumber: 1,
    chapters: [
      {
        chapterName: "",
        subTopics: [
          {
            subtopicName: "",
            subtopicContent: "",
          },
        ],
      },
    ],
  });

  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, classNumber: parseInt(e.target.value) });
  };

  const handleChapterNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newChapters = [...formData.chapters];
    newChapters[index].chapterName = e.target.value;
    setFormData({ ...formData, chapters: newChapters });
  };

  const handleAddSubTopic = (chapterIndex: number) => {
    const newChapters = [...formData.chapters];
    newChapters[chapterIndex].subTopics.push({
      subtopicName: "",
      subtopicContent: "",
    });
    setFormData({ ...formData, chapters: newChapters });
  };

  const handleDelete = (chapterIndex: number, subTopicIndex: number) => () => {
    const newChapters = [...formData.chapters];
    newChapters[chapterIndex].subTopics.splice(subTopicIndex, 1);
    setFormData({ ...formData, chapters: newChapters });
  };

  const handleSubTopicNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    chapterIndex: number,
    subTopicIndex: number
  ) => {
    const newChapters = [...formData.chapters];
    newChapters[chapterIndex].subTopics[subTopicIndex].subtopicName =
      e.target.value;
    setFormData({ ...formData, chapters: newChapters });
  };

  const handleSubTopicContentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    chapterIndex: number,
    subTopicIndex: number
  ) => {
    const newChapters = [...formData.chapters];
    newChapters[chapterIndex].subTopics[subTopicIndex].subtopicContent =
      e.target.value;
    setFormData({ ...formData, chapters: newChapters });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);

    const res = await addNewContent(formData);
    if (!res) return toast.error("Failed to add content");
    toast.success("Content added successfully");
    setFormData({
      classNumber: 1,
      chapters: [
        {
          chapterName: "",
          subTopics: [
            {
              subtopicName: "",
              subtopicContent: "",
            },
          ],
        },
      ],
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto h-screen flex flex-col gap-4 p-4 items-start">
      <h1 className="text-2xl">Create Page</h1>
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="flex flex-col w-full gap-4"
      >
        <div className="flex flex-col w-full gap-2">
          <label>
            Class:
            <select
              name="class"
              id="class"
              onChange={(e) => {
                handleClassChange(e);
              }}
              value={formData.classNumber}
              className="p-2 rounded w-fit border border-gray-300"
            >
              <option value="">Select Class</option>
              <option value={1}>Class 1</option>
              <option value={2}>Class 2</option>
              <option value={3}>Class 3</option>
              <option value={4}>Class 4</option>
              <option value={5}>Class 5</option>
            </select>
          </label>
        </div>

        {formData.chapters.map((chapter, chapterIndex) => (
          <div
            key={chapterIndex}
            className="flex flex-col w-full gap-4 border p-2 rounded shadow-md"
          >
            <label>
              Chapter Name:
              <input
                type="text"
                name="chapterName"
                value={chapter.chapterName}
                onChange={(e) => handleChapterNameChange(e, chapterIndex)}
                className="p-2 rounded w-full border border-gray-300"
              />
            </label>

            {chapter.subTopics.map((subTopic, subTopicIndex) => {
              return (
                <div
                  key={subTopicIndex}
                  className="flex flex-col items-start w-full gap-2 p-2 border border-gray-300 rounded"
                >
                  <label className="w-full">
                    SubTopic Name:
                    <input
                      type="text"
                      name="subtopicName"
                      value={subTopic.subtopicName}
                      onChange={(e) =>
                        handleSubTopicNameChange(e, chapterIndex, subTopicIndex)
                      }
                      className="p-2 rounded w-full border border-gray-300"
                    />
                  </label>
                  <label className="w-full">
                    SubTopic Content:
                    <textarea
                      name="subtopicContent"
                      value={subTopic.subtopicContent}
                      onChange={(e) =>
                        handleSubTopicContentChange(
                          e,
                          chapterIndex,
                          subTopicIndex
                        )
                      }
                      rows={4}
                      className="p-2 rounded w-full border border-gray-300 resize-none"
                    />
                  </label>
                  <button
                    type="button"
                    className="p-2 bg-red-500 text-white rounded w-fit"
                    onClick={handleDelete(chapterIndex, subTopicIndex)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
            <button
              type="button"
              onClick={() => handleAddSubTopic(chapterIndex)}
              className="p-2 bg-green-500 text-white rounded w-fit"
            >
              Add SubTopic
            </button>
          </div>
        ))}
        {/* <button
          type="button"
          onClick={handleAddChapter}
          className="p-2 bg-green-500 text-white rounded w-fit"
        >
          Add Chapter
        </button> */}
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded w-fit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
