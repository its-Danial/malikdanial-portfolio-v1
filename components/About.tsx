import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import myImage from "../public/assets//images/me.jpg";

type AboutProps = {};

const About: FC<AboutProps> = (props) => {
  return (
    <div id="about" className="scroll-mt-12 z-0 w-full md:h-screen p-2 flex items-center justify-center py-16 relative">
      <div className="z-0 bg-center bg-cover absolute aspect-[900/450] bg-no-repeat bg-[url(../public/assets/svg/circle-scatter-haikei-big-2.svg)] w-full h-full"></div>
      <div className="z-50 p-12 w-[70%] h-[70%] overflow-hidden rounded-lg shadow-3xl bg-eggshell md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-xl text-black font-mono">
            <span className="text-lightBlue">01.</span> About
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A neque optio fugit dolores asperiores. Dolorem,
            est? Reprehenderit nemo ad cum fuga natus quia error distinctio, eveniet ipsum repellat minima? Explicabo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laudantium, mollitia quod in magni quas
            suscipit quia accusantium eligendi repellendus perferendis blanditiis fugit unde, deleniti asperiores at
            beatae? Voluptatem, ipsum.
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A neque optio fugit dolores asperiores. Dolorem,
            est? Reprehenderit nemo ad cum fuga natus quia error distinctio, eveniet ipsum repellat minima? Explicabo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laudantium, mollitia quod in magni quas
            suscipit quia accusantium eligendi repellendus perferendis blanditiis fugit unde, deleniti asperiores at
            beatae? Voluptatem, ipsum.
          </p>

          <Link href="/#projects">
            <p className="py-2 text-gray-700 underline cursor-pointer">Check out some of my latest projects.</p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto rounded-lg flex items-center justify-center p-2 hover:scale-105 ease-in duration-300">
          <Image src={myImage} height={560} width={450} className="rounded-md" alt="/" />
        </div>
      </div>
    </div>
  );
};
export default About;
