export default function QuestionsAndAnswersComponent({ temp }) {
  function handleClick(e) {
    temp.forEach((element) => {
      if (e.target.id === element.category) console.log(element.question);
    });
  }

  return (
    <>
      <button onClick={handleClick} id={"El"}>
        El
      </button>
      <button onClick={handleClick} id={"Bastu"}>
        Bastu
      </button>
      <button onClick={handleClick} id={"Trasigt"}>
        Trasigt
      </button>
    </>
  );
}
