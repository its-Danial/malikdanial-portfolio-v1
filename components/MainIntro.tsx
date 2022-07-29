import Image from "next/image";
import { FC, useEffect, useState } from "react";
import Wave from "react-wavify";
import { useTheme } from "next-themes";

type MainIntroProps = {};

const MainIntro: FC<MainIntroProps> = (props) => {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderWave = () => {
    if (!mounted) {
      return null;
    }
    if (currentTheme === "dark") {
      return (
        <Wave
          className="h-[85vh] m-0 rotate-180 z-10"
          // #F8F0E3
          // @ts-ignore
          fill="#1e293b"
          paused={false}
          options={{
            height: 20,
            amplitude: 45,
            soints: 5,
          }}
        />
      );
    } else {
      return (
        <Wave
          className="h-[85vh] m-0 rotate-180 z-10"
          // #F8F0E3
          // @ts-ignore
          fill="#1e40af"
          paused={false}
          options={{
            height: 20,
            amplitude: 45,
            soints: 5,
          }}
        />
      );
    }
  };

  return (
    <div className="relative h-screen  overflow-hidden">
      {renderWave()}

      {/* main first view container */}
      <main
        className="absolute w-full h-[75%] sm:h-auto top-[35%] md:top-[42%] left-[50%] overflow-hidden flex justify-center p-6 lg:px-24 md:py-10"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="relative flex justify-between items-center overflow-hidden">
          <div className="md:ml-12 sm:w-1/2 w-2/3 justify-center flex">
            <div className=" flex flex-col space-y-0 lg:space-y-4 justify-center">
              <h1 className="font-mono text-sm md:text-base text-brightBlue">Hi, my name is</h1>
              <h2 className="font-latoSans font-extrabold tracking-tight text-4xl md:text-5xl lg:text-6xl text-slate-300">
                Malik Danial.
              </h2>
              <h3 className="font-latoSans font-extrabold tracking-tight text-4xl md:text-5xl lg:text-6xl text-gray-400">
                I{"'"}m a software engineer in making.
              </h3>
              <div className="w-[95%] sm:max-w-lg">
                <p className="font-latoSans tracking-tight text-sm md:text-lg text-gray-400">
                  Im a software engineer student, currently studying in China
                </p>
              </div>
            </div>
          </div>

          <div className="basis-1/3 md:flex">
            <Image src={"/../public/assets/images/memoji.png"} width={400} height={400} alt="memoji" />
          </div>
        </div>
      </main>
    </div>
  );
};
export default MainIntro;
