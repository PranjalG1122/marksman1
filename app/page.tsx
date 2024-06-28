"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Contact from "@/components/Contact";
import Courses from "@/components/Courses";
import Features from "@/components/Features";
import Quiz from "./quiz/[quizId]/page";
import Background from "@/components/Background";
import Filler1 from "@/components/Filler1"

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center w-full">
      <Navbar />
      <Main />
      <Courses />
      <Filler1/>
      <Features />
      <Contact />
      <Background/>
    </div>
  );
};
export default Home;