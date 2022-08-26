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
      people: event.target.people.value,
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
      </form>
    </>
  );
}
