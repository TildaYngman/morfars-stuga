export default function BookingInformationComponent({ temp, setShowInfo }) {
  const BookingInformationArr = [];

  temp.forEach((item) => {
    if (item.category === "Bokningsinformation")
      BookingInformationArr.push(item);
  });

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 backdrop-blur-sm bg-white/30 h-full z-50">
        <div className=" bg-slate-200 m-4 p-4 flex flex-col shadow-lg rounded-md h-5/6">
          <div className="flex justify-end">
            <button
              className=" flex justify-center text-xl font-extrabold w-10"
              onClick={() => setShowInfo(false)}
            >
              X
            </button>
          </div>
          <h1 className="text-2xl font-bold mb-5">Bokningsinformation</h1>
          {BookingInformationArr.map((item) => {
            return (
              <div className="my-2 " key={item._id}>
                <h3 className="mb-2 text-lg font-semibold">{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            );
          })}
          <button
            className=" w-24 p-2 flex justify-center items-center m-auto text-xl bg-primary-orange-800 text-primary-white rounded-lg shadow-md"
            onClick={() => setShowInfo(false)}
          >
            Stäng
          </button>
        </div>
      </div>
    </div>
  );
}
