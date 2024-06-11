"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";

const Home: React.FC = () => {
  return (
    <main className="w-full">
      <Navbar />
      <section></section>
      <Main />
    </main>
  );
};

export default Home;
