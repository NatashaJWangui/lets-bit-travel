import React from 'react'
import PlacesCard from './PlacesCard'
import { Place } from '@/constants'

function Places() {
  return (
    <section id="places" className='mx-auto px-6 lg:px-20 3xl:px-0 py-6 xl:py-4'>
      <div className='w-[95%] mx-auto'>
        {/* Places Heading */}
        <div className="mx-4">
          <h1 className='text-black uppercase text-xl md:text-2xl text-center font-bold'>Discover Your Next Stay</h1>
          <h3 className='text-green-700 text-center text-3xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold mt-2'>🏡 Find Stunning Places to Stay Across the Globe 🌎</h3>
          <p className='text-black text-center mt-4 text-xl lg:text-lg'>
            ✨ From cozy countryside retreats 🌿 to luxurious city apartments 🏙️, explore handpicked stays that suit every traveler&apos;s dream.
            Whether you're looking for a peaceful getaway 🏞️ or a vibrant urban experience, we&apos;ve got you covered! 🛏️🚪  
          </p>
        </div>
        {/* Places Card */}
        <div className='pt-12 grid lg:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 py-12'>
          {Place.map((place, index) => (
            <PlacesCard key={index} place={place} />
          ))}
        </div>
      </div>

      {/* Simple Divider with Home Icon */}

      <div className="w-full mt-12 relative">
        {/* Simple Divider Line */}
        <div className="w-full h-1 bg-gradient-to-r from-green-100 via-green-700 to-green-100"></div>
        
        {/* Centered House Icon */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"></path>
            <path d="M9 22V12h6v10m-9-8h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Places