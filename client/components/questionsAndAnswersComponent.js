export default function QuestionsAndAnswersComponent({ temp }) {
  return (
    <section className="mt-2 p-2 rounded-md bg-slate-200 sm:bg-red-200 md:bg-green-200 lg:bg-blue-100 xl:bg-orange-200 flex flex-col max-w-md">
      <p className=" text-lg font-medium">Question</p>
      <p className=" mb-4">{temp.question}</p>
      <p className=" text-lg font-medium">Answer</p>
      <p className=" mb-2">{temp.answer}</p>
    </section>
  );
}
