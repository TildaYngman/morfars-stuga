import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Greeting, MessageForm, PopUpQandA } from "../components/index";
import { useState } from "react";

export default function Home({
  Component,
  pageProps,
  setGuestName,
  setEmail,
  setMessage,
  setTitle,
  guestName,
  email,
  message,
  title,
  items,
}) {
  return (
    <>
      <div>
        <Image
          src="/cabinCroped.jpg"
          alt="cabin"
          height={250}
          width={500}
          layout="responsive"
        />
      </div>
      <div className="mt-2 p-2 rounded-md bg-slate-200 sm:bg-red-200 md:bg-green-200 lg:bg-blue-100 xl:bg-orange-200  flex justify-center items-center flex-col">
        <h1 className="text-2xl font-semibold">Morfars Stuga</h1>
        <h2 className="text-xl font-semibold">
          Välkommen till vår fjällstuga i vackra Tänndalen
        </h2>
      </div>
      <PopUpQandA temp={items} />
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
export async function getStaticProps() {
  const res = await fetch("http://localhost:28017/QandA");
  const data = await res.json();

  return {
    props: {
      items: data,
    },
  };
}
