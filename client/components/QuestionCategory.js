import { useState, useEffect } from "react";
import QuestionsAndAnswersComponent from "./QuestionsAndAnswersComponent";

export default function QuestionsCategory({ temp }) {
  const [questionArr, setQuestionArr] = useState([]);
  const [isShown, setIsShown] = useState(false);

  const categoryArray = [];
  const firstObjectOfCategories = [];

  temp.forEach((object) => {
    if (!categoryArray.includes(object.category)) {
      categoryArray.push(object.category);
      firstObjectOfCategories.push(object);
    }
  });

  // function handleClick(e) {
  //   temp.forEach((element) => {
  //     if (e.target.id === element.category) {
  //       console.log(element.question);
  //       setQuestionArr(questionArr.push(element));
  //     }
  //     console.log("Question ARR: ", questionArr);
  //   });
  //

  const handleClickQuestion = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  function handleClickCategory(e) {
    const newArray = [];
    temp.forEach((element) => {
      if (e.target.id === element.category) {
        newArray.push(element); //add element to new array
        // setQuestionArr(questionArr); //overwrite state with new array with element pushed in
        // console.log(element.question);
        // console.log(newArray);
        // renderCategoryQuestions(newArray);
      }
    });
    setQuestionArr([...newArray]);
  }

  function renderCategoryQuestions(items) {
    let rows = [];
    items.forEach((item, i) => {
      rows.push(<QuestionsAndAnswersComponent key={item._id} item={item} />);
    });
    console.log(rows);
    return rows;
  }

  useEffect(() => {
    console.log("Question ARR: ", questionArr);
    rows = renderCategoryQuestions(questionArr);
    console.log("rows:", rows);
  }, [questionArr]);

  let rows = [];
  return (
    <>
      {firstObjectOfCategories.map((e) => {
        return (
          <button onClick={handleClickCategory} id={e.category} key={e._id}>
            {e.category}
          </button>
        );
      })}
      {renderCategoryQuestions(questionArr)}
    </>
  );
}
