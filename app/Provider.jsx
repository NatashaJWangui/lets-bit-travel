import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

function Provider({children}) {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero/>
      {/* <Footer/> */}
      {children}
    </div>
  )
}

export default Provider