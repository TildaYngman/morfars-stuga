export default function PopUpQandA() {
  function handleClick() {
    console.log("im a button");
  }

  return (
    <>
      <button onClick={handleClick}>PopUpQandA</button>
    </>
  );
}

//Add a Button
//Clicking the button should open a container.
//handleClick - opens container, toggles open/close to show content inside the container.
//handleClick - UseState(false) set to true when clicked open and false when closed.
//handleClick - function updates the useState and updates button icon when toggled.

//Container - importing QuestionCategory.js component
//Container - full overlay when mobile, small overlay when bigger screen.
//Container - Add button inside container to close container
