import Image from "next/image";
import { FC } from "react";
import Wave from "react-wavify";

type MainIntroProps = {};

const MainIntro: FC<MainIntroProps> = (props) => {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      <Wave
        className="h-full m-0 rotate-180"
        fill="white"
        paused={false}
        options={{
          height: 20,
          amplitude: 45,
          soints: 5,
        }}
      />
      {/* main first view container */}
      <main
        className="absolute w-full top-[50%] left-[50%] overflow-hidden flex justify-center px-24 py-10"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="w-full flex flex-row items-center justify-between overflow-hidden">
          <div className="flex flex-col basis-1/2 space-y-4">
            <h1 className="font-mono text-base text-blue-900 ">Hi, my name is</h1>
            <h2 className="font-latoSans font-extrabold tracking-tight text-6xl">Malik Danial.</h2>
            <h3 className="font-latoSans font-extrabold tracking-tight text-6xl">
              I{"'"}m a software engineer in making.
            </h3>
            <p className="font-latoSans tracking-tight text-xl text-gray-600">
              Im a software engineer student, currently studying in China
            </p>
          </div>
          <div className="basis-1/2 flex">
            <Image src={"/../public/assets/images/memoji.jpeg"} width={400} height={400} alt="memoji" />
          </div>
        </div>
      </main>
    </div>
  );
};
export default MainIntro;
