'use client';
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { styles } from "@/app/styles";
import { navLinks } from "@/constants/index";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { FaUser } from "react-icons/fa";


const Navbar = () => {
  const navRef = useRef(null);
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
    <nav ref={navRef} className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-50 ${scrolled ? "bg-green-700" : "bg-transparent"}`}
    >
      {/* Desktop Navigation */}
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          href="/" 
          className='flex items-center gap-2'
          onClick={(e) => {
            e.preventDefault();
            setActive(""); 
            scrollToTop();
            setToggle(false); // Close the mobile nav when clicked
          }}
        >
          <img src="/mylogo.png" alt='logo' height={59} width={93} className='object-contain bg-transparent'/>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li key={nav.id} className={`${ active === nav.title ? "text-black" : scrolled ? "text-white" : "text-green-500"
              } hover:text-green-950 text-[25px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Nav */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          {!toggle && (
            <RiMenuUnfoldFill
              alt='menu'
              className="w-10 h-10 object-contain text-white cursor-pointer"
              onClick={() => setToggle(true)} // Open mobile nav
            />
          )}
          {toggle && (
            <div>
              <div
                className="fixed inset-0 z-[1000] bg-black bg-opacity-95 max-w-3xl h-screen transition-opacity duration-300 ease-in-out"
              />
              <div className="fixed pt-6 left-0 flex flex-col w-[98%] sm:w-[60%] space-y-6 text-left bg-green-700 text-white z-[10000] rounded-xl h-full transition-transform duration-500 ease-in-out">
                <Link
                  href="/" 
                  className='flex items-center gap-2 mb-4'
                  onClick={() => {
                    setActive(""); 
                    scrollToTop();
                    setToggle(false); // Close the mobile nav when clicked
                  }}
                >
                  <img src="/mylogo.png" alt='logo' height={49} width={83} className='object-contain ml-6'/>
                </Link>
                <ul className='relative flex items-start flex-1 flex-col gap-8'>
                  {navLinks.map((nav) => (
                    <li key={nav.id} className={`ml-8 flex gap-4 font-normal cursor-pointer text-[20px] hover:text-green-950 ${
                        active === nav.title ? "text-black" : "text-white"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent click from bubbling up to the parent div
                        setActive(nav.title);
                      }}
                    >
                      <nav.icon className="text-white w-6 h-6" />
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                  ))}
                  <button className="ml-6 flex items-center border border-green-800 bg-green-900 px-7 py-3 text-white transition-all hover:text-green-500 rounded-full text-base uppercase">
                    <FaUser className="text-white w-6 h-6 mr-2"/>
                    Login
                  </button>
                </ul>
                {/* Close tag */}
                <AiOutlineClose 
                  alt="close"
                  className="w-10 h-10 object-contain text-white lg:hidden cursor-pointer absolute top-[0.7rem] right-[1.4rem]"
                  onClick={() => setToggle(false)} // Close the nav
                />
              </div>
           </div>
          )}
        </div>
        <div className="hidden lg:block">
          <button className="flex items-center border border-green-800 bg-green-700 px-7 py-3 text-white transition-all hover:bg-green-950 rounded-full text-base uppercase">
            <FaUser className="text-white w-6 h-6 mr-2"/>
            Login
          </button>   
        </div>   
      </div>
    </nav>
  );
};

export default Navbar;