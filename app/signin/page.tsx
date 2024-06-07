"use client";

import { Button, variants } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "react-feather";

export default function SignIn() {
  const [viewPassword, setViewPassword] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 min-h-full bg-signInBackground bg-no-repeat bg-cover bg-center bg-fixed px-4">
      <div className="flex flex-col items-center gap-6 bg-gray-50 rounded w-full max-w-md lg:py-32 py-16 lg:px-16 px-8">
        <Image
          src="/logo.png"
          width={240}
          height={40}
          alt="logo"
          unoptimized={true}
          className=""
        />
        <h1 className="font-bold lg:text-3xl text-2xl">Sign In</h1>
        <form
          className="flex flex-col items-center gap-6 w-full"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-center gap-2 w-full">
            <input
              className={variants({ variant: "input" })}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              autoComplete="email"
              required
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
              />
              <button
                type="button"
                onClick={() => setViewPassword(!viewPassword)}
                className="absolute right-2 top-1/4 text-gray-400"
              >
                {viewPassword ? (
                  <EyeOff className={variants({ variant: "icon" })} />
                ) : (
                  <Eye className={variants({ variant: "icon" })} />
                )}
              </button>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Sign In
          </Button>
          <p className="lg:text-base text-sm">
            Don't have an account? Sign up{" "}
            <Link
              href="/signup"
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
