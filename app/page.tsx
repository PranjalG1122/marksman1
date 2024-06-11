"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Contact from "@/components/Contact";

const Home: React.FC = () => {
  return (
    <main className="w-full">
      <Navbar />
      <section></section>
      <Main />
      <Contact />
    </main>
  );
};

export default Home;
