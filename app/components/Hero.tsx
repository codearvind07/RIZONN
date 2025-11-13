"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import slider1 from "../../public/slider-4.jpeg";
import slider2 from "../../public/slider-3.jpeg";
// import slider3 from "../../public/slide-1.jpg";
import slider4 from "../../public/slider.jpeg";
import slider5 from "../../public/slider11.png";


const slides = [slider1, slider2,  slider4, slider5];

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
              
              {/* Text content for slider1 (index 0) */}
              {i === 0 && (
                <div className="absolute inset-0 flex flex-col items-start justify-center text-white text-left pl-4 sm:pl-8 md:pl-16 lg:pl-20 pr-4 z-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Rizonn</h2>
                  <h3 className="text-xl sm:text-2xl md:text-3xl f mb-6 sm:mb-8">Where Inspiration Moves Ahead.</h3>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 text-sm sm:text-base">
                    Learn More
                  </button>
                </div>
              )}

              {/* Text content for slider5 (index 3) */}
              {i === 3 && (
                <div className="absolute inset-0 flex flex-col items-start justify-center text-white text-left pl-4 sm:pl-8 md:pl-16 lg:pl-20 pr-4 z-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">PARTNER ALLIANCE</h2>
                  <h3 className="text-xl sm:text-2xl md:text-3xl mb-6">Joint forces to create exceptional <br /> technology solutions.</h3>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 text-sm sm:text-base">
                    Learn More
                  </button>
                </div>
              )}
              
              {/* Text content for slider2 (index 1) */}
              {i === 1 && (
                <div className="absolute inset-0 flex flex-col items-start justify-center text-white text-left pl-4 sm:pl-8 md:pl-16 lg:pl-20 pr-4 z-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Discover the Complete</h2>
                  <h3 className="text-xl sm:text-2xl md:text-3xl mb-2">Windows-Based Microsoft Teams</h3>
                  <h3 className="text-xl sm:text-2xl md:text-3xl  mb-6 sm:mb-8">Rooms Ecosystem</h3>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 text-sm sm:text-base">
                    Learn More
                  </button>
                </div>
              )}
              
              {/* slide 3 has no text overlay (image-only) */}

              {/* Text content for slider4 (index 2) */}
              {i === 2 && (
                <div className="absolute inset-0 flex flex-col items-start justify-center text-white text-left pl-4 sm:pl-8 md:pl-16 lg:pl-20 pr-4 z-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">RIZONN X INTEL WHITEPAPER</h2>
                  <h3 className="text-xl sm:text-2xl md:text-3xl mb-6">Transform Your BYOD Meeting Space <br />into a Microsoft Teams Rooms</h3>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 text-sm sm:text-base">
                    Learn More
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* MINIMALIST PROGRESS INDICATOR */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 flex justify-center">
        <div className="flex items-center space-x-2 sm:space-x-3">
          {slides.map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <button
                onClick={() => setIndex(i)}
                className="relative"
                aria-label={`Go to slide ${i + 1}`}
              >
                {/* Outer circle */}
                <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full border-2 transition-all duration-300 ${
                  i === index 
                    ? 'border-cyan-400 bg-cyan-400/20' 
                    : 'border-white/50 hover:border-white/80'
                }`} />
                
                {/* Progress ring for active slide */}
                {i === index && (
                  <svg className="absolute -top-0.5 -left-0.5 w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 20 20">
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
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full
                   bg-white/10 border border-white/20 backdrop-blur-md
                   hover:bg-white/20 transition text-white"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full
                   bg-white/10 border border-white/20 backdrop-blur-md
                   hover:bg-white/20 transition text-white"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}