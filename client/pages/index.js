import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-cyan-300">Project</h1>
      <Link href="/questionsAndAnswers">Questions and Answers</Link>
      <Link href="/about">About The Cabin</Link>
    </>
  );
}
