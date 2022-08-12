import QuestionsAndAnswersComponent from "../components/questionsAndAnswersComponent";
import Link from "next/link";

export default function QuestionsAndAnswers({ items }) {
  let questionNumber = 1;

  return (
    <>
      <h1>Questions and Answers</h1>
      {items.map((temp) => {
        return (
          <div key={temp._id}>
            <h3>Question number {questionNumber++}</h3>
            <QuestionsAndAnswersComponent temp={temp} />
          </div>
        );
      })}
      <Link href="/">Home</Link>
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
