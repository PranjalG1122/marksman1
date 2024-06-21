"use client";

import { COLOR } from "@prisma/client";
import { useState } from "react";

interface ClassProps {
  classNumber: number;
  color: COLOR;
  chapters: {
    chapterName: String;
    subTopics: {
      subTopicName: String;
      subTopicContent: String;
    }[];
  }[];
}

export default function Create() {
  const [formData, setFormData] = useState({
    class: "",
    text: "",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
              onChange={(e) =>
                setFormData({ ...formData, class: e.target.value })
              }
              value={formData.class}
              className="p-2 rounded w-fit border border-gray-300"
            >
              <option value="1">Class 1</option>
              <option value="2">Class 2</option>
              <option value="3">Class 3</option>
              <option value="4">Class 4</option>
              <option value="5">Class 5</option>
            </select>
          </label>
        </div>
        <div className="flex flex-col w-full gap-2">
          <label>Chapter </label>
          <input
            type="text"
            name="text"
            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
            id="text"
            className="p-2 rounded w-full border border-gray-300"
          />
        </div>
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
