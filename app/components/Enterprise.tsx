"use client";

import { useState } from "react";
import Link from "next/link";

// ✅ SECTION CONTENT
const sectionContent = {
  Industry: {
    title: "Enterprise solutions",
    subtitle: "Riozonn X Microsoft Teams",
    description: "Do more for less and maximize efficiency with Riozonn XT series for Microsoft Teams Rooms.",
    platform: "Microsoft Teams",
  },
  Platform: {
    title: "Enterprise solutions",
    subtitle: "Riozonn X Zoom",
    description: "Seamless integration with Zoom for enhanced collaboration and productivity in every meeting space.",
    platform: "Zoom",
  },
  AllSolutions: {
    title: "Enterprise solutions",
    subtitle: "Complete Solutions Suite",
    description: "Comprehensive enterprise solutions designed to transform your workplace communication and collaboration.",
    platform: "All Platforms",
  },
};

type SectionKey = keyof typeof sectionContent;

export default function EnterprisePage() {
  const [activePlatform, setActivePlatform] = useState<"Microsoft Teams" | "Zoom">("Microsoft Teams");
  const [activeSection, setActiveSection] = useState<SectionKey>("Industry");

  const currentContent = sectionContent[activeSection];

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
                onClick={() => setActiveSection(section)}
                className={`
                  text-left text-base font-medium py-4 px-2
                  flex justify-between items-center
                  transition-all duration-200
                  ${
                    activeSection === section
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-500"
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

          <div className="relative z-10">
            {/* ✅ TABS */}
            <div className="flex gap-8 mb-8">
              {(["Microsoft Teams", "Zoom"] as const).map((platform) => (
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
              ))}
            </div>

            {/* ✅ MAIN HEADING */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {activePlatform === "Microsoft Teams" 
                ? "MAXHUB X Microsoft Teams" 
                : "MAXHUB X Zoom"
              }
            </h1>

            {/* ✅ DESCRIPTION */}
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              {activePlatform === "Microsoft Teams"
                ? "Do more for less and maximize efficiency with MAXHUB XT series for Microsoft Teams Rooms."
                : "Seamless integration with Zoom for enhanced collaboration and productivity in every meeting space."
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
        </div>

        {/* ✅ BOTTOM SECTION - Light Grey/White with Product Showcase */}
        <div 
          className="
            flex-1 px-8 md:px-16 py-16 md:py-20
            bg-gradient-to-br from-gray-50 via-white to-gray-50
            relative overflow-hidden
          "
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                135deg,
                transparent,
                transparent 50px,
                rgba(0, 0, 0, 0.01) 50px,
                rgba(0, 0, 0, 0.01) 100px
              )
            `
          }}
        >
          <div className="relative z-10">
            {/* ✅ PRODUCT SHOWCASE GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              
              {/* ✅ Product Card 1 - Large Wall Display (Main Feature) */}
              <div className="lg:col-span-2 lg:row-span-2">
                <div 
                  className="
                    h-full min-h-[500px] rounded-2xl
                    bg-white
                    p-8
                    relative overflow-hidden
                    group
                  "
                  style={{
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  {/* Multi-level platform base */}
                  <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-50 via-white to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent opacity-80"></div>
                  
                  {/* Display Screen */}
                  <div className="relative h-full flex flex-col items-center justify-center space-y-4">
                    {/* Main Display */}
                    <div 
                      className="
                        w-full h-[380px] rounded-lg
                        bg-gradient-to-br from-blue-100 to-blue-200
                        relative overflow-hidden
                        shadow-2xl
                        border-4 border-gray-900
                      "
                    >
                      {/* Screen Content - Video Conference UI */}
                      <div className="absolute inset-0 p-4 grid grid-cols-2 gap-2">
                        <div className="bg-white/90 rounded flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-2"></div>
                            <p className="text-xs text-gray-600">User 1</p>
                          </div>
                        </div>
                        <div className="bg-white/90 rounded flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-green-600 rounded-full mx-auto mb-2"></div>
                            <p className="text-xs text-gray-600">User 2</p>
                          </div>
                        </div>
                        <div className="bg-white/90 rounded flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto mb-2"></div>
                            <p className="text-xs text-gray-600">User 3</p>
                          </div>
                        </div>
                        <div className="bg-white/90 rounded flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-orange-600 rounded-full mx-auto mb-2"></div>
                            <p className="text-xs text-gray-600">User 4</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Display Stand/Base */}
                    <div className="w-3/4 h-3 bg-gray-800 rounded-full"></div>
                    <div className="w-1/2 h-2 bg-gray-700 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* ✅ Product Card 2 - Soundbar with Camera */}
              <div className="lg:col-span-1">
                <div 
                  className="
                    h-full min-h-[240px] rounded-2xl
                    bg-white
                    p-6
                    relative overflow-hidden
                    group
                  "
                  style={{
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent opacity-80"></div>
                  
                  <div className="relative h-full flex flex-col items-center justify-center space-y-4">
                    {/* Soundbar Device */}
                    <div className="w-full h-20 bg-gray-900 rounded-lg shadow-xl flex items-center justify-center relative">
                      {/* Camera module */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gray-800 rounded-full"></div>
                      {/* Speaker grille */}
                      <div className="w-3/4 h-1 bg-gray-700 rounded-full"></div>
                    </div>
                    
                    {/* Platform base */}
                    <div className="w-2/3 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* ✅ Product Card 3 - Control Panel/Tablet */}
              <div className="lg:col-span-1">
                <div 
                  className="
                    h-full min-h-[240px] rounded-2xl
                    bg-white
                    p-6
                    relative overflow-hidden
                    group
                  "
                  style={{
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent opacity-80"></div>
                  
                  <div className="relative h-full flex flex-col items-center justify-center space-y-4">
                    {/* Tablet/Control Panel */}
                    <div 
                      className="
                        w-32 h-40 bg-gray-900 rounded-xl
                        shadow-xl
                        border-2 border-gray-700
                        flex items-center justify-center
                        transform rotate-[-8deg]
                        group-hover:rotate-[-5deg] transition-transform duration-300
                      "
                    >
                      <div className="w-full h-full p-3">
                        <div className="w-full h-2 bg-purple-600 rounded mb-2"></div>
                        <div className="w-3/4 h-2 bg-white/20 rounded mb-2"></div>
                        <div className="w-full h-2 bg-white/20 rounded mb-2"></div>
                        <div className="w-2/3 h-2 bg-white/20 rounded"></div>
                      </div>
                    </div>
                    
                    {/* Platform base */}
                    <div className="w-2/3 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* ✅ Product Card 4 - PTZ Camera */}
              <div className="lg:col-span-1">
                <div 
                  className="
                    h-full min-h-[240px] rounded-2xl
                    bg-white
                    p-6
                    relative overflow-hidden
                    group
                  "
                  style={{
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent opacity-80"></div>
                  
                  <div className="relative h-full flex flex-col items-center justify-center space-y-4">
                    {/* Camera Sphere */}
                    <div className="relative">
                      <div className="w-20 h-20 bg-gray-900 rounded-full shadow-xl flex items-center justify-center">
                        <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
                          <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                            <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      {/* Camera mount */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-gray-800 rounded-full"></div>
                    </div>
                    
                    {/* Platform base */}
                    <div className="w-2/3 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* ✅ Product Card 5 - Hub/Mini PC */}
              <div className="lg:col-span-1">
                <div 
                  className="
                    h-full min-h-[240px] rounded-2xl
                    bg-white
                    p-6
                    relative overflow-hidden
                    group
                  "
                  style={{
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent opacity-80"></div>
                  
                  <div className="relative h-full flex flex-col items-center justify-center space-y-4">
                    {/* Hub Device */}
                    <div className="w-full h-24 bg-gray-900 rounded-lg shadow-xl flex items-center justify-center relative">
                      {/* Status LED */}
                      <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full"></div>
                      {/* Ventilation */}
                      <div className="flex gap-1">
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className="w-1 h-8 bg-gray-700 rounded"></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Platform base */}
                    <div className="w-2/3 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
