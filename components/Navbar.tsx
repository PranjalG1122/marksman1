"use client";

import React from "react";
import Image from "next/image";
import { variants } from "@/components/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "react-feather";
import { useWindowSize } from "@uidotdev/usehooks";

import defaultprofile from "@/public/defaultprofile.jpeg";
import logo from "@/public/logo.png";
import icon from "@/public/icon.png";
import UserProfile from "@/components/UserProfile";

export default function Navbar() {
  const size = useWindowSize();

  const homePageLinks = [
    {
      href: "#courses",
      text: "Courses",
    },
    {
      href: "#features",
      text: "Features",
    },
    {
      href: "#contact",
      text: "Contact Us",
    },
  ];

  const pathname = usePathname();

  return (
    <nav className="flex flex-row items-center justify-between fixed top-0 left-0 px-8 py-2 border-b border-b-gray-300 bg-white w-full">
      <div className="w-full">
        <Link href="/">
          {size.width ? (
            <Image
              src={size.width > 768 ? logo : icon}
              alt="logo"
              className="h-8 w-auto"
              unoptimized={true}
            />
          ) : null}
        </Link>
      </div>
      {pathname === "/" && (
        <div className="flex flex-row items-center justify-center md:gap-6 gap-3 w-full">
          {homePageLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="text-gray-500 hover:text-gray-600 transition-all"
            >
              {link.text}
            </Link>
          ))}
        </div>
      )}
      <div className="flex justify-end w-full">
        {pathname === "/" ? (
          <Link href="/signup" className={variants({ variant: "primary" })}>
            Sign Up
          </Link>
        ) : (
          <UserProfile />
        )}
      </div>
    </nav>
  );
}
