/** @format */
"use client";

import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { usePathname } from "next/navigation";
import { cn } from "../utils";

type Props = {};

export default function Navbar({}: Props) {
  const pathName = usePathname();

  const [animationParent] = useAutoAnimate();
  const { theme, setTheme, resolvedTheme } = useTheme();

  function toggleDarkMode() {
    if (resolvedTheme == "light") {
      setTheme("dark");
    }
    if (resolvedTheme == "dark") {
      setTheme("light");
    }
  }

  const links = [
    {
      href: "/",
      title: "Home"
    },
    {
      href: "/guestbook",
      title: "Guestbook"
    },
    {
      href: "/projects",
      title: "Projects"
    }
  ];

  console.log("pathName", pathName);

  return (
    <div className="max-w-5xl mx-auto   px-2 py-2">
      <div className="flex  justify-between ">
        {/* left */}
        {/* homeicon */}
        <Link href={"/"} className="flex gap-1 text-2xl">
          <span>Utkarsh</span>
          <span className="text-[#14b8a6]">Seth</span>
        </Link>

        <div className="flex items-center gap-3">
          <section className="flex gap-5">
            {links.map((d, i) => (
              <Link
                className={cn(
                  "border-transparent    hover:border-green-300 transition-all",
                  pathName === d.href && "border-green-300 border-b "
                )}
                key={i}
                href={d.href}
              >
                {d.title}
              </Link>
            ))}
          </section>

          <div>
            <button
              className="text-xl text-green-300 bg-green-200/30 p-2 rounded-md"
              ref={animationParent}
              onClick={toggleDarkMode}
            >
              {resolvedTheme == "light" ? (
                <IoMoonOutline />
              ) : (
                <IoSunnyOutline />
              )}
            </button>
          </div>
        </div>
        {/* links */}
      </div>
    </div>
  );
}
