import { useStore } from "../pages/zustandStore";

export default function MessageForm() {
  const { guestInfo, setGuestInfo } = useStore((state) => ({
    guestInfo: state.guestInfo,
    setGuestInfo: state.setGuestInfo,
  }));

  function addGuestName(e) {
    const nameValue = e.target.value;
    setGuestInfo({ ...guestInfo, name: nameValue });
  }

  function addGuestEmail(e) {
    const emailValue = e.target.value;
    setGuestInfo({ ...guestInfo, email: emailValue });
  }

  function addGuestTitle(e) {
    const titleValue = e.target.value;
    setGuestInfo({ ...guestInfo, title: titleValue });
  }

  function addGuestMessage(e) {
    const messageValue = e.target.value;
    setGuestInfo({ ...guestInfo, message: messageValue });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/sendgrid", {
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
  };

  return (
    <>
      <div className="w-full max-w-md px-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-lg rounded-2xl">
        <form
          className=" flex flex-col pt-5 pb-1"
          action="/send-data-here"
          method="post"
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
            type="text"
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
