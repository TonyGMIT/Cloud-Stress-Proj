import Chart from "../components/Chart";
import Head from "next/head";
import Footer from "../components/Footer";

export default function ChartPage() {
  return (
    <>
      <Head>
        <title>Stress Check - Stress Chart</title>
      </Head>
      <Chart />
      
      <Footer />
    </>
  );
}
