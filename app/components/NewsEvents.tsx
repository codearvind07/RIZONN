"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// ✅ Local images
import eventNews1 from "../../public/event_news1.jpeg";
import eventNews2 from "../../public/event_news2.jpeg";
import eventNews3 from "../../public/event_news3.png";

const slides = [eventNews1, eventNews2, eventNews3];

export default function NewsEventsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const duration = 4000; // 4 seconds per slide

  // Animate progress
  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    let frameId: number;

    const animate = () => {
      const elapsed = Date.now() - start;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(percent);

      if (percent < 100) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [currentIndex]);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* ✅ Slides */}
      {slides.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ${
            i === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt={`News & Events Slide ${i + 1}`}
            fill
            priority={i === 0}
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* ✅ Short Dotted Progress Bar */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 items-center justify-center">
        {slides.map((_, i) => (
          <div key={i} className="flex items-center justify-center">
            <div className="flex gap-2">
              {[...Array(6)].map((_, dotIndex) => {
                const dotThreshold = (dotIndex + 1) * (100 / 6);
                const isFilled =
                  i < currentIndex ||
                  (i === currentIndex && progress >= dotThreshold);

                return (
                  <span
                    key={dotIndex}
                    className={`block w-[6px] h-[6px] rounded-full transition-all duration-300 ${
                      isFilled
                        ? "bg-white scale-110"
                        : "bg-white/25 hover:bg-white/40"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
