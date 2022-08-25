export default function BookingInformationComponent({ temp }) {
  console.log(temp);

  const BookingInformationArr = [];

  temp.forEach((item) => {
    if (item.category === "Bokningsinformation")
      BookingInformationArr.push(item);
  });

  console.log(BookingInformationArr);

  //   function filterByCategory(temp) {
  //     if (temp.category === "Bokningsinformation") {
  //       return temp;
  //     }
  //   }

  //   const newArr = temp.filter(filterByCategory);

  //   console.log(newArr);

  return (
    <>
      <h1>Bokningsinformation</h1>
      {BookingInformationArr.map((item) => {
        return (
          <div key={item._id}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        );
      })}
    </>
  );
}
