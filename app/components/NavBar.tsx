import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLink } from "./NavLink";
const NavBar = () => {
  const navLinks = [
    {
      path: "#about",
      title: "About",
    },
    {
      path: "#Projects",
      title: "Projects",
    },
    {
      path: "#Contact",
      title: "Contact",
    },
  ];
  return (
    <div className="navbar bg-transparent mt-2">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          <Image src={"/"} alt="Logo" height={50} width={50} />
        </a>
      </div>
      <div className="flex-none lg:w-2/5 justify-end">
        <ul className="menu menu-horizontal px-1 lg:hidden">
          <li>
            <details className="bg-none appearance-none mr-4">
              <summary>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-10 h-5 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </summary>
              <ul className="p-4 bg-base-100 w-fit mr-4">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink href={link.path}>{link.title}</NavLink>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
        <ul className="hidden lg:flex lg:w-fit lg:justify-evenly lg:text-2xl gap-2">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="hover:bg-gray-700 px-4 py-2 rounded-full"
            >
              <NavLink href={link.path} title={link.title} exact className=" ">
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
