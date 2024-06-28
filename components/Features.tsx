import React from "react";
function Features() {
  return (
    <div id="features" className="h-screen flex flex-col justify-center items-center  w-full px-8 gap-4 h-screen">
      <h1 className="font-bold mt-10 text-5xl text-center">Features</h1>

      <div className="flex flex-row justify-center w-full bg-white gap-10 mt-10  w-full">
        <div className="bg-indigo-50  w-full md:max-w-xs rounded-2xl ">
          <p className="text-center font-semibold text-2xl text-indigo-900 m-5">
          User-Friendly Interface
          </p>
          <p className="text-center  px-10 text-xl pb-10">
          Intuitive and easy-to-navigate design to ensure that users can access course materials and tools with minimal hassle.
          </p>
        </div>
        <div className="bg-indigo-50 w-full md:max-w-xs rounded-2xl ">
          <p className=" text-center font-semibold text-2xl text-indigo-900 m-5">
            AI Powered Tutor
          </p>
          <p className="text-center  px-10 text-xl pb-10">
          The feature that allows users to ask questions and receive answers from an AI chatbot to help students in doubt solving and encourage interactive learning.
          </p>
        </div>
        <div className=" bg-indigo-50  w-full md:max-w-xs rounded-2xl">
          <p className="text-center font-semibold text-2xl text-indigo-900 m-5">
          Course Management System
          </p>
          <p className="text-center px-10 text-xl pb-10">
          Tools for instructors to create, organize, and manage courses, including syllabus creation, lesson planning, and grading.
          </p>
        </div>
        <div className="bg-indigo-50  w-full md:max-w-xs rounded-2xl">
          <p className="text-center font-semibold text-2xl text-indigo-900 m-5">
          Content Library
          </p>
          <p className="text-center px-10 text-xl pb-10">
          A repository of resources, including readings, research papers, and supplemental materials that students can access at any time.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Features;
