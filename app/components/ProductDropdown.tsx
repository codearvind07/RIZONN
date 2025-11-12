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

  // ✅ Escape key closes dropdown
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const selectedCategory = openCategory 
    ? productCategories.find((cat: ProductCategory) => cat.title === openCategory)
    : null;

  return (
    <div
      className="
        absolute top-full left-0 mt-3 z-[9999]
        w-[960px] max-w-[calc(100vw-2rem)]
        bg-gradient-to-br from-white via-white to-slate-50/50
        rounded-2xl
        overflow-hidden
        transition-all duration-300 ease-out
        backdrop-blur-xl
        border border-slate-200/60
      "
      style={{
        boxShadow: `
          0 25px 50px -12px rgba(0, 0, 0, 0.15),
          0 0 0 1px rgba(255, 255, 255, 0.8),
          inset 0 1px 0 0 rgba(255, 255, 255, 0.9)
        `,
        background: 'linear-gradient(to bottom right, #ffffff, #ffffff, #f8fafc)'
      }}
      onMouseLeave={() => setOpenCategory(null)}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Premium Arrow pointing up */}
      <div 
        className="absolute -top-2 left-8 w-4 h-4 transform rotate-45 z-10"
        style={{
          background: 'linear-gradient(135deg, #ffffff, #f8fafc)',
          borderLeft: '1px solid rgba(226, 232, 240, 0.6)',
          borderTop: '1px solid rgba(226, 232, 240, 0.6)',
          boxShadow: '-2px -2px 8px rgba(0, 0, 0, 0.05)'
        }}
      ></div>
      
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
      
      {/* Two Column Layout */}
      <div className="grid grid-cols-2">
        {/* Left Column - Product Categories */}
        <div className="relative border-r border-slate-200/50 bg-white/80 backdrop-blur-sm">
          {/* Premium Header with gradient */}
          <div 
            className="relative px-6 py-4 font-semibold text-sm text-white overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)'
            }}
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '24px 24px'
              }}></div>
            </div>
            <div className="relative flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              </div>
              <span className="tracking-wide">Product Categories</span>
            </div>
          </div>
          
          {/* Categories List */}
          <div className="divide-y divide-slate-100/80 max-h-[520px] overflow-y-auto custom-scrollbar">
            {productCategories.map((category: ProductCategory, index: number) => (
              <div
                key={index}
                onMouseEnter={() => category.subItems && setOpenCategory(category.title)}
                className={`
                  relative
                  transition-all duration-200 ease-out
                  ${openCategory === category.title 
                    ? 'bg-gradient-to-r from-blue-50/80 to-indigo-50/40 shadow-sm' 
                    : 'bg-white/50 hover:bg-gradient-to-r hover:from-slate-50/80 hover:to-blue-50/30'
                  }
                  group
                `}
              >
                {/* Active indicator */}
                {openCategory === category.title && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-600"></div>
                )}
                
                <Link
                  href={category.href}
                  className="
                    relative block px-6 py-3.5
                    flex justify-between items-center
                    transition-all duration-200
                  "
                  onClick={onClose}
                >
                  <span 
                    className={`
                      font-semibold text-sm transition-colors duration-200
                      ${openCategory === category.title 
                        ? 'text-blue-700' 
                        : 'text-slate-700 group-hover:text-blue-600'
                      }
                    `}
                  >
                    {category.title}
                  </span>
                  {category.subItems && (
                    <div className={`
                      p-1.5 rounded-md transition-all duration-200
                      ${openCategory === category.title 
                        ? 'bg-blue-100 text-blue-600 rotate-90' 
                        : 'bg-slate-100 text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-500'
                      }
                    `}>
                      <svg 
                        className="w-3.5 h-3.5 transition-transform duration-200" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Column - Sub Items */}
        <div className="bg-gradient-to-b from-slate-50/40 to-white/60 min-h-[400px] max-h-[520px] overflow-y-auto custom-scrollbar">
          {/* Premium Header */}
          <div 
            className="sticky top-0 z-10 px-6 py-4 font-semibold text-sm text-white overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #4338ca 100%)'
            }}
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '24px 24px'
              }}></div>
            </div>
            <div className="relative flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <span className="tracking-wide truncate">
                {selectedCategory ? `${selectedCategory.title} Products` : 'Select a Category'}
              </span>
            </div>
          </div>
          
          {/* Sub Items List */}
          {selectedCategory && selectedCategory.subItems ? (
            <div className="divide-y divide-slate-100/60">
              {selectedCategory.subItems.map((subItem: { title: string; href: string }, subIndex: number) => (
                <Link
                  key={subIndex}
                  href={subItem.href}
                  className="
                    relative block px-6 py-3.5
                    bg-white/40 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40
                    transition-all duration-200 ease-out
                    group
                  "
                  onClick={onClose}
                >
                  <div className="flex items-center gap-3">
                    <div className={`
                      w-1.5 h-1.5 rounded-full transition-all duration-200
                      ${openCategory === selectedCategory.title 
                        ? 'bg-blue-400 group-hover:bg-blue-500 group-hover:scale-125' 
                        : 'bg-slate-300 group-hover:bg-blue-400'
                      }
                    `}></div>
                    <span className="
                      text-sm font-medium text-slate-700
                      group-hover:text-blue-700
                      group-hover:translate-x-1
                      transition-all duration-200
                      inline-block
                    ">
                      {subItem.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="px-6 py-16 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200/50 mb-4">
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-slate-500 text-sm font-medium">
                {openCategory 
                  ? 'No sub-items available for this category'
                  : 'Hover over a category to see products'
                }
              </p>
            </div>
          )}
        </div>
      </div>
      

    </div>
  );
}