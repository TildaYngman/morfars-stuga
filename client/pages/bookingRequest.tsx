import React from "react";
import { useState } from "react";
import { Bookingform } from "../components/index";
import { IWeeks, useStore } from "./zustandStore";

interface IBookingRequestProps {
  allWeeks: IWeeks[];
}

export default function BookingRequest({ allWeeks }: IBookingRequestProps) {
  const { guestInfo, setGuestInfo, selectedWeeks, setSelectedWeeks } = useStore(
    (state) => ({
      guestInfo: state.guestInfo,
      setGuestInfo: state.setGuestInfo,
      selectedWeeks: state.selectedWeeks,
      setSelectedWeeks: state.setSelectedWeeks,
    })
  );

  const options = [
    { value: 0, amount: 0 },
    { value: 1, amount: 1 },
    { value: 2, amount: 2 },
    { value: 3, amount: 3 },
    { value: 4, amount: 4 },
    { value: 5, amount: 5 },
    { value: 6, amount: 6 },
  ];

  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [isOpenInfo, setIsOpenInfo] = useState(false);

  function closeModal() {
    setIsOpenCreate(false);
    setIsOpenInfo(false);
    setGuestInfo({
      ...guestInfo,
      name: "",
      email: "",
      phone: "",
      message: "",
      people: options[0].value,
    });
  }

  function openModal(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as Element;
    target.id === "create" ? setIsOpenCreate(true) : setIsOpenInfo(true);
  }

  function checkIfEmpty() {
    if (selectedWeeks.length === 0) return;
    else {
      return (
        <div className="sticky bottom-0 h-28 w-full bg-slate-400 flex justify-around items-center bg-opacity-90">
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-md leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={(e) => openModal(e)}
            id="create"
          >
            Skapa Bokningförfrågan
          </button>
        </div>
      );
    }
  }

  //the three dots is making the the state update when adding something to the new array
  //... means copy all of the content to a new array
  function handleClickedWeek(week: IWeeks) {
    const clickedWeek = selectedWeeks;
    const updateColor = document.getElementById(
      `${week._id}`
    ) as HTMLButtonElement;

    if (!clickedWeek.includes(week)) {
      clickedWeek.push(week);
      // document.getElementById(`${week._id}`).className =
      //   "bg-gradient-to-b from-primary-green-t to-primary-green-b text-primary-black w-full sm:w-96 mb-3 pl-4 py-5 text-left font-semibold rounded-md shadow-lg ";
      updateColor.classList.add("card-btn-color-green");
    } else {
      clickedWeek.splice(clickedWeek.indexOf(week), 1);
      updateColor.classList.remove("card-btn-color-green");
    }

    setSelectedWeeks([...clickedWeek]);
  }

  const rows = allWeeks.map((week) => {
    if (week.isAvailable === true) {
      return (
        <button
          onClick={() => handleClickedWeek(week)}
          className="card-btn-color-grey text-primary-black w-full sm:w-96 mb-3 pl-4 py-5 text-left font-semibold rounded-md shadow-md"
          key={week._id}
          id={week._id}
        >
          <p className="text-lg mb-2 font-semibold ">Vecka {week.Vecka}</p>
          <p className=" mb-1 font-medium">Ankomst: {week.Ankomst}</p>
          <p className=" font-medium">Avresa: {week.Avresa}</p>
        </button>
      );
    }
  });

  return (
    <>
      <Bookingform
        isOpenCreate={isOpenCreate}
        closeModal={closeModal}
        allWeeks={allWeeks}
        options={options}
      />

      <main className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <h1 className="text-3xl text-slate-800 font-semibold">
          Bokningförfrågan
        </h1>

        <div className="max-w-xl py-2">
          <em>Obs. detta är en förfrågan och inte en bekräftad bokning</em>
        </div>
        <div className="mb-48 flex flex-col justify-center items-center px-2">
          <h2 className=" text-xl font-bold m-4">Lediga veckor</h2>
          {rows}
        </div>
        {checkIfEmpty()}
      </main>
    </>
  );
}

//Added the revaidate: 1
//Next.js will attempt to re-generate the page:
// - When a request comes in
// - At most once every 10 seconds
export async function getStaticProps() {
  const resTwo = await fetch("http://localhost:5000/bookableWeeks");
  const allWeeks = await resTwo.json();

  return {
    props: {
      allWeeks: allWeeks,
    },
  };
}
