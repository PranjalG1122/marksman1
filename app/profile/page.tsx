"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { fetchUserProgress } from "@/server/user";
import toast from "react-hot-toast";
import { UserProgress } from "@/lib/types";
import Image from "next/image";

import class1 from "@/public/mascots/class1.png";

const UserProfile = () => {
  const [userProgress, setUserProgress] = useState<UserProgress>();

  useEffect(() => {
    (async () => {
      const res = await fetchUserProgress();
      if (!res) return toast.error("Failed to fetch user progress");
      setUserProgress(res);
    })();
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-4 py-12">
      <Navbar />
      <h1 className="text-3xl font-bold">User Profile</h1>
      {userProgress && (
        <>
          <div className="flex w-full flex-row gap-4">
            <Image
              src={class1}
              alt="class1"
              className="h-12 w-12 rounded-full"
              unoptimized={true}
            />
            <div className="flex flex-col gap-1">
              <p className="text-lg">
                <strong>Name:</strong> {userProgress.name}
              </p>
              <p className="text-gray-500">Email: {userProgress.email}</p>
            </div>
          </div>
          <section className="flex w-full flex-col gap-4">
            <h2 className="text-2xl font-semibold">Quiz Progress</h2>
            <div className="flex w-full flex-col gap-2">
              {userProgress.quizUserProgress.map((quizProgress, i) => (
                <div
                  key={i}
                  className="flex w-full flex-col gap-2 bg-white p-4 shadow-md"
                >
                  <h3 className="text-xl font-medium">
                    {quizProgress.chapter.chapterName}
                  </h3>

                  <div className="mt-2 h-4 w-full rounded-full bg-gray-200">
                    <div
                      className="h-4 rounded-full bg-indigo-500"
                      style={{
                        width: `${(quizProgress.score / 10) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <p>{quizProgress.score} / 10</p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default UserProfile;
