"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Contact from "@/components/Contact";
import Courses from "@/components/Courses";
import Features from "@/components/Features";
import Quiz from "./quiz/[chapterId]/page";
import Background from "@/components/Background";
import Filler1 from "@/components/Filler1";

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center w-full">
      <Navbar />
      <Main />
      <Features />
      <Filler1 />
      <Courses />
      <Contact />
      <Background />
    </div>
  );
};
export default Home;
