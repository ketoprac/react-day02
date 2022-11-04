import React from "react";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, ChevronUpIcon, XMarkIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  return (
    <>
      {/* Mobile Nav */}
      <Disclosure>
        {({ open }) => (
          <>
          <div className={`flex items-center justify-between w-screen px-4 py-6 sm:hidden ${open ? "" : "border-b"}`}>
            {/* <Disclosure.Button className={`flex items-center justify-between w-screen px-4 py-6 sm:hidden ${open ? "" : "border-b"}`}> */}
            <Link href="/">

              <div className="flex items-center gap-1">
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
                <p className="text font-semibold cursor-pointer text-indigo-700">
                  Next Redux Saga
                </p>
              </div>
                    </Link>
            <Disclosure.Button>
              {open ? (
                <XMarkIcon className="h-5 w-5 text-indigo-700" />
              ) : (
                <Bars3Icon className="h-5 w-5 text-indigo-700" />
              )}
            </Disclosure.Button>
            </div>
            <Disclosure.Panel className="text-gray-500 px-4 pt-4 pb-2 text-sm border-b">
              <Link href="/">
                <p className="font-semibold text-sm cursor-pointer hover:bg-gray-200 px-3 py-2 hover:text-indigo-700">
                  Homepage
                </p>
              </Link>
              <Link href="/country">
                <p className="font-semibold text-sm cursor-pointer hover:bg-gray-200 px-3 py-2 hover:text-indigo-700">
                  Country
                </p>
              </Link>
              <Link href="/signin">
                <p className="font-semibold text-sm cursor-pointer hover:bg-gray-200 px-3 py-2 hover:text-indigo-700">
                  Sign In
                </p>
              </Link>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/* Desktop Tablet Nav */}
      <nav className="bg-white border-b border-gray-200 px-2 py-4 hidden sm:block">
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
            <Link href="/signin">
              <p className="font-semibold text-sm cursor-pointer  hover:bg-gray-200 px-3 py-2 rounded-md hover:text-indigo-700">
                Sign In
              </p>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
