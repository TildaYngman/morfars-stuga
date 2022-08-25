import { useState } from "react";
import {
  Bookingform,
  PopUpQandA,
  BookingInformation,
} from "../components/index";

export default function BookingRequest({ items }) {
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(true);
    console.log(showInfo);
  };

  return (
    <>
      <PopUpQandA temp={items} />
      <h1 className=" text-2xl font-bold">Bokningförfrågan</h1>
      <p className=" italic">
        Obs. detta är en förfrågan och inte en bekräftad bokning
      </p>
      <h2 className=" text-xl font-bold">Lediga veckor</h2>
      {showInfo ? (
        <div>
          <BookingInformation temp={items} setShowInfo={setShowInfo} />
        </div>
      ) : null}
      <div className="fixed bottom-0 h-40 w-full bg-slate-500 flex justify-around items-center">
        <button className="p-4 bg-slate-50 text-slate-900">
          Skapa Bokningförfrågan
        </button>
        <button
          className="p-4 bg-primary-orange-700 text-primary-white"
          onClick={handleClick}
        >
          Info
        </button>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:28017/QandA");
  const data = await res.json();

  return {
    props: {
      items: data,
    },
  };
}
