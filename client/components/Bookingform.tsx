import { ChangeEvent, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IWeeks, useStore } from "../pages/zustandStore";
import React from "react";

interface IOptions {
  value: number;
  amount: number;
}

interface IBookingFormProps {
  closeModal: () => void;
  isOpenCreate: boolean;
  options: IOptions[];
  allWeeks: IWeeks[];
}

export default function BookingForm({
  closeModal,
  isOpenCreate,
  options,
}: IBookingFormProps) {
  const {
    guestInfo,
    setGuestInfo,
    showConfirm,
    setShowConfirm,
    selectedWeeks,
    setSelectedWeeks,
  } = useStore((state) => ({
    guestInfo: state.guestInfo,
    setGuestInfo: state.setGuestInfo,
    showConfirm: state.showConfirm,
    setShowConfirm: state.setShowConfirm,
    selectedWeeks: state.selectedWeeks,
    setSelectedWeeks: state.setSelectedWeeks,
  }));

  function openShowConfirm() {
    setShowConfirm(true);
  }
  function closeShowConfirm() {
    setShowConfirm(false);
  }

  function addGuestName(e: ChangeEvent<HTMLInputElement>) {
    const nameValue = e.target.value;
    setGuestInfo({ ...guestInfo, name: nameValue });
  }
  function addGuestEmail(e: ChangeEvent<HTMLInputElement>) {
    const emailValue = e.target.value;
    setGuestInfo({ ...guestInfo, email: emailValue });
  }
  function addGuestPhone(e: ChangeEvent<HTMLInputElement>) {
    const phoneValue = e.target.value;
    setGuestInfo({ ...guestInfo, phone: phoneValue });
  }
  function addGuestMessage(e: ChangeEvent<HTMLTextAreaElement>) {
    const messageValue = e.target.value;
    setGuestInfo({ ...guestInfo, message: messageValue });
  }

  function checkPeople(e: ChangeEvent<HTMLSelectElement>) {
    const amount = e.target.value;
    const amountInt = parseInt(amount);
    if (amountInt === 0) {
      return;
    } else {
      setGuestInfo({ ...guestInfo, people: amount });
    }
  }

  function removeClasses() {
    const classColor = document.querySelectorAll(".card-btn-color-green");

    classColor.forEach((cardColor) => {
      cardColor.classList.remove("card-btn-color-green");
    });
    closeModal();
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    closeModal();
    removeClasses();

    const res = await fetch("https://morfars-stuga.fly.dev/send-request", {
      body: JSON.stringify({
        name: guestInfo.name,
        email: guestInfo.email,
        phone: guestInfo.phone,
        message: guestInfo.message,
        people: guestInfo.people,
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
      console.log(res.body);
      return;
    }
    setSelectedWeeks([]);
    openShowConfirm();
  };

  const newArr: string[] = [];

  selectedWeeks.forEach((object: IWeeks) => {
    newArr.push(
      `Vecka: ${object.Vecka}, mellan datumen ${object.Ankomst} och ${object.Avresa}<br />`
    );
  });

  function removeWeek(week: IWeeks) {
    const clickedWeek = selectedWeeks;
    clickedWeek.splice(clickedWeek.indexOf(week), 1);

    const bookingButton = document.getElementById(
      `${week._id}`
    ) as HTMLButtonElement;

    bookingButton.classList.remove("card-btn-color-green");

    setSelectedWeeks([...clickedWeek]);
  }

  function removeAllWeeks() {
    setSelectedWeeks([]);
    removeClasses();
  }

  const rows = selectedWeeks.map((week: IWeeks) => {
    return (
      <tbody key={week._id} className="border-spacing-2">
        <tr className=" border-b-4 border-white bg-primary-green text-black my-2">
          <td className="p-2">{week.Vecka}</td>
          <td className="p-2">{week.Ankomst}</td>
          <td className="p-2">{week.Avresa}</td>
          <td className="pl-2">
            <button onClick={() => removeWeek(week)}>X</button>
          </td>
        </tr>
      </tbody>
    );
  });

  return (
    <>
      <Transition appear show={showConfirm} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-20 h-full w-full bg-black-opacity-400"
          onClose={closeShowConfirm}
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
              <div className="inline-block w-full max-w-md p-4 my-8 overflow-hidden align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <p className=" text-lg font-medium m-4">
                  Tack, din bokningsförfrågan är nu skickad!
                </p>
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 mb-4 bg-primary-green text-black font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-primary-green hover:shadow-lg focus:bg-primary-green focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-green active:shadow-lg transition duration-150 ease-in-out"
                  onClick={() => closeShowConfirm()}
                >
                  Stäng
                </button>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={isOpenCreate} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-black-opacity-400 h-full w-full"
          onClose={closeModal}
        >
          <div className="min-h-screen px-2 text-center">
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
              <div className="inline-block w-full max-w-md px-4 py-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="flex justify-end">
                  <button
                    className=" flex justify-center text-xl font-extrabold w-10"
                    onClick={() => closeModal()}
                  >
                    X
                  </button>
                </div>
                <h2 className="text-xl font-semibold">Din Bokningsförfrågan</h2>
                <table className="w-full text-sm text-left text-black mt-4 mb-6">
                  <thead className="text-xs uppercase bg-gray-100">
                    <tr>
                      <th scope="col" className="py-3 px-2">
                        Vecka
                      </th>
                      <th scope="col" className="py-3 px-2">
                        Ankomst
                      </th>
                      <th scope="col" className="py-3 px-2">
                        Avresa
                      </th>
                      <th scope="col" className="py-3 px-2">
                        <button onClick={() => removeAllWeeks()}>X</button>
                      </th>
                    </tr>
                  </thead>
                  {rows}
                </table>
                <form
                  className=" flex flex-col"
                  action="/send-data-here"
                  method="post"
                  onSubmit={handleSubmit}
                >
                  <label className=" mb-2" htmlFor="name">
                    Namn*
                  </label>
                  <input
                    className=" border border-slate-400 py-1 px-2 rounded-md mb-2"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Förnamn och Efternamn"
                    required
                    onChange={(e) => {
                      addGuestName(e);
                    }}
                  />
                  <label className=" mb-2" htmlFor="email">
                    E-postadress*
                  </label>
                  <input
                    className=" border border-slate-400 py-1 px-2 rounded-md mb-2"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="exempel@exempel.se"
                    required
                    onChange={(e) => {
                      addGuestEmail(e);
                    }}
                  />
                  <label className=" mb-2" htmlFor="phoneNumber">
                    Telefonnummer*
                  </label>
                  <input
                    className=" border border-slate-400 py-1 px-2 rounded-md mb-2"
                    type="number"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="0701234567"
                    required
                    onChange={(e) => {
                      addGuestPhone(e);
                    }}
                  ></input>
                  <label className="mb-2" htmlFor="people">
                    Antal personer*
                  </label>
                  <div className="mb-2 flex">
                    <select
                      className=" border border-slate-400 py-1 px-2 rounded-md"
                      id="people"
                      name="people"
                      value={guestInfo.people}
                      onChange={(e) => {
                        checkPeople(e);
                      }}
                    >
                      {options.map((option: IOptions) => (
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
                    className=" border border-slate-400 py-1 px-2  rounded-md mb-4"
                    id="message"
                    name="message"
                    placeholder="Övrig information till oss"
                    onChange={(e) => {
                      addGuestMessage(e);
                    }}
                  />
                  <div className="flex flex-col justify-center items-center">
                    <button
                      className=" disable-btn inline-block mt-2 mb-4 px-6 py-3 bg-green-500 text-white font-medium text-sm leading-tight uppercase rounded-full shadow-md"
                      type="submit"
                    >
                      Skicka Bokningsförfrågan
                    </button>
                    <button
                      className="text-slate-500"
                      type="button"
                      onClick={closeModal}
                    >
                      Avbryt
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
