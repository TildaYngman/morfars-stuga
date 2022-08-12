import QuestionsAndAnswersComponent from "../components/questionsAndAnswersComponent";
import Link from "next/link";

export default function QuestionsAndAnswers({ items }) {
  return (
    <>
      <h1>Questions and Answers</h1>
      {items.map((temp) => {
        return (
          <div key={temp._id}>
            <QuestionsAndAnswersComponent temp={temp} />
          </div>
        );
      })}
      <Link href="/">Home</Link>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:28017/test");
  const data = await res.json();

  return {
    props: {
      items: data,
    },
  };
}
