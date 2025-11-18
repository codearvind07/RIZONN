"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Import images for each section
import enterpriseImg from "../../public/enterprice.jpeg";
import educationImg from "../../public/Education solutions.jpeg";
import teamsImg from "../../public/Microsoft Teams.jpeg";
import zoomImg from "../../public/Zoom.jpeg";
import allSolutionsImg from "../../public/slider-5.png";

// ✅ CONTENT DATA
const industryContent = {
  Enterprise: {
    title: "Enterprise solutions",
    heading: "Enterprise solutions",
    description:
      "We provide user-friendly, high-performance conferencing  solutions suitable for every room size.",
    image: enterpriseImg,
  },
  Education: {
    title: "Education solutions",
    heading: "Education solutions",
    description:
      "Empower educational institutions with innovative collaboration tools designed for classrooms, lecture halls, and administrative spaces.",
    image: educationImg,
  },
};

const platformContent = {
  "Microsoft Teams": {
    title: "Microsoft Teams solutions",
    heading: "Rizonn X Microsoft Teams",
    description:
      "Do more for less and maximize efficiency with Rizonn XT series for Microsoft Teams Rooms.",
    image: teamsImg,
  },
  Zoom: {
    title: "Zoom solutions",
    heading: "Rizonn X Zoom",
    description:
      "Seamless integration with Zoom for enhanced collaboration and productivity in every meeting space.",
    image: zoomImg,
  },
};

type SectionKey = "Industry" | "Platform";

export default function EnterprisePage() {
  const [activeSection, setActiveSection] = useState<SectionKey>("Industry");
  const [activeIndustry, setActiveIndustry] = useState<"Enterprise" | "Education">("Enterprise");
  const [activePlatform, setActivePlatform] = useState<"Microsoft Teams" | "Zoom">("Microsoft Teams");
  const [hoveredSection, setHoveredSection] = useState<SectionKey | null>(null);

  const handleSectionActivation = (section: SectionKey) => {
    setActiveSection(section);
    if (section === "Industry") setActiveIndustry("Enterprise");
    if (section === "Platform") setActivePlatform("Microsoft Teams");
  };

  return (
    <div className="relative w-full min-h-screen flex pt-16 overflow-hidden">
      {/* ✅ Full Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={
            activeSection === "Industry"
              ? industryContent[activeIndustry].image
              : platformContent[activePlatform].image
          }
          alt="Background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* ✅ Combined Sidebar + Content */}
      <div className="relative z-10 flex w-full text-black">
        {/* LEFT SIDEBAR */}
        <div className="hidden md:flex flex-col w-[470px] px-8 pt-12 gap-2">
          {/* Industry & Platform Buttons */}
          {(["Industry", "Platform"] as SectionKey[]).map((section) => (
            <button
              key={section}
              onClick={() => handleSectionActivation(section)}
              onMouseEnter={() => {
                setHoveredSection(section);
                handleSectionActivation(section);
              }}
              onMouseLeave={() => setHoveredSection(null)}
              className={`
                text-center text-2xl font-medium py-3 px-2
                flex items-center justify-center
                transition-all duration-200
                rounded-lg
                ${
                  activeSection === section
                    ? "text-blue-600"
                    : hoveredSection === section
                    ? "text-blue-400"
                    : "text-black hover:text-blue-600"
                }
              `}
            >
              <span className="flex items-center">
                {section}
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          ))}

          {/* ✅ All Solutions Link */}
          <Link
            href="/solutions"
            className="text-center text-2xl font-medium py-3 px-2 mt-4 flex items-center justify-center transition-all duration-200 rounded-lg text-black hover:text-blue-600"
          >
            <span className="flex items-center">
              All Solutions
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>

        {/* ✅ RIGHT CONTENT AREA — Moved to Top */}
        <div className="flex-1 flex flex-col justify-start px-8 md:px-16 py-12 text-black">
          {/* Tabs */}
          <div className="flex gap-8 mb-8">
            {activeSection === "Industry"
              ? (["Enterprise", "Education"] as const).map((industry) => (
                  <button
                    key={industry}
                    onClick={() => setActiveIndustry(industry)}
                    className={`text-lg font-medium pb-2 transition-all ${
                      activeIndustry === industry
                        ? "text-black border-b-2 border-black"
                        : "text-black/70 hover:text-black"
                    }`}
                  >
                    {industry}
                  </button>
                ))
              : (["Microsoft Teams", "Zoom"] as const).map((platform) => (
                  <button
                    key={platform}
                    onClick={() => setActivePlatform(platform)}
                    className={`text-lg font-medium pb-2 transition-all ${
                      activePlatform === platform
                        ? "text-black border-b-2 border-black"
                        : "text-black/70 hover:text-black"
                    }`}
                  >
                    {platform}
                  </button>
                ))}
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold mb-4 leading-tight text-black">
            {activeSection === "Industry"
              ? industryContent[activeIndustry].heading
              : platformContent[activePlatform].heading}
          </h1>

          {/* Description */}
          <p className="text-sm md:text-sm text-black mb-6 max-w-2xl leading-relaxed">
            {activeSection === "Industry"
              ? industryContent[activeIndustry].description
              : platformContent[activePlatform].description}
          </p>

          {/* Button */}
          <Link href="#">
            <button
              className="
                px-6 py-3
                bg-blue-600 hover:bg-blue-700
                text-white font-medium
                rounded-md
                transition-all duration-200
                flex items-center gap-2
                shadow-lg hover:shadow-xl
                hover:scale-105
                active:scale-95
              "
            >
              Learn More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
