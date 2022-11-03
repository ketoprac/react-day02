import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-2 sm:px-4 py-4">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-indigo-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
            />
          </svg>
          <div>
            <Link href="/">
              <p className="text font-semibold cursor-pointer text-indigo-700">
                Next Redux Saga
              </p>
            </Link>
          </div>
        </div>
        <div className="flex gap-2">
          <Link href="/country">
            <p className="font-semibold text-sm cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-md hover:text-indigo-700">
              Country
            </p>
          </Link>
          <Link href="/logout">
            <p className="font-semibold text-sm cursor-pointer  hover:bg-gray-200 px-3 py-2 rounded-md hover:text-indigo-700">
              Logout
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
