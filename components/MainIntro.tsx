import Image from "next/image";
import { FC, useEffect, useState } from "react";
import Wave from "react-wavify";
import { useTheme } from "next-themes";
import memoji from "../public/assets/images/memoji.png";
import { motion } from "framer-motion";
import TextTransition, { presets } from "react-text-transition";

type MainIntroProps = {};

const MainIntro: FC<MainIntroProps> = (props) => {
  const { systemTheme, theme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderWave = () => {
    if (!mounted) {
      return null;
    }
    if (currentTheme === "dark") {
      return (
        <Wave
          className="h-[85vh] m-0 rotate-180 z-10"
          // #F8F0E3
          // @ts-ignore
          fill="#1e293b"
          paused={false}
          options={{
            height: 20,
            amplitude: 45,
            points: 3,
          }}
        />
      );
    } else {
      return (
        <Wave
          className="h-[85vh] m-0 rotate-180 z-10"
          // #F8F0E3
          // @ts-ignore
          fill="#1e40af"
          paused={false}
          options={{
            height: 20,
            amplitude: 45,
            points: 3,
          }}
        />
      );
    }
  };

  // Note: text animation
  const TEXTS = ["software engineer 💻", "traveler 🌎", "cat owner 🐈", "polyglot 🗣", "software engineer 💻"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => (index + 1 != TEXTS.length ? index + 1 : index)),
      1500 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {renderWave()}

      {/* main first view container */}
      <main
        className="absolute w-full h-full sm:h-auto top-[60%] sm:top-[48%] left-[50%] overflow-hidden p-6 lg:px-24 md:py-10"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="w-full mx-auto relative flex flex-col md:flex-row sm:justify-between sm:items-center overflow-hidden">
          <div className="md:ml-12 sm:w-[1/2]  w-full flex">
            <div className="w-full flex flex-col space-y-0 lg:space-y-4 justify-center">
              <motion.h1
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 260, delay: 0.5 }}
                className="font-mono text-sm md:text-base text-brightBlue"
              >
                Hi, my name is
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 260, delay: 1.2 }}
                className="font-latoSans font-extrabold tracking-tight text-4xl md:text-5xl lg:text-6xl text-slate-300"
              >
                Malik Danial.
              </motion.h2>

              <motion.h3
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 150, delay: 2, delayChildren: 0.1, staggerChildren: 0.1 }}
                className="font-latoSans font-extrabold tracking-tight text-4xl md:text-5xl lg:text-6xl text-gray-400"
              >
                A{" "}
                <TextTransition inline springConfig={presets.wobbly} style={{ maxWidth: "75%" }}>
                  {TEXTS[index % TEXTS.length]}
                </TextTransition>
                <span className="ml-1">.</span>
              </motion.h3>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 0.8 }}
                className="w-[95%] sm:max-w-xl"
              >
                <p className="font-latoSans tracking-tight text-sm md:text-lg text-gray-400">
                  I&apos;m an international Software Engineering student in China. About to graduate and looking for new
                  and interesting opportunities which can help me grow as an engineer. I work on personal projects using{" "}
                  <strong className="text-gray-300">React.js/Next.js</strong> with{" "}
                  <strong className="text-gray-300">Typescript</strong> and{" "}
                  <strong className="text-gray-300">Java Spring</strong> in my spare time. Recently I&apos;ve been
                  playing around with IOS development, machine learning and AI.
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 150, delay: 0.5 }}
            className="basis-[30%] md:basis-[40%] mx-auto md:flex h-[300px] w-[300px] md:h-auto md:w-auto"
          >
            <Image src={memoji} width={400} height={400} alt="memoji" />
          </motion.div>
        </div>
      </main>
    </div>
  );
};
export default MainIntro;
