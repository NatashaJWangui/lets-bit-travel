import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Featured from '@/components/Featured';
import Bookings from '@/components/Bookings';
import Places from '@/components/Places';
import Experiences from '@/components/Experiences';
import Downloads from '@/components/Downloads';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <div id="experiences">
        <Experiences/>
      </div>
      <div id="downloads">
        <Downloads/>
      </div>
      
       {/* Add the other sections with their respective IDs */}
      {/* <div id="places">...</div> */}
      {/* <div id="experience">...</div> */}
      {/* <div id="download">...</div> */}
      {/* <Footer/> */}
      <main className="flex-grow">
        {children}
      </main>

      {/* ✅ Global Toast Notifications */}
      {/* ✅ Global ToastContainer but ensuring visibility */}
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        className="toast-container"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ zIndex: 9999 }}
      />
    </div>
  )
}

export default Provider