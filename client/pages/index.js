import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <Image
          src="/cabin.jpg"
          alt="piucture of the cabin you can rent"
          height={270}
          width={500}
          layout="responsive"
          priority={true}
        />
      </div>
      <div className="mt-2 p-2 rounded-md flex justify-center items-center flex-col">
        <h1 className="text-2xl font-semibold">Morfars Stuga</h1>
        <h2 className="text-xl font-semibold">
          Välkommen till vår fjällstuga i vackra Tänndalen
        </h2>
        <p>
          Stugan har gått i arv från vår mormor och morfar till vår mamma och
          sedan har vi fått ta över förvaltningen av stugan. Storstugan byggdes
          på 80 talet och har sedan dess skänkt mycket glädje till vår familj.
          Vi har abitionen att förvalta och vårda vårt arv för att kunna skänka
          våra barn och deras framtida familjer samma glädje som stugan har
          skänkt oss under uppväxten. Vår morfar var uppfinnare och entreprenör,
          han var framåtsträvande och ständigt på jakt efter finurliga lösningar
          på vardagen.
        </p>
      </div>
    </>
  );
}
export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:5000/QandA");
  const qAndA = await response.json();

  return {
    props: {
      qAndA,
    },
  };
};
