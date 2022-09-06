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
      <div className="flex bg-slate-100 border-2 border-slate-200 justify-center w-screen shadow-lg rounded-t-lg">
        <div>
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
        </div>
      </div>
    </>
  );
}
