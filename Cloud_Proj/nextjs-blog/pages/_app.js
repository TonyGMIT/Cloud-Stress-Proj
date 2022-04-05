import "../global.css";
import Layout from "../components/layout";
import { NextUIProvider } from "@nextui-org/react";
import { DataContextProvider } from "../store/data-store";
import { FineContextProvider } from "../store/Fine-store";
import { MildContextProvider } from "../store/Mild-store";
import { BadContextProvider } from "../store/Bad-store";
import { AwfulContextProvider } from "../store/Awful-store";


function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <DataContextProvider>
        <FineContextProvider>
          <MildContextProvider>
            <BadContextProvider>
              <AwfulContextProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </AwfulContextProvider>
          </BadContextProvider>
        </MildContextProvider>
        </FineContextProvider>
      </DataContextProvider>
    </NextUIProvider>
  );
}

export default MyApp
