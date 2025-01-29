'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";

import { styles } from "@/app/styles";
import { navLinks } from "@/constants/index";
import Button from "./Button";


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-transparent" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
      <Link
          href="/" // Use href instead of 'to' in Next.js Link
          className='flex items-center gap-2'
          onClick={() => {
            setActive(""); // This will still clear active state
            window.scrollTo(0, 0); // Scroll to the top when the link is clicked
          }}
        >
          <img src={"/logo.svg"} alt='logo' height={99} width={133} className='object-contain '/>
      </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-green-500" : "text-green-500"
              } hover:text-green-950 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center visible'>
          <img
            src={toggle ? "/closeBlack.svg" : "/menuBlack.svg"}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-green-500 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-8'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-Roboto slab font-normal cursor-pointer text-[16px] hover:text-green-950 ${
                    active === nav.title ? "text-white" : "text-white"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              {/* <Button type="button" title="Login" icon="/user.svg" variant="btn_secondary_rounded" className='h-12 w-12 object-contain'/> */}

            
            </ul>

          </div>
        </div>
        <div>
          <div className="hidden lg:block">
            <Button type="button" title="Login" icon="/user.svg" variant="btn_secondary_rounded" className='h-12 w-12 object-contain'/>
            
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;