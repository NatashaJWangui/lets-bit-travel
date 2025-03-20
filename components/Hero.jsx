import React from 'react'
// import MapLayout from './MapLayout'

function Hero() {
  return (
    <section className='w-full min-h-screen relative overflow-hidden flex items-center justify-center'>
      {/* Background video and overlay */}
      <div className='absolute w-full h-full bg-black bg-opacity-40 md:bg-black md:bg-opacity-20 top-0 bottom-0 z-10 transition-opacity duration-300 ease-in-out pointer-events-none'></div>
      <video src={"/video.mp4"} muted autoPlay loop className='absolute h-full w-full top-0 bottom-0 object-cover'></video>
      
      {/* Content Container - adjusted padding for mobile */}
      <div className='relative z-20 px-6 lg:px-20 3xl:px-0 mt-20'>
        {/* Heading Content - now positioned lower on mobile */}
        <div className='w-full text-white text-center mb-auto'>
          <span className='uppercase text-[52px] md:text-[60px] font-[400] leading-[120%]'>Travelling always creates memories.</span>
          <h2 className='text-[32px] leading-tight md:text-[36px] md:leading-[1.3] mb-4 font-semibold mt-2'>Let's travel the world together.</h2>
        </div>
        
        {/* Form content - with increased margin-top on mobile
        <div className='w-full mt-16 sm:mt-12 lg:mt-24'>
          <MapLayout/>
        </div> */}
      </div>
    </section>
  )
}

export default Hero