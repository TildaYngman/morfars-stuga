import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function BookingForm({
  selectedWeeks,
  closeModal,
  isOpenCreate,
  setGuestName,
  setEmail,
  setMessage,
  setPhoneNumber,
  setTitle,
  guestName,
  email,
  message,
  title,
  phoneNumber,
}) {
  const options = [
    { value: 1, amount: 1 },
    { value: 2, amount: 2 },
    { value: 3, amount: 3 },
    { value: 4, amount: 4 },
    { value: 5, amount: 5 },
    { value: 6, amount: 6 },
  ];

  const [people, setPeople] = useState(options[0].value);

  const handleSubmit = async (e) => {
    // Stop the form from submitting and refreshing the page.
    e.preventDefault();

    // Get data from the form.
    const res = await fetch("/api/sendgridBooking", {
      body: JSON.stringify({
        email: email,
        guestName: guestName,
        title: title,
        message: message,
        phoneNumber: phoneNumber,
        people: people,
        vecka: newArr,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
    console.log(guestName, email, title, message, phoneNumber, people);
  };

  const newArr = [];

  selectedWeeks.forEach((object) => {
    newArr.push(
      `Vecka: ${object.Vecka}, mellan datumen ${object.Ankomst} - ${object.Avresa}`
    );
  });

  console.log(newArr);

  const rows = selectedWeeks.map((week) => {
    return (
      <div
        className={` bg-primary-teal-200 text-primary-black text-sm w-72 m-1 p-2 text-left font-semibold`}
        key={week._id}
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
      </div>
    );
  });

  return (
    <>
      <Transition appear show={isOpenCreate} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            {/* This makes it close when clicking outside of the Modal */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            {/* This makes adds transition when open/close*/}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="flex justify-end">
                  <button
                    className=" flex justify-center text-xl font-extrabold w-10"
                    onClick={() => closeModal()}
                  >
                    X
                  </button>
                </div>
                <h2>Din Bokningsförfrågan</h2>
                <h2>Valda veckor:</h2>
                {rows}
                <form
                  className=" flex flex-col py-20"
                  action="/send-data-here"
                  method="post"
                  onSubmit={handleSubmit}
                >
                  <label className=" mb-2" htmlFor="name">
                    Namn*
                  </label>
                  <input
                    className=" border-solid border-2 border-slate-500"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Förnamn och Efternamn"
                    required
                    onChange={(e) => {
                      setGuestName(e.target.value);
                    }}
                  />
                  <label className=" mb-2" htmlFor="email">
                    E-postadress*
                  </label>
                  <input
                    className=" border-solid border-2 border-slate-500"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="exempel@exempel.se"
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <label className=" mb-2" htmlFor="phoneNumber">
                    Telefonnummer*
                  </label>
                  <input
                    className=" border-solid border-2 border-slate-500"
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="0701234567"
                    required
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                  ></input>
                  <label htmlFor="cars">Antal personer</label>
                  <div className="mb-3 flex">
                    <select
                      value={people}
                      onChange={(e) => {
                        setPeople(e.target.value);
                      }}
                    >
                      {options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.amount}
                        </option>
                      ))}
                    </select>
                  </div>
                  <label className=" mb-2" htmlFor="message">
                    Meddelande
                  </label>
                  <textarea
                    className=" border-solid border-2 border-slate-500"
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Övrig information till oss"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                  <button type="submit">Submit</button>
                  <button type="button" onClick={closeModal}>
                    Avbryt
                  </button>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
