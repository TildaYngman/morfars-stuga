import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <div>
        <Image
          src="/cabin.jpg"
          alt="piucture of the cabin you can rent"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className="flex flex-col py-6 m-0 items-center w-full">
        <div className="max-w-xl p-2">
          <h1 className="text-4xl text-slate-800 font-semibold">
            Välkommen till Morfars Stuga
          </h1>
          <h2 className="text-2xl text-slate-800 pt-2 font-semibold text-opacity-75">
            Fjällstugan i vackra Tänndalen
          </h2>
          <p className="pt-2 text-slate-800">
            Stugan har gått i arv från vår mormor och morfar till vår mamma och
            sedan har vi fått ta över förvaltningen av stugan. Storstugan
            byggdes på 80 talet och har sedan dess skänkt mycket glädje till vår
            familj. Vi har abitionen att förvalta och vårda vårt arv för att
            kunna skänka våra barn och deras framtida familjer samma glädje som
            stugan har skänkt oss under uppväxten. Vår morfar var uppfinnare och
            entreprenör, han var framåtsträvande och ständigt på jakt efter
            finurliga lösningar på vardagen.
          </p>
        </div>
        <div className="p-2 flex flex-col max-w-xl">
          <h2 className="text-2xl text-slate-800 pt-2 font-semibold text-opacity-75">
            Är du sugen på att boka stugan för en fjällsemester?
          </h2>
          <div className="flex flex-wrap pt-2 space-x-4">
            <p className="text-slate-800 pb-2">Gör en bokningsförfrågan</p>
            <button className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">
              Bokningsförfrågan
            </button>
          </div>
        </div>
      </div>
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
