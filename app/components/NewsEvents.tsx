"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// Import images directly for better optimization
import eventNews1 from "../../public/event_news1.jpeg";
import eventNews2 from "../../public/event_news2.jpeg";
import eventNews3 from "../../public/event_news3.png";

const sliderImages = [
  eventNews1,
  eventNews2,
  eventNews3,
  eventNews1, // Using eventNews1 again as fourth image
];

export default function NewsEvents() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* LEFT CARD */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl p-10 flex flex-col justify-center text-white">
            <h3 className="text-3xl font-bold mb-4">News & Events</h3>
            <p className="text-white/90 leading-relaxed mb-6 text-lg">
              Stay updated with our latest innovations, product launches, and industry events.
            </p>

            <Link
              href="/news"
              className="inline-block bg-white text-blue-700 font-medium rounded-lg px-6 py-3 hover:bg-gray-100 transition-all"
            >
              Explore More →
            </Link>
          </div>

          {/* RIGHT MOSAIC SLIDER SECTION */}
          <div className="lg:col-span-2 grid grid-cols-2 grid-rows-2 gap-6">

            {/* Slider 1 (Large) */}
            <div className="row-span-2 h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 2500 }}
                loop
                className="w-full h-full"
              >
                {sliderImages.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <Image
                      src={img}
                      alt={`News and events slider image ${idx + 1}`}
                      fill
                      className="object-cover transition duration-700 hover:scale-110"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Slider 2 */}
            <div className="h-[190px] rounded-2xl overflow-hidden shadow-lg">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000 }}
                loop
                className="w-full h-full"
              >
                {sliderImages.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <Image
                      src={img}
                      alt={`News and events slider image ${idx + 1}`}
                      fill
                      className="object-cover transition duration-700 hover:scale-110"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Slider 3 */}
            <div className="h-[190px] rounded-2xl overflow-hidden shadow-lg">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 2800 }}
                loop
                className="w-full h-full"
              >
                {sliderImages.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <Image
                      src={img}
                      alt={`News and events slider image ${idx + 1}`}
                      fill
                      className="object-cover transition duration-700 hover:scale-110"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}