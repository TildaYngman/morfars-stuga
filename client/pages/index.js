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
  const [title, setTitle] = useState("");

  return (
    <>
      <Greeting />
      <Link href="/questionsAndAnswers">Questions and Answers</Link>
      <br />
      <Link href="/about">About The Cabin</Link>
      <br />
      <Link href="/bookingRequest">booking</Link>
      <br />
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
    </>
  );
}
