import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

export default function QuestionsAndAnswersComponent({ temp }) {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  return (
    <>
      <button
        className=" p-2 mb-4 w-full bg-slate-300 flex items-center justify-between"
        onClick={handleClick}
      >
        <p className="text-left">{temp.question}</p>
        <AiOutlineDown className="ml-2" />
      </button>
      {isShown && (
        <div>
          <p>{temp.answer}</p>
        </div>
      )}
    </>
  );
}
