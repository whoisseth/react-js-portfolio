/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

type Props = {
  imageSrc: string;
  title: string;
  discription: string;
  liveDemoLink: string;
};

export default function Card(props: Props) {
  return (
    <div className="border w-[300px]   flex flex-col rounded-md overflow-hidden ">
      <div className="h-[244px]  relative">
        {/* <img */}
        <Image
          width={400}
          height={400}
          className="w-full h-full object-contain "
          alt="project-image"
          src={props.imageSrc ?? ""}
          //   src={
          //     "https://images.unsplash.com/photo-1705257756848-933788b564ce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          //   }
        />
      </div>
      <div className=" flex flex-col gap-4 w-fit p-4 ">
        <h2 className="font-semibold text-xl">{props.title}</h2>

        <p className="text-gray-400"> {props.discription}</p>

        <Link
        target="_blank"
          href={props.liveDemoLink}
          className="flex gap-2 border w-fit p-1 px-3 hover:opacity-60"
        >
          <span> Live Demo</span>
          <FaExternalLinkAlt />
        </Link>
      </div>
    </div>
  );
}
