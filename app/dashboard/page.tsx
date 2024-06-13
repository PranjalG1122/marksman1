"use client";

import Navbar from "@/components/Navbar";

import class1 from "@/public/mascots/class1.png";
import class2 from "@/public/mascots/class2.png";
import class3 from "@/public/mascots/class3.png";
import class4 from "@/public/mascots/class4.png";
import class5 from "@/public/mascots/class5.png";

import Image from "next/image";

export default function Dashboard() {
  const classes = [
    {
      mascot: class1,
      color: "bg-yellow-400",
      border: "border-yellow-500",
    },
    {
      mascot: class2,
      color: "bg-blue-400",
      border: "border-blue-500",
    },
    {
      mascot: class3,
      color: "bg-purple-400",
      border: "border-purple-500",
    },
    {
      mascot: class4,
      color: "bg-pink-400",
      border: "border-pink-500",
    },
    {
      mascot: class5,
      color: "bg-green-400",
      border: "border-green-500",
    },
  ];
  return (
    <main className="min-h-container w-full bg-white flex flex-col items-center">
      <Navbar />
      <div className="flex flex-col items-center w-full md:gap-8 gap-4 md:p-8 p-4">
        <h1 className="md:text-6xl text-3xl font-bold text-indigo-600">
          Welcome Back!
        </h1>
        <div className="flex flex-row items-center justify-center gap-6 flex-wrap">
          {classes.map((cls, i) => (
            <button
              key={i}
              className={
                "flex flex-col items-center gap-2 p-8 rounded border-4 h-48 aspect-square " +
                cls.color +
                " " +
                cls.border
              }
            >
              <Image
                src={cls.mascot}
                alt={`Class ${i + 1}`}
                className="w-full"
              />
              <h1 className="text-white font-semibold">{"Class-" + (i + 1)}</h1>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
