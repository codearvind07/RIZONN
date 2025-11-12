"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Import images for each section
import enterpriseImg from "../../public/slide-1.jpg";
import educationImg from "../../public/slide-2.jpg";
import teamsImg from "../../public/slider-3.jpeg";
import zoomImg from "../../public/slider-4.jpeg";
import allSolutionsImg from "../../public/slider-5.png";

// ✅ CONTENT DATA
const industryContent = {
  Enterprise: {
    title: "Enterprise solutions",
    heading: "Rizonn X Enterprise",
    description: "We offer easy-to-use, high-quality conferencing solutions for all room sizes. Transform your enterprise collaboration with our comprehensive suite of products.",
    image: enterpriseImg,
  },
  Education: {
    title: "Education solutions",
    heading: "Rizonn X Education",
    description: "Empower educational institutions with innovative collaboration tools designed for classrooms, lecture halls, and administrative spaces.",
    image: educationImg,
  },
};

const platformContent = {
  "Microsoft Teams": {
    title: "Microsoft Teams solutions",
    heading: "Rizonn X Microsoft Teams",
    description: "Do more for less and maximize efficiency with Rizonn XT series for Microsoft Teams Rooms.",
    image: teamsImg,
  },
  Zoom: {
    title: "Zoom solutions",
    heading: "Rizonn X Zoom",
    description: "Seamless integration with Zoom for enhanced collaboration and productivity in every meeting space.",
    image: zoomImg,
  },
};

// Add content for All Solutions
const allSolutionsContent = {
  title: "Complete Solutions Suite",
  heading: "Complete Solutions Suite",
  description: "Comprehensive enterprise solutions designed to transform your workplace communication and collaboration.",
  image: allSolutionsImg,
};

type SectionKey = "Industry" | "Platform" | "AllSolutions";

export default function EnterprisePage() {
  const [activeSection, setActiveSection] = useState<SectionKey>("Industry");
  const [activeIndustry, setActiveIndustry] = useState<"Enterprise" | "Education">("Enterprise");
  const [activePlatform, setActivePlatform] = useState<"Microsoft Teams" | "Zoom">("Microsoft Teams");
  const [hoveredSection, setHoveredSection] = useState<SectionKey | null>(null);

  return (
    <div className="w-full min-h-screen bg-white flex pt-16">
      {/* ✅ LEFT SIDEBAR - Clean white with subtle pattern */}
      <aside
        className="
          hidden md:flex flex-col w-[280px] min-h-[calc(100vh-4rem)]
          bg-white border-r border-gray-100
          relative overflow-hidden
        "
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(0, 0, 0, 0.02) 10px,
              rgba(0, 0, 0, 0.02) 20px
            )
          `
        }}
      >
        <div className="flex flex-col p-8 pt-12 gap-1 relative z-10">
          {(["Industry", "Platform", "AllSolutions"] as SectionKey[]).map(
            (section) => (
              <button
                key={section}
                onClick={() => {
                  setActiveSection(section);
                  // Reset tabs when switching sections
                  if (section === "Industry") {
                    setActiveIndustry("Enterprise");
                  } else if (section === "Platform") {
                    setActivePlatform("Microsoft Teams");
                  }
                }}
                onMouseEnter={() => setHoveredSection(section)}
                onMouseLeave={() => setHoveredSection(null)}
                className={`
                  text-left text-base font-medium py-4 px-2
                  flex justify-between items-center
                  transition-all duration-200
                  rounded-lg
                  ${
                    activeSection === section
                      ? "text-blue-600 bg-blue-50"
                      : hoveredSection === section
                      ? "text-blue-500 bg-blue-25"
                      : "text-gray-700 hover:text-blue-500 hover:bg-gray-50"
                  }
                `}
              >
                <span>{section === "AllSolutions" ? "All Solutions" : section}</span>
                <svg 
                  className="w-4 h-4 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )
          )}
        </div>
      </aside>

      {/* ✅ MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col">
        {/* ✅ TOP SECTION - Dark Blue with Tabs */}
        <div 
          className="
            relative px-8 md:px-16 py-16 md:py-24
            text-white
            overflow-hidden
          "
          style={{
            background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1e3a8a 100%)'
          }}
        >
          {/* Subtle pattern overlay */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '24px 24px'
            }}
          ></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-12">
            {/* Text Content */}
            <div className="md:w-1/2">
              {/* ✅ TABS - Dynamic based on active section */}
              <div className="flex gap-8 mb-8">
                {activeSection === "Industry" ? (
                  // Industry Tabs: Enterprise and Education
                  (["Enterprise", "Education"] as const).map((industry) => (
                    <button
                      key={industry}
                      onClick={() => setActiveIndustry(industry)}
                      className={`
                        text-base font-medium pb-2 transition-all
                        ${
                          activeIndustry === industry
                            ? "text-white border-b-2 border-white"
                            : "text-white/70 hover:text-white"
                        }
                      `}
                    >
                      {industry}
                    </button>
                  ))
                ) : activeSection === "Platform" ? (
                  // Platform Tabs: Microsoft Teams and Zoom
                  (["Microsoft Teams", "Zoom"] as const).map((platform) => (
                    <button
                      key={platform}
                      onClick={() => setActivePlatform(platform)}
                      className={`
                        text-base font-medium pb-2 transition-all
                        ${
                          activePlatform === platform
                            ? "text-white border-b-2 border-white"
                            : "text-white/70 hover:text-white"
                        }
                      `}
                    >
                      {platform}
                    </button>
                  ))
                ) : null}
              </div>

              {/* ✅ MAIN HEADING */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {activeSection === "Industry" 
                  ? industryContent[activeIndustry].heading
                  : activeSection === "Platform"
                  ? platformContent[activePlatform].heading
                  : allSolutionsContent.heading
                }
              </h1>

              {/* ✅ DESCRIPTION */}
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
                {activeSection === "Industry" 
                  ? industryContent[activeIndustry].description
                  : activeSection === "Platform"
                  ? platformContent[activePlatform].description
                  : allSolutionsContent.description
                }
              </p>

              {/* ✅ LEARN MORE BUTTON */}
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
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </div>

            {/* Image Content */}
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={
                    activeSection === "Industry" 
                      ? industryContent[activeIndustry].image
                      : activeSection === "Platform"
                      ? platformContent[activePlatform].image
                      : allSolutionsContent.image
                  }
                  alt={
                    activeSection === "Industry" 
                      ? industryContent[activeIndustry].title
                      : activeSection === "Platform"
                      ? platformContent[activePlatform].title
                      : allSolutionsContent.title
                  }
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}