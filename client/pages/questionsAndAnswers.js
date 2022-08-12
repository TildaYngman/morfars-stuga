import QuestionsAndAnswersComponent from "../components/questionsAndAnswersComponent";

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
