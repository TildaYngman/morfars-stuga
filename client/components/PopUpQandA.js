import { useState } from "react";
import { QuestionCategory } from "./index";

export default function PopUpQandA({ temp }) {
  const [displayContent, setDisplayContent] = useState(false);
  function handleClick() {
    setDisplayContent((current) => !current);
  }
  console.log(displayContent);
  console.log(temp);
  return (
    <>
      <button onClick={handleClick}>PopUpQandA</button>
      {displayContent && (
        <div className="mb-3">
          <QuestionCategory temp={temp} />
        </div>
      )}
    </>
  );
}

//Add a Button X
//Add a handleClick function to the button. X
//handleClick - UseState(false) set to true when clicked open. X
//handleClick - UseState(false) Set false when clicked again.
//If not true set to true
//Clicking the button should open a container.
//handleClick - opens container, toggles open/close to show content inside the container.
//handleClick - function updates the useState and updates button icon when toggled.

//Container - importing QuestionCategory.js component
//Container - full overlay when mobile, small overlay when bigger screen.
//Container - Add button inside container to close container
