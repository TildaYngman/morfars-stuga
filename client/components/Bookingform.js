import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function BookingForm({ selectedWeeks, closeModal, isOpen }) {
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      name: event.target.name.value,
      phoneNumber: event.target.phoneNumber.value,
      message: event.target.message.value,
      email: event.target.email.value,
      people: event.target.people.value,
    };

    alert(
      `Thank you ${data.name}, your booking request has been successfully submited.`
    );
  };

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
      <Transition appear show={isOpen} as={Fragment}>
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
                  ></input>
                  <label htmlFor="cars">Antal personer</label>
                  <div className="mb-3 flex">
                    <select className="flex" id="people" name="people">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
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
