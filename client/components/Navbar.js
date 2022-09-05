import { BsHouse } from "react-icons/bs";
import { useState } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="flex justify-between bg-opacity-80 h-14 px-10">
      <div className="px-3 pt-2">
        <BsHouse size={40} color="#64748b" />
      </div>
      <div>
        <section className="flex lg:hidden">
          <div
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8  bg-primary-green-900"></span>
            <span className="block h-0.5 w-8  bg-primary-green-900"></span>
            <span className="block h-0.5 w-8  bg-primary-green-900"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between">
              <li className=" pr-4 border-b border-primary-green-300 my-6 uppercase ">
                <a href="/about">Om stugan</a>
              </li>
              <li className="border-b border-primary-green-300 my-6 uppercase">
                <a href="/bookingRequest">Bokningsförfrågan</a>
              </li>
              <li className="border-b border-primary-green-300 my-6 uppercase">
                <a href="/contact">Kontakt</a>
              </li>
            </ul>
          </div>
        </section>
        <div>
          <ul className="lg:flex">
            <li className="text-slate-500 border-x-2 border-white hover:border-x-2 hover:border-slate-400 hover:p-3 p-3 duration-150 text-xl font-semibold">
              <a href="/about">Om stugan</a>
            </li>
            <li className="text-slate-500 border-x-2 border-white hover:border-x-2 hover:border-slate-400 hover:p-3 p-3 duration-150 text-xl font-semibold">
              <a href="/bookingRequest">Bokningsförfrågan</a>
            </li>
            <li className="text-slate-500 border-x-2 border-white hover:border-x-2 hover:border-slate-400 hover:p-3 p-3 duration-150 text-xl font-semibold">
              <a href="/">Kontakt</a>
            </li>
          </ul>
        </div>
      </div>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </nav>
  );
}
