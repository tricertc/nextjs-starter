import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
