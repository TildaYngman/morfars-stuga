export default function QuestionsAndAnswersComponent({ temp }) {
  return (
    <section className="mt-4 p-2 bg-slate-200 flex flex-col">
      <p className=" text-lg font-medium">Question</p>
      <p className=" mb-4">{temp.question}</p>
      <p className=" text-lg font-medium">Answer</p>
      <p className=" mb-2">{temp.answer}</p>
    </section>
  );
}
