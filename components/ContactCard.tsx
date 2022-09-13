import { FC } from "react";
import { HiArrowSmRight } from "react-icons/hi";

type ContactCardProps = {
  icon: React.ReactElement;
  appName: string;
  detail: string;
};

const ContactCard: FC<ContactCardProps> = (props) => {
  return (
    <div className="bg-eggshell dark:bg-slate-800 md:px-10 py-6 border dark:border-slate-700 border-gray-300 rounded-lg flex flex-col justify-center items-center ">
      {props.icon}
      <p className="font-bold text-sm mt-2 dark:text-gray-300">{props.appName}</p>
      <p className="text-sm text-gray-600 mt-1 dark:text-gray-500">{props.detail}</p>
      <button className="mt-3 flex flex-row space-x-1 group">
        <p className="text-base dark:text-gray-300">Write me</p>
        <HiArrowSmRight
          size={20}
          className="mt-1 dark:text-gray-300 group-hover:translate-x-2 group-hover:scale-x-125 duration-300"
        />
      </button>
    </div>
  );
};
export default ContactCard;
