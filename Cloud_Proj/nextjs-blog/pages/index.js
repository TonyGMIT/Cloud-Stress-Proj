import Head from 'next/head'
import Landing from '../components/landing';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <>
      <Head>
      <title>Stress Check</title>
      </Head>
      <Landing />
      <Footer />
    </>
  );
}
