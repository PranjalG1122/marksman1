"use client";

import Navbar from "@/components/Navbar";

import class1 from "@/public/mascots/class1.png";
import class2 from "@/public/mascots/class2.png";
import class3 from "@/public/mascots/class3.png";
import class4 from "@/public/mascots/class4.png";
import class5 from "@/public/mascots/class5.png";

import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  const classes = [
    {
      mascot: class1,
      color: "bg-yellow-400",
      border: "border-yellow-500",
      hover: "hover:bg-yellow-500",
    },
    {
      mascot: class2,
      color: "bg-blue-400",
      border: "border-blue-500",
      hover: "hover:bg-blue-500",
    },
    {
      mascot: class3,
      color: "bg-purple-400",
      border: "border-purple-500",
      hover: "hover:bg-purple-500",
    },
    {
      mascot: class4,
      color: "bg-pink-400",
      border: "border-pink-500",
      hover: "hover:bg-pink-500",
    },
    {
      mascot: class5,
      color: "bg-green-400",
      border: "border-green-500",
      hover: "hover:bg-green-500",
    },
  ];
  return (
    <main className="h-screen w-full bg-white flex flex-col items-center justify-center">
      <Navbar />
      <div className="flex flex-col items-center w-full md:gap-8 gap-4 md:p-8 p-4">
        <h1 className="md:text-6xl text-3xl font-bold text-indigo-600">
          Welcome Back!
        </h1>
        <div className="flex flex-row items-center justify-center gap-6 flex-wrap">
          {classes.map((cls, i) => (
            <Link
              href={"/class/" + (i + 1)}
              key={i}
              className={
                "flex flex-col items-center gap-2 p-8 rounded border-4 sm:w-56 h-fit w-40 aspect-square transition-all " +
                cls.color +
                " " +
                cls.border +
                " " +
                cls.hover
              }
            >
              <Image
                src={cls.mascot}
                alt={`Class ${i + 1}`}
                className="w-full"
              />
              <h1 className="text-white font-semibold">{"Class-" + (i + 1)}</h1>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
