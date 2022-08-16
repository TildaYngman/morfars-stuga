import { AiOutlineDown } from "react-icons/ai";

export default function QuestionsAndAnswersComponent({ temp }) {
  return (
    <>
      <button className=" mb-4 w-full bg-slate-300 flex items-center justify-between">
        <p className="text-left">{temp.question}</p> <AiOutlineDown />
      </button>
    </>
  );
}

{
  /* <section className="mt-2 p-2 rounded-md bg-slate-200 sm:bg-red-200 md:bg-green-200 lg:bg-blue-100 xl:bg-orange-200 flex flex-col max-w-md">
<button className=" mb-4 w-full">{temp.question}</button>
<p className=" text-lg font-medium">Answer</p>
<p className=" mb-2">{temp.answer}</p>
</section> */
}
