import React from "react";
import { FaqWidget } from "../components/index";

export default function faq() {
  return (
    <>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <h1 className="text-4xl text-slate-800 font-semibold">FAQ</h1>
        <p className="p-4 text-slate-800">
          Här har vi försökt svara på de vanligaste frågorna vi brukar få om
          stugan. Hittar du det inte här så kan du alltid skicka iväg ett
          meddelande med din fråga så svarar vi så snart vi kan! Meddelande
          funktionen hittar du längst ner på sidan.
        </p>
        <FaqWidget />
      </div>
    </>
  );
}
