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
        <textarea
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
