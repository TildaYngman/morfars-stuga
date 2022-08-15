export default function Greeting() {
  return (
    <>
      <div className="mt-2 p-2 rounded-md bg-slate-200 sm:bg-red-200 md:bg-green-200 lg:bg-blue-100 xl:bg-orange-200  flex justify-center items-center flex-col">
        <h1 className="text-2xl font-bold text-center">
          Syskonen Yngmans Fjällstuga
        </h1>
        <h2 className="text-lg font-bold text-center">
          Välkommen till vår fjällstuga i vackra Tänndalen
        </h2>
        <p className="text-xs">
          Insert picture of the cabin - scale acording to picture
        </p>
      </div>
    </>
  );
}
