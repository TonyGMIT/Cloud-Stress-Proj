import Stress from '../components/Stress';
import Head from 'next/head'
import Footer from "../components/Footer";

export default function StressPage() {
  return (
    <>
      <Head>
        <title>Stress Recorder</title>
      </Head>
      <Stress />
      <Footer />
    </>
  )
}
