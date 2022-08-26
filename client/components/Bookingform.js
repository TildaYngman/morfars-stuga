export default function BookingForm(weeks) {
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      name: event.target.name.value,
      phoneNumber: event.target.phoneNumber.value,
      message: event.target.message.value,
      email: event.target.email.value,
    };

    alert(
      `Thank you ${data.name}, your booking request has been successfully submited.`
    );
  };

  return (
    <>
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
          className=" border-solid border-2 border-slate-500"
          type="text"
          id="name"
          name="name"
        />
        <label className=" mb-2" htmlFor="email">
          E-postadress*
        </label>
        <input
          className=" border-solid border-2 border-slate-500"
          type="text"
          id="email"
          name="email"
        />
        <label className=" mb-2" htmlFor="phoneNumber">
          Telefonnummer*
        </label>
        <input
          className=" border-solid border-2 border-slate-500"
          type="text"
          id="phoneNumber"
          name="phoneNumber"
        ></input>
        <label className=" mb-2" htmlFor="leave">
          When would you like to leave?
        </label>
        <input
          className=" border-solid border-2 border-slate-500"
          type="date"
          id="leave"
          name="leave"
        ></input>
        <label className=" mb-2" htmlFor="message">
          Meddelande
        </label>
        <input
          className=" border-solid border-2 border-slate-500"
          type="text"
          id="message"
          name="message"
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
