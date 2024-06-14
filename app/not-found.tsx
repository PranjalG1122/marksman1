import { variants } from "@/components/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-container flex flex-col items-center justify-center w-full gap-4">
      <h1 className="text-6xl font-semibold text-indigo-600">404</h1>
      <p className="text-indigo-400">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className={variants({ variant: "primary" })}>
        Home
      </Link>
    </main>
  );
}
