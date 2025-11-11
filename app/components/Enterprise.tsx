"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ✅ SECTION CONTENT
const sectionContent = {
  Industry: {
    title: "Industry Solutions",
    description:
      "Tailored solutions for modern enterprises, built for security, speed, and high-performance workflows.",
    features: [
      "Healthcare Communication Systems",
      "Financial Services Collaboration",
      "Retail Digital Signage",
      "Manufacturing Control Rooms",
    ],
  },
  Platform: {
    title: "Platform Integration",
    description:
      "Connect seamlessly with world-class platforms to create a unified and efficient workplace ecosystem.",
    features: [
      "Microsoft Teams Integration",
      "Zoom Compatibility",
      "Google Workspace Support",
      "Cisco Webex Connectivity",
    ],
  },
  AllSolutions: {
    title: "Comprehensive Solutions",
    description:
      "End-to-end communication and collaboration solutions, designed for every stage of enterprise growth.",
    features: [
      "Room Solutions",
      "Cloud Services",
      "Analytics & Reporting",
      "Security & Compliance",
    ],
  },
};

// ✅ FIX TYPE ERROR USING UNION TYPE
type SectionKey = keyof typeof sectionContent;

export default function EnterprisePage() {
  // ✅ Type-safe state
  const [activeTab, setActiveTab] = useState<"Enterprise" | "Education">(
    "Enterprise"
  );
  const [activeSection, setActiveSection] = useState<SectionKey>("Industry");

  const currentContent = sectionContent[activeSection];

  const enterpriseImage = "/slider-3.png";
  const educationImage = "/slide-2.jpg";
  const personImage = "/slider-1.jpg";

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#F8FAFF] to-[#EEF1F7] flex">

      {/* ✅ PREMIUM GLASS SIDEBAR */}
      <aside
        className="
        hidden md:flex flex-col w-[260px] p-10 gap-10
        bg-white/60 backdrop-blur-xl border-r border-gray-200/70
        shadow-[4px_0_20px_rgba(0,0,0,0.05)] rounded-r-2xl
      "
      >
        {(["Industry", "Platform", "AllSolutions"] as SectionKey[]).map(
          (section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`
              text-left text-[20px] font-semibold py-3 flex justify-between items-center
              transition-all duration-300
              ${
                activeSection === section
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-500"
              }
            `}
            >
              {section === "AllSolutions" ? "All Solutions" : section}
              <span className="text-[22px] font-bold opacity-60">{">"}</span>
            </button>
          )
        )}
      </aside>

      {/* ✅ MAIN CONTENT */}
      <main className="flex-1 px-6 md:px-14 py-10 relative">

        {/* ✅ TABS */}
        <div className="flex gap-10 border-b border-gray-300 pb-4">
          {(["Enterprise", "Education"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
              text-[22px] pb-2 transition-all font-semibold
              ${
                activeTab === tab
                  ? "text-blue-600 border-b-4 border-blue-600"
                  : "text-gray-500 hover:text-blue-600"
              }
            `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ✅ HERO CONTENT */}
        <div className="mt-12 flex flex-col lg:flex-row gap-12 items-center lg:items-start">

          {/* ✅ LEFT TEXT */}
          <div className="w-full lg:w-1/2 space-y-6 animate-[fadeIn_0.8s_ease]">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              {currentContent.title}
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              {currentContent.description}
            </p>

            <ul className="space-y-3 mt-4">
              {currentContent.features.map((f, i) => (
                <li key={i} className="flex items-center text-gray-700 text-lg">
                  <span className="text-blue-600 text-xl mr-3">•</span> {f}
                </li>
              ))}
            </ul>

            <Link href="#">
              <button
                className="
                px-8 py-3 mt-6 rounded-xl text-white text-lg font-medium
                bg-blue-600 hover:bg-blue-700 transition-all shadow-lg
                hover:shadow-blue-300/40
              "
              >
                Learn More →
              </button>
            </Link>
          </div>

          {/* ✅ RIGHT IMAGE BLOCK */}
          <div className="w-full lg:w-1/2 relative">

            <div
              className="
              relative w-full h-[350px] md:h-[500px] rounded-2xl overflow-hidden
              shadow-[0_10px_30px_rgba(0,0,0,0.15)]
              animate-[fadeSlide_1s_ease]
            "
            >
              <Image
                src={activeTab === "Enterprise" ? enterpriseImage : educationImage}
                fill
                alt="Enterprise Image"
                className="object-cover scale-105 transition-all duration-700 hover:scale-110"
              />
            </div>

            {/* PERSON FLOAT */}
            <div className="absolute bottom-0 right-0 w-[150px] md:w-[240px] animate-[floatUp_1.2s_ease_forwards]">
              <Image
                src={personImage}
                width={240}
                height={400}
                alt="Person"
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </main>

      {/* ✅ ANIMATIONS */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0px); }
        }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0px); }
        }
        @keyframes floatUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
}
