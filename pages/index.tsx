import type { NextPage } from "next";
import Head from "next/head";
import Wave from "react-wavify";
import Footer from "../components/Footer";
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
      <div className="flex-grow ">
        {/* way and content container */}
        <div className="bg-transparent relative w-full overflow-hidden">
          <Wave
            className="h-[85vh] m-0 rotate-180 left-0"
            fill="white"
            paused={false}
            options={{
              height: 20,
              amplitude: 45,
              speed: 0.1,
              points: 5,
            }}
          />
          {/* main first view container */}
          <main
            className="absolute top-[40vh] text-black left-1/2 text-center px-10 w-[60%]"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <h1 className="text-5xl">02 Danial G g</h1>
            <h3 className="text-3xl">
              A and Computer Science student at the University of Toronto Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Neque ea unde molestias accusantium repudiandae voluptas aliquid adipisci dicta quasi,
              labore officia cupiditate ipsam a asperiores deserunt illum tempore ut distinctio.. Lorem ipsum dolor sit
            </h3>
            <p className="">Good moring Danial</p>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
