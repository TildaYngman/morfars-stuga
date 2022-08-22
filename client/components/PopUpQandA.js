import { useState } from "react";

export default function PopUpQandA() {
  const [displayContent, setDisplayContent] = useState(false);
  function handleClick() {
    console.log("im a button");
    setDisplayContent(true);
    console.log(displayContent);
  }
  console.log(displayContent);
  return (
    <>
      <button onClick={handleClick}>PopUpQandA</button>
    </>
  );
}

//Add a Button X
//Add a handleClick function to the button. X
//handleClick - UseState(false) set to true when clicked open and false when closed.
//Clicking the button should open a container.
//handleClick - opens container, toggles open/close to show content inside the container.
//handleClick - function updates the useState and updates button icon when toggled.

//Container - importing QuestionCategory.js component
//Container - full overlay when mobile, small overlay when bigger screen.
//Container - Add button inside container to close container
