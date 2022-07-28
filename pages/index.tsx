import type { NextPage } from "next";
import Head from "next/head";
import Wave from "react-wavify";
import Footer from "../components/Footer";
import MainIntro from "../components/MainIntro";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
  return (
    <div className="bg-nextBlue flex flex-col min-h-screen">
      <Head>
        <title>Danial | Software engineer</title>
        <meta name="description" content="Portfolio website for Malik Danial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      {/* full page container */}
      <div className="flex-grow">
        <MainIntro />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
