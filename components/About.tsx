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
          className={`z-0 bg-center bg-cover absolute aspect-[960/550] bg-[url(../public/assets/svg/circle-scatter-dark-2.svg)] bg-no-repeat  w-full h-full`}
        ></div>
      );
    } else {
      return (
        <div
          className={`z-0 bg-center bg-cover absolute aspect-[960/550] bg-[url(../public/assets/svg/circle-scatter-light.svg)] bg-no-repeat  w-full h-full`}
        ></div>
      );
    }
  };

  return (
    <div id="about" className="scroll-mt-0 z-0 w-full md:h-screen p-2 flex items-center justify-center py-16 relative">
      {renderBackground()}
      <div className="z-50 p-12 h-full mx-4 sm:mx-0 sm:w-[70%] xl:h-[70%] overflow-hidden rounded-lg shadow-3xl dark:shadow-slate-900 bg-eggshell dark:bg-slate-800 md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-xl text-black dark:text-slate-200 font-mono">
            <span className="dark:text-brightBlue text-lightBlue">02.</span> About
          </p>
          <p className="py-2 text-gray-600 dark:text-slate-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A neque optio fugit dolores asperiores. Dolorem,
            est? Reprehenderit nemo ad cum fuga natus quia error distinctio, eveniet ipsum repellat minima? Explicabo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laudantium, mollitia quod in magni quas
            suscipit quia accusantium eligendi repellendus perferendis blanditiis fugit unde, deleniti asperiores at
            beatae? Voluptatem, ipsum.
          </p>
          <p className="py-2 text-gray-600 dark:text-slate-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A neque optio fugit dolores asperiores. Dolorem,
            est? Reprehenderit nemo ad cum fuga natus quia error distinctio, eveniet ipsum repellat minima? Explicabo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laudantium, mollitia quod in magni quas
            suscipit quia accusantium eligendi repellendus perferendis blanditiis fugit unde, deleniti asperiores at
            beatae? Voluptatem, ipsum.
          </p>

          <Link href="/#projects">
            <p className="py-2 text-gray-700 dark:text-slate-300 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto rounded-lg flex items-center justify-center p-2">
          <Image src={myImage} height={560} width={450} className="rounded-md" alt="/" />
        </div>
      </div>
    </div>
  );
};
export default About;
