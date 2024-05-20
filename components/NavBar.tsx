import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { AiFillWechat, AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { RiMoonClearLine } from "react-icons/ri";
import logo from "../public/assets/images/white-logo.png";
import resumePDF from "../public/assets/pdf/resume.pdf";

type NavBarProps = {};

const NavBar: FC<NavBarProps> = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const [spinIcon, setSpinIcon] = useState(false);
  const [spinReserve, setSpinReserve] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const onNavDrawerOpenHandler = () => {
    setShowSideDrawer(true);
    setSpinIcon((prevState) => !prevState);
    setSpinReserve(false);
  };
  const onNavDrawerCloseHandler = () => {
    setShowSideDrawer(false);
    setSpinIcon((prevState) => !prevState);
    setSpinReserve(true);
  };

  const renderThemeChanger = () => {
    if (!mounted) {
      return null;
    }
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          onClick={() => setTheme("light")}
          className="rounded-md bg-brightBlue/10 p-3 hover:bg-brightBlue/20"
        >
          <RiMoonClearLine size={20} className="text-brightBlue" />
        </button>
      );
    } else {
      return (
        <button
          onClick={() => setTheme("dark")}
          className="rounded-md bg-brightBlue/10 p-3 hover:bg-brightBlue/20"
        >
          <FiSun size={20} className="text-brightBlue" />
        </button>
      );
    }
  };

  // Note: nav hide effect

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  // Note: for downloading resume PDF

  return (
    // ${!show && "hidden ease-in duration-500"}
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 96, transition: { duration: 0.5 } }}
          className={`fixed z-50 w-full bg-blue-800 dark:bg-slate-800`}
          exit={{ height: 0, transition: { duration: 0.3 } }}
        >
          <div className="flex h-full w-full items-center justify-between px-4 lg:pl-8 lg:pr-10  2xl:px-16">
            <Image
              className="rounded-full"
              src={logo}
              width={65}
              height={65}
              alt="Malik Danial's logo"
            />

            {/* Large screen layout */}
            <div>
              <ul className="hidden items-center space-x-6 md:flex">
                <Link href="/">
                  <li className="font-mono  text-sm font-medium text-brightBlue">
                    01.{" "}
                    <span className="cursor-pointer text-eggshell hover:text-blue-300">
                      Home
                    </span>
                  </li>
                </Link>
                {/* <Link href="/#about">
                  <li className="font-mono  text-sm font-medium text-brightBlue">
                    02.{" "}
                    <span className="cursor-pointer text-eggshell hover:text-blue-300">
                      About
                    </span>
                  </li>
                </Link> */}
                <Link href="/#skills">
                  <li className="font-mono text-sm font-medium text-brightBlue">
                    02.{" "}
                    <span className="cursor-pointer text-eggshell hover:text-blue-300">
                      Skill
                    </span>
                  </li>
                </Link>
                <Link href="/#projects">
                  <li className="font-mono text-sm font-medium text-brightBlue">
                    03.{" "}
                    <span className="cursor-pointer text-eggshell hover:text-blue-300">
                      Project
                    </span>
                  </li>
                </Link>
                <Link href="/#contact">
                  <li className="font-mono text-sm font-medium text-brightBlue">
                    04.{" "}
                    <span className="cursor-pointer text-eggshell hover:text-blue-300">
                      Contact
                    </span>
                  </li>
                </Link>

                <Link href="resume.pdf" passHref>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border-2 border-brightBlue px-4 py-[7px] font-mono text-base text-brightBlue/90 duration-200 ease-in hover:scale-105 hover:bg-brightBlue/20"
                  >
                    Resume
                  </a>
                </Link>

                <div>{renderThemeChanger()}</div>
              </ul>
            </div>
            {/* Mobile screen layout menu icon */}
            <div
              onClick={onNavDrawerOpenHandler}
              className="cursor-pointer rounded-full p-1 hover:bg-blue-300/10 md:hidden"
            >
              <BiMenuAltRight
                size={40}
                className={`text-blue-300 ${spinIcon ? "animate-spin-linear" : ""} ${
                  spinReserve ? "animate-reverse-spin" : ""
                }`}
              />
            </div>
          </div>
          {/* Back drop */}
          <div
            className={
              showSideDrawer
                ? "fixed left-0 top-0 h-screen w-full bg-black/30 md:hidden"
                : ""
            }
          >
            {/* Side Drawer */}
            <div
              className={
                showSideDrawer
                  ? "fixed right-0 top-0 h-screen w-[65%] bg-eggshell duration-[230ms] sm:w-[55%]  md:w-[45%] "
                  : "fixed right-[-100%] top-0  duration-500 ease-in"
              }
            >
              <div className="flex h-20 items-center justify-end px-2">
                <div
                  onClick={onNavDrawerCloseHandler}
                  className="cursor-pointer  rounded-full  p-1 hover:bg-blue-300/10"
                >
                  <AiOutlineClose
                    size={40}
                    className={`text-blue-300 ${spinIcon ? "animate-spin-linear" : ""}`}
                  />
                </div>
              </div>
              <div className="h-[80%] px-5 pt-2">
                <div className="h-full border-t border-gray-300">
                  <div className="flex h-full flex-col justify-center space-y-36 p-5 text-center">
                    <ul className="space-y-8">
                      <Link href="/">
                        <li className=" flex flex-col font-mono text-base text-nextBlue">
                          01.{" "}
                          <span className="cursor-pointer text-lg text-gray-600 hover:text-nextBlue">
                            Home
                          </span>
                        </li>
                      </Link>
                      {/* <Link href="/">
                        <li className=" flex flex-col font-mono text-sm text-nextBlue">
                          02.{" "}
                          <span className="cursor-pointer text-lg text-gray-600 hover:text-nextBlue">
                            About
                          </span>
                        </li>
                      </Link> */}
                      <Link href="/#skills">
                        <li className=" flex flex-col font-mono text-sm text-nextBlue">
                          02.{" "}
                          <span className="cursor-pointer text-lg text-gray-600 hover:text-nextBlue">
                            Skills
                          </span>
                        </li>
                      </Link>
                      <Link href="/#contact">
                        <li className="flex flex-col font-mono text-sm text-nextBlue">
                          03.{" "}
                          <span className="cursor-pointer text-lg text-gray-600 hover:text-nextBlue">
                            Contact
                          </span>
                        </li>
                      </Link>
                      <div>
                        <Link href="resume.pdf">
                          <a target="_blank" rel="noopener noreferrer">
                            <button className="rounded-md border-2 border-blue-600 px-7 py-3 font-mono text-blue-600 duration-200 ease-in hover:scale-105 hover:bg-blue-600/5">
                              Resume
                            </button>
                          </a>
                        </Link>
                      </div>
                    </ul>
                    <div className="flex flex-row items-center justify-between px-0 sm:px-6">
                      <div className="cursor-pointer rounded-full duration-200 ease-in hover:scale-125 hover:text-blue-600">
                        <FaGithub size={30} />
                      </div>
                      <div className="cursor-pointer rounded-full duration-200 ease-in hover:scale-125 hover:text-blue-600">
                        <AiFillWechat size={35} />
                      </div>
                      <div className="cursor-pointer rounded-full duration-200 ease-in hover:scale-125 hover:text-blue-600">
                        <FaLinkedin size={30} />
                      </div>
                      <div className="cursor-pointer rounded-full duration-200 ease-in hover:scale-125 hover:text-blue-600">
                        <FaFacebook size={30} />
                      </div>

                      <div className="cursor-pointer rounded-full duration-200 ease-in hover:scale-125 hover:text-blue-600">
                        <FaInstagramSquare size={30} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default NavBar;
