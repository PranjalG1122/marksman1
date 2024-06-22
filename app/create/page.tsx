"use client";

import { useState } from "react";


interface ClassProps {
  classNumber: number;
  chapters: {
    chapterName: string;
    subTopics: {
      subTopicName: string;
      subTopicContent: string;
      [key: string]: string;
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
        { chapterName: "", subTopics: [{ subTopicName: "", subTopicContent: "" }] },
      ],
    });
  };

  const handleAddSubTopic = (chapterIndex: number) => {
    const newChapters = [...formData.chapters];
    newChapters[chapterIndex].subTopics.push({ subTopicName: "", subTopicContent: "" });
    setFormData({ ...formData, chapters: newChapters });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, chapterIndex?: number, subTopicIndex?: number) => {
    const { name, value } = e.target;
    if (name === "class") {
      setFormData({ ...formData, class: value });
    } else if (chapterIndex !== undefined) {
      const newChapters = [...formData.chapters];
      if (subTopicIndex !== undefined) {
        newChapters[chapterIndex].subTopics[subTopicIndex][name] = value;
      } else {
        newChapters[chapterIndex][name] = value;
      }
      setFormData({ ...formData, chapters: newChapters });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log(formData);
  };

  return (
    <div className="w-full max-w-3xl mx-auto h-screen flex flex-col gap-4 p-4 items-start">
      <h1 className="text-2xl">Create Page</h1>
      <form encType="multipart/form-data" onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
        <div className="flex flex-col w-full gap-2">
          <label>
            Class:
            <select
              name="class"
              id="class"
              onChange={handleChange}
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
          <div key={chapterIndex} className="flex flex-col w-full gap-4 border p-2 rounded">
            <label>
              Chapter Name:
              <input
                type="text"
                name="chapterName"
                value={chapter.chapterName}
                onChange={(e) => handleChange(e, chapterIndex)}
                className="p-2 rounded w-full border border-gray-300"
              />
            </label>

            {chapter.subTopics.map((subTopic, subTopicIndex) => (
              <div key={subTopicIndex} className="flex flex-col w-full gap-2 ml-4 p-2 border border-gray-300 rounded">
                <label>
                  SubTopic Name:
                  <input
                    type="text"
                    name="subTopicName"
                    value={subTopic.subTopicName}
                    onChange={(e) => handleChange(e, chapterIndex, subTopicIndex)}
                    className="p-2 rounded w-full border border-gray-300"
                  />
                </label>
                <label>
                  SubTopic Content:
                  <input
                    type="text"
                    name="subTopicContent"
                    value={subTopic.subTopicContent}
                    onChange={(e) => handleChange(e, chapterIndex, subTopicIndex)}
                    className="p-2 rounded w-full border border-gray-300"
                  />
                </label>
              </div>
            ))}
            <button type="button" onClick={() => handleAddSubTopic(chapterIndex)} className="p-2 bg-green-500 text-white rounded w-fit">
              Add SubTopic
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddChapter} className="p-2 bg-green-500 text-white rounded w-fit">
          Add Chapter
        </button>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded w-fit">
          Submit
        </button>
      </form>
    </div>
  );
}