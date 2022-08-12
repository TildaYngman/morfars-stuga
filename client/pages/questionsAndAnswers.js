import QuestionsAndAnswersComponent from "../components/questionsAndAnswersComponent";

export default function QuestionsAndAnswers() {
  return (
    <>
      <h1>Questions and Answers</h1>;
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
