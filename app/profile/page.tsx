"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';

const UserProfile = () => {
  // Mock data for demonstration purposes
  const [progress, setProgress] = useState([
    { chapter: 'Chapter 1', topicsCompleted: 5, totalTopics: 10 },
    { chapter: 'Chapter 2', topicsCompleted: 3, totalTopics: 8 },
    // Add more chapters as needed
  ]);

  const [quizScores, setQuizScores] = useState([
    { quiz: 'Quiz 1', score: 80, date: '2024-01-01' },
    { quiz: 'Quiz 2', score: 90, date: '2024-02-01' },
    // Add more quizzes as needed
  ]);

  // Fetch user data from API when the component mounts
  useEffect(() => {
    // Replace the below lines with actual API calls
    // fetchUserProgress().then(setProgress);
    // fetchUserQuizScores().then(setQuizScores);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-6 py-8">User Profile</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Progress</h2>
        <div className="space-y-4">
          {progress.map((item, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-medium">{item.chapter}</h3>
              <p className="text-gray-600">
                Topics Completed: {item.topicsCompleted} / {item.totalTopics}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                <div
                  className="bg-indigo-500 h-4 rounded-full"
                  style={{
                    width: `${(item.topicsCompleted / item.totalTopics) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
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
      </section>
    </div>
  );
};

export default UserProfile;
