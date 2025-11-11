"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import slider1 from "../../public/slider-4.jpeg";
import slider2 from "../../public/slider-5.png";
import slider3 from "../../public/slider-3.jpeg";

const slides = [slider1, slider2, slider3];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // timeline duration → 6 seconds
  const duration = 3000;

  // Auto timeline
  useEffect(() => {
    setProgress(0);

    const start = Date.now();

    const animate = () => {
      const elapsed = Date.now() - start;
      const percent = (elapsed / duration) * 100;

      if (percent >= 100) {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        return;
      }

      setProgress(percent);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

  }, [currentIndex]);

  return (
    <section className="w-full h-screen relative overflow-hidden">

      {/* SLIDES */}
      {slides.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1200ms] 
            ${i === currentIndex ? "opacity-100" : "opacity-0"}
          `}
        >
          <Image src={img} alt="" fill className="object-cover" />
        </div>
      ))}

      {/* ✅ PREMIUM TIMELINE PROGRESS BAR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex w-[70%] max-w-xl gap-3">

        {slides.map((_, i) => (
          <div key={i} className="flex-1 h-[4px] rounded-full bg-white/25 overflow-hidden relative">

            {/* background shine */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-60"></div>

            {/* timeline animation */}
            <div
              className={`
                h-full rounded-full
                ${i === currentIndex ? "bg-gradient-to-r from-blue-400 via-blue-300 to-white" : "bg-transparent"}
              `}
              style={{
                width: i === currentIndex ? `${progress}%` : "0%",
                transition: i === currentIndex ? "none" : "width 0.3s ease",
              }}
            />

            {/* glowing tip for active bar */}
            {i === currentIndex && (
              <div
                className="absolute top-0 -right-1 w-[8px] h-[8px] rounded-full bg-white shadow-[0_0_12px_4px_white]"
                style={{ transform: "translateY(-2px)" }}
              />
            )}
          </div>
        ))}

      </div>

      {/* ARROWS */}
      <button
        onClick={() =>
          setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-5 top-1/2 -translate-y-1/2 p-3 bg-white/10 border border-white/20 backdrop-blur-lg rounded-full text-white hover:bg-white/20 transition"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() =>
          setCurrentIndex((prev) => (prev + 1) % slides.length)
        }
        className="absolute right-5 top-1/2 -translate-y-1/2 p-3 bg-white/10 border border-white/20 backdrop-blur-lg rounded-full text-white hover:bg-white/20 transition"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
