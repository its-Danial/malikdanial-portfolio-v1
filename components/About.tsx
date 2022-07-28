import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import myImage from "../public/assets//images/me.jpg";

type AboutProps = {};

const About: FC<AboutProps> = (props) => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl  text-gray-50 font-mono">01. About</p>
          <p className="py-2 text-gray-100">/ / I am not your average developer</p>
          <p className="py-2 text-gray-100">
            I have spent the last 12 years in the fire service working as a professional firefighter/paramedic. I have
            always had a knack for technology and working with computers. In 2019 I started working with HTML and CSS to
            make some minor edits on a small business website that I was operating. What I thought was just a few small
            edits turned into a love for programming.
          </p>
          <p className="py-2 text-gray-100">
            Fascinated with how intricate programming can be I was quickly drawn to learn more. I started learning
            javascript and was even more enthused with making websites interactive. I then started freelancing for
            e-commerce companies on the Shopify platform. I am now spending my time building projects with React JS,
            Firebase, and learning new technologies.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-100 underline cursor-pointer">Check out some of my latest projects.</p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto  flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={myImage} height={400} width={400} className="" alt="/" />
        </div>
      </div>
    </div>
  );
};
export default About;
