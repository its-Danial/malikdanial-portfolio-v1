import Image from "next/image";
import { FC } from "react";

type NavBarProps = {};

const NavBar: FC<NavBarProps> = (props) => {
  return (
    <div className="fixed h-20 w-full z-50 ">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          className="rounded-full"
          src={"/../public/assets/images/black-logo.png"}
          width={100}
          height={100}
          alt="Malik Danial's logo"
        />

        <h4>Hello</h4>
      </div>
    </div>
  );
};
export default NavBar;
