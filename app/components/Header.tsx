import Link from "next/link";
import React from "react";
import { auth, UserButton } from "@clerk/nextjs";

function Header() {
  const { userId } = auth();
  return (
    <>
      <nav className="bg-green-800 py-4 px-6 flex items-center justify-between mb-5">
        <div className="flex items-center">
          <Link href={"/"}>
            <div className="text-lg uppercase font-bold text-white">
              Next with Clerk
            </div>
          </Link>
        </div>

        <div className="text-white flex items-center">
          {!userId && (
            <>
              <Link
                href="log-in"
                className="text-gray-300 font-bold hover:text-white mr-4"
              >
                Log in
              </Link>
              <Link
                href="sign-up"
                className="text-gray-300 font-bold hover:text-white mr-4"
              >
                Sign up
              </Link>
            </>
          )}

          {/* The UserButton goes here */}
          <div className="ml-auto">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
