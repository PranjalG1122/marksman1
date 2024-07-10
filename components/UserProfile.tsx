import Image from "next/image";

import { useEffect, useState } from "react";
import { fetchUserInfo, signOutUser } from "@/server/user";
import { UserProfileProps } from "@/lib/types";

import class1 from "@/public/mascots/class1.png";
import { ChevronDown, LogOut, User } from "react-feather";
import { Button, variants } from "@/components/Button";
import Link from "next/link";

export default function UserProfile() {
  const [user, setUser] = useState<UserProfileProps>();
  const [dropdownActive, setDropdownActive] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      const user = await fetchUserInfo();
      if (!user) return;
      setUser(user);
    })();
  }, []);
  return (
    <div className="relative">
      <button
        className="flex flex-row items-center gap-1"
        disabled={!user}
        onClick={() => setDropdownActive(!dropdownActive)}
      >
        {user ? (
          <Image
            src={user.avatar === "class1" ? class1 : class1}
            alt="class1"
            className="h-8 w-8 rounded-full"
            unoptimized={true}
          />
        ) : (
          <span className="block h-8 w-8 bg-gray-200 animate-pulse rounded-full" />
        )}
        <ChevronDown className="text-gray-500 h-5 w-5" />
      </button>
      {dropdownActive && (
        <>
          <div className="bg-white rounded py-2 shadow-sm border border-gray-300 absolute top-8 right-0 md:w-48 w-full z-20">
            <Link
              href="/profile"
              className={variants({ variant: "dropdown" })}
            >
              <User className="h-4 w-4" /> Profile
            </Link>
            <Button
              variant="dropdown"
              className="w-full"
              onClick={() => {
                signOutUser();
              }}
            >
              <LogOut className="h-4 w-4" /> Sign Out
            </Button>
          </div>
          <div
            className="fixed top-0 left-0 z-10 w-full h-screen"
            onClick={() => setDropdownActive(false)}
          ></div>
        </>
      )}
    </div>
  );
}
