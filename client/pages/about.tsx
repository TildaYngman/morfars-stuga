import React from "react";
import { FaqWidget } from "../components/index"


export default function about() {
  return (
    <>
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
      <FaqWidget />
    </>
  );
}
