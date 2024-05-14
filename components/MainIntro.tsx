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
          className="z-10 m-0 h-[85vh] rotate-180"
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
          className="z-10 m-0 h-[85vh] rotate-180"
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
  const TEXTS = [
    "software engineer 💻",
    "traveler 🌎",
    "cat owner 🐈",
    "polyglot 🗣",
    "software engineer 💻",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setIndex((index) => (index + 1 != TEXTS.length ? index + 1 : index)),
      1500, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {renderWave()}

      {/* main first view container */}
      <main
        className="absolute top-[60%] left-[50%] h-full w-full overflow-hidden p-6 sm:top-[48%] sm:h-auto md:py-10 lg:px-24"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="relative mx-auto flex w-full flex-col overflow-hidden sm:items-center sm:justify-between md:flex-row">
          <div className="flex w-full  sm:w-[1/2] md:ml-12">
            <div className="flex w-full flex-col justify-center space-y-0 lg:space-y-4">
              <motion.h1
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 260, delay: 0.5 }}
                className="font-mono text-sm text-brightBlue md:text-base"
              >
                Hi, my name is
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 260, delay: 1.2 }}
                className="font-latoSans text-4xl font-extrabold tracking-tight text-slate-300 md:text-5xl lg:text-6xl"
              >
                Malik Danial.
              </motion.h2>

              <motion.h3
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  delay: 2,
                  delayChildren: 0.1,
                  staggerChildren: 0.1,
                }}
                className="font-latoSans text-4xl font-extrabold tracking-tight text-gray-400 md:text-5xl lg:text-6xl"
              >
                A{" "}
                <TextTransition
                  inline
                  springConfig={presets.wobbly}
                  style={{ maxWidth: "75%" }}
                >
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
                <p className="font-latoSans text-sm tracking-tight text-gray-400 md:text-lg">
                  Currently employed at Bayt.com, specializing in front‐end
                  development. Actively leading project migrations to the latest
                  technologies, designing and maintaining an custom web
                  components widget for seamless third party integration, and
                  prioritizing application performance optimization. I work on
                  personal projects using{" "}
                  <strong className="text-gray-300">React.js/Next.js</strong>{" "}
                  with <strong className="text-gray-300">Typescript</strong> and{" "}
                  <strong className="text-gray-300">Java Spring</strong> in my
                  spare time. Recently I&apos;ve been playing around with IOS
                  development, machine learning and AI.
                </p>
              </motion.div>
              <div id="wwgrp_appointment_newAppointmentForm_fields_3__content">
                <div id="wwlbl_appointment_newAppointmentForm_fields_3__content">
                  <label htmlFor="appointment_newAppointmentForm_fields_3__content">
                    <span>*</span> Visa category for study purposes:
                  </label>
                </div>
                <div id="wwctrl_appointment_newAppointmentForm_fields_3__content">
                  <select
                    name="fields[3].content"
                    id="appointment_newAppointmentForm_fields_3__content"
                  >
                    <option value=""></option>
                    <option value="Recipient of a full scholarship paid by an official German academic institution e.g. DAAD or AvH / Stipendiat bei Finanzierung durch deutsche Wissenschafts- oder Mittlerorganisation z.B. DAAD oder AvH">
                      Recipient of a full scholarship paid by an official German
                      academic institution e.g. DAAD or AvH / Stipendiat bei
                      Finanzierung durch deutsche Wissenschafts- oder
                      Mittlerorganisation z.B. DAAD oder AvH
                    </option>
                    <option value="Phd students holding an admission letter from a german university / Promotionsstudenten mit Zulassung einer deutschen Universität">
                      Phd students holding an admission letter from a german
                      university / Promotionsstudenten mit Zulassung einer
                      deutschen Universität
                    </option>
                    <option value="Study preparation (e.g. language course followed by a foundation course) / Studienvorbereitung (z.B. Sprachkurs mit anschließendem Studienkolleg)">
                      Study preparation (e.g. language course followed by a
                      foundation course) / Studienvorbereitung (z.B. Sprachkurs
                      mit anschließendem Studienkolleg)
                    </option>
                    <option value="Language courses for purposes other than study / Sprachkurse zu anderen als Studienzwecken">
                      Language courses for purposes other than study /
                      Sprachkurse zu anderen als Studienzwecken
                    </option>
                  </select>
                </div>{" "}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 150, delay: 0.5 }}
            className="mx-auto h-[300px] w-[300px] basis-[30%] md:flex md:h-auto md:w-auto md:basis-[40%]"
          >
            <Image src={memoji} width={400} height={400} alt="memoji" />
          </motion.div>
        </div>
      </main>
    </div>
  );
};
export default MainIntro;
