import Image from "next/image";

export default function Home({ Component, pageProps }) {
  return (
    <>
      <div>
        <Image
          src="/cabin.jpg"
          alt="cabin"
          height={280}
          width={500}
          layout="responsive"
          className="absolute top-0 left-0"
        />
      </div>
      <div className="mt-2 p-2 rounded-md flex justify-center items-center flex-col">
        <h1 className="text-2xl font-semibold">Morfars Stuga</h1>
        <h2 className="text-xl font-semibold">
          Välkommen till vår fjällstuga i vackra Tänndalen
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
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
