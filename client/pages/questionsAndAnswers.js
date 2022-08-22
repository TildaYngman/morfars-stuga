import QuestionsAndAnswersComponent from "../components/QuestionsAndAnswersComponent";
import QueststionCategory from "../components/QuestionCategory";
import Link from "next/link";

export default function QuestionsAndAnswers({ items }) {
  return (
    <>
      <Link href="/">Home</Link>
      <main className="p-2 flex justify-center flex-col">
        <h1 className="flex justify-center text-2xl font-medium my-6">
          Questions and Answers
        </h1>
        <QueststionCategory temp={items} />
      </main>
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
