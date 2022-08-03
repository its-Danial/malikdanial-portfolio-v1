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
    <div id="projects" className="w-full h-screen relative  z-40">
      {renderWave()}
      <div
        className="absolute w-full h-full top-[50%] left-[50%] overflow-hidden "
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <p className="text-xl text-black dark:text-slate-200 font-mono">
          <span className="dark:text-brightBlue text-lightBlue">01.</span> About
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem title="Property Finder" backgroundImg={img} projectUrl="/property" techStack="React JS" />
          <ProjectItem title="Property Finder" backgroundImg={img} projectUrl="/property" techStack="React JS" />
        </div>
      </div>
    </div>
  );
};
export default Projects;
