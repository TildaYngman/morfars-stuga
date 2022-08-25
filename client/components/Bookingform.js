export default function BookingForm(weeks) {
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      arrive: event.target.arrive.value,
      leave: event.target.leave.value,
      message: event.target.message.value,
      email: event.target.email.value,
    };

    alert(
      `Thank you ${data.firstName} ${data.lastName}, your booking request has been successfully submited.`
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
        <label className=" mb-2" htmlFor="firstName">
          First name:
        </label>
        <input
          className=" border-solid border-2 border-slate-500"
          type="text"
          id="firstName"
          name="firstName"
        />
        <label className=" mb-2" htmlFor="lastName">
          Last name:
        </label>
        <input
          className=" border-solid border-2 border-slate-500"
          type="text"
          id="lastName"
          name="lastName"
        />
        <label className=" mb-2" htmlFor="arrive">
          When would you like to arrive?
        </label>
        <input
          className=" border-solid border-2 border-slate-500"
          type="date"
          id="arrive"
          name="arrive"
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
          Message:
        </label>
        <input
          className=" border-solid border-2 border-slate-500"
          type="text"
          id="message"
          name="message"
        />
        <label className=" mb-2" htmlFor="email">
          Your Email:
        </label>
        <input
          className=" border-solid border-2 border-slate-500"
          type="text"
          id="email"
          name="email"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
