import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";
import Wave from "react-wavify";
import ProjectItem from "./ProjectItem";
import img from "../public/assets/images/landingPage.png";

type ProjectsProps = {};

const Projects: FC<ProjectsProps> = (props) => {
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
          className="h-[85vh] m-0 rotate-180 z-[-100]"
          // #F8F0E3
          // @ts-ignore
          fill="#1e293b"
          paused={false}
          options={{
            height: 20,
            amplitude: 45,
            soints: 5,
          }}
        />
      );
    } else {
      return (
        <Wave
          className="h-[85vh] m-0 rotate-180 z-[-100]"
          // #F8F0E3
          // @ts-ignore
          fill="#1e40af"
          paused={false}
          options={{
            height: 20,
            amplitude: 45,
            soints: 5,
          }}
        />
      );
    }
  };
  return (
    <div id="projects" className="w-full min-h-screen h-full  relative z-40">
      {renderWave()}
      <div
        className="absolute w-[90%] h-full top-[50%] left-[50%]  overflow-y-auto  space-y-10"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <h2 className="font-mono text-center mx-auto text-2xl text-brightBlue">
          04. <span className=" text-slate-200">Some Things I’ve Built</span>
        </h2>

        {/* <div className="w-full h-full overflow-scroll"> */}
        <div className="grid md:grid-cols-2 auto-rows-min gap-6">
          <ProjectItem title="Property Finder" backgroundImg={img} projectUrl="/property" techStack="React JS" />
          <ProjectItem title="Property Finder" backgroundImg={img} projectUrl="/property" techStack="React JS" />
          <ProjectItem title="Property Finder" backgroundImg={img} projectUrl="/property" techStack="React JS" />
          <ProjectItem title="Property Finder" backgroundImg={img} projectUrl="/property" techStack="React JS" />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};
export default Projects;
