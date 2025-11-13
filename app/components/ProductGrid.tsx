"use client";

import React from "react";

// ✅ Import your real local images
import slider1 from "../../public/InteractiveFlat Pannel.jpeg";
import slider2 from "../../public/Accessories.jpg";
import slider3 from "../../public/Unified Communication.jpeg";
import slider4 from "../../public/LED Display.jpeg";
import slider5 from "../../public/Commercial Display.jpeg";
import slider6 from "../../public/Software.jpeg";

// ✅ Product details
const products = [
  {
    title: "Interactive Flat Panel",
    img: slider1,
    href: "/products",
    gridClasses: "col-span-2 row-span-2",
  },
  {
    title: "Accessories",
    img: slider2,
    href: "/products",
    gridClasses: "col-span-1 row-span-2",
  },
  {
    title: "Unified Communication",
    img: slider3,
    href: "/products",
    gridClasses: "col-span-1 row-span-2",
  },
  {
    title: "LED Display",
    img: slider4,
    href: "/products",
    gridClasses: "col-span-2 row-span-2",
  },
  {
    title: "Commercial Display",
    img: slider5,
    href: "/products",
    gridClasses: "col-span-2 row-span-1",
  },
  {
    title: "Software",
    img: slider6,
    href: "/products",
    gridClasses: "col-span-2 row-span-1",
  },
];

export default function ProductGrid() {
  return (
    <section className="w-full bg-[#f5f6f8] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* ✅ Responsive Product Grid */}
        <div
          className="
            grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6
            auto-rows-[180px] md:auto-rows-[200px] lg:auto-rows-[240px]
          "
        >
          {products.map((p, i) => (
            <a
              key={i}
              href={p.href}
              className={`
                group relative overflow-hidden rounded-2xl bg-white 
                border border-gray-200 shadow-sm 
                transition-transform duration-500 hover:scale-[1.01] hover:shadow-lg
                ${p.gridClasses}
              `}
            >
              {/* ✅ Local image rendering */}
              <img
                src={p.img.src} // 👈 Important: .src to get image URL from imported file
                alt={p.title}
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105 w-full h-full"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/400x400/FEE2E2/B91C1C?text=Image+Not+Found";
                }}
              />

              {/* ✅ Top-right label */}
              <div className="absolute top-4 right-5 text-sm font-medium text-gray-800 z-10 bg-white/50 backdrop-blur-sm px-2 py-1 rounded-md">
                {p.title} <span className="text-gray-500 ml-[2px]">›</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
