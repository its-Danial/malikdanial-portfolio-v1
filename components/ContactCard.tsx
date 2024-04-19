import Link from "next/link";
import { FC } from "react";
import { HiArrowSmRight } from "react-icons/hi";

type ContactCardProps = {
  icon: React.ReactElement;
  appName: string;
  detail: string;
  link: string;
};

const ContactCard: FC<ContactCardProps> = (props) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 bg-eggshell py-6 dark:border-slate-700 dark:bg-slate-800 md:px-10 ">
      {props.icon}
      <p className="mt-2 text-sm font-bold dark:text-gray-300">
        {props.appName}
      </p>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-500">
        {props.detail}
      </p>
      <Link href={props.link} passHref>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-3 flex flex-row space-x-1"
        >
          <p className="text-base dark:text-gray-300">Write me</p>
          <HiArrowSmRight
            size={20}
            className="mt-1 duration-300 group-hover:translate-x-2 group-hover:scale-x-125 dark:text-gray-300"
          />
        </a>
      </Link>
    </div>
  );
};
export default ContactCard;
