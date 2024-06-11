"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import ContactForm from "@/components/ContactForm";
import ContactDetails from "@/components/ContactDetails";

const Home: React.FC = () => {
  return (
    <main className="w-full">
      <Navbar />
      <Main /> 
      <section className="flex flex-col items-center justify-center py-12 bg-gray-50">
        <div className="flex flex-col md:flex-row w-full p-4 md:p-8 max-w-7xl mx-auto">
          <div className="md:w-1/2 p-4"><ContactDetails /></div>
          <div className="md:w-1/2 p-4"><ContactForm /></div>
        </div>
      </section>
    </main>
  );
};

export default Home;
