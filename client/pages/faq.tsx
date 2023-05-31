import React from "react";
import { FaqWidget } from "../components/index";

export default function faq() {
  return (
    <>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <h1 className="text-4xl text-slate-800 font-semibold">FAQ</h1>
        <p className="pt-2 pb-4 text-slate-800">
          Här har vi sammanställt svar på de vanligaste frågor vi brukar få
          angående stugan. Om du inte hittar det du söker här, är du alltid
          välkommen att skicka oss ett meddelande med din fråga, och vi kommer
          att svara så snart som möjligt. Du hittar meddelandefunktionen längst
          ned på sidan.
        </p>
        <FaqWidget />
      </div>
    </>
  );
}
