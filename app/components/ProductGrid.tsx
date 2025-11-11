"use client";

import Link from "next/link";
import Image from "next/image";

import slider1 from "../../public/slide-1.jpg";
import slider2 from "../../public/slide-2.jpg";
import slider3 from "../../public/slider-3.jpeg";
import slider4 from "../../public/slider-4.jpeg";
import slider5 from "../../public/slider-5.png";

const products = [
  { title: "Interactive Flat Panel", img: slider1, href: "/products", size: "md:col-span-2 md:row-span-2" },
  { title: "Accessories", img: slider2, href: "/products", size: "md:row-span-2" },
  { title: "Unified Communication", img: slider3, href: "/products", size: "md:row-span-2" },
  { title: "LED Display", img: slider4, href: "/products", size: "md:row-span-2" },
  { title: "Commercial Display", img: slider5, href: "/products", size: "md:row-span-1" },
  { title: "Software", img: slider1, href: "/products", size: "md:col-span-2 md:row-span-1" },
  { title: "Mounting Accessories", img: slider2, href: "/products", size: "md:col-span-2 md:row-span-1" },
  { title: "Control Systems", img: slider3, href: "/products", size: "md:row-span-1" },
];

export default function ProductGrid() {
  return (
    <section className="w-full py-10 bg-white">
      <div className="mx-auto max-w-7xl px-3 sm:px-4">

        {/* ✅ Responsive Grid Optimized for Mobile + Desktop */}
        <div
          className="
            grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 
            gap-3 sm:gap-4
            auto-rows-[160px] sm:auto-rows-[200px] md:auto-rows-[220px] lg:auto-rows-[260px]
          "
        >
          {products.map((p, index) => (
            <Link
              key={index}
              href={p.href}
              className={`
                group relative overflow-hidden rounded-xl bg-black shadow-md sm:shadow-lg 
                ${p.size}
                transition-all duration-300
                active:scale-[0.97]   /* ✅ mobile tap feedback */
              `}
            >

              {/* ✅ BASE IMAGE */}
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="
                  object-cover brightness-[0.78]
                  transition-all duration-700
                  group-hover:brightness-110 group-hover:scale-105
                "
              />

              {/* ✅ MASK REVEAL (Desktop only) */}
              <div
                className="
                  absolute inset-0 hidden md:block
                  bg-gradient-to-r from-white/0 via-white/40 to-white/0
                  translate-x-[-120%]
                  group-hover:translate-x-[150%]
                  transition-all duration-[1100ms] ease-out
                "
              />

              {/* ✅ LIGHT OVERLAY */}
              <div
                className="
                  absolute inset-0 opacity-0 group-hover:opacity-[.15]
                  bg-white transition-all duration-700 pointer-events-none
                "
              />

              {/* ✅ TITLE */}
              <div className="absolute bottom-3 left-3 text-white z-10">
                <h4 className="text-[12px] sm:text-[13px] md:text-[14px] font-medium drop-shadow-xl">
                  {p.title} →
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
