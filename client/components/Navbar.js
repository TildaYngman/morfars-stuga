import { BsHouse } from "react-icons/bs";
import { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-slate-900 bg-opacity-50 z-10">
      <div className="w-full height-full justify-between mx-auto lg:max-w-7xl md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between md:block px-4">
            <div>
              <a href="/">
                <BsHouse size={30} color="#f1f5f9" />
              </a>
            </div>
            <div className="md:hidden pt-2">
              <button
                className="text-slate-100 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-slate-100"
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
                    className="w-8 h-8 slate-100"
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
            className={`flex-1 justify-self-center shadow-md md:shadow-none md:block md:pb-0 md:mt-0 text-slate-800 bg-white md:bg-transparent ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col text-right md:flex-row bg-transparent">
              <li className="text-slate-700 border-x-2 border-transparent hover:border-x-2 hover:border-slate-100 hover:p-2 p-2 duration-150 text-xl font-semibold md:text-slate-100 bg-transparent">
                <a href="/about">Om stugan</a>
              </li>
              <li className="text-slate-700 border-x-2 border-transparent hover:border-x-2 hover:border-slate-100 hover:p-2 p-2 duration-150 text-xl font-semibold md:text-slate-100 bg-transparent">
                <a href="/bookingRequest">Bokingsföfrågan</a>
              </li>
              <li className="text-slate-700 border-x-2 border-transparent hover:border-x-2 hover:border-slate-100 hover:p-2 p-2 duration-150 text-xl font-semibold md:text-slate-100 bg-transparent">
                <a href="/questionsAndAnswers">Kontakt</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
