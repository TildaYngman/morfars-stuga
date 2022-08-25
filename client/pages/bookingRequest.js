import {
  Bookingform,
  PopUpQandA,
  BookingInformation,
} from "../components/index";

export default function BookingRequest({ items }) {
  return (
    <>
      <PopUpQandA temp={items} />
      <h1 className=" text-xl font-bold">Bokningförfrågan</h1>
      <p className=" italic">
        Obs. detta är en förfrågan och inte en bekräftad bokning
      </p>
      <Bookingform />
      <BookingInformation temp={items} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:28017/QandA");
  const data = await res.json();

  return {
    props: {
      items: data,
    },
  };
}
