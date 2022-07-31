import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { AiFillWechat, AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { RiMoonClearLine } from "react-icons/ri";
import logo from "../public/assets/images/white-logo.png";

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
        <button onClick={() => setTheme("light")} className="p-3 rounded-md bg-brightBlue/10 hover:bg-brightBlue/20">
          <RiMoonClearLine size={20} className="text-brightBlue" />
        </button>
      );
    } else {
      return (
        <button onClick={() => setTheme("dark")} className="p-3 rounded-md bg-brightBlue/10 hover:bg-brightBlue/20">
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

  return (
    // ${!show && "hidden ease-in duration-500"}
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 96, transition: { duration: 0.5 } }}
          className={`fixed bg-blue-800 dark:bg-slate-800 w-full z-50`}
          exit={{ height: 0, transition: { duration: 0.3 } }}
        >
          <div className="flex justify-between items-center w-full h-full px-4 lg:pl-8 lg:pr-10  2xl:px-16">
            <Image className="rounded-full" src={logo} width={65} height={65} alt="Malik Danial's logo" />

            {/* Large screen layout */}
            <div>
              <ul className="hidden md:flex items-center space-x-6">
                <Link href="/">
                  <li className="text-sm  text-brightBlue font-mono font-medium">
                    01. <span className="cursor-pointer text-eggshell hover:text-blue-300">Home</span>
                  </li>
                </Link>
                <Link href="/#about">
                  <li className="text-sm  text-brightBlue font-mono font-medium">
                    02. <span className="cursor-pointer text-eggshell hover:text-blue-300">About</span>
                  </li>
                </Link>
                <Link href="/#skills">
                  <li className="text-sm text-brightBlue font-mono font-medium">
                    03. <span className="cursor-pointer text-eggshell hover:text-blue-300">Skill</span>
                  </li>
                </Link>
                <Link href="/#projects">
                  <li className="text-sm text-brightBlue font-mono font-medium">
                    04. <span className="cursor-pointer text-eggshell hover:text-blue-300">Project</span>
                  </li>
                </Link>
                <Link href="/">
                  <li className="text-sm text-brightBlue font-mono font-medium">
                    05. <span className="cursor-pointer text-eggshell hover:text-blue-300">Contact</span>
                  </li>
                </Link>

                <button className="px-4 py-[7px] text-base rounded-md border-2 border-brightBlue font-mono text-brightBlue/90 hover:bg-brightBlue/20 hover:scale-105 ease-in duration-200">
                  Resume
                </button>
                <div>{renderThemeChanger()}</div>
              </ul>
            </div>
            {/* Mobile screen layout menu icon */}
            <div
              onClick={onNavDrawerOpenHandler}
              className="md:hidden rounded-full p-1 hover:bg-blue-300/10 cursor-pointer"
            >
              <BiMenuAltRight
                size={40}
                className={`text-blue-300 ${spinIcon ? "animate-spin" : ""} ${
                  spinReserve ? "animate-reverse-spin" : ""
                }`}
              />
            </div>
          </div>
          {/* Back drop */}
          <div className={showSideDrawer ? "md:hidden fixed left-0 top-0 h-screen w-full bg-black/30" : ""}>
            {/* Side Drawer */}
            <div
              className={
                showSideDrawer
                  ? "fixed right-0 top-0 h-screen w-[65%] sm:w-[55%] md:w-[45%] bg-eggshell  duration-[230ms] "
                  : "fixed right-[-100%] top-0  ease-in duration-500"
              }
            >
              <div className="flex h-20 items-center justify-end px-2">
                <div
                  onClick={onNavDrawerCloseHandler}
                  className="rounded-full  p-1  hover:bg-blue-300/10 cursor-pointer"
                >
                  <AiOutlineClose size={40} className={`text-blue-300 ${spinIcon ? "animate-spin" : ""}`} />
                </div>
              </div>
              <div className="px-5 pt-2 h-[80%]">
                <div className="border-t border-gray-300 h-full">
                  <div className="p-5 text-center flex flex-col h-full justify-center space-y-36">
                    <ul className="space-y-8">
                      <Link href="/">
                        <li className=" text-base font-mono flex flex-col text-nextBlue">
                          01. <span className="cursor-pointer text-gray-600 hover:text-nextBlue text-lg">Home</span>
                        </li>
                      </Link>
                      <Link href="/">
                        <li className=" text-sm font-mono flex flex-col text-nextBlue">
                          02. <span className="cursor-pointer text-gray-600 hover:text-nextBlue text-lg">About</span>
                        </li>
                      </Link>
                      <Link href="/">
                        <li className=" text-sm font-mono flex flex-col text-nextBlue">
                          03. <span className="cursor-pointer text-gray-600 hover:text-nextBlue text-lg">Skills</span>
                        </li>
                      </Link>
                      <Link href="/">
                        <li className="text-sm font-mono flex flex-col text-nextBlue">
                          04. <span className="cursor-pointer text-gray-600 hover:text-nextBlue text-lg">Contact</span>
                        </li>
                      </Link>
                      <button className="px-7 py-3 rounded-md border-2 border-blue-600 font-mono text-blue-600 hover:bg-blue-600/5 hover:scale-105 ease-in duration-200">
                        Resume
                      </button>
                    </ul>
                    <div className="flex flex-row justify-between items-center px-0 sm:px-6">
                      <div className="rounded-full cursor-pointer hover:scale-125 ease-in duration-200 hover:text-blue-600">
                        <FaGithub size={30} />
                      </div>
                      <div className="rounded-full cursor-pointer hover:scale-125 ease-in duration-200 hover:text-blue-600">
                        <AiFillWechat size={35} />
                      </div>
                      <div className="rounded-full cursor-pointer hover:scale-125 ease-in duration-200 hover:text-blue-600">
                        <FaLinkedin size={30} />
                      </div>
                      <div className="rounded-full cursor-pointer hover:scale-125 ease-in duration-200 hover:text-blue-600">
                        <FaFacebook size={30} />
                      </div>

                      <div className="rounded-full cursor-pointer hover:scale-125 ease-in duration-200 hover:text-blue-600">
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
