import { useState, useEffect } from "react";

export default function QuestionsAndAnswersComponent({ temp }) {
  const [questionArr, setQuestionArr] = useState([]);

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

  function handleClick(e) {
    const newArray = [];
    temp.forEach((element) => {
      if (e.target.id === element.category) {
        newArray.push(element); //add element to new array
        setQuestionArr(questionArr); //overwrite state with new array with element pushed in
        console.log(element.question);
        console.log(newArray);
      }
    });
  }

  // useEffect(() => {
  //   console.log("Question ARR: ", questionArr);
  // }, [questionArr]);

  return (
    <>
      {firstObjectOfCategories.map((e) => {
        return (
          <button onClick={handleClick} id={e.category} key={e._id}>
            {e.category}
          </button>
        );
      })}
    </>
  );
}
