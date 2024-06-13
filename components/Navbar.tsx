"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { variants } from "@/components/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import defaultProfile from "@/public/defaultprofile.jpeg";
import { ChevronDown } from "react-feather";
import { useWindowSize } from "@uidotdev/usehooks";

import logo from "@/public/logo.png";
import icon from "@/public/icon.png";

export default function Navbar() {
  const size = useWindowSize();

  const homePageLinks = [
    {
      href: "#about",
      text: "About Us",
    },
    {
      href: "#courses",
      text: "Courses",
    },
    {
      href: "#contact",
      text: "Contact Us",
    },
  ];

  const pathname = usePathname();

  return (
    <nav className="sticky top-0 bg-white flex justify-between items-center md:px-8 px-2 h-14 border-b border-gray-200 w-full">
      <Link href="/">
        {size.width ? (<Image
          src={size.width > 768 ? logo : icon}
          alt="logo"
          className="h-8 w-auto"
          unoptimized={true}
        />) : (null)}
      </Link>

      {pathname === "/" ? (
        <>
          <div className="flex flex-row items-center md:gap-6 gap-3">
            {homePageLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="text-gray-400 font-medium hover:text-gray-500 transition-all"
              >
                {link.text}
              </Link>
            ))}
          </div>
          <Link href="/signup" className={variants({ variant: "primary" })}>
            Sign Up
          </Link>
        </>
      ) : (
        <div className="px-2 py-1 flex flex-row items-center gap-2 border border-gray-200 rounded">
          <Image
            src={defaultProfile}
            alt="user"
            className="rounded-full h-10 w-auto"
          />
          <p className="font-medium">John Meow</p>
          <ChevronDown />
        </div>
      )}
    </nav>
  );
}
