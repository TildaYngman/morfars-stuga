import { useState } from "react";
import {
  Bookingform,
  PopUpQandA,
  BookingInformation,
} from "../components/index";

export default function BookingRequest({
  items,
  weeks,
  setGuestName,
  setEmail,
  setMessage,
  setTitle,
  guestName,
  email,
  message,
  title,
  phoneNumber,
  setPhoneNumber,
}) {
  const [selectedWeeks, setSelectedWeeks] = useState([]);
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [isOpenInfo, setIsOpenInfo] = useState(false);

  function closeModal() {
    setIsOpenCreate(false);
    setIsOpenInfo(false);
  }

  function openModal(e) {
    e.target.id === "create" ? setIsOpenCreate(true) : setIsOpenInfo(true);
  }

  //the three dots is making the the state update when adding something to the new array
  //... means copy all of the content to a new array
  function handleClickedWeek(week) {
    const clickedWeek = selectedWeeks;

    if (!clickedWeek.includes(week)) {
      clickedWeek.push(week);
      document.getElementById(`${week._id}`).className =
        "bg-gradient-to-b from-lime-100 to-lime-200 text-primary-black w-full sm:w-96 mb-3 pl-4 py-5 text-left font-semibold rounded-md shadow-lg";
    } else {
      clickedWeek.splice(clickedWeek.indexOf(week), 1);
      document.getElementById(`${week._id}`).className =
        "bg-slate-100 text-primary-black w-full sm:w-96 mb-3 pl-4 py-5 text-left font-semibold rounded-md shadow-md";
    }

    setSelectedWeeks([...clickedWeek]);
    console.log(selectedWeeks);
  }

  const rows = weeks.map((week) => {
    if (week.isAvailable === true) {
      return (
        <button
          onClick={() => handleClickedWeek(week)}
          className="bg-slate-100 text-primary-black w-full sm:w-96 mb-3 pl-4 py-5 text-left font-semibold rounded-md shadow-md"
          key={week._id}
          id={week._id}
        >
          <p className="text-lg mb-2 font-semibold">Vecka {week.Vecka}</p>
          <p className=" mb-1 font-medium">Ankomst: {week.Ankomst}</p>
          <p className=" font-medium">Avresa: {week.Avresa}</p>
        </button>
      );
    }
  });

  return (
    <>
      <PopUpQandA temp={items} />
      <Bookingform
        isOpenCreate={isOpenCreate}
        closeModal={closeModal}
        selectedWeeks={selectedWeeks}
        setGuestName={setGuestName}
        setEmail={setEmail}
        setMessage={setMessage}
        setTitle={setTitle}
        setPhoneNumber={setPhoneNumber}
        guestName={guestName}
        email={email}
        message={message}
        title={title}
        phoneNumber={phoneNumber}
      />
      <BookingInformation
        temp={items}
        isOpenInfo={isOpenInfo}
        closeModal={closeModal}
      />

      <h1 className=" text-2xl font-bold">Bokningförfrågan</h1>
      <p className=" italic">
        Obs. detta är en förfrågan och inte en bekräftad bokning
      </p>
      <div className="mb-48 flex flex-col justify-center items-center px-2">
        <h2 className=" text-xl font-bold m-4">Lediga veckor</h2>
        {rows}
      </div>
      <div className="fixed bottom-0 h-40 w-full bg-slate-500 flex justify-around items-center">
        <button
          className="p-4 bg-slate-50 text-slate-900"
          onClick={openModal}
          id="create"
        >
          Skapa Bokningförfrågan
        </button>
        <button
          className="p-4 bg-primary-orange-700 text-primary-white"
          onClick={openModal}
          id="info"
        >
          Info
        </button>
      </div>
      {/* <Bookingform /> */}
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
