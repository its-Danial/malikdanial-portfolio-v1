import {useTheme} from "next-themes";
import {FC, useEffect, useState} from "react";
import Wave from "react-wavify";
import ProjectItem from "./ProjectItem";
import Link from "next/link";
import {projects} from "../static/projects";

type ProjectsProps = {};

const Projects: FC<ProjectsProps> = (props) => {
    const {systemTheme, theme} = useTheme();

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

    // Note: projects

    const projectView = projects.map((project, index) => {
        if (index >= 6) return;
        return (
            <ProjectItem
                key={project.id}
                title={project.title}
                coverImage={project.coverImage}
                projectUrl={`/${project.id}`}
                techStack={project.techStack}
                gitHubUrl={project.gitHubUrl}
            />

        );
    });

    return (
        <>
            <h2 className="font-mono text-center mx-auto text-2xl text-brightBlue bg-blue-800 dark:bg-slate-800 pb-10">
                04. <span className=" text-slate-200">Some Things I’ve Built</span>
            </h2>
            <div
                id="projects"
                className="scroll-mt-20 w-full min-h-screen h-full relative z-40 overflow-y-auto sm:overflow-visible"
            >
                {renderWave()}
                <div className="absolute w-[90%] h-full top-[50%] left-[50%] "
                     style={{transform: "translate(-50%, -50%)"}}>
                    <div className="grid sm:grid-cols-3 gap-4 gap-y-4 md:px-5 ">{projectView}</div>
                </div>
            </div>
            <div className="flex justify-center">
                <Link href="/archive">
                    <button
                        className="mt-4 sm:mt-0 px-4 py-2 rounded-md border-2 dark:border-brightBlue dark:text-brightBlue border-lightBlue font-mono text-lightBlue text-xs hover:bg-blue-600/5 dark:hover:bg-brightBlue/20 hover:scale-105 ease-in duration-200">
                        View Archive
                    </button>
                </Link>
            </div>
        </>
    );
};
export default Projects;
