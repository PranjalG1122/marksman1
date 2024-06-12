"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Contact from "@/components/Contact";

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center w-full">
      <Navbar />
      <Main /> 
      <Contact />
    </div>
  );
};
export default Home;
