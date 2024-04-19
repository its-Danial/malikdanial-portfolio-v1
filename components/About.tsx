import { FC, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import myImage from "../public/assets/images/my-img.png";

type AboutProps = {};

const About: FC<AboutProps> = (props) => {
  const { systemTheme, theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const renderBackground = () => {
    if (!mounted) {
      return null;
    }
    if (currentTheme === "dark") {
      return (
        <div
          className={`absolute z-0 aspect-[960/550] h-full w-full bg-[url(../public/assets/svg/circle-scatter-dark-2.svg)] bg-cover  bg-center bg-no-repeat`}
        ></div>
      );
    } else {
      return (
        <div
          className={`absolute z-0 aspect-[960/550] h-full w-full bg-[url(../public/assets/svg/circle-scatter-light.svg)] bg-cover  bg-center bg-no-repeat`}
        ></div>
      );
    }
  };

  return (
    <div
      id="about"
      className="relative z-0 flex w-full scroll-mt-0 items-center justify-center p-2 py-16 md:h-screen"
    >
      {renderBackground()}
      <div className="z-50 mx-4 h-full grid-cols-3 gap-8 overflow-hidden rounded-lg bg-eggshell p-12 shadow-3xl dark:bg-slate-800 dark:shadow-slate-900 sm:mx-0 sm:w-[70%] md:grid xl:h-[70%]">
        <div className="col-span-2">
          <p className="font-mono text-xl text-black dark:text-slate-200">
            <span className="text-lightBlue dark:text-brightBlue">02.</span>{" "}
            About
          </p>
          <p className="py-2 text-gray-600 dark:text-slate-400">
            My family got its first computer when I was 9 and I remember falling
            in love with the machine instantly. Computers can be a source of
            knowledge, a form of entertainment, a problem‐solving machine and so
            much more,all possible through a unique arrangement of ones and
            zeros. We now live in a tech‐savvy era where everything from how we
            pay for our food and how we use transportation depends on computers
            in one way or the other. Despite all the amazing achievements in the
            field of software engineering I am convinced there are many more
            possibilities for its application and so much more to discover.
          </p>
          <p className="py-2 text-gray-600 dark:text-slate-400">
            I am someone who wants to be a part of this process of exploration,
            discovery, and invention. That is why I have dedicated my entire
            education to this field. I am deeply passionate about software
            engineering and working towards making many of its applications
            possible.
          </p>

          <Link href="/#projects">
            <p className="cursor-pointer py-2 text-gray-700 underline dark:text-slate-300">
              Have a look at some of the things I&apos;ve recently built
            </p>
          </Link>
        </div>
        <div className="relative m-auto flex h-auto w-full items-center justify-center rounded-lg p-2">
          <Image
            src={myImage}
            height={560}
            width={450}
            className="rounded-md"
            alt="/"
          />
          <div className="absolute bottom-0 h-28 w-full bg-gradient-to-b from-white/0 to-white/100 dark:from-slate-800/0 dark:to-slate-800/100" />
        </div>
      </div>
    </div>
  );
};
export default About;
