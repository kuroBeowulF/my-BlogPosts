import Link from "next/link";
import React from "react";

import { FaLinkedinIn, FaSkype, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  return (
    <main className="w-full p-4 bg-slate-600 sticky top-0 z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col md:flex-row items-center text-xl md:text-3xl">
        <Link
          href="/"
          className="no-underline dark:text-white/90 hover:dark:text-white"
        >
          Kuro Fazli
        </Link>
        <div className="flex gap-2 items-center ">
          <Link
            href="https://www.linkedin.com/in/kurosh-fazli-582015228/"
            target="_blank"
          >
            <FaLinkedinIn className="dark:text-white/90 dark:hover:text-white cursor-pointer" />
          </Link>
          <Link
            href="https://join.skype.com/invite/JcIMIYRitzfA"
            target="_blank"
          >
            <FaSkype className="dark:text-white/90 dark:hover:text-white cursor-pointer" />
          </Link>
          <Link href="https://instagram.com/k_beowulf" target="_blank">
            <FaInstagram className="dark:text-white/90 dark:hover:text-white cursor-pointer" />
          </Link>
        </div>
      </div>
    </main>
  );
}
