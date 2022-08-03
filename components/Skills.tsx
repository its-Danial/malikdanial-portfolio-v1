import { FC, useEffect, useState } from "react";
import Image from "next/image";
//front-end langauges
import tsLogo from "../public/assets/skills/front-end/typescript.svg";
import jsLogo from "../public/assets/skills/front-end/javascript.svg";
import htmlLogo from "../public/assets/skills/front-end/html.svg";
import cssLogo from "../public/assets/skills/front-end/css.svg";
//front-end technologies
import reactJsLogo from "../public/assets/skills/front-end/react.svg";
import nextJsLogo from "../public/assets/skills/front-end/next-js.svg";
import vueJsLogo from "../public/assets/skills/front-end/vue-js.svg";
import reactNativeLogo from "../public/assets/skills/front-end/react-native.svg";
import jqueryLogo from "../public/assets/skills/front-end/jquery.svg";
import tailwindLogo from "../public/assets/skills/front-end/tailwindcss.svg";
import materialUILog from "../public/assets/skills/front-end/material-ui.svg";
import framerMotionLogo from "../public/assets/skills/front-end/framer-motion.svg";
import bootstrapLogo from "../public/assets/skills/front-end/bootstrap.svg";
import gitLogo from "../public/assets/skills/front-end/git.svg";
//back-end languages
import pythonLogo from "../public/assets/skills/back-end/python.svg";
import javaLog from "../public/assets/skills/back-end/java.svg";
//back-end
import springLogo from "../public/assets/skills/back-end/spring.svg";
import nodeLogo from "../public/assets/skills/back-end/nodejs.svg";
import expressLogo from "../public/assets/skills/back-end/express.svg";
import mongodbLog from "../public/assets/skills/back-end/mongodb.svg";
import mysqlLogo from "../public/assets/skills/back-end/mysql.svg";
import herokuLogo from "../public/assets/skills/back-end/heroku.svg";
import dockerLogo from "../public/assets/skills/back-end/docker.svg";
import tensorFlowLogo from "../public/assets/skills/back-end/tensorflow.svg";
import firebaseLogo from "../public/assets/skills/front-end/firebase.svg";
import { useTheme } from "next-themes";

type SkillsProps = {};

const Skills: FC<SkillsProps> = (props) => {
  const frontEndLangauges = [
    { logo: tsLogo, name: "Typescript", level: "Intermediate" },
    { logo: jsLogo, name: "JavaScript", level: "Skilled" },
    { logo: htmlLogo, name: "HTML 5", level: "Intermediate" },
    { logo: cssLogo, name: "CSS", level: "Intermediate" },
  ];

  const frontEndTechnologies = [
    { logo: reactJsLogo, name: "React JS", level: "Skilled" },
    { logo: nextJsLogo, name: "Next JS", level: "Intermediate" },
    { logo: vueJsLogo, name: "Vue JS", level: "Beginner" },
    { logo: reactNativeLogo, name: "React Native", level: "Beginner" },
    { logo: jqueryLogo, name: "jQuery", level: "Intermediate" },
    { logo: tailwindLogo, name: "Tailwind CSS", level: "Skilled" },
    { logo: framerMotionLogo, name: "Framer Motion", level: "Beginner" },
    { logo: materialUILog, name: "Material UI", level: "Skilled" },
    { logo: bootstrapLogo, name: "Bootstrap", level: "Intermediate" },

    { logo: gitLogo, name: "Git & GitHub", level: "Skilled" },
  ];

  const backEndLangauges = [
    { logo: javaLog, name: "Java", level: "Intermediate" },
    { logo: pythonLogo, name: "Python", level: "Intermediate" },
  ];

  const backEndTechologis = [
    { logo: springLogo, name: "Spring Boot & Spring Cloud", level: "Intermediate" },
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
          className={`z-[-100] bg-center bg-cover absolute aspect-[960/550] bg-[url(../public/assets/svg/layered-waves-dark.svg)] bg-no-repeat  w-full h-full`}
        ></div>
      );
    } else {
      return (
        <div
          className={`z-[-100] bg-center bg-cover absolute aspect-[960/550] bg-[url(../public/assets/svg/layered-waves-light.svg)] bg-no-repeat  w-full h-full`}
        ></div>
      );
    }
  };

  return (
    <div id="skills" className="relative w-full h-fit xl:h-screen z-40 ">
      {renderBackground()}
      <div className=" p-6 md:px-24 md:py-14 space-y-10">
        <h2 className=" font-mono text-center mx-auto text-2xl text-blue-800 dark:text-brightBlue">
          03. <span className="text-gray-700 dark:text-slate-200">Skills & Technologies</span>
        </h2>
        <div className="z-50 w-full h-[90%] my-auto flex flex-col xl:flex-row space-y-3 xl:space-y-0 xl:space-x-9">
          <div className="flex-1 bg-eggshell dark:bg-slate-800 shadow-3xl rounded-lg p-6">
            <div className="h-full w-full">
              <h4 className="text-gray-600 dark:text-sky-300 text-xl text-center">Front-end Development</h4>
              <div className="px-4 mt-6">
                <h5 className="text-blue-800 dark:text-brightBlue font-latoSans text-base">Languages</h5>
                <div className="my-6 grid grid-cols-3 gap-y-8 gap-x-6">
                  {frontEndLangauges.map((skill) => (
                    <div key={skill.name} className="hover:scale-105 flex flex-row space-x-2 items-center">
                      <Image src={skill.logo} width={40} height={40} alt={skill.name} />
                      <div className="flex flex-col">
                        <h5 className="text-xl text-gray-700 dark:text-slate-100">{skill.name}</h5>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{skill.level}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <h5 className="text-blue-800 dark:text-brightBlue font-latoSans text-base">Technologies</h5>
                <div className="mt-6 grid grid-cols-3 gap-y-8 gap-x-6">
                  {frontEndTechnologies.map((skill) => (
                    <div key={skill.name} className="hover:scale-105 flex flex-row space-x-2  items-center">
                      <Image src={skill.logo} width={40} height={40} alt={skill.name} />
                      <div className="flex flex-col ">
                        <h5 className="text-xl text-gray-700 dark:text-slate-100">{skill.name}</h5>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{skill.level}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="flex-1 bg-eggshell dark:bg-slate-800 shadow-3xl rounded-lg p-6">
            <div className="h-full w-full">
              <h4 className="text-gray-600 dark:text-sky-300 text-xl text-center">Back-end Development</h4>
              <div className="px-4 mt-6">
                <h5 className="text-blue-800 dark:text-brightBlue font-latoSans text-base">Languages</h5>
                <div className="my-7 grid grid-cols-3 gap-y-8 gap-x-6">
                  {backEndLangauges.map((skill) => (
                    <div key={skill.name} className="hover:scale-105 flex flex-row space-x-2 items-center">
                      <Image src={skill.logo} width={40} height={40} alt={skill.name} />
                      <div className="flex flex-col">
                        <h5 className="text-xl text-gray-700 dark:text-slate-100">{skill.name}</h5>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{skill.level}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <h5 className="mt-24 dark:text-brightBlue font-latoSans text-base">Technologies</h5>
                <div className="mt-6 grid grid-cols-3 gap-y-8 gap-x-6">
                  {backEndTechologis.map((skill) => (
                    <div key={skill.name} className="hover:scale-105 flex flex-row space-x-2  items-center">
                      <Image src={skill.logo} width={40} height={40} alt={skill.name} />
                      <div className="flex flex-col">
                        <h5 className="text-xl dark:text-slate-100">{skill.name}</h5>
                        <p className="text-xs dark:text-gray-400">{skill.level}</p>
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
