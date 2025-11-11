"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        // Close mobile menu when scrolling
        setIsMobileMenuOpen(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image 
              src="/rizzonlogo.jpeg" 
              alt="Rizonn Logo" 
              width={150} 
              height={75} 
              className="object-contain"
            />
          </div>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex gap-6 items-center text-white">
            <a href="/products" className="hover:text-blue-400 transition-colors text-sm">Products</a>
            <a href="/enterprise" className="hover:text-blue-400 transition-colors text-sm">Solutions</a>
            <a href="/news" className="hover:text-blue-400 transition-colors text-sm">Support</a>
            <a href="/about" className="hover:text-blue-400 transition-colors text-sm">Explore</a>
            <a href="#" className="hover:text-blue-400 transition-colors text-sm">Partner Portal</a>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-8 pr-4 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-sm"
              />
              <svg 
                className="w-4 h-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="flex items-center gap-2">
             
              <button className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition-colors text-sm">
                Contact Sales
              </button>
            </div>
          </nav>
          
          {/* Mobile Menu Button - Visible only on mobile */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu - Visible only when open */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col gap-4 text-white">
              <a href="/products" className="hover:text-blue-400 transition-colors py-2 border-b border-white border-opacity-20">Products</a>
              <a href="/enterprise" className="hover:text-blue-400 transition-colors py-2 border-b border-white border-opacity-20">Solutions</a>
              <a href="/news" className="hover:text-blue-400 transition-colors py-2 border-b border-white border-opacity-20">Support</a>
              <a href="/about" className="hover:text-blue-400 transition-colors py-2 border-b border-white border-opacity-20">Explore</a>
              <a href="#" className="hover:text-blue-400 transition-colors py-2 border-b border-white border-opacity-20">Partner Portal</a>
              <div className="relative mt-2">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full pl-8 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                />
                <svg 
                  className="w-4 h-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-between pt-2">
              
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}