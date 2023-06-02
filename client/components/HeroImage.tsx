import React from "react";
import Image from "next/image";
import cabin from "../public/cabin_hero.jpg";

export default function HeroImage() {
  return (
    <>
      <div>
        <Image src={cabin} alt="" placeholder="blur" className="rounded" />
      </div>
    </>
  );
}
