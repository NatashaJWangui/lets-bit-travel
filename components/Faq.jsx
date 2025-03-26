import React from 'react'
import FaqCard from './FaqCard'
import { FAQ } from '@/constants';

function Faq() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-black uppercase text-xl md:text-2xl font-bold text-center'>FAQ</h1>
      <h3 className='text-green-700 text-3xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold mt-2 max-w-lg'>✈️🌍 Frequently Asked Questions 🏝️💬</h3>
      <div className='w-full max-w-3xl mt-6'>
        {FAQ.map((faq) => (
          <FaqCard key={faq.id} faq={faq} />
        ))}
      </div>
    </div>
  )
}

export default Faq