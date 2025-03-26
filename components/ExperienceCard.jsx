import React from 'react'
import { BsFillChatQuoteFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import Image from 'next/image';

function ExperienceCard({experience, width = 70, height = 70}) {
  return (
    <div className='bg-white shadow-lg rounded-xl overflow-hidden relative max-w-sm mx-auto my-8 border border-gray-200 transition-all duration-300 hover:shadow-xl'>
      <div className='absolute top-4 right-4 text-green-700 opacity-70'>
        <BsFillChatQuoteFill className='w-8 h-8'/>
      </div>
      
      <div className='p-6'>
        <div className='flex flex-col items-center mb-4'>
          <div className='w-24 h-24 mb-4 rounded-full overflow-hidden shadow-md'>
            <Image 
              src={experience.image} 
              alt="Experience Image" 
              width={width} 
              height={height} 
              loading='lazy' 
              className='w-full h-full object-cover'
            />
          </div>
          
          <div className='text-center'>
            <h3 className='text-xl font-bold text-green-700'>{experience.name}</h3>
            <p className='text-gray-700 text-base'>{experience.profession}</p>
            <div className='text-base text-green-600 bg-green-50 inline-block px-2 py-1 rounded-full mt-2'>
              {experience.category}
            </div>
          </div>
        </div>
        
        <div className='border-t border-gray-200 pt-4 mt-4'>
          <p className='text-gray-700 text-lg text-center italic'>
            "{experience.description}"
          </p>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard