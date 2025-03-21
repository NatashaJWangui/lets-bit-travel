'use client'
import React from 'react'
import FeaturedSlider from './FeaturedSlider'

function Featured() {
  return (
    <section id="featured" className='mx-auto px-6 lg:px-20 3xl:px-0 py-20 xl:py-32 flex flex-col items-center justify-center'>
      <div className='w-[95%] mx-auto'>
        {/* Feature Heading */}
        <div className='mx-4'>
          <h1 className='text-black uppercase text-xl md:text-2xl text-center font-bold'>What we offer</h1>
          <h3 className='text-green-700 text-center text-3xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold mt-2'>🌍 We Provide Top Destinations ✈️</h3>
          <p className='text-black text-center mt-4 text-xl lg:text-lg'>
            🌍 Explore breathtaking destinations handpicked just for you! ✈️ From serene beaches 🏝️ to vibrant cityscapes 🌆, we bring you the best places to visit, making every journey unforgettable. 🌟
          </p>
        </div>
        {/* Feature Slider */}
        <div className='pt-12'>
          <FeaturedSlider/>
        </div>
      </div>
      
      {/* Simple Divider with Airplane Icon */}
      <div className="w-full mt-16 relative">
        {/* Simple Divider Line */}
        <div className="w-full h-1 bg-gradient-to-r from-green-100 via-green-700 to-green-100"></div>
        
        {/* Centered Airplane Icon */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plane">
            <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Featured