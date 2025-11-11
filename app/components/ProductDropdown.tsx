"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { productCategories, ProductCategory } from "./ProductCategories";

interface ProductDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDropdown({ isOpen, onClose }: ProductDropdownProps) {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  // ✅ Escape key closes dropdown + body-scroll lock
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed top-16 left-0 right-0 z-[9999]
        bg-black/20 backdrop-blur-sm
        transition-opacity duration-300 ease-out
      "
      onClick={onClose} // ✅ Clicking outside closes menu
    >
      {/* ✅ Dropdown Panel */}
      <div
        className="
          absolute top-0 left-0 right-0 
          max-h-[calc(100vh-4rem)] overflow-y-auto
          bg-white shadow-2xl border-t border-gray-200
          transition-all duration-300 ease-out
          rounded-b-2xl
        "
        onClick={(e) => e.stopPropagation()} // ✅ Prevent close on inside click
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-1">
              {productCategories.map((category: ProductCategory, index: number) => (
                <div 
                  key={index} 
                  className="mb-2 relative"
                  onMouseEnter={() => category.subItems && setOpenCategory(category.title)}
                  onMouseLeave={() => category.subItems && setOpenCategory(null)}
                >
                  {category.subItems ? (
                    <>
                      <Link
                        href={category.href}
                        className="
                          block py-3 px-5 text-gray-700 text-base font-medium
                          bg-white rounded-lg border border-gray-100
                          hover:text-blue-600 hover:border-blue-200
                          hover:shadow-md transition-all duration-300
                          flex justify-between items-center
                        "
                        onClick={onClose}
                      >
                        <span>{category.title}</span>
                        <svg 
                          className={`w-4 h-4 transition-transform duration-200 ${openCategory === category.title ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </>
                  ) : (
                    <Link
                      href={category.href}
                      className="
                        block py-3 px-5 text-gray-700 text-base font-medium
                        bg-white rounded-lg border border-gray-100
                        hover:text-blue-600 hover:border-blue-200
                        hover:shadow-md transition-all duration-300
                      "
                      onClick={onClose}
                    >
                      {category.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            
            {/* Right side panel for Microsoft Teams Rooms sub-items */}
            {openCategory === "Microsoft Teams Rooms" && productCategories.find((cat: ProductCategory) => cat.title === "Microsoft Teams Rooms")?.subItems && (
              <div className="md:col-span-1 bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Microsoft Teams Rooms Solutions</h3>
                <div className="grid grid-cols-1 gap-2">
                  {productCategories.find((cat: ProductCategory) => cat.title === "Microsoft Teams Rooms")?.subItems?.map((subItem: { title: string; href: string }, subIndex: number) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className="
                        block py-2 px-4 text-gray-600 text-sm
                        bg-white rounded-md border border-gray-100
                        hover:text-blue-600 hover:border-blue-200
                        hover:shadow-sm transition-all duration-300
                      "
                      onClick={onClose}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {/* Right side panel for Interactive Flat Panel sub-items */}
            {openCategory === "Interactive Flat Panel" && productCategories.find((cat: ProductCategory) => cat.title === "Interactive Flat Panel")?.subItems && (
              <div className="md:col-span-1 bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Interactive Flat Panel Series</h3>
                <div className="grid grid-cols-1 gap-2">
                  {productCategories.find((cat: ProductCategory) => cat.title === "Interactive Flat Panel")?.subItems?.map((subItem: { title: string; href: string }, subIndex: number) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className="
                        block py-2 px-4 text-gray-600 text-sm
                        bg-white rounded-md border border-gray-100
                        hover:text-blue-600 hover:border-blue-200
                        hover:shadow-sm transition-all duration-300
                      "
                      onClick={onClose}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {/* Right side panel for Commercial Display sub-items */}
            {openCategory === "Commercial Display" && productCategories.find((cat: ProductCategory) => cat.title === "Commercial Display")?.subItems && (
              <div className="md:col-span-1 bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Commercial Display Series</h3>
                <div className="grid grid-cols-1 gap-2">
                  {productCategories.find((cat: ProductCategory) => cat.title === "Commercial Display")?.subItems?.map((subItem: { title: string; href: string }, subIndex: number) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className="
                        block py-2 px-4 text-gray-600 text-sm
                        bg-white rounded-md border border-gray-100
                        hover:text-blue-600 hover:border-blue-200
                        hover:shadow-sm transition-all duration-300
                      "
                      onClick={onClose}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {/* Right side panel for LED Display sub-items */}
            {openCategory === "LED Display" && productCategories.find((cat: ProductCategory) => cat.title === "LED Display")?.subItems && (
              <div className="md:col-span-1 bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">LED Display Series</h3>
                <div className="grid grid-cols-1 gap-2">
                  {productCategories.find((cat: ProductCategory) => cat.title === "LED Display")?.subItems?.map((subItem: { title: string; href: string }, subIndex: number) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className="
                        block py-2 px-4 text-gray-600 text-sm
                        bg-white rounded-md border border-gray-100
                        hover:text-blue-600 hover:border-blue-200
                        hover:shadow-sm transition-all duration-300
                      "
                      onClick={onClose}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {/* Right side panel for Unified Communication sub-items */}
            {openCategory === "Unified Communication" && productCategories.find((cat: ProductCategory) => cat.title === "Unified Communication")?.subItems && (
              <div className="md:col-span-1 bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Unified Communication Series</h3>
                <div className="grid grid-cols-1 gap-2">
                  {productCategories.find((cat: ProductCategory) => cat.title === "Unified Communication")?.subItems?.map((subItem: { title: string; href: string }, subIndex: number) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className="
                        block py-2 px-4 text-gray-600 text-sm
                        bg-white rounded-md border border-gray-100
                        hover:text-blue-600 hover:border-blue-200
                        hover:shadow-sm transition-all duration-300
                      "
                      onClick={onClose}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {/* Right side panel for Capture System sub-items */}
            {openCategory === "Capture System" && productCategories.find((cat: ProductCategory) => cat.title === "Capture System")?.subItems && (
              <div className="md:col-span-1 bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Capture System Series</h3>
                <div className="grid grid-cols-1 gap-2">
                  {productCategories.find((cat: ProductCategory) => cat.title === "Capture System")?.subItems?.map((subItem: { title: string; href: string }, subIndex: number) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className="
                        block py-2 px-4 text-gray-600 text-sm
                        bg-white rounded-md border border-gray-100
                        hover:text-blue-600 hover:border-blue-200
                        hover:shadow-sm transition-all duration-300
                      "
                      onClick={onClose}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {/* Right side panel for Accessories sub-items */}
            {openCategory === "Accessories" && productCategories.find((cat: ProductCategory) => cat.title === "Accessories")?.subItems && (
              <div className="md:col-span-1 bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Accessories Series</h3>
                <div className="grid grid-cols-1 gap-2">
                  {productCategories.find((cat: ProductCategory) => cat.title === "Accessories")?.subItems?.map((subItem: { title: string; href: string }, subIndex: number) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className="
                        block py-2 px-4 text-gray-600 text-sm
                        bg-white rounded-md border border-gray-100
                        hover:text-blue-600 hover:border-blue-200
                        hover:shadow-sm transition-all duration-300
                      "
                      onClick={onClose}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {/* Right side panel for Software sub-items */}
            {openCategory === "Software" && productCategories.find((cat: ProductCategory) => cat.title === "Software")?.subItems && (
              <div className="md:col-span-1 bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Software Series</h3>
                <div className="grid grid-cols-1 gap-2">
                  {productCategories.find((cat: ProductCategory) => cat.title === "Software")?.subItems?.map((subItem: { title: string; href: string }, subIndex: number) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className="
                        block py-2 px-4 text-gray-600 text-sm
                        bg-white rounded-md border border-gray-100
                        hover:text-blue-600 hover:border-blue-200
                        hover:shadow-sm transition-all duration-300
                      "
                      onClick={onClose}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}