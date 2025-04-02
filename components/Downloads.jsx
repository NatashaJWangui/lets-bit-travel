'use client';
import React from 'react'
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import Image from 'next/image';

function Downloads() {

  // Function to show toast when Apple Button is clicked
  const showAppleDownloadToast = () => {
    toast.info("Apple Download feature is coming soon! Stay tuned! 🔐", {
      timeout: 3000,
    });
  };

  // Function to show toast when Play Store is clicked
  const showPlayStoreDownloadToast = () => {
    toast.info("Play Store Download feature is coming soon! Stay tuned! 🔐", {
      timeout: 3000,
    });
  };
  return (
    <section id="downloads" className='flex items-center justify-center w-full flex-col'>
      <div className='w-[95%] mx-auto relative flex flex-col justify-between gap-32 overflow-hidden px-6 py-12 sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl'>
        {/* Downloads Heading */}
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-4 xl:max-w-[555px]">
          <h1 className='text-black uppercase text-xl md:text-2xl text-center font-bold'>Start Your Journey Today</h1>
          <h3 className='text-green-700 text-center text-3xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold mt-2'>🌍 Explore, Book, and Travel with Ease – Download Our App Now! 📲</h3>
          <p className='text-black text-center mt-4 text-xl lg:text-lg'>
            ✨ Unlock a world of unforgettable adventures 🌏, from spontaneous getaways to bucket-list experiences.  
            Download our app now to start booking your next dream destination today! 📲💼  
          </p>
          {/* Apps Download */}
          <div className='flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row '>
            <button className="flex items-center justify-center border border-black text-white bg-gradient-to-br from-black via-gray-800 to-black transition-all hover:from-gray-900 hover:via-gray-700 hover:to-gray-900 !px-12 !py-4 rounded-full text-lg font-semibold uppercase" onClick={showAppleDownloadToast}> 
              <FaApple className="text-white w-6 h-6 mr-2"/>
              App Store 
            </button>
            <button className="flex items-center justify-center border border-green-800 text-white bg-gradient-to-br from-green-900 via-green-600 to-green-900 transition-all hover:from-green-950 hover:via-green-700 hover:to-green-950 !px-12 !py-4 rounded-full text-lg font-semibold uppercase" onClick={showPlayStoreDownloadToast}> 
              <IoLogoGooglePlaystore className="text-white w-6 h-6 mr-2"/>
              Play Store 
            </button>
          </div>
        </div>
        {/* Download Image Section */}
        <div className='flex flex-1 items-center justify-end'>
          <Image src="/Let’s Bit Travel.png" alt="Let's Bit Travel Image" width={600} height={1000} loading='lazy' className='rounded-2xl h-auto object-cover w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-auto lg:max-w-[600px]'/>
        </div>
      </div>

      {/* Downloads Divider */}
      <div className="w-full mt-16 relative">
        {/* Simple Divider Line */}
        <div className="w-full h-1 bg-gradient-to-r from-green-100 via-green-700 to-green-100"></div>
        
        {/* Centered Mobile/Download Icon */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
            <circle cx="12" cy="18" r="1"></circle>
            <path d="M12 6v7"></path>
            <polyline points="9 9 12 6 15 9"></polyline>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Downloads