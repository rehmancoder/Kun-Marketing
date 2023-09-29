import Image from "next/image";
import React from "react";
import logoImg from "@/img/logo.jpg";
import menuIcon from "@/img/menu.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="bg-white sticky top-0 z-[99999999999999] shadow-2xl h-[80px] w-full flex justify-between items-center md:px-12 px-3">
        <div>
          <Image src={logoImg} className="w-40" alt={""} />
        </div>
        <div className="lg:block hidden">
          <div className="flex gap-8 font-Poppins">
            <Link href="/">HOME</Link>
            <Link href="/">BLOG</Link>
            <Link href="/">VIDEOS</Link>
            <Link href="/">OFFERS</Link>
            <Link href="/">NEWS</Link>
            <Link href="/">CAREER</Link>
            <Link href="/">CONTACT</Link>
          </div>
        </div>
        <div className="block lg:hidden">
          <Image src={menuIcon} alt={""} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
