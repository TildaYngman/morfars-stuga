export default function QuestionsAndAnswersComponent({ temp }) {
  const categoryArray = [];
  const firstObjectOfCategories = [];

  temp.forEach((object) => {
    if (!categoryArray.includes(object.category)) {
      categoryArray.push(object.category);
      firstObjectOfCategories.push(object);
    }
  });
  console.log(categoryArray);
  console.log(temp);

  function handleClick(e) {
    temp.forEach((element) => {
      if (e.target.id === element.category) console.log(element.question);
    });
  }

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
