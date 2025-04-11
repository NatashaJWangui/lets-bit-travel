"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const [whatsappClicked, setWhatsappClicked] = useState(false);
  const message = "Hey! I just checked out your travel site and I'm excited to explore more adventures.";

  const handleWhatsAppClick = () => {
    setWhatsappClicked(true);
    setTimeout(() => {
      // Optional reset
    }, 500);
  };

  const preventCopy = (e) => {
    e.preventDefault();
  };

  const handleKeyDown = (e) => {
    const isMac = navigator.userAgent.toLowerCase().includes("mac");
    const isLinux = navigator.userAgent.toLowerCase().includes("linux");
    const isWindows = navigator.userAgent.toLowerCase().includes("win");

    if ((isMac && e.metaKey) || (isLinux && e.ctrlKey && e.shiftKey) || (isWindows && e.ctrlKey)) {
      if (e.key.toLowerCase() === "c") e.preventDefault();
    }
  };

  return (
    <footer
      className="pt-8 pb-6 bg-green-700 unselectable bottom-0"
      onContextMenu={preventCopy}
      onPaste={preventCopy}
      onKeyDown={handleKeyDown}
    >
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
        {/* Logo & tagline */}
        <div>
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
          >
            <img src="/mylogo.png" alt="footer logo" height={39} width={63} className="object-contain bg-transparent" />
          </Link>
          <p className="text-white mt-6 text-lg text-center md:text-start lg:text-start xl:text-start 2xl:text-start">
            <span>Adventure is calling.</span>
            <br />
            <span>Let’s Bit Travel 🌍</span>
          </p>
        </div>

        {/* Navigation links */}
        <div className="md:mx-auto">
          <h1 className="text-gray-300 text-lg font-bold mb-4 underline text-center">Quick Links</h1>
          <div className="text-center space-y-4">
            <Link href="/contact-us" className="text-white text-lg hover:text-green-500">Contact Us</Link>
            <br />
            <Link href="/about-us" className="text-white text-lg hover:text-green-500">About Us</Link>
            <br />
            <Link href="/privacypolicy" className="text-white text-lg hover:text-green-500">Privacy Policy</Link>
          </div>
        </div>

        {/* Socials */}
        <div className="md:mx-auto">
          <h1 className="text-gray-300 text-lg font-bold underline mb-4 text-center">Stay Connected</h1>
          <div className="flex items-center space-x-6 mt-6 mb-6 justify-center">
            <a href="https://www.instagram.com/njw_tech/" target="_blank" rel="noopener noreferrer" title="Follow us on Instagram">
              <FaInstagram className="w-8 h-8 text-pink-600" />
            </a>
            <a
              href={`https://wa.me/254701234567?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Chat with us on WhatsApp"
              onClick={handleWhatsAppClick}
            >
              <FaWhatsapp className="w-8 h-8 text-green-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/natashawangui/"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow us on Linkedin"
            >
              <FaLinkedin className="w-8 h-8 text-blue-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider with Globe/World Icon */}
      <div className="w-full mt-16 relative">
        {/* Simple Divider Line */}
        <div className="w-full h-1 bg-gradient-to-r from-green-100 via-green-700 to-green-100"></div>
        
        {/* Centered Globe Icon */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            <path d="M2 12h20"></path>
          </svg>
        </div>
      </div>

      {/* Footer credits */}
      <div className="w-[90%] mx-auto mt-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <p className="text-gray-300 text-base text-center md:text-left">
          <span className="font-bold">Let’s Bit Travel</span> — for dreamers, explorers, and adventurers.
        </p>
        <p className="text-gray-300 text-base text-center md:text-left">
          Designed with ❤️ by <a href="https://github.com/NatashaJWangui" target="_blank" className="underline hover:text-green-500 hover:font-bold">NatashaJWangui</a>
        </p>
        <p className="text-gray-300 text-base text-center md:text-left">
          © 2025 Let’s Bit Travel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
