import React from "react";
import { HeroImage } from "../components";

export default function Home() {
  return (
    <>
      <HeroImage />
      <main className="flex flex-col py-6 m-0 items-center w-full">
        <div className="max-w-xl p-2">
          <h1 className="text-4xl text-slate-800 font-semibold">
            Morfars Stuga
          </h1>
          <h2 className="text-2xl text-slate-800 pt-2 font-semibold text-opacity-75">
            Välkommen till stugan vid fjällets fot!
          </h2>
          <p className="pt-2 text-slate-800">
            Här njuter vi av underbara dagar i den allra vackraste miljön som
            Härjedalen har att erbjuda. Vi önskar er krispiga dagar på fjället
            och varma kvällar i bastun.
          </p>
        </div>
        <div className="p-2 flex flex-col max-w-xl">
          <h2 className="text-2xl text-slate-800 pt-2 font-semibold text-opacity-75">
            Är du sugen på att boka stugan för en fjällsemester?
          </h2>
          <div className="flex flex-wrap pt-2 justify-between">
            <p className="text-slate-800 pb-2">Gör en bokningsförfrågan</p>
            <button className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">
              Bokningsförfrågan
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:5000/QandA");
  const qAndA = await response.json();

  return {
    props: {
      qAndA,
    },
  };
};
