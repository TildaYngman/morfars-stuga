import { Dialog, Transition } from "@headlessui/react";

export default function MessageForm({
  setGuestName,
  setEmail,
  setTitle,
  setMessage,
  guestName,
  email,
  message,
  title,
}) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email: email,
        guestName: guestName,
        title: title,
        message: message,
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
    console.log(guestName, email, title, message);
  };

  return (
    <>
      <div className="inline-block w-full max-w-md px-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
        <form
          className=" flex flex-col py-8"
          action="/send-data-here"
          method="post"
          onSubmit={handleSubmit}
        >
          <label className=" mb-2" htmlFor="name">
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
              setGuestName(e.target.value);
            }}
          />
          <label className=" mb-2" htmlFor="email">
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
              setEmail(e.target.value);
            }}
          />
          <label className=" mb-2" htmlFor="title">
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
              setTitle(e.target.value);
            }}
          />
          <label className=" mb-2" htmlFor="message">
            Meddelande
          </label>
          <textarea
            className=" border border-slate-400 p-1 rounded-md"
            type="text"
            id="message"
            name="message"
            placeholder="Övrig information till oss"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <div className="flex flex-col justify-center items-center">
            <button
              className="disable-btn bg-primary-green text-black m-4 py-2 px-3 rounded-lg shadow-lg"
              type="submit"
              disabled={!guestName || !email}
            >
              Skicka
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
