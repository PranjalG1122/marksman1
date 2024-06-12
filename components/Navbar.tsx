"use client";

import React from "react";
import Image from "next/image";
import { Button, variants } from "@/components/Button";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 bg-gray-50 flex justify-between items-center px-8 h-14 border-b border-gray-200 w-full">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo Colearn"
          width={200}
          height={200}
          unoptimized={true}
        />
      </Link>

      <div className="flex flex-row items-center gap-4">
        <a
          href="#about"
          className="lg:text-base text-sm text-gray-500 hover:text-gray-400"
        >
          About Us
        </a>
        <a
          href="#courses"
          className="lg:text-base text-sm text-gray-500 hover:text-gray-400"
        >
          Courses
        </a>
        <a
          href="#contact"
          className="lg:text-base text-sm text-gray-500 hover:text-gray-400"
        >
          Contact Us
        </a>
      </div>
      <Link href="/signup"
      className={variants({variant: "primary"})}
      >Sign Up</Link>
    </nav>
  );
};

export default Navbar;
