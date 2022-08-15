export default function BookingForm() {
  return (
    <>
      <form action="/send-data-here" method="post">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" />
        <label for="requestDate">When would you like to book:</label>
        <input type="date" id="requestDate" name="requestDate"></input>
        <label for="message">Message:</label>
        <input type="text" id="message" name="message" />
        <label for="email">Your Email:</label>
        <input type="text" id="email" name="email" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
