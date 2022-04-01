import "../global.css";
import Layout from "../components/layout";
import { NextUIProvider } from "@nextui-org/react";
import { DataContextProvider } from "../store/data-store";
import { FineContextProvider } from "../store/Fine-store";


function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <DataContextProvider>
        <FineContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </FineContextProvider>
      </DataContextProvider>
    </NextUIProvider>
  );
}

export default MyApp
