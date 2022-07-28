import { FC } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose, AiFillWechat } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaInstagramSquare, FaFacebook } from "react-icons/fa";

type SideContactItemsProps = {};

const SideContactItems: FC<SideContactItemsProps> = (props) => {
  return (
    <>
      <ul className="fixed mx-8 bottom-0 left-0 text-gray-400 flex flex-col justify-between items-center w-auto h-80 z-50">
        <div className="flex space-y-5 flex-col items-center">
          <li className="hover:scale-125 hover:text-gray-700 cursor-pointer">
            <FaGithub size={25} />
          </li>
          <li className="hover:scale-125 hover:text-gray-700 cursor-pointer">
            <AiFillWechat size={25} />
          </li>
          <li className="hover:scale-125 hover:text-gray-700 cursor-pointer">
            <FaLinkedin size={25} />
          </li>
          <li className="hover:scale-125 hover:text-gray-700 cursor-pointer">
            <FaFacebook size={20} />
          </li>
          <li className="hover:scale-125 hover:text-gray-700 cursor-pointer">
            <FaInstagramSquare size={25} />
          </li>
        </div>

        <li className="h-24 border border-gray-400"></li>
      </ul>
      <ul className="fixed mx-8 bottom-0 right-0 text-gray-400 flex flex-col justify-between items-center w-7 h-64 z-50">
        <li className="hover:scale-110 cursor-pointer hover:text-gray-700 rotate-90 font-mono text-sm">
          itsmalikdanial@gmail.com
        </li>

        <li className="h-28 border border-gray-400"></li>
      </ul>
    </>
  );
};
export default SideContactItems;
