export default function MessageForm() {
  return (
    <div className="mt-2 p-2 rounded-md bg-slate-200 sm:bg-red-200 md:bg-green-200 lg:bg-blue-100 xl:bg-orange-200  flex justify-center flex-col">
      <form>
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" id="first" name="email" required />
        <br />
        <label htmlFor="message">Message</label>
        <br />
        <input type="text" id="message" name="message" required />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
