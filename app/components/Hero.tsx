"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import slider1 from "../../public/slide-1.jpg";
import slider2 from "../../public/slide-2.jpg";
import slider3 from "../../public/slider-3.png";

const slides = [slider1, slider2, slider3];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto slide with progress bar
  useEffect(() => {
    setProgress(0);
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          next();
          return 0;
        }
        return prev + 1;
      });
    }, 60); // 60ms * 100 = 6000ms (6 seconds) for full progress

    return () => clearInterval(progressTimer);
  }, [index]);

  return (
    <section className="w-full h-screen relative overflow-hidden bg-black">

      {/* SLIDE TRACK */}
      <div
        className="absolute inset-0 flex transition-transform duration-[1500ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((img, i) => (
          <div key={i} className="relative w-full h-screen flex-shrink-0 overflow-hidden">
            
            {/* BACKGROUND FADE LAYER */}
            <div className="absolute inset-0 opacity-60">
              <Image
                src={img}
                alt={`slide-${i}`}
                fill
                className="object-cover blur-[2px] saturate-[1.2]"
              />
            </div>

            {/* PARALLAX FOREGROUND IMAGE */}
            <div
              className="absolute inset-0 transition-transform duration-[1500ms]"
              style={{ transform: index === i ? "scale(1)" : "scale(1.1)" }}
            >
              <Image
                src={img}
                alt={`slide-${i}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* MINIMALIST PROGRESS INDICATOR */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="flex items-center space-x-3">
          {slides.map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <button
                onClick={() => setIndex(i)}
                className="relative"
                aria-label={`Go to slide ${i + 1}`}
              >
                {/* Outer circle */}
                <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  i === index 
                    ? 'border-cyan-400 bg-cyan-400/20' 
                    : 'border-white/50 hover:border-white/80'
                }`} />
                
                {/* Progress ring for active slide */}
                {i === index && (
                  <svg className="absolute -top-0.5 -left-0.5 w-4 h-4" viewBox="0 0 20 20">
                    <circle
                      cx="10"
                      cy="10"
                      r="8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray={`${2 * Math.PI * 8}`}
                      strokeDashoffset={`${2 * Math.PI * 8 * (1 - progress / 100)}`}
                      className="text-cyan-400 transition-all duration-75 ease-linear"
                      transform="rotate(-90 10 10)"
                    />
                  </svg>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full
                   bg-white/10 border border-white/20 backdrop-blur-md
                   hover:bg-white/20 transition text-white"
        aria-label="Previous slide"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full
                   bg-white/10 border border-white/20 backdrop-blur-md
                   hover:bg-white/20 transition text-white"
        aria-label="Next slide"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

    </section>
  );
}