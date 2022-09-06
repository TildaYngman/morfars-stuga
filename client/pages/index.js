import Image from "next/image";

export default function Home({ Component, pageProps }) {
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
      <div className="mt-2 p-2 rounded-md flex justify-center items-center flex-col">
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
