import React from 'react'

function Hero() {
  return (
    <section className='max_pad_container w-full relative flexCenter id="home"'>
        <div className='absolute h-full w-full bg-blue-700 top-0 bottom-0 z-10'></div>
        <video src="/video.mp4" autoPlay loop muted className='absolute h-full w-full top-0 bottom-0 object-cover'/>
        <p>
            Travelling always creates memories. Lets make sure we bit it.
        </p>
    </section>
  )
}

export default Hero