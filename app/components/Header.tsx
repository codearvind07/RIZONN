"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ProductDropdown from "./ProductDropdown";
// Logo imported directly from public folder

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isNavHover, setIsNavHover] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownContainerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state for background change
      setIsScrolled(currentScrollY > 10);
      
      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Only hide header if not hovering over dropdown
        if (!isProductsDropdownOpen) {
          setIsVisible(false);
        }
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
  }, [lastScrollY, isProductsDropdownOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        (isScrolled || isNavHover) ? "bg-black/95 backdrop-blur-sm border-b border-black/20" : "bg-transparent"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/newlogowhite.png"
              alt="Rizonn Logo"
              width={180}
              height={85}
              className="object-contain w-32 sm:w-40 md:w-44"
            />
          </div>

          {/* Desktop Navigation - moved to right side */}
          <nav
            className="hidden md:flex gap-6 items-center text-white font-nexa-regular md:mr-"
            onMouseEnter={() => setIsNavHover(true)}
            onMouseLeave={() => setIsNavHover(false)}
          >
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <button
                className="transition-colors text-sm flex items-center gap-1 focus:outline-none py-2 font-nexa-bold cursor-pointer"
              >
                Products
                
              </button>

              <div ref={dropdownContainerRef}>
                <ProductDropdown isOpen={isProductsDropdownOpen} onClose={() => setIsProductsDropdownOpen(false)} />
              </div>
            </div>

            <a href="/enterprise" className="transition-colors text-sm font-nexa-regular cursor-pointer">Solutions</a>
            <a href="/news" className="transition-colors text-sm font-nexa-regular cursor-pointer">Support</a>
            <a href="/about" className="transition-colors text-sm font-nexa-regular cursor-pointer">Explore</a>
            <a href="#" className="transition-colors text-sm font-nexa-regular flex items-center gap-1 cursor-pointer">
              Partner Portal
             
            </a>
          </nav>

          {/* Right-side controls: search pill, language and Contact Sales */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4">
             

              <div className="flex items-center bg-white rounded-full px-2 py-1 text-sm text-black shadow-sm">
                <svg className="w-4 h-4 mr-2 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent focus:outline-none w-20 text-sm"
                />
             </div>
<button className="flex items-center gap-2 text-white text-sm hover:text-blue-300 cursor-pointer">
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10
         10-4.477 10-10S17.523 2 12 2z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"
    />
  </svg>
  <span>EN</span>
</button>


              <button className="inline-flex items-center gap-3 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-nexa-bold cursor-pointer">
                <span>Contact Sales</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

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
        </div>

        {/* Mobile Menu - Visible only when open */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col gap-4 text-white font-nexa-regular">
              {/* Mobile Products Dropdown */}
              <div className="border-b border-white border-opacity-20 pb-2">
                <button
                  onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                    className="flex justify-between items-center w-full py-2 text-left transition-colors font-nexa-bold cursor-pointer"
                >
                  <span>Products</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isProductsDropdownOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    {[
                      { title: "Featured", href: "/products/featured" },
                      { title: "Microsoft Teams Rooms", href: "/products/microsoft-teams-rooms" },
                      { title: "Interactive Flat Panel", href: "/products/interactive-flat-panel" },
                      { title: "Commercial Display", href: "/products/commercial-display" },
                      { title: "LED Display", href: "/products/led-display" },
                      { title: "Unified Communication", href: "/products/unified-communication" },
                      { title: "Capture System", href: "/products/capture-system" },
                      { title: "Accessories", href: "/products/accessories" },
                      { title: "Software", href: "/products/software" },
                      { title: "All Products", href: "/products/all" },
                    ].map((category, index) => (
                      <Link
                        key={index}
                        href={category.href}
                        className="block py-1 text-sm transition-colors cursor-pointer"
                        onClick={() => {
                          setIsProductsDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {category.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <a href="/enterprise" className="transition-colors py-2 border-b border-white border-opacity-20 font-nexa-regular cursor-pointer">Solutions</a>
              <a href="/news" className="transition-colors py-2 border-b border-white border-opacity-20 font-nexa-regular cursor-pointer">Support</a>
              <a href="/about" className="transition-colors py-2 border-b border-white border-opacity-20 font-nexa-regular cursor-pointer">Explore</a>
              <a href="#" className="transition-colors py-2 border-b border-white border-opacity-20 font-nexa-regular cursor-pointer">Partner Portal</a>
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-8 pr-4 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
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

                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-full font-nexa-bold cursor-pointer">
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