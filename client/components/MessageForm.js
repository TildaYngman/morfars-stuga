export default function MessageForm({
  setGuestName,
  setEmail,
  setGuestPhone,
  setTitle,
  setMessage,
  setSubmitted,
  guestName,
  email,
  message,
  guestPhone,
  title,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    let guestEmail = {
      guestName,
      guestPhone,
      email,
      title,
      message,
    };

    fetch("/api/guestMessage", {
      method: "post",
      body: JSON.stringify(guestEmail),
    });

    console.log("Sending", { guestEmail });
  };

  return (
    <div className="mt-2 p-2 rounded-md bg-slate-200 sm:bg-red-200 md:bg-green-200 lg:bg-blue-100 xl:bg-orange-200  flex justify-center flex-col">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          id="gusetName"
          placeholder="Full name"
          name="guestName"
          required
          onChange={(e) => {
            setGuestName(e.target.value);
          }}
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          name="email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label htmlFor="phone">Phonenumber</label>
        <br />
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter phonenumber"
          pattern="^([+]46)\s*(7[0236])\s*(\d{4})\s*(\d{3})$"
          required
          onChange={(e) => {
            setGuestPhone(e.target.value);
          }}
        ></input>
        <br />
        <label htmlFor="title">Title</label>
        <br />
        <input
          type="text"
          id="title"
          placeholder="Write a title"
          name="title"
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <label htmlFor="message">Message</label>
        <br />
        <input
          type="text"
          id="message"
          placeholder="Write a message"
          name="message"
          required
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
