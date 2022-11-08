import { MessageForm } from "./index";

export default function Footer({}) {
  return (
    <>
      <footer className="flex flex-col bg-slate-700 px-4 justify-center m-auto items-center w-full shadow-lg">
        <MessageForm />
        <em className="pb-6 text-white">&copy; 2022 morfarsstuga.se</em>
      </footer>
    </>
  );
}
