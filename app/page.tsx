"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Contact from "@/components/Contact";
import Courses from "@/components/Courses";
import Features from "@/components/Features";
import Quiz from "./quiz/[quizId]/page";

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center w-full">
      <Navbar />
      <Main />
      <Courses />
      <Features />
      <Contact />
      <Quiz params={{ quizId: "yourQuizId" }} />
    </div>
  );
};
export default Home;