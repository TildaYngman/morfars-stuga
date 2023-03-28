import React from "react";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { IQandAData } from "../pages/zustandStore";
import { IQandADataProps } from "./PopUpQandA";

export interface IQuestionsAndAnswersComponent {
  item: IQandAData;
}

export default function QuestionsAndAnswersComponent({ item }: IQuestionsAndAnswersComponent) {
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown((current) => !current);
  };

  return (
    <>
      <button
        className=" p-2 mb-3 w-full bg-slate-300 flex items-center justify-between"
        onClick={handleClick}
      >
        <p className="text-left">{item.question}</p>
        <AiOutlineDown className="ml-2" />
      </button>
      {isShown && (
        <div className="mb-3">
          <p className="text-left">{item.answer}</p>
        </div>
      )}
    </>
  );
}
