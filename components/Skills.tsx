import { FC, useEffect, useState } from "react";
import Image from "next/image";
//front-end Languages
import tsLogo from "../public/assets/skills-svg/front-end/typescript.svg";
import jsLogo from "../public/assets/skills-svg/front-end/javascript.svg";
import htmlLogo from "../public/assets/skills-svg/front-end/html.svg";
import cssLogo from "../public/assets/skills-svg/front-end/css.svg";
//front-end technologies
import reactJsLogo from "../public/assets/skills-svg/front-end/react.svg";
import nextJsLogo from "../public/assets/skills-svg/front-end/next-js.svg";
import vueJsLogo from "../public/assets/skills-svg/front-end/vue-js.svg";
import reactNativeLogo from "../public/assets/skills-svg/front-end/react-native.svg";
import jqueryLogo from "../public/assets/skills-svg/front-end/jquery.svg";
import tailwindLogo from "../public/assets/skills-svg/front-end/tailwindcss.svg";
import materialUILog from "../public/assets/skills-svg/front-end/material-ui.svg";
import framerMotionLogo from "../public/assets/skills-svg/front-end/framer-motion.svg";
import bootstrapLogo from "../public/assets/skills-svg/front-end/bootstrap.svg";
import gitLogo from "../public/assets/skills-svg/front-end/git.svg";
//back-end languages
import pythonLogo from "../public/assets/skills-svg/back-end/python.svg";
import javaLog from "../public/assets/skills-svg/back-end/java.svg";
//back-end
import springLogo from "../public/assets/skills-svg/back-end/spring.svg";
import nodeLogo from "../public/assets/skills-svg/back-end/nodejs.svg";
import expressLogo from "../public/assets/skills-svg/back-end/express.svg";
import mongodbLog from "../public/assets/skills-svg/back-end/mongodb.svg";
import mysqlLogo from "../public/assets/skills-svg/back-end/mysql.svg";
import herokuLogo from "../public/assets/skills-svg/back-end/heroku.svg";
import dockerLogo from "../public/assets/skills-svg/back-end/docker.svg";
import tensorFlowLogo from "../public/assets/skills-svg/back-end/tensorflow.svg";
import firebaseLogo from "../public/assets/skills-svg/front-end/firebase.svg";
import { useTheme } from "next-themes";

type SkillsProps = {};

