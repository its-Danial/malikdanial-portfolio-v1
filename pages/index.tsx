import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import MainIntro from "../components/MainIntro";
import NavBar from "../components/NavBar";
import SideContactItems from "../components/SideContactItems";

const Home: NextPage = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Head>
        <title>Danial | Software engineer</title>
        <meta name="description" content="Portfolio website for Malik Danial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      {/* Note: content */}
      <div className="flex-grow ">
        <MainIntro />
        <About />
      </div>

      {/* Note: Fixed side contact items */}
      <SideContactItems />
      <Footer />
    </div>
  );
};

export default Home;
