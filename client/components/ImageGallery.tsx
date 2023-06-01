import React from "react";
import Image from "next/image";
import lillastorastugan from "../public/gallery/landscape/lilla-stora-stugan.jpg";
import vardagsrum2 from "../public/gallery/landscape/vardagsrum-2.jpg";
import vardagsrum3 from "../public/gallery/landscape/vardagsrum-3.jpg";
import vardagsrum from "../public/gallery/landscape/vardagsrum.jpg";
import dubbelrumuppe from "../public/gallery/landscape/dubbelrum-uppe.jpg";
import allrumkällare from "../public/gallery/landscape/allrum-källare.jpg";
import sovrumkällare from "../public/gallery/landscape/sovrum-källare.jpg";
import gavel from "../public/gallery/landscape/gavel-snow.jpg";
import stugornasnow from "../public/gallery/landscape/stugorna-snow.jpg";
import stugornasnow2 from "../public/gallery/landscape/stugorna-snow-2.jpg";
import storastugansnow from "../public/gallery/landscape/stora-stugan-snow.jpg";

import altan from "../public/gallery/portrait/altan.jpg";
import altan2 from "../public/gallery/portrait/altan-2.jpg";
import altan3 from "../public/gallery/portrait/altan-3.jpg";
import storastugan2 from "../public/gallery/portrait/stora-stugan-2.jpg";
import hall from "../public/gallery/portrait/hall.jpg";
import lillahallen2 from "../public/gallery/portrait/lilla-hallen-2.jpg";
import lillasovrummetuppe from "../public/gallery/portrait/lilla-sovrummet-uppe.jpg";
import sovrumkällare2 from "../public/gallery/portrait/sovrum-källare-2.jpg";
import duschrum from "../public/gallery/portrait/duschrum.jpg";
import duschrum2 from "../public/gallery/portrait/duschrum-2.jpg";

export default function ImageGallery() {
  return (
    <>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex md:w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                src={gavel}
                alt="Snowy picture of the cabin from the side showing the mountains"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src={altan2}
                alt="The cabins porch"
                placeholder="blur"
                className="h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src={altan3}
                alt="The cabins porch again"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                src={storastugansnow}
                alt="The bigger cabin covered in snow"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src={hall}
                alt="The hallway in the cabin"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
              <em>Hallen</em>
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src={lillahallen2}
                alt="The smaller hallway in the cabin"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
              <em>Lilla hallen</em>
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                src={vardagsrum3}
                alt="The living room and the fireplace"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                src={vardagsrum2}
                alt="The livingroom and the sofas"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src={duschrum}
                alt="The shower and entrence to the sauna"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
              <em>Duschrum</em>
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src={duschrum2}
                alt="the shower again"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                src={allrumkällare}
                alt="living area in the basement"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
              <em>Allrum i källaren</em>
            </div>
          </div>
          <div className="flex md:w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                src={stugornasnow}
                alt="The small and big cabin covered in snow"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
              <em>Lilla och stora stugan</em>
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                src={stugornasnow2}
                alt="The cabins covered in snow"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src={altan}
                alt="The porch with view of the mountains"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src={storastugan2}
                alt="Piucture of the cabin you can rent"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                src={lillastorastugan}
                alt="Piucture of the cabin small and big cabin"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                src={vardagsrum}
                alt="The entire upstairs livingroom area"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                src={dubbelrumuppe}
                alt="The bigger doubleroom upstairs"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
              <em>Dubbelrummet uppe</em>
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src={lillasovrummetuppe}
                alt="The smal bedroom upstairs with bunk bed"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
              <em>Lilla sovrummet uppe</em>
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src={sovrumkällare2}
                alt="The bedroom in the basement with bunk bed"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
              <em>Sovrummet i källaren</em>
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                src={sovrumkällare}
                alt="The bedroom in the basement with bunk bed other angle"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
