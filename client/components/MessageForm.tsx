import { useStore } from "../pages/zustandStore";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import React from "react";

export default function MessageForm() {
  const { guestInfo, setGuestInfo, showConfirm, setShowConfirm } = useStore(
    (state) => ({
      guestInfo: state.guestInfo,
      setGuestInfo: state.setGuestInfo,
      showConfirm: state.showConfirm,
      setShowConfirm: state.setShowConfirm,
    })
  );

  function openShowConfirm() {
    setShowConfirm(true);
  }

  function closeShowConfirm() {
    setShowConfirm(false);
  }

  function addGuestName(e: React.ChangeEvent<HTMLInputElement>) {
    const nameValue = e.target.value;
    setGuestInfo({ ...guestInfo, name: nameValue });
  }

  function addGuestEmail(e: React.ChangeEvent<HTMLInputElement>) {
    const emailValue = e.target.value;
    setGuestInfo({ ...guestInfo, email: emailValue });
  }

  function addGuestTitle(e: React.ChangeEvent<HTMLInputElement>) {
    const titleValue = e.target.value;
    setGuestInfo({ ...guestInfo, title: titleValue });
  }

  function addGuestMessage(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const messageValue = e.target.value;
    setGuestInfo({ ...guestInfo, message: messageValue });
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/send-email", {
      body: JSON.stringify({
        name: guestInfo.name,
        email: guestInfo.email,
        title: guestInfo.title,
        message: guestInfo.message,
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
    openShowConfirm();
  };

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
      <div className="w-full max-w-lg px-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-lg rounded-2xl">
        <form
          className=" flex flex-col pt-5 pb-1"
          action="/send-data-here"
          method="post"
          id="form"
          onSubmit={handleSubmit}
        >
          <label className=" mb-1" htmlFor="name">
            Namn*
          </label>
          <input
            className=" border border-slate-400 p-1 rounded-md"
            type="text"
            id="name"
            name="name"
            placeholder="Förnamn och Efternamn"
            required
            onChange={(e) => {
              addGuestName(e);
            }}
          />
          <label className=" mb-1" htmlFor="email">
            E-postadress*
          </label>
          <input
            className=" border border-slate-400 p-1 rounded-md"
            type="email"
            id="email"
            name="email"
            placeholder="exempel@exempel.se"
            required
            onChange={(e) => {
              addGuestEmail(e);
            }}
          />
          <label className=" mb-1" htmlFor="title">
            Title*
          </label>
          <input
            className=" border border-slate-400 p-1 rounded-md"
            type="text"
            id="title"
            name="title"
            placeholder="Titel"
            required
            onChange={(e) => {
              addGuestTitle(e);
            }}
          />
          <label className=" mb-1" htmlFor="message">
            Meddelande
          </label>
          <textarea
            className=" border border-slate-400 p-1 rounded-md"
            id="message"
            name="message"
            placeholder="Övrig information till oss"
            onChange={(e) => {
              addGuestMessage(e);
            }}
          />
          <div className="flex flex-col justify-center items-center">
            <button
              className="disable-btn-purple inline-block px-6 py-2.5 m-4 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
              type="submit"
            >
              Skicka
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
