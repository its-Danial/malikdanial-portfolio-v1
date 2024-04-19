import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";
import Wave from "react-wavify";
import ProjectItem from "./ProjectItem";
import Link from "next/link";
import { projects } from "../static/projects";

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
          className="z-[-100] m-0 h-[85vh] rotate-180"
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
          className="z-[-100] m-0 -mt-1 h-[85vh] rotate-180"
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

  // Note: projects

  const projectView = projects.map((project, index) => {
    if (index >= 6) return;
    return <ProjectItem key={project.id} {...project} />;
  });

  return (
    <>
      <h2 className="mx-auto bg-blue-800 pb-10 text-center font-mono text-2xl text-brightBlue dark:bg-slate-800">
        04. <span className=" text-slate-200">Some Things I’ve Built</span>
      </h2>
      <div
        id="projects"
        className="relative z-40 h-full min-h-screen w-full scroll-mt-20 overflow-y-auto sm:overflow-visible"
      >
        {renderWave()}
        <div
          className="absolute top-[50%] left-[50%] h-full w-[90%] "
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <div className="grid gap-4 gap-y-4 sm:grid-cols-3 md:px-5 ">
            {projectView}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link href="/archive">
          <button className="mt-4 rounded-md border-2 border-lightBlue px-4 py-2 font-mono text-xs text-lightBlue duration-200 ease-in hover:scale-105 hover:bg-blue-600/5 dark:border-brightBlue dark:text-brightBlue dark:hover:bg-brightBlue/20 sm:mt-0">
            View Archive
          </button>
        </Link>
      </div>
    </>
  );
};
export default Projects;
