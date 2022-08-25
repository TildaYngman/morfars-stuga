import { Bookingform, PopUpQandA, AvailableWeeks } from "../components/index";

export default function BookingRequest({ items, weeks }) {
  console.log(weeks);
  return (
    <>
      <PopUpQandA temp={items} />
      <h1>Booking Request</h1>
      <AvailableWeeks />
      <Bookingform />
    </>
  );
}

  //Added the revaidate: 1  
  //Next.js will attempt to re-generate the page:
  // - When a request comes in
  // - At most once every 10 seconds
export async function getStaticProps() {
  const res = await fetch("http://localhost:28017/QandA");
  const data = await res.json();

  const resTwo = await fetch("http://localhost:28017/bookableWeeks");
  const weeks = await resTwo.json();

  return {
    props: {
      items: data,
      weeks: weeks,
    },
    revalidate: 1,
  };
}