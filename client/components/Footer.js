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
      <div className="flex bg-slate-100 justify-center w-full shadow-lg rounded-t-lg">
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
        <em></em>
      </div>
    </>
  );
}
