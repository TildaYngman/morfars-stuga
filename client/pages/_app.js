import "../styles/globals.css";
import { PopUpQandA } from "../components/index";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PopUpQandA />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
