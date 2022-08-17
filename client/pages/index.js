import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Greeting, MessageForm } from "../components/index";
import { useState } from "react";

export default function Home() {
  const [guestName, setGuestName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [title, setTitle] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Greeting />
      <Link href="/questionsAndAnswers">Questions and Answers</Link>
      <Link href="/about">About The Cabin</Link>
      <MessageForm
        setGuestName={setGuestName}
        setEmail={setEmail}
        setMessage={setMessage}
        setGuestPhone={setGuestPhone}
        setTitle={setTitle}
        setSubmitted={setSubmitted}
        guestName={guestName}
        email={email}
        message={message}
        guestPhone={guestPhone}
        title={title}
      />
    </>
  );
}
