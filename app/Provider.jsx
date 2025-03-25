import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Featured from '@/components/Featured';
import Bookings from '@/components/Bookings';
import Places from '@/components/Places';

function Provider({children}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <div id="home">
        <Hero/>
      </div>
      <div id="bookings">
        <Bookings/>
      </div>
      <div id="featured">
        <Featured/>
      </div>
      <div id="places">
        <Places/>
      </div>
      
       {/* Add the other sections with their respective IDs */}
      {/* <div id="places">...</div> */}
      {/* <div id="experience">...</div> */}
      {/* <div id="download">...</div> */}
      {/* <Footer/> */}
      <main className="flex-grow">
        {children}
      </main>
    </div>
  )
}

export default Provider