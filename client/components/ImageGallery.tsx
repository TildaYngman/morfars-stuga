import React from "react";
import Image from "next/image";
import lillastorastugan from "../public/gallery/landscape/lilla-stora-stugan.jpg";
import stugornasnö from "../public/gallery/landscape/stugorna-snö.jpg";
import vardagsrum2 from "../public/gallery/landscape/vardagsrum-2.jpg";
import vardagsrum3 from "../public/gallery/landscape/vardagsrum-3.jpg";
import vardagsrum from "../public/gallery/landscape/vardagsrum.jpg";
import dubbelrumuppe from "../public/gallery/landscape/dubbelrum-uppe.jpg";
import allrumkällare from "../public/gallery/landscape/allrum-källare.jpg";
import sovrumkällare from "../public/gallery/landscape/sovrum-källare.jpg";

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
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src={altan2}
                alt="piucture of the cabin you can rent"
                placeholder="blur"
                className="h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src={altan3}
                alt="piucture of the cabin you can rent"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                src={stugornasnö}
                alt="piucture of the cabin you can rent"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src={hall}
                alt="piucture of the cabin you can rent"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src={lillahallen2}
                alt="piucture of the cabin you can rent"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                src={vardagsrum3}
                alt="piucture of the cabin you can rent"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                src={vardagsrum2}
                alt="piucture of the cabin you can rent"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                src={allrumkällare}
                alt="piucture of the cabin you can rent"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src={hall}
                alt="piucture of the cabin you can rent"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src={lillahallen2}
                alt="piucture of the cabin you can rent"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                src={lillastorastugan}
                alt="piucture of the cabin you can rent"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src={altan}
                alt="piucture of the cabin you can rent"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src={storastugan2}
                alt="piucture of the cabin you can rent"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                src={vardagsrum}
                alt="piucture of the cabin you can rent"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                src={dubbelrumuppe}
                alt="piucture of the cabin you can rent"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src={lillasovrummetuppe}
                alt="piucture of the cabin you can rent"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src={sovrumkällare2}
                alt="piucture of the cabin you can rent"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src={duschrum}
                alt="piucture of the cabin you can rent"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src={duschrum2}
                alt="piucture of the cabin you can rent"
                placeholder="blur"
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                src={sovrumkällare}
                alt="piucture of the cabin you can rent"
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
