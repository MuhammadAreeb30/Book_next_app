"use client";
import React from "react";
import Link from "next/link";
import logo from "../../public/images/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="border-b-2 shadow-sm">
        <div className="max-w-7xl mx-auto flex sm:flex-row flex-col sm:gap-0 gap-4 items-center justify-between py-2">
          <div>
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                style={{ width: "150px", height: "auto" }}
                priority={true}
              />
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <Link
              href="/"
              className="py-2 px-6 border-2 font-medium text-primary border-primary rounded-md hover:bg-primary hover:text-white transition-all"
            >
              Sign in
            </Link>
            <Link
              href="/"
              className="py-2 px-6 border-2 border-transparent rounded-md bg-primary text-white hover:bg-transparent hover:border-primary hover:text-primary transition-all font-medium"
            >
              Sign up
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
