import { useState } from "react";
import {
  Bookingform,
  PopUpQandA,
  BookingInformation,
} from "../components/index";

export default function BookingRequest({ items, weeks }) {
  const [showInfo, setShowInfo] = useState(false);
  const [selectedWeeks, setSelectedWeeks] = useState([]);

  const handleClick = () => {
    setShowInfo(true);
  };

  //the three dots is making the the state update when adding something to the new array
  //... means copy all of the content to a new array
  function handleClickedWeek(week) {
    const clickedWeek = selectedWeeks;

    if (!clickedWeek.includes(week)) {
      clickedWeek.push(week);
      document
        .getElementById(`${week._id}`)
        .classList.add("bg-primary-orange-400");
    } else {
      clickedWeek.splice(clickedWeek.indexOf(week), 1);
      document
        .getElementById(`${week._id}`)
        .classList.remove("bg-primary-orange-400");
    }

    setSelectedWeeks([...clickedWeek]);
    console.log(selectedWeeks);
  }

  const rows = weeks.map((week) => {
    if (week.isAvailable === true) {
      return (
        <button
          onClick={() => handleClickedWeek(week)}
          className={`bg-primary-green-400 text-primary-black text-lg w-72 m-1 p-2 text-left font-semibold`}
          key={week._id}
          id={week._id}
        >
          <p>Vecka</p>
          {week.Vecka}
          <br />
          <p>Ankomst</p>
          {week.Ankomst}
          <br />
          <p>Avresa</p>
          {week.Avresa}
          <br />
        </button>
      );
    }
  });

  return (
    <>
      <PopUpQandA temp={items} />
      <h1 className=" text-2xl font-bold">Bokningförfrågan</h1>
      <p className=" italic">
        Obs. detta är en förfrågan och inte en bekräftad bokning
      </p>
      <h2 className=" text-xl font-bold">Lediga veckor</h2>
      {rows}
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

//Added the revaidate: 1
//Next.js will attempt to re-generate the page:
// - When a request comes in
// - At most once every 10 seconds
export async function getStaticProps() {
  const res = await fetch("http://localhost:28017/QandA");
  const data = await res.json();

  const resTwo = await fetch("http://localhost:28017/bookableWeeks");
  const weeks = await resTwo.json();

  return {
    props: {
      items: data,
      weeks: weeks,
    },
    revalidate: 1,
  };
}
