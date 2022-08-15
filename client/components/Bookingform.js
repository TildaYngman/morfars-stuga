export default function BookingForm() {
  return (
    <>
      <form className=" flex flex-col" action="/send-data-here" method="post">
        <label className=" mb-2" for="title">
          Title:
        </label>
        <input
          className=" border-solid border-2 border-slate-500"
          type="text"
          id="title"
          name="title"
        />
        <label className=" mb-2" for="requestDate">
          When would you like to book:
        </label>
        <input
          className=" border-solid border-2 border-slate-500"
          type="date"
          id="requestDate"
          name="requestDate"
        ></input>
        <label className=" mb-2" for="message">
          Message:
        </label>
        <input
          className=" border-solid border-2 border-slate-500"
          type="text"
          id="message"
          name="message"
        />
        <label className=" mb-2" for="email">
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
