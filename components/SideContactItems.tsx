import Link from "next/link";
import { FC } from "react";
import { BsWhatsapp } from "react-icons/bs";
import {
  FaGithub,
  FaLinkedin,
  FaInstagramSquare,
  FaFacebook,
} from "react-icons/fa";

type SideContactItemsProps = {};

const SideContactItems: FC<SideContactItemsProps> = (props) => {
  return (
    <>
      {/* Note: Left */}
      <ul className=" fixed bottom-0 left-0 z-50 mx-8 hidden h-56  w-auto flex-col items-center justify-between text-gray-500 dark:text-brightBlue md:flex">
        <div className="flex flex-col items-center space-y-5">
          <Link href="https://github.com/its-Danial" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <li className="cursor-pointer hover:scale-125 hover:text-gray-300">
                <FaGithub size={25} />
              </li>
            </a>
          </Link>
          {/* <Link href="https://wa.me/8618240333193" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <li className="hover:scale-125 hover:text-gray-300 cursor-pointer">
                <BsWhatsapp size={25} />
              </li>
            </a>
          </Link> */}
          <Link href="https://www.linkedin.com/in/malik-danial-azhar/" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <li className="cursor-pointer hover:scale-125 hover:text-gray-300">
                <FaLinkedin size={25} />
              </li>
            </a>
          </Link>
          {/* <Link href="https://www.facebook.com/danial.azhar" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <li className="hover:scale-125 hover:text-gray-300 cursor-pointer">
                <FaFacebook size={20} />
              </li>
            </a>
          </Link> */}
          <Link href="https://www.instagram.com/malikdanialazhar/" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <li className="cursor-pointer hover:scale-125 hover:text-gray-300">
                <FaInstagramSquare size={25} />
              </li>
            </a>
          </Link>
        </div>

        <li className="h-24 border border-gray-400"></li>
      </ul>
      {/* Note: Right */}
      <ul className="fixed bottom-0 right-0 z-50 mx-8 hidden h-64  w-7 flex-col items-center justify-between text-gray-500 dark:text-brightBlue md:flex">
        <Link href="mailto:itsmalikdanial@gmail.com">
          <a>
            <li className="rotate-90 cursor-pointer font-mono text-sm hover:scale-110 hover:text-gray-300">
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
