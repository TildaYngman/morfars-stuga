import { BsHouse } from "react-icons/bs";
import { useState } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center px-6 justify-between py-1">
      <BsHouse size={40} color="#64748b" />
      <nav>
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
            <ul className="flex flex-col items-center justify-between h-6">
              <li className="border-b border-primary-green-300 my-6 uppercase">
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
          <ul className="hidden space-x-8 lg:flex">
            <li className="text-slate-800 hover:border-x-2 duration-150">
              <a href="/about">Om stugan</a>
            </li>
            <li className="text-slate-800 hover:border-x-2 duration-150">
              <a href="/portfolio">Bokningsförfrågan</a>
            </li>
            <li className="text-slate-800 hover:border-x-2 duration-150">
              <a href="/contact">Kontakt</a>
            </li>
          </ul>
        </div>
      </nav>
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
    </div>
  );
}
