import Image from "next/image";
import { FC } from "react";
import Wave from "react-wavify";

type MainIntroProps = {};

const MainIntro: FC<MainIntroProps> = (props) => {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      <Wave
        className="h-full m-0 rotate-180"
        // #F8F0E3
        fill="#F9FEFF"
        paused={false}
        options={{
          height: 20,
          amplitude: 45,
          soints: 5,
        }}
      />
      {/* main first view container */}
      <main
        className="absolute w-full h-[75%] sm:h-auto top-[52%] md:top-[50%] left-[50%] overflow-hidden flex justify-center p-6 lg:px-24 md:py-10"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="relative flex justify-between items-center overflow-hidden">
          <div className="md:ml-12 sm:w-1/2 w-2/3 justify-center flex">
            <div className=" flex flex-col space-y-0 lg:space-y-4 justify-center">
              <h1 className="font-mono text-sm md:text-base text-slate-800 ">Hi, my name is</h1>
              <h2 className="font-latoSans font-extrabold tracking-tight text-4xl md:text-5xl lg:text-6xl text-blue-700/90">
                Malik Danial.
              </h2>
              <h3 className="font-latoSans font-extrabold tracking-tight text-4xl md:text-5xl lg:text-6xl text-blue-600/70">
                I{"'"}m a software engineer in making.
              </h3>
              <div className="w-[95%] sm:max-w-lg">
                <p className="font-latoSans tracking-tight text-sm md:text-xl text-gray-500">
                  Im a software engineer student, currently studying in China
                </p>
              </div>
            </div>
          </div>

          {/* <div className="h-[50%] w-[50%] sm:flex sm:justify-end block md:h-full md:w-full md:my-auto md:mx-auto ">
            <Image src={"/../public/assets/images/memoji.png"} width={400} height={400} alt="memoji" />
          </div> */}
          <div className="basis-1/3 md:flex">
            <Image src={"/../public/assets/images/memoji.png"} width={400} height={400} alt="memoji" />
          </div>
        </div>
      </main>
    </div>
  );
};
export default MainIntro;
