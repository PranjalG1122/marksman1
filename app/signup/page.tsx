import { Button, variants } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 min-h-full bg-hero bg-no-repeat bg-cover bg-center bg-fixed px-4">
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
        <form className="flex flex-col items-center gap-6 w-full">
          <div className="flex flex-col items-center gap-2 w-full">
            <input
              className={variants({ variant: "input" })}
              placeholder="Name"
            />
            <input
              className={variants({ variant: "input" })}
              placeholder="Email"
            />
            <input
              className={variants({ variant: "input" })}
              placeholder="Password"
            />
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
          <p>Already have an account? Sign in <Link href="/signin"
            className="text-indigo-600 hover:underline focus:outline-none transition-all"
          >here</Link>.</p>
        </form>
      </div>
    </main>
  );
}
