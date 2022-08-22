import { PopUpQandA } from "../components/index";
export default function about({ items }) {
  return (
    <>
      <PopUpQandA temp={items} />
      <div className="mt-2 p-2 rounded-md bg-slate-200 sm:bg-red-200 md:bg-green-200 lg:bg-blue-100 xl:bg-orange-200 flex flex-col max-w-md">
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
