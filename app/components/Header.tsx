"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ProductDropdown from "./ProductDropdown";
import { productCategories } from "./ProductCategories";
// Logo imported directly from public folder

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isBusinessSolutionsHovered, setIsBusinessSolutionsHovered] = useState(false);
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

            <div
              className="relative"
              onMouseEnter={() => setIsProductsDropdownOpen(false)}
            >
              <button
                className="transition-colors text-sm font-nexa-regular cursor-pointer flex items-center gap-1 focus:outline-none py-2"
                onMouseEnter={() => setIsSolutionsDropdownOpen(true)}
                onMouseLeave={() => setIsSolutionsDropdownOpen(false)}
              >
                Solutions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Solutions Dropdown */}
              {isSolutionsDropdownOpen && (
                <div 
                  className="fixed top-20 left-0 right-0 z-[9999] bg-black/10 backdrop-blur-sm"
                  onMouseEnter={() => setIsSolutionsDropdownOpen(true)}
                  onMouseLeave={() => setIsSolutionsDropdownOpen(false)}
                  onClick={() => setIsSolutionsDropdownOpen(false)}
                >
                  <div
                    className={`absolute top-0 left-0 right-0 max-h-[calc(100vh-4rem)] bg-white shadow-lg border-t border-gray-200 transform transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                      isSolutionsDropdownOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8">
                      {/* Grid layout similar to ProductDropdown */}
                      <div
                        className="grid grid-cols-1 lg:grid-cols-[260px_360px_440px] gap-0 items-start border-t pt-4"
                        onMouseLeave={() => setIsBusinessSolutionsHovered(false)}
                      >
                        {/* LEFT COLUMN - Solutions Categories */}
                        <div className="bg-white border-r border-gray-200 shadow-sm h-full">
                          <h3 className="text-gray-800 font-semibold text-sm px-4 pt-4"></h3>
                          <div className="max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
                            <div 
                              className="hover:bg-gray-50 transition duration-200"
                              onMouseEnter={() => setIsBusinessSolutionsHovered(true)}
                            >
                              <div className="flex items-center justify-between py-2 px-4 text-sm text-gray-700 cursor-pointer">
                                <span>Business Solutions</span>
                                <span className="text-gray-400">›</span>
                              </div>
                            </div>
                            <div className="hover:bg-gray-50 transition duration-200">
                              <a 
                                href="/alliance" 
                                className="flex items-center justify-between py-2 px-4 text-sm text-gray-700 hover:text-blue-600"
                              >
                                <span>Alliance</span>
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* MIDDLE COLUMN - Business Solutions Subcategories */}
                        {isBusinessSolutionsHovered && (
                          <div className="bg-white p-4 border-r border-gray-200 shadow-sm max-h-[60vh] overflow-y-auto">
                            <div className="py-2">
                              <a 
                                href="/business-solutions#huddle" 
                                className="block text-sm text-gray-600 hover:text-blue-600 transition"
                              >
                                Huddle ›
                              </a>
                            </div>
                            <div className="py-2">
                              <a 
                                href="/business-solutions#small" 
                                className="block text-sm text-gray-600 hover:text-blue-600 transition"
                              >
                                Small ›
                              </a>
                            </div>
                            <div className="py-2">
                              <a 
                                href="/business-solutions#medium" 
                                className="block text-sm text-gray-600 hover:text-blue-600 transition"
                              >
                                Medium ›
                              </a>
                            </div>
                            <div className="py-2">
                              <a 
                                href="/business-solutions#large" 
                                className="block text-sm text-gray-600 hover:text-blue-600 transition"
                              >
                                Large ›
                              </a>
                            </div>
                          </div>
                        )}

                        {/* RIGHT COLUMN - Empty placeholder to maintain layout */}
                        <div className="flex flex-col gap-0">
                          <div className="bg-white p-4 border border-gray-200 shadow-sm rounded-md">
                            <div className="w-full h-48 flex items-center justify-center bg-gray-50">
                              <span className="text-gray-400">Select a solution</span>
                            </div>
                          </div>
                          
                          {isBusinessSolutionsHovered && (
                            <div className="w-full max-w-sm bg-white p-5 border border-gray-100 shadow-sm mt-4">
                              <h3 className="text-base font-semibold text-gray-900 mb-2">Business Solutions</h3>
                              <p className="text-sm text-gray-700">
                                Comprehensive collaboration solutions designed for every space and team size.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <a href="/news" className="transition-colors text-sm font-nexa-regular cursor-pointer">Networking</a>
            <a href="/about" className="transition-colors text-sm font-nexa-regular cursor-pointer">Explore</a>
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
                    {[...productCategories,
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

              {/* Mobile Solutions Dropdown */}
              <div className="border-b border-white border-opacity-20 pb-2">
                <button
                  onClick={() => setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen)}
                  className="flex justify-between items-center w-full py-2 text-left transition-colors font-nexa-regular cursor-pointer"
                >
                  <span>Solutions</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${isSolutionsDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isSolutionsDropdownOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    <div>
                      <button
                        onClick={() => setIsBusinessSolutionsHovered(!isBusinessSolutionsHovered)}
                        className="flex justify-between items-center w-full py-1 text-sm transition-colors cursor-pointer"
                      >
                        <span>Business Solutions</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${isBusinessSolutionsHovered ? 'rotate-90' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      
                      {isBusinessSolutionsHovered && (
                        <div className="mt-1 pl-4 space-y-1">
                          <a
                            href="/business-solutions#huddle"
                            className="block py-1 text-sm transition-colors cursor-pointer text-gray-300 hover:text-white"
                            onClick={() => {
                              setIsSolutionsDropdownOpen(false);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            Huddle
                          </a>
                          <a
                            href="/business-solutions#small"
                            className="block py-1 text-sm transition-colors cursor-pointer text-gray-300 hover:text-white"
                            onClick={() => {
                              setIsSolutionsDropdownOpen(false);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            Small
                          </a>
                          <a
                            href="/business-solutions#medium"
                            className="block py-1 text-sm transition-colors cursor-pointer text-gray-300 hover:text-white"
                            onClick={() => {
                              setIsSolutionsDropdownOpen(false);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            Medium
                          </a>
                          <a
                            href="/business-solutions#large"
                            className="block py-1 text-sm transition-colors cursor-pointer text-gray-300 hover:text-white"
                            onClick={() => {
                              setIsSolutionsDropdownOpen(false);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            Large
                          </a>
                        </div>
                      )}
                    </div>
                    <a
                      href="/alliance"
                      className="block py-1 text-sm transition-colors cursor-pointer"
                      onClick={() => {
                        setIsSolutionsDropdownOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Alliance
                    </a>
                  </div>
                )}
              </div>

              <a href="/news" className="transition-colors py-2 border-b border-white border-opacity-20 font-nexa-regular cursor-pointer">Networking Solutions</a>
              <a href="/about" className="transition-colors py-2 border-b border-white border-opacity-20 font-nexa-regular cursor-pointer">Explore</a>
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