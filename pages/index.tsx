import type { NextPage } from "next";
import Head from "next/head";
import Wave from "react-wavify";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className="bg-[#0070f3] flex flex-col min-h-screen">
      <Head>
        <title>Meet Danial</title>
        <meta name="description" content="portfolio website for Malik Danial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow relative">
        <div className="absolute z-10">
          <h1 className="text-black text-9xl">Hello Im Danial</h1>
        </div>
        <Wave
          className="rotate-180 m-0 h-[70vh]"
          fill="white"
          paused={false}
          options={{
            height: 20,
            amplitude: 45,
            speed: 0.15,
            points: 5,
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
