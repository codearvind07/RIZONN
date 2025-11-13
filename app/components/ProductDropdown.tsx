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
  const [openSubItem, setOpenSubItem] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

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

  // mount animation: show translate from header when opened
  useEffect(() => {
    if (!isOpen) {
      setMounted(false);
      return;
    }
    // small timeout to allow mount then animate
    const id = setTimeout(() => setMounted(true), 10);
    return () => clearTimeout(id);
  }, [isOpen]);

  if (!isOpen) return null;

  const featuredCategory = productCategories.find((c) => c.title === "Featured") || productCategories[0];
  const activeCategory = productCategories.find((c) => c.title === openCategory);
  const teamsCategory = productCategories.find((c) => c.title === "Microsoft Teams Rooms");
  const displayCategory = activeCategory || teamsCategory;

  return (
    <div className="fixed top-16 left-0 right-0 z-[9999] bg-black/20 backdrop-blur-sm" onClick={onClose}>
      <div
        className={`absolute top-0 left-0 right-0 max-h-[calc(100vh-4rem)] bg-white shadow-2xl border-t border-gray-200 rounded-b-2xl transform transition-all duration-200 ease-out ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-[220px_360px_260px_1fr] gap-6 items-start">
            {/* Left column: Featured + Products list */}
            <div className="">
              <div className="rounded-t-lg overflow-hidden">
                <div className="bg-gray-100 px-6 py-6">
                  <h4 className="text-2xl font-semibold text-gray-800">Featured</h4>
                </div>
                <div className="bg-white">
                  {/* Microsoft Teams Rooms as highlighted featured item */}
                  {teamsCategory && (
                    <div
                      onMouseEnter={() => setOpenCategory(teamsCategory.title)}
                      onMouseLeave={() => setOpenCategory(null)}
                    >
                      
                        <Link
                          href={teamsCategory.href}
                          className="flex items-center justify-between py-3 px-6 text-blue-600 border-t border-gray-200 hover:bg-gray-50 hover:text-blue-700"
                          onClick={onClose}
                        >
                        <span className="font-medium">{teamsCategory.title}</span>
                        <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4 bg-gray-50 rounded-b-lg border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h4 className="text-xl font-medium text-gray-700">Products</h4>
                </div>
                <div className="max-h-[52vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
                  <div className="space-y-2 px-4 py-4">
                    {[
                      "Interactive Flat Panel",
                      "Commercial Display",
                      "LED Display",
                      "Unified Communication",
                      "Capture System",
                      "Accessories",
                      "Software",
                    ].map((title, idx) => {
                      const category = productCategories.find((c) => c.title === title);
                      if (!category) return null;
                      return (
                        <div key={idx} onMouseEnter={() => category.subItems && setOpenCategory(category.title)} onMouseLeave={() => category.subItems && setOpenCategory(null)}>
                          <Link href={category.href} className="flex items-center justify-between py-3 px-3 text-base text-gray-700 hover:bg-gray-100 rounded" onClick={onClose}>
                            <span>{category.title}</span>
                            {category.subItems && <span className="text-gray-400">›</span>}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Second column: series/subitems */}
            <div className="border-l border-r border-gray-200 bg-white rounded-lg overflow-hidden relative">
              {displayCategory ? (
                <>
                  <div className="px-6 py-3 border-b border-gray-100 flex items-center justify-between">
                    <Link href={displayCategory.href} className="text-blue-600 text-base font-medium" onClick={onClose}>
                      {displayCategory.title}
                    </Link>
                    <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                  <div className="max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 px-4 py-4">
                    <div className="space-y-3">
                      {displayCategory.subItems?.map((subItem, i) => (
                        <div key={i} onMouseEnter={() => setOpenSubItem(subItem.title)} onMouseLeave={() => setOpenSubItem(null)}>
                          <Link href={subItem.href} className="flex items-center justify-between py-3 px-3 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={onClose}>
                            <span>{subItem.title}</span>
                            <span className="text-gray-300">›</span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="p-6 text-gray-500">No series available</div>
              )}
            </div>

            {/* Third column: deeper items for hovered series */}
            <div className="bg-white rounded-lg p-6">
              {openSubItem ? (
                <>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{openSubItem}</h3>
                  <div className="space-y-3">
                    <Link href="#" className="block text-gray-600 hover:text-blue-600">View all {openSubItem} models</Link>
                  </div>
                </>
              ) : (
                <div className="text-gray-500">Hover a series to see models here.</div>
              )}
            </div>

            {/* Rightmost image */}
            <div className="flex items-start justify-center">
              <div className="w-full max-w-sm bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-sm">
                <div className="bg-white rounded-md p-4">
                  <img src="/slide-1.jpg" alt="promo" className="w-full h-44 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}