import Link from "next/link";
import { FC } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaInstagramSquare, FaFacebook } from "react-icons/fa";

type SideContactItemsProps = {};

const SideContactItems: FC<SideContactItemsProps> = (props) => {
  return (
    <>
      <ul className=" fixed mx-8 bottom-0 left-0 text-gray-500 dark:text-brightBlue hidden  md:flex flex-col justify-between items-center w-auto h-80 z-50">
        <div className="flex space-y-5 flex-col items-center">
          <Link href="https://github.com/its-Danial" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <li className="hover:scale-125 hover:text-gray-300 cursor-pointer">
                <FaGithub size={25} />
              </li>
            </a>
          </Link>
          <Link href="https://wa.me/8618240333193" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <li className="hover:scale-125 hover:text-gray-300 cursor-pointer">
                <BsWhatsapp size={25} />
              </li>
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/malik-danial-azhar/" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <li className="hover:scale-125 hover:text-gray-300 cursor-pointer">
                <FaLinkedin size={25} />
              </li>
            </a>
          </Link>
          <Link href="https://www.facebook.com/danial.azhar" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <li className="hover:scale-125 hover:text-gray-300 cursor-pointer">
                <FaFacebook size={20} />
              </li>
            </a>
          </Link>
          <Link href="https://www.instagram.com/malikdanialazhar/" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <li className="hover:scale-125 hover:text-gray-300 cursor-pointer">
                <FaInstagramSquare size={25} />
              </li>
            </a>
          </Link>
        </div>

        <li className="h-24 border border-gray-400"></li>
      </ul>
      <ul className="fixed mx-8 bottom-0 right-0 text-gray-500 dark:text-brightBlue hidden  md:flex flex-col justify-between items-center w-7 h-64 z-50">
        <Link href="mailto:itsmalikdanial@gmail.com">
          <a>
            <li className="hover:scale-110 cursor-pointer hover:text-gray-300 rotate-90 font-mono text-sm">
              itsmalikdanial@gmail.com
            </li>
          </a>
        </Link>

        <li className="h-28 border border-gray-400"></li>
      </ul>
    </>
  );
};
export default SideContactItems;
