export default function BookingInformationComponent({ temp, setShowInfo }) {
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
      <div className="absolute top-0 left-0 backdrop-blur-sm bg-white/30 h-screen z-10">
        <div className=" bg-slate-200 m-4 p-4 flex flex-col shadow-lg rounded-md h-5/6">
          <button
            className=" flex justify-end text-xl font-extrabold"
            onClick={() => setShowInfo(false)}
          >
            X
          </button>
          <h1 className="text-2xl font-bold mb-5">Bokningsinformation</h1>
          {BookingInformationArr.map((item) => {
            return (
              <div className="my-2 " key={item._id}>
                <h3 className="mb-2 text-lg font-semibold">{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
