import "../styles/globals.css";
import { useState } from "react";
import { Navbar, Footer } from "../components/index";

function MyApp({ Component, pageProps }) {
  const [guestName, setGuestName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <>
      <Navbar />
      <Component
        {...pageProps}
        setGuestName={setGuestName}
        setEmail={setEmail}
        setMessage={setMessage}
        setTitle={setTitle}
        setPhoneNumber={setPhoneNumber}
        guestName={guestName}
        email={email}
        message={message}
        title={title}
        phoneNumber={phoneNumber}
      />
      <Footer />
    </>
  );
}

export default MyApp;
