import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { FaGithub, FaInfoCircle } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

type ProjectItemProps = {
  backgroundImg: StaticImageData;
  title: string;
  techStack: string[];
  projectUrl: string;
};

const ProjectItem: FC<ProjectItemProps> = (props) => {
  return (
    <div className="bg-eggshell dark:bg-slate-900 flex flex-col rounded-lg shadow-3xl dark:border dark:border-slate-800">
      <Link href={props.projectUrl}>
        <div className="relative group cursor-pointer">
          <Image className="rounded-xl group-hover:opacity-30 " src={props.backgroundImg} alt="/" />
          <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-lightBlue dark:text-brightBlue">
            <FaInfoCircle size={40} />
          </div>
        </div>
      </Link>
      <div className="px-4 pb-2 space-y-2">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row space-x-3 items-center">
            <h4 className="dark:text-gray-100 font-latoSans">{props.title}</h4>
            <HiOutlineExternalLink
              className="hover:text-lightBlue dark:text-gray-400 cursor-pointer dark:hover:text-brightBlue hover:scale-125"
              size={22}
            />
          </div>
          <FaGithub
            className="hover:text-lightBlue dark:text-gray-400 cursor-pointer dark:hover:text-brightBlue hover:scale-125"
            size={22}
          />
        </div>
        <p className="text-xs dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsam a excepturi voluptatem ratione tenetur
        </p>
        <div className="flex flex-wrap space-x-4">
          {props.techStack.map((name) => (
            <p key={name} className="text-xs font-mono text-gray-600 dark:text-gray-400">
              {name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectItem;
