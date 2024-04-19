import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { FaGithub, FaInfoCircle } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Project } from "../static/projects";

const ProjectItem: FC<Project> = (props) => {
  return (
    <div className="flex  flex-col rounded-lg bg-eggshell shadow-3xl dark:border dark:border-slate-800 dark:bg-slate-900">
      <Link href={props.projectUrl ? props.projectUrl : ""}>
        <div className="group relative cursor-pointer">
          <Image
            className="rounded-xl group-hover:opacity-20"
            src={props.coverImage}
            alt="/"
          />
          <div className="absolute top-[50%] left-[50%] hidden translate-x-[-50%] translate-y-[-50%] text-lightBlue group-hover:block dark:text-brightBlue">
            <FaInfoCircle size={40} />
          </div>
        </div>
      </Link>

      <div className="space-y-2 px-4 pb-2">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center space-x-3">
            <h4 className="font-latoSans dark:text-gray-100">{props.title}</h4>
            <HiOutlineExternalLink
              className="cursor-pointer hover:scale-125 hover:text-lightBlue dark:text-gray-400 dark:hover:text-brightBlue"
              size={22}
            />
          </div>
          {props.gitHubUrl && (
            <Link href={props.gitHubUrl} passHref>
              <a target="_blank" rel="noopener noreferrer">
                <FaGithub
                  className="cursor-pointer hover:scale-125 hover:text-lightBlue dark:text-gray-400 dark:hover:text-brightBlue"
                  size={22}
                />
              </a>
            </Link>
          )}
        </div>
        <p className="text-xs dark:text-gray-300">{props.summary}</p>
        <div className="flex flex-row space-x-4 overflow-hidden">
          {props.techStack.map((name, index) => (
            <p
              key={name}
              className={
                index >= 4
                  ? "hidden"
                  : "font-mono text-xs text-gray-600 dark:text-gray-400"
              }
            >
              {index >= 3 ? (
                <span className="font-bold text-blue-600 dark:text-brightBlue/70">
                  + {props.techStack.length - index}
                </span>
              ) : (
                name
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectItem;
