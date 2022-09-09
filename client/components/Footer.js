import { MessageForm } from "./index";

export default function Footer({
  setGuestName,
  setEmail,
  setMessage,
  setTitle,
  guestName,
  email,
  message,
  title,
}) {
  return (
    <>
      <footer className="flex flex-col bg-slate-700 px-4 justify-center m-auto items-center w-full shadow-lg rounded-t-lg">
        <MessageForm
          setGuestName={setGuestName}
          setEmail={setEmail}
          setMessage={setMessage}
          setTitle={setTitle}
          guestName={guestName}
          email={email}
          message={message}
          title={title}
        />
        <em className="pb-6 text-white">&copy; 2022 morfarsstuga.se</em>
      </footer>
    </>
  );
}
