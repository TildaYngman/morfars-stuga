import { useState, useEffect } from "react";
import QuestionsAndAnswersComponent from "./QuestionsAndAnswersComponent";
import Link from "next/link";

export default function QuestionsCategory({ temp }) {
  const [questionArr, setQuestionArr] = useState([]);

  const categoryArray = [];
  const firstObjectOfCategories = [];

  temp.forEach((object) => {
    if (!categoryArray.includes(object.category)) {
      categoryArray.push(object.category);
      firstObjectOfCategories.push(object);
    }
  });

  function handleClick(e) {
    const newArray = [];
    temp.forEach((element) => {
      if (e.target.id === element.category) {
        newArray.push(element);
      }
    });
    setQuestionArr([...newArray]);
  }

  function renderCategoryQuestions(items) {
    let rows = [];
    items.forEach((item, i) => {
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
              onClick={handleClick}
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
