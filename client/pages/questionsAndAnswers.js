import QuestionsAndAnswersComponent from "../components/questionsAndAnswersComponent";
import Link from "next/link";

export default function QuestionsAndAnswers({ users }) {
  return (
    <>
      <h1>Questions and Answers</h1>
      {users.map((temp) => {
        return (
          <div key={temp.id}>
            <QuestionsAndAnswersComponent temp={temp} />
          </div>
        );
      })}
      <Link href="/">Home</Link>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
}
