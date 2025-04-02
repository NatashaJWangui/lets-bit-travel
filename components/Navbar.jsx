'use client';
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { styles } from "@/app/styles";
import { navLinks } from "@/constants/index";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


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
  // Function to show toast when Sign In is clicked
  const showLogInToast = () => {
    toast.info("Login feature is coming soon! Stay tuned! 🔐", {
      timeout: 3000,
    });
  };

  return (
    <nav ref={navRef} className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-50 ${scrolled ? "bg-green-700" : "bg-transparent"}`}>
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
            <img src="/mylogo.png" alt='logo' height={39} width={63} className='object-contain bg-transparent'/>
          </Link>
          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li key={nav.id} className={`${ active === nav.title ? "text-green-500" : scrolled ? "text-white" : "text-green-500"
                } hover:text-green-500 text-[20px] font-medium cursor-pointer`}
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
                className="w-8 h-8 object-contain text-white cursor-pointer hover:text-green-500"
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
                    <img src="/mylogo.png" alt='logo' height={39} width={63} className='object-contain ml-6'/>
                  </Link>
                  <ul className='relative flex items-start flex-1 flex-col gap-8'>
                    {navLinks.map((nav) => (
                      <li key={nav.id} className={`ml-8 flex gap-4 font-normal cursor-pointer text-xl hover:text-green-500 ${
                          active === nav.title ? "text-green-500" : "text-white"
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
                    <button className="ml-6 flex items-center border border-green-800 bg-gradient-to-br from-green-900 via-green-600 to-green-900 px-7 py-3 text-white transition-all hover:from-green-950 hover:via-green-700 hover:to-green-950 rounded-full text-base uppercase" onClick={showLogInToast}>
                      <FaUser className="text-white w-6 h-6 mr-2"/>
                      Login
                    </button>
                  </ul>
                  {/* Close tag */}
                  <AiOutlineClose 
                    alt="close"
                    className="w-10 h-10 object-contain text-white lg:hidden cursor-pointer absolute top-[0.7rem] right-[1.4rem] hover:text-green-500"
                    onClick={() => setToggle(false)} // Close the nav
                  />
                </div>
            </div>
            )}
          </div>
          <div className="hidden lg:block"> 
            <button className="flex items-center border border-green-800 bg-gradient-to-br from-green-900 via-green-600 to-green-900 px-5 py-3 text-white transition-all hover:from-green-950 hover:via-green-700 hover:to-green-950 rounded-full text-base uppercase" onClick={showLogInToast}> 
              <FaUser className="text-white w-6 h-6 mr-2"/> 
              Login 
            </button>    
          </div>
        </div>
      </nav>
  );
};

export default Navbar;