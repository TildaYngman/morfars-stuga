import Image from "next/image";

export default function Home({
  Component,
  pageProps,
  setGuestName,
  setEmail,
  setMessage,
  setTitle,
  guestName,
  email,
  message,
  title,
  items,
}) {
  return (
    <>
      <div>
        <Image
          src="/cabinCroped.jpg"
          alt="cabin"
          height={250}
          width={500}
          layout="responsive"
        />
      </div>
      <div className="mt-2 p-2 rounded-md bg-slate-200 sm:bg-red-200 md:bg-green-200 lg:bg-blue-100 xl:bg-orange-200  flex justify-center items-center flex-col">
        <h1 className="text-2xl font-semibold">Morfars Stuga</h1>
        <h2 className="text-xl font-semibold">
          Välkommen till vår fjällstuga i vackra Tänndalen
        </h2>
      </div>
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
