"use client";

import { useEffect, useRef, useState } from "react";

interface ClassProps {
  classNumber: number;
  chapters: {
    chapterName: string;
    subTopics: {
      subTopicName: string;
      subTopicContent: string[];
    }[];
  }[];
}

export default function Create() {
  const [formData, setFormData] = useState({
    class: "",
    chapters: [
      {
        chapterName: "",
        subTopics: [
          {
            subTopicName: "",
            subTopicContent: "",
          },
        ],
      },
    ],
  });

  const handleAddChapter = () => {
    setFormData({
      ...formData,
      chapters: [
        ...formData.chapters,
        {
          chapterName: "",
          subTopics: [{ subTopicName: "", subTopicContent: "" }],
        },
      ],
    });
  };

  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, class: e.target.value });
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
      subTopicName: "",
      subTopicContent: "",
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
    newChapters[chapterIndex].subTopics[subTopicIndex].subTopicName =
      e.target.value;
    setFormData({ ...formData, chapters: newChapters });
  };

  const handleSubTopicContentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    chapterIndex: number,
    subTopicIndex: number
  ) => {
    const newChapters = [...formData.chapters];
    newChapters[chapterIndex].subTopics[subTopicIndex].subTopicContent =
      e.target.value;
    setFormData({ ...formData, chapters: newChapters });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
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
              value={formData.class}
              className="p-2 rounded w-fit border border-gray-300"
            >
              <option value="">Select Class</option>
              <option value="1">Class 1</option>
              <option value="2">Class 2</option>
              <option value="3">Class 3</option>
              <option value="4">Class 4</option>
              <option value="5">Class 5</option>
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
              const textAreaRef = useRef<HTMLTextAreaElement>(null);
              useEffect(() => {
                if (textAreaRef.current !== null) {
                  textAreaRef.current.style.height = "auto";
                  textAreaRef.current.style.height =
                    textAreaRef.current.scrollHeight + "px";
                }
              }, [subTopic.subTopicContent]);
              return (
                <div
                  key={subTopicIndex}
                  className="flex flex-col items-start w-full gap-2 p-2 border border-gray-300 rounded"
                >
                  <label className="w-full">
                    SubTopic Name:
                    <input
                      type="text"
                      name="subTopicName"
                      value={subTopic.subTopicName}
                      onChange={(e) =>
                        handleSubTopicNameChange(e, chapterIndex, subTopicIndex)
                      }
                      className="p-2 rounded w-full border border-gray-300"
                    />
                  </label>
                  <label className="w-full">
                    SubTopic Content:
                    <textarea
                      name="subTopicContent"
                      value={subTopic.subTopicContent}
                      onChange={(e) =>
                        handleSubTopicContentChange(
                          e,
                          chapterIndex,
                          subTopicIndex
                        )
                      }
                      ref={textAreaRef}
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
        <button
          type="button"
          onClick={handleAddChapter}
          className="p-2 bg-green-500 text-white rounded w-fit"
        >
          Add Chapter
        </button>
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
