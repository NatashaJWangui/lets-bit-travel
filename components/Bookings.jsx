'use client'
import React, { useState, useEffect, useRef } from "react";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
import { MdLocationPin, MdPerson, MdExpandMore } from "react-icons/md";
import { FaSearchLocation } from "react-icons/fa";
import Spinner from "./Spinner";

const libraries = ["places"];

function Bookings() {
  const [location, setLocation] = useState("");
  const [autocomplete, setAutocomplete] = useState(null);
  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(100000000);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [dateError, setDateError] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [open, setOpen] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const dropdownRef = useRef(null);
  
  // Add these states to manage loading
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Validate checkout date when either date changes
  useEffect(() => {
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      
      if (checkOutDate < checkInDate) {
        setDateError("Check-out date cannot be before check-in date");
      } else {
        setDateError("");
      }
    }
  }, [checkIn, checkOut]);

  // Simulate loading the required data
  useEffect(() => {
    const initializeComponent = async () => {
      try {
        // Simulate API loading or initialization delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // When loading is complete
        setLoading(false);
      } catch (err) {
        setError("Failed to initialize booking system");
        setLoading(false);
      }
    };
    
    initializeComponent();
  }, []);

  // Handle check-in date change
  const handleCheckInChange = (e) => {
    const newCheckIn = e.target.value;
    setCheckIn(newCheckIn);
    
    // If checkout date exists and is now invalid, update it
    if (checkOut && new Date(newCheckIn) > new Date(checkOut)) {
      setCheckOut(newCheckIn);
    }
  };

  const handleCheckOutChange = (e) => {
    setCheckOut(e.target.value); // No need for extra validation, useEffect handles it
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (dateError) {
      alert("Please fix the date error before searching");
      return;
    }
    
    // Prepare search parameters
    const searchParams = {
      location,
      checkIn,
      checkOut,
      guests: {
        adults,
        children,
      },
      rooms,
      priceRange: {
        min: minPrice,
        max: maxPrice
      }
    };
    
    console.log("Searching with parameters:", searchParams);
    
    // Here you would typically call your API to get search results
    // For now, we'll just set some mock data
    setSearchResults(`Found accommodations in ${location} for ${adults} adults and ${children} children in ${rooms} room(s)`);
    
    // Close the dropdown if it's open
    setOpen(false);
  };

  return (
    <section id="bookings" className="min-h-[150px] w-[95%] mx-auto flex flex-col items-center mt-8 md:mt-10">
      <div className="text-center mt-2 mb-4">
        <span className=" text-green-700 text-3xl sm:text-3xl md:text-4xl lg:text-[40px] uppercase font-bold">
          📍 Make a Booking Today! ✈️ 
        </span>
      </div>
      {/* Always render the heading */}
      <div className="text-center mt-6">
        <span className="bg-green-700 text-white text-base md:text-xl uppercase py-4 px-6 rounded-2xl md:py-4 md:px-12">
          Book your next destination !!!
        </span>
      </div>

      {/* Display loading spinner while loading */}
      {loading ? (
        <div className="flex justify-center items-center h-64 w-full">
          <Spinner /> {/* Show the spinner while loading */}
        </div>
      ) : error ? (
        // Display error message if initialization failed
        <div className="text-center text-red-600 mt-4 p-4">
          <p>Error: {error}</p>
        </div>
      ) : (
        // Once loaded, show the actual booking form
        <>
          {/* Search Results Display (if any) */}
          {searchResults && (
            <div className="bg-green-100 text-green-800 p-4 my-4 rounded-xl">
              {searchResults}
            </div>
          )}

          <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY} libraries={libraries}>
            {/* Booking Form */}
            <form onSubmit={handleSubmit} className={`flex flex-col md:flex-row gap-6 space-x-4 px-8 py-10 md:px-12 bg-green-700 rounded-2xl relative transition-all duration-300 ${open ? "mb-20" : ""}`}>
              {/* Location */}
              <div>
                <label htmlFor="city" className="block text-white pb-2 uppercase text-lg text-center">
                  Destination:
                </label>
                <div className="flex items-center border border-white rounded-xl p-2 cursor-pointer bg-transparent text-white">
                  <MdLocationPin className="text-white w-6 h-6 mr-2" />
                  <Autocomplete 
                    onLoad={(auto) => setAutocomplete(auto)} 
                    onPlaceChanged={() => setLocation(autocomplete?.getPlace()?.formatted_address || "")}
                  >
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Enter your destination"
                      className="bg-transparent text-white text-base placeholder:text-white outline-none w-full"
                      required
                    />
                  </Autocomplete>
                </div>
              </div>

              {/* Check-in & Check-out */}
              <div>
                <label className="block text-white text-lg pb-2 uppercase text-center">Check-in</label>
                <input 
                  type="date" 
                  value={checkIn} 
                  onChange={handleCheckInChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="border border-white rounded-xl p-2 w-full bg-transparent text-white" 
                  required
                />
              </div>
              <div>
                <label className="block text-white text-lg pb-2 uppercase text-center">Check-out</label>
                <input 
                  type="date" 
                  value={checkOut} 
                  onChange={handleCheckOutChange}
                  min={checkIn || new Date().toISOString().split('T')[0]}
                  className={`border ${dateError ? 'border-red-500' : 'border-white'} rounded-xl p-2 w-full bg-transparent text-white`} 
                  required
                />
                {dateError && <p className="text-red-300 text-sm mt-1">{dateError}</p>}
              </div>

              {/* Guests Dropdown */}
              <div ref={dropdownRef} className="relative">
                <label className="block text-white text-lg pb-2 uppercase text-center">Guests</label>
                <div className="flex items-center border border-white rounded-xl p-2 cursor-pointer bg-transparent text-white" onClick={() => setOpen(!open)}>
                  <MdPerson className="text-white w-6 h-6 mr-2" />
                  <span className="text-white text-base">{adults} Adults, {children} Children, {rooms} Rooms</span>
                  <MdExpandMore className="ml-auto text-white w-7 h-7" />
                </div>

                {/* Dropdown Menu */}
                {open && (
                  <div className="absolute left-0 w-56 md:w-72 bg-green-700 p-4 mt-2 rounded-xl shadow-lg z-10">
                    {/* Adults Counter */}
                    <div className="flex justify-between items-center text-white mb-2">
                      <span>Adults</span>
                      <div className="flex items-center">
                        <button type="button" onClick={() => setAdults(Math.max(1, adults - 1))} className="bg-black px-2 py-1 rounded text-white">-</button>
                        <span className="px-4">{adults}</span>
                        <button type="button" onClick={() => setAdults(adults + 1)} className="bg-black px-2 py-1 rounded text-white">+</button>
                      </div>
                    </div>

                    {/* Children Counter */}
                    <div className="flex justify-between items-center text-white mb-2">
                      <span>Children</span>
                      <div className="flex items-center">
                        <button type="button" onClick={() => setChildren(Math.max(0, children - 1))} className="bg-black px-2 py-1 rounded text-white">-</button>
                        <span className="px-4">{children}</span>
                        <button type="button" onClick={() => setChildren(children + 1)} className="bg-black px-2 py-1 rounded text-white">+</button>
                      </div>
                    </div>

                    {/* Rooms Counter */}
                    <div className="flex justify-between items-center text-white">
                      <span>Rooms</span>
                      <div className="flex items-center">
                        <button type="button" onClick={() => setRooms(Math.max(1, rooms - 1))} className="bg-black px-2 py-1 rounded text-white">-</button>
                        <span className="px-4">{rooms}</span>
                        <button type="button" onClick={() => setRooms(rooms + 1)} className="bg-black px-2 py-1 rounded text-white">+</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Min & Max Price */}
              <div className="col-span-2 flex gap-4">
                <div className="w-1/2">
                  <label className="block text-white text-lg pb-2 uppercase text-center">Min Price</label>
                  <input 
                    type="number" 
                    value={minPrice} 
                    onChange={(e) => setMinPrice(e.target.value)} 
                    className="border border-white text-center rounded-xl p-2 w-full bg-transparent text-white" 
                    placeholder="Min Price" 
                    min="0"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-white text-lg pb-2 uppercase text-center">Max Price</label>
                  <input 
                    type="number" 
                    value={maxPrice} 
                    onChange={(e) => setMaxPrice(e.target.value)} 
                    className="border border-white text-center rounded-xl p-2 w-full bg-transparent text-white" 
                    placeholder="Max Price" 
                    min={minPrice}
                  />
                </div>
              </div>

              {/* Search Button */}
              <div className="col-span-2 text-center mt-6">
                <button 
                  type="submit"
                  className="border border-white bg-green-700 px-7 py-3 text-white transition-all hover:bg-green-950 hover:text-green-500 rounded-full text-base flex items-center"
                >
                  <FaSearchLocation className="text-white w-6 h-6 mr-2 hover:text-green-500" />
                  Search
                </button>
              </div>
            </form>
          </LoadScript>
        </>
      )}
      {/* Simple Divider with Location Icon */}
      <div className="w-full mt-16 relative">
        {/* Simple Divider Line */}
        <div className="w-full h-1 bg-gradient-to-r from-green-100 via-green-700 to-green-100"></div>
        
        {/* Centered Location Icon */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Z"></path>
            <circle cx="12" cy="9" r="2.5"></circle>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Bookings;