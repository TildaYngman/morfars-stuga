export default function QuestionsAndAnswersComponent({ temp }) {
  return (
    <>
      <p>Question</p>
      <p>{temp.question}</p>
      <p>Answer</p>
      <p>{temp.answer}</p>
      <br></br>
    </>
  );
}
