import { Provider } from "react-redux";
import "../styles/globals.css";
import store from "../store";
import Navbar from "../components/Navbar/Navbar";

import { Roboto } from "@next/font/google";
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
