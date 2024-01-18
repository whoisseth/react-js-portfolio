/** @format */

import Image from "next/image";
import PageTitle from "./components/PageTitle";
import userImg from "./utkarsh-img.webp";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <PageTitle title="Home" />
      <div className="w-full  flex-col sm:flex-row  flex pt-28 gap-5 ">
        {/* left */}
        <div className="sm:w-1/2 flex gap-2 flex-col items-center px-2 text-center sm:text-left " >
          <Image
            className="w-[192px] h-[192px] rounded-full"
            src={userImg}
            alt="user-avatar"
          />
          <p className="text-2xl font-semibold">Utkarsh Seth</p>
          <p>Hey my name is Utkarsh Seth and I am a Frontend Developer</p>

          <div className="flex gap-4 items-center text-3xl  text-green-500/80  ">
            <Link
              className="hover:opacity-60"
              target="_blank"
              href={"https://github.com/whoisseth/"}
            >
              <FaGithub />
            </Link>
            <Link
              className="hover:opacity-60"
              target="_blank"
              href={"https://github.com/whoisseth/"}
            >
              <FaLinkedin />
            </Link>
            <Link
              className="hover:opacity-60"
              target="_blank"
              href={"https://github.com/whoisseth/"}
            >
              <IoMdMail />
            </Link>

            <FaSquareXTwitter />
          </div>
        </div>
        {/* right */}
        <div className="sm:w-1/2 px-2  text-center sm:text-left  flex flex-col gap-4 text-lg">
          <p>
            {` Welcome to my portfolio! I'm a versatile frontend developer
            specializing in crafting engaging and responsive web applications.`}
          </p>
          <p>
            {`  With a strong command of React.js, Tailwind CSS, and TypeScript,
            along with a solid foundation in sorting algorithms, I'm dedicated
            to building visually stunning and high-performance user interfaces.`}
          </p>
        </div>
      </div>
    </div>
  );
}
