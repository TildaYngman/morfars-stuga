export default function QuestionsAndAnswersComponent({ temp }) {
  return (
    <>
      <p>{temp.question}</p>
      <p>{temp.answer}</p>
      <br></br>
    </>
  );
}
