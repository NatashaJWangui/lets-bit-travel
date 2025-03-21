import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function FeaturedCard({title, icon, destinations,width=600, height=600}) {
  
  return (
    <div className='mx-4 overflow-hidden group rounded-xl '>
      <Link href="/" className='overflow-hidden relative'>
        <Image src={icon} alt="Featured Image" width={width} height={height} loading='lazy' className='hover:scale-105 transition-all duration-700 overflow-hidden'/>
        {/* Dark overlay */}
        {/* <div className='absolute inset-0 bg-black bg-opacity-30 rounded-xl'></div> */}
        {/* Title */}
        <h1 className='capitalize text-2xl absolute top-6 left-4 text-white'>{title}</h1>
        <p className='text-base absolute bottom-6 right-0 bg-green-700 text-white px-4 py-4 rounded-l-full group-hover:bg-green-950 group-hover:!pr-8 transition-all duration-300'>
          {destinations}
        </p>
      </Link>
    </div>
  )
}

export default FeaturedCard