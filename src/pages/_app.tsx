import { type AppType } from "next/dist/shared/lib/utils";
import { CartProvider } from "../context/CartContext";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
};

export default MyApp;
