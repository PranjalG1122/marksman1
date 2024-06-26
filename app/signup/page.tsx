"use client";

import { Button, variants } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "react-feather";
import { SignUpUser } from "@/server/auth";
import toast from "react-hot-toast";

export default function SignUp() {
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await SignUpUser({ name, email, password });
    if (!res.success) return toast.error(res.message);

    setName("");
    setEmail("");
    setPassword("");
    toast.success(res.message);
  };

  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 min-h-full bg-signUpBackground bg-no-repeat bg-cover bg-center bg-fixed px-4">
      <div className="flex flex-col items-center gap-6 bg-white rounded w-full max-w-md md:py-32 py-16 md:px-16 px-8">
        <Link href="/">
          <Image
            src="/logo.png"
            width={240}
            height={40}
            alt="logo"
            unoptimized={true}
            className=""
          />
        </Link>
        <h1 className="font-bold md:text-3xl text-2xl">Sign Up</h1>
        <form
          className="flex flex-col items-center gap-6 w-full"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-center gap-2 w-full">
            <input
              className={variants({ variant: "input" })}
              placeholder="Name"
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={variants({ variant: "input" })}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative w-full">
              <input
                className={variants({ variant: "input" }) + " pr-10"}
                placeholder="Password"
                type={viewPassword ? "text" : "password"}
                name="password"
                id="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setViewPassword(!viewPassword)}
                className="absolute right-2 top-1/4 text-gray-400"
              >
                {viewPassword ? (
                  <EyeOff/>
                ) : (
                  <Eye  />
                )}
              </button>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Sign Up
          </Button>
          <p className="md:text-base text-sm">
            Already have an account? Sign in{" "}
            <Link
              href="/signin"
              className="text-indigo-600 hover:underline focus:outline-none transition-all"
            >
              here
            </Link>
            .
          </p>
        </form>
      </div>
    </main>
  );
}