const Skills: FC<SkillsProps> = (props) => {
  const frontEndLanguages = [
    { logo: tsLogo, name: "Typescript", level: "Intermediate" },
    { logo: jsLogo, name: "JavaScript", level: "Skilled" },
    // { logo: htmlLogo, name: "HTML 5", level: "Intermediate" },
    // { logo: cssLogo, name: "CSS", level: "Intermediate" },
  ];

  const frontEndTechnologies = [
    { logo: reactJsLogo, name: "React JS", level: "Skilled" },
    { logo: nextJsLogo, name: "Next JS", level: "Intermediate" },
    { logo: vueJsLogo, name: "Vue JS", level: "Skilled" },
    { logo: reactNativeLogo, name: "React Native", level: "Beginner" },
    { logo: jqueryLogo, name: "jQuery", level: "Intermediate" },
    { logo: tailwindLogo, name: "Tailwind CSS", level: "Skilled" },
    { logo: framerMotionLogo, name: "Framer Motion", level: "Beginner" },
    { logo: materialUILog, name: "Material UI", level: "Skilled" },
    { logo: bootstrapLogo, name: "Bootstrap", level: "Intermediate" },

    { logo: gitLogo, name: "Git & GitHub", level: "Skilled" },
  ];

  const backEndLanguages = [
    { logo: javaLog, name: "Java", level: "Intermediate" },
    { logo: pythonLogo, name: "Python", level: "Intermediate" },
  ];

  const backEndTechnologies = [
    { logo: springLogo, name: "Spring Framework", level: "Intermediate" },
    { logo: nodeLogo, name: "Node JS", level: "Intermediate" },
    { logo: expressLogo, name: "Express JS", level: "Intermediate" },
    { logo: mongodbLog, name: "MongoDB", level: "Intermediate" },
    { logo: mysqlLogo, name: "MySQL", level: "Intermediate" },
    { logo: herokuLogo, name: "Heroku", level: "Beginner" },
    { logo: firebaseLogo, name: "Firebase", level: "Beginner" },
    { logo: dockerLogo, name: "Docker", level: "Intermediate" },
    { logo: tensorFlowLogo, name: "TensorFlow", level: "Beginner" },
  ];

  const { systemTheme, theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const renderBackground = () => {
    if (!mounted) {
      return null;
    }
    if (currentTheme === "dark") {
      return (
        <div
          className={`absolute z-[-100] aspect-[960/550] h-full w-full bg-[url(../public/assets/svg/layered-waves-dark.svg)] bg-cover  bg-center bg-no-repeat`}
        ></div>
      );
    } else {
      return (
        <div
          className={`absolute z-[-100] aspect-[960/550] h-full w-full bg-[url(../public/assets/svg/layered-waves-light.svg)] bg-cover  bg-center bg-no-repeat`}
        ></div>
      );
    }
  };

  return (
    <div id="skills" className="relative z-40 h-fit w-full xl:h-screen">
      {renderBackground()}
      <div className="space-y-10 p-6 md:px-24 md:py-14">
        <h2 className="mx-auto text-center font-mono text-2xl text-blue-800 dark:text-brightBlue">
          03.{" "}
          <span className="text-gray-700 dark:text-slate-200">
            Skills & Technologies
          </span>
        </h2>
        <div className="z-50 my-auto flex h-[90%] w-full flex-col space-y-3 xl:flex-row xl:space-y-0 xl:space-x-9">
          {/* Note: Front-end */}
          <div className="flex-1 rounded-lg bg-eggshell p-6 shadow-3xl dark:bg-slate-800">
            <div className="h-full w-full">
              <h4 className="text-center text-xl text-gray-600 dark:text-sky-300">
                Front-end Development
              </h4>
              <div className="mt-6 px-4">
                <h5 className="font-latoSans text-base text-blue-800 dark:text-brightBlue">
                  Languages
                </h5>
                <div className="my-6 grid grid-cols-3 gap-y-8 gap-x-6">
                  {frontEndLanguages.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-row items-center space-x-2 hover:scale-105"
                    >
                      <Image
                        src={skill.logo}
                        width={40}
                        height={40}
                        alt={skill.name}
                      />
                      <div className="flex flex-col">
                        <h5 className="text-xl text-gray-700 dark:text-slate-100">
                          {skill.name}
                        </h5>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {skill.level}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <h5 className="font-latoSans text-base text-blue-800 dark:text-brightBlue">
                  Technologies
                </h5>
                <div className="mt-6 grid grid-cols-3 gap-y-8 gap-x-6">
                  {frontEndTechnologies.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-row items-center space-x-2  hover:scale-105"
                    >
                      <Image
                        src={skill.logo}
                        width={40}
                        height={40}
                        alt={skill.name}
                      />
                      <div className="flex flex-col ">
                        <h5 className="text-xl text-gray-700 dark:text-slate-100">
                          {skill.name}
                        </h5>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {skill.level}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Note: Backend */}
          <div className="flex-1 rounded-lg bg-eggshell p-6 shadow-3xl dark:bg-slate-800">
            <div className="h-full w-full">
              <h4 className="text-center text-xl text-gray-600 dark:text-sky-300">
                Back-end Development
              </h4>
              <div className="mt-6 px-4">
                <h5 className="font-latoSans text-base text-blue-800 dark:text-brightBlue">
                  Languages
                </h5>
                <div className="my-7 grid grid-cols-3 gap-y-8 gap-x-6">
                  {backEndLanguages.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-row items-center space-x-2 hover:scale-105"
                    >
                      <Image
                        src={skill.logo}
                        width={40}
                        height={40}
                        alt={skill.name}
                      />
                      <div className="flex flex-col">
                        <h5 className="text-xl text-gray-700 dark:text-slate-100">
                          {skill.name}
                        </h5>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {skill.level}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <h5 className="mt-24 font-latoSans text-base dark:text-brightBlue">
                  Technologies
                </h5>
                <div className="mt-6 grid grid-cols-3 gap-y-8 gap-x-6">
                  {backEndTechnologies.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-row items-center space-x-2  hover:scale-105"
                    >
                      <Image
                        src={skill.logo}
                        width={40}
                        height={40}
                        alt={skill.name}
                      />
                      <div className="flex flex-col">
                        <h5 className="text-xl dark:text-slate-100">
                          {skill.name}
                        </h5>
                        <p className="text-xs dark:text-gray-400">
                          {skill.level}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
