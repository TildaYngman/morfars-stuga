import React from "react";
import { useState, useEffect } from "react";
import { IQandAData } from "../pages/zustandStore";
import { IQandADataProps } from "./PopUpQandA";
import QuestionsAndAnswersComponent from "./questionsAndAnswersComponent";



export default function QuestionsCategory({ temp }: IQandADataProps) {
  const [questionArr, setQuestionArr] = useState<IQandAData[]>([]);

  const categoryArray:string[] = [];
  const firstObjectOfCategories:IQandAData[] = [];

  temp.forEach((object) => {
    if (!categoryArray.includes(object.category)) {
      categoryArray.push(object.category);
      firstObjectOfCategories.push(object);
    }
  });

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const newArray:IQandAData[] = [];
    const target = e.target as Element
    temp.forEach((element) => {
      if (target.id === element.category) {
        newArray.push(element);
      }
    });
    setQuestionArr([...newArray]);
  }

  function renderCategoryQuestions(items: IQandAData[]) {
    let rows: JSX.Element[] = [];
    items.forEach((item) => {
      rows.push(<QuestionsAndAnswersComponent key={item._id} item={item} />);
    });
    return rows;
  }

  useEffect(() => {
    rows = renderCategoryQuestions(questionArr);
  }, [questionArr]);

  let rows = [];
  return (
    <>
      <section className="flex flex-row ">
        {firstObjectOfCategories.map((e) => {
          return (
            <button
              className=" bg-primary-green-800 text-primary-green-100 text-lg w-72 m-1 p-2"
              onClick={ (e) => handleClick(e)}
              id={e.category}
              key={e._id}
            >
              {e.category}
            </button>
          );
        })}
      </section>
      {renderCategoryQuestions(questionArr)}
    </>
  );
}
