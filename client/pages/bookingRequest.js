import { Bookingform, PopUpQandA, AvailableWeeks } from "../components/index";

export default function BookingRequest({ items }) {
  return (
    <>
      <PopUpQandA temp={items} />
      <h1>Booking Request</h1>
      <AvailableWeeks />
      <Bookingform />
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
