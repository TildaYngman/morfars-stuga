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
      <div className="flex justify-center w-screen bg-primary-green shadow-xl rounded-2xl">
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
    </>
  );
}
