import { BsHouse } from "react-icons/bs";
import { useState } from "react";
import React from "react";
import Link from "next/link";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full sticky top-0 left-0 shadow-md bg-slate-100 z-10">
      <div className="w-full height-full justify-between mx-auto lg:max-w-7xl md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between md:block px-4">
            <div>
              <Link href="/">
                <a>
                  <BsHouse size={30} color="#334155" />
                  <i aria-hidden="true"></i>
                  <span className="sr-only">Home</span>
                </a>
              </Link>
            </div>
            <div className="md:hidden pt-2">
              <button
                type="button"
                className="text-slate-100 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                <i aria-hidden="true"></i>
                <span className="sr-only">Meny knapp</span>
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-slate-800"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-slate-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center bg-slate-50 md:bg-slate-100 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="flex fixed  flex-col w-full bg-slate-50 shadow-xl md:shadow-none md:flex-row md:justify-end md:bg-transparent md:relative">
              <Link href="/about">
                <a className="text-slate-800 border-b-2 border-slate-200 md:border-x-2 md:border-transparent md:hover:border-x-2 md:hover:border-slate-100 md:hover:p-2 md:p-2 py-5 pl-4 md:m-2 duration-150 text-xl font-semibold md:text-slate-800 bg-transparent">
                  Om stugan
                </a>
              </Link>
              <Link href="/bookingRequest">
                <a className="text-slate-800 border-b-2 border-slate-200 md:border-x-2 md:border-transparent md:hover:border-x-2 md:hover:border-slate-100 md:hover:p-2 md:p-2 py-5 pl-4 md:m-2 duration-150 text-xl font-semibold md:text-slate-800 bg-transparent">
                  Bokingsföfrågan
                </a>
              </Link>
              <Link href="/faq">
                <a className="text-slate-800 md:border-x-2 md:border-transparent md:hover:border-x-2 md:hover:border-slate-100 md:hover:p-2 md:p-2 py-5 pl-4 md:m-2 duration-150 text-xl font-semibold md:text-slate-800 bg-transparent">
                  FAQ
                </a>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
