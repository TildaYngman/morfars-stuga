import React from "react";
import { PopUpQandA } from "../components/index";
import { IQandADataProps } from "../components/PopUpQandA";
import { IQandAData } from "./zustandStore";

interface IAboutProps {
  items: IQandAData[];
}

export default function about({ items }: IAboutProps) {
  return (
    <>
      <PopUpQandA temp={items} />
      <div className="max-w-xl p-2">
        <h1 className="text-4xl text-slate-800 font-semibold">
          Om Morfars Stuga
        </h1>
        <h2 className="text-2xl text-slate-800 pt-2 font-semibold text-opacity-75">
          Fjällstugan i vackra Tänndalen
        </h2>
        <p className="pt-2 text-slate-800">
          Välkommen till stugan vid fjällets fot! Här njuter vi av underbara
          dagar i den allra vackraste miljön som Härjedalen har att erbjuda. Vi
          önskar er krispiga dagar på fjället och varma kvällar i bastun.
        </p>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/QandA");
  const data = await res.json();

  return {
    props: {
      items: data,
    },
  };
}
