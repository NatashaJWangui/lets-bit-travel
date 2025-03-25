import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { MdLocationPin} from "react-icons/md";
import { GoStarFill } from "react-icons/go";
import { FaRegClock } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

function PlacesCard({ place, width = 300, height = 300 }) {
  return (
    <div className='overflow-hidden rounded-tl-xl rounded-tr-xl border border-slate-200 group transition-transform duration-300 ease-in-out transform hover:scale-105'>
      <Link href="/" className='overflow-hidden relative'>
        <Image src={place.icon} alt={place.title} width={width} height={height} loading='lazy' className="w-full h-[300px] object-cover"/>
        <span className='font-bold text-base text-white bg-green-700 hover:bg-green-950 absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 px-8 py-2 rounded-full group-hover:bg-green-950'>{place.price}</span>
      </Link>
      <div className='p-4 mt-6 md:mt-4'>
        <div className='capitalize text-2xl font-semibold'>
          <span>{place.title}</span>
          <div className='flex items-center gap-x-2 my-1'>
            <MdLocationPin className="text-green-700 w-6 h-6"/> 
            <span className='text-xl text-green-700'>{place.location}</span>
          </div>
          <div className='flex items-center justify-start gap-x-2 text-yellow-700'>
            <GoStarFill className="text-yellow-700 w-6 h-6"/>
            <GoStarFill className="text-yellow-700 w-6 h-6"/>
            <GoStarFill className="text-yellow-700 w-6 h-6"/>
            <GoStarFill className="text-yellow-700 w-6 h-6"/>
            <FaStarHalfAlt className="text-yellow-700 w-6 h-6"/>
            <span className='text-xl'>(98)</span>
          </div>
        </div>
        <hr className='mt-3'/>
        <p className='my-3 text-lg'>{place.description}</p>
        <hr className='mt-3'/>
        {/* Guests & duration */}
        <div className='flex items-center justify-between gap-4 py-2'>
          <div className='flex items-center justify-start gap-2 text-black'>
            <FaPeopleGroup className="text-green-700 w-8 h-8" />
            <span className='text-lg text-green-950 font-semibold'>{place.guests}</span>
          </div>
          <div className='flex items-center justify-end gap-2 text-black'>
            <FaRegClock className="text-green-700 w-8 h-8" />
            <span className='text-lg text-green-950 font-semibold'>{place.duration}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlacesCard