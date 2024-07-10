"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { fetchUserProgress } from '@/server/user';
import toast from 'react-hot-toast';
import { UserProgress } from '@/lib/types';

const UserProfile = () => {
  const [userProgress, setUserProgress] = useState<UserProgress>()

  
  useEffect(() => {
    (async () => {
      const res = await fetchUserProgress();
      if(!res) return toast.error('Failed to fetch user progress');
      setUserProgress(res);
    })()
  }, []);

  return (
    <div className="py-12 w-full flex flex-col items-center mx-auto">
      <Navbar />
      <h1 className="text-3xl font-bold mb-6 py-8">User Profile</h1>
      <section className="w-full max-w-3xl flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Progress</h2>
        <div className=" flex flex-col w-full gap-2">
          {userProgress && userProgress.quizUserProgress.map((quizProgress, i) => (
            <div key={i} className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-medium">{quizProgress.chapter.chapterName}</h3>
            
              <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                <div
                  className="bg-indigo-500 h-4 rounded-full"
                  style={{
                    width: `${(quizProgress.score / 10) * 100}%`,
                  }}
                ></div>
                <p>{quizProgress.score} / 10</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <section>
        <h2 className="text-2xl font-semibold mb-4">Quiz Scores</h2>
        <div className="space-y-4">
          {quizScores.map((item, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-medium">{item.quiz}</h3>
              <p className="text-gray-600">Score: {item.score}%</p>
              <p className="text-gray-400 text-sm">Date: {item.date}</p>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default UserProfile;
