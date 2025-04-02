'use client'
import React , { useState, useEffect} from 'react'
import Faq from './Faq';
import ExperienceSlider from './ExperienceSlider';
import Spinner from './Spinner'

function Experiences() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Simulating an async data fetch with useEffect
  useEffect(() => {
    // Simulating a delay to show the loading spinner
    setTimeout(() => {
    // Set loading to false after 3 seconds (simulate data fetch)
      setLoading(false);
    }, 3000); // 3 seconds delay
  }, []);

  return (
    <section id="experiences" className='mx-auto px-6 lg:px-20 3xl:px-0 py-16 relative'>
      <div className='w-[95%] mx-auto'>
        <div className='flex flex-col lg:flex-row gap-y-8 lg:gap-x-16'>
          {/* Experiences section */}
          <div className='mx-4'>
            <h1 className='text-black uppercase text-xl md:text-2xl font-bold'>Relive Your Best Moments</h1>
            <h3 className='text-green-700 text-3xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold mt-2 max-w-lg'>✨ Your Unforgettable Experiences, Captured Forever 📸</h3>
            {/* Loading Spinner */}
            {loading ? (
              <div className="flex justify-center items-center mt-8">
                <Spinner /> {/* Show the spinner while loading */}
              </div>
            ) : error ? (
              // Display error message if fetching failed
              <div className="text-center text-red-600 mt-4">
                <p>Error: {error}</p>
              </div>
            ) : (
              //Experience Slider
              <div className='pt-12 max-w-[666px]'>
                <ExperienceSlider/>
              </div>
            )}
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-1 bg-gradient-to-t from-green-200 via-green-500 to-green-200 mx-8"></div>

          <div className="lg:hidden w-full h-1 bg-gradient-to-r from-green-100 via-green-700 to-green-100"></div>
          {/* FAQ section */}
          <div>
            <Faq/>
          </div>
        </div>
      </div>
      <div className="w-full mt-16 relative">
        {/* Simple Divider Line */}
        <div className="w-full h-1 bg-gradient-to-r from-green-100 via-green-700 to-green-100"></div>
        
        {/* Centered Chat/Speech Bubble Icon */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            <path d="M13 8h-2v3H8v2h3v3h2v-3h3v-2h-3z"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Experiences