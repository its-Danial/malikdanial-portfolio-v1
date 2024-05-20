import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MainIntro from "../components/MainIntro";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import SideContactItems from "../components/SideContactItems";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <div className="relative  flex min-h-screen flex-col">
      <Head>
        <title>Danial | Software engineer</title>
        <meta name="description" content="Portfolio website for Malik Danial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      {/* Note: content */}
      <div className="flex-grow">
        <MainIntro />
        {/* <About /> */}
        <Skills />
        <Projects />
        <Contact />
      </div>

      {/* TODO: Fixed side contact items */}
      <SideContactItems />
      <Footer />
    </div>
  );
};

export default Home;
