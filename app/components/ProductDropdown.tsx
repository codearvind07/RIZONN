"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { productCategories, ProductCategory } from "./ProductCategories";

interface ProductDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDropdown({ isOpen, onClose }: ProductDropdownProps) {
  const [openCategory, setOpenCategory] = useState<string | null>("Industrial PoE Switch");
  const [hoveredSubItem, setHoveredSubItem] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Escape Key Closes
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    if (isOpen) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Mount Animation
  useEffect(() => {
    if (!isOpen) {
      setMounted(false);
      return;
    }
    const id = setTimeout(() => setMounted(true), 10);
    return () => clearTimeout(id);
  }, [isOpen]);

  if (!isOpen) return null;

  const activeCategory = productCategories.find((c) => c.title === openCategory) || productCategories[0];

  const getProductImage = (productName: string) => {
    switch (productName) {
      case "10G uplink 24-port L3 managed industrial PoE - NAV-I-L3-P24-021":
        return "/slide-1.jpg";
      case "10G uplink 28-port L2 managed industrial PoE switch - NAV-I-L0-P10-037":
        return "/slide-2.jpg";
      case "Gigabit 16-port L2 managed industrial PoE switch - NAV-I-L2-P28-090":
        return "/slider-3.jpeg";
      case "Gigabit 10-port L2 managed industrial bt PoE switch - NAV-I-L2-P16-091":
        return "/slider-4.jpeg";
      case "Gigabit 8-port L2 managed industrial PoE switch - NAV-I-L2-P10-092":
        return "/s1.jpeg";
      case "Gigabit 24-port L2 managed industrial Ethernet switch NAV-I-E-L2-P24-066":
        return "/s2.jpeg";
      case "Gigabit 10-port L2 managed industrial Ethernet switch NAV-I-E-L2-P10-084":
        return "/s3.jpeg";
      case "Gigabit 8-port L2 managed industrial Ethernet switch NAV-I-E-L2-P8-085":
        return "/s4.jpeg";
      case "Gigabit 18-port L2 managed PoE switch NAV-P-L2-P18-003":
        return "/slider-32.png";
      case "Gigabit 26-port L2 managed PoE switch NAV-P-L2-P26-004":
        return "/slider-5.png";
      case "Gigabit 28-port L2 managed PoE switch NAV-P-L2-P28-012":
        return "/slider-3.jpeg";
      case "Gigabit 28-port Easy managed PoE switch NAV-P-L0-P28-029":
        return "/slider-3.jpeg";
      case "Gigabit 27-port PoE switch NAV-P-L0-P27-034":
        return "/slider-3.jpeg";
      case "10G uplink 52-port L2 managed PoE switch NAV-P-L2-P52-052":
        return "/slider-5.png";
      case "10G uplink 36-port L2 managed PoE switch NAV-P-L2-P36-072":
        return "/slider-5.png";
      case "Gigabit 8-port PoE switch NAV-P-L0-P8-085":
        return "/s4.jpeg";
      case "Gigabit uplink 12-port PoE switch NAV-P-L0-P12-087":
        return "/s3.jpeg";
      case "Gigabit uplink 18-port L2 managed PoE switch NAV-P-L2-P18-091":
        return "/slider-32.png";
      default:
        return "/slide-1.jpg";
    }
  };

  return (
    <div className="fixed top-20 left-0 right-0 z-[9999] bg-black/10 backdrop-blur-sm" onClick={onClose}>
      <div
        className={`absolute top-0 left-0 right-0 max-h-[calc(100vh-4rem)] bg-white shadow-lg border-t border-gray-200 transform transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          mounted ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8">
          
          {/* UPDATED GRID LAYOUT ONLY */}
          <div
            className="grid grid-cols-1 lg:grid-cols-[260px_360px_440px] gap-0 items-start border-t pt-4"
            onMouseLeave={() => setOpenCategory("Industrial PoE Switch")}
          >
            {/* LEFT COLUMN */}
            <div className="bg-white border-r border-gray-200 shadow-sm h-full">
              <h3 className="text-gray-800 font-semibold text-sm px-4 pt-4"></h3>
              <div className="max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
                {productCategories.map((category, idx) => (
                  <div key={idx} onMouseEnter={() => setOpenCategory(category.title)} className="hover:bg-gray-50 transition duration-200">
                    <Link href={category.href} className="flex items-center justify-between py-2 px-4 text-sm text-gray-700 hover:text-blue-600">
                      <span>{category.title}</span>
                      {category.subItems && <span className="text-gray-400">›</span>}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* MIDDLE COLUMN */}
            <div className="bg-white p-4 border-r border-gray-200 shadow-sm max-h-[60vh] overflow-y-auto">
              {activeCategory?.subItems?.map((subItem, i) => (
                <Link
                  key={i}
                  href={subItem.href}
                  onMouseEnter={() => setHoveredSubItem(subItem.title)}
                  className={`block py-2 text-sm transition ${
                    hoveredSubItem === subItem.title ? "text-blue-600 font-medium" : "text-gray-600"
                  } hover:text-blue-600`}
                >
                  {subItem.title} ›
                </Link>
              ))}
            </div>

            {/* RIGHT COLUMN — IMAGE + OVERVIEW */}
            <div className="flex flex-col gap-0">
              <div className="bg-white p-4 border border-gray-200 shadow-sm rounded-md">
                <img
                  src={hoveredSubItem ? getProductImage(hoveredSubItem) : "/slide-1.jpg"}
                  alt={hoveredSubItem || "Product"}
                  className="w-full h-48 object-contain"
                />
              </div>

              {/* PRODUCT OVERVIEW (CONTENT UNTOUCHED) */}
              {/** All your product overview sections remain unchanged here **/}
              {/* ✔ Your original OVERVIEW content remains below — not edited */}
              {hoveredSubItem === "10G uplink 24-port L3 managed industrial PoE - NAV-I-L3-P24-021" && (
                <div className="w-full max-w-sm bg-white p-5 border border-gray-100 shadow-sm">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Product Overview</h3>
                  <p className="text-sm text-gray-700">
                    The NAV-I-L3-P24-021 is a 10G uplink, 24-port L3 managed industrial PoE switch offering high reliability, robust performance, and seamless connectivity for industrial networking environments.
                  </p>
                </div>
              )}
              
              {/* Specific content for NAV-I-L0-P10-037 */}
              {hoveredSubItem === "10G uplink 28-port L2 managed industrial PoE switch - NAV-I-L0-P10-037" && (
                <div className="w-full max-w-sm bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Product Overview</h3>
                  <p className="text-sm text-gray-700">
                    The NAV-I-L0-P10-037 is a 10G uplink, 28-port L2 managed industrial PoE switch designed for stable power delivery, efficient network control, and reliable industrial-grade performance.
                  </p>
                </div>
              )}
              
              {/* Specific content for NAV-I-L2-P28-090 */}
              {hoveredSubItem === "Gigabit 16-port L2 managed industrial PoE switch - NAV-I-L2-P28-090" && (
                <div className="w-full max-w-sm bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Product Overview</h3>
                  <p className="text-sm text-gray-700">
                    The NAV-I-L2-P28-090 is a Gigabit 16-port L2 managed industrial PoE switch engineered for reliable data transmission, intelligent network management, and dependable performance in demanding industrial environments.
                  </p>
                </div>
              )}
              
              {/* Specific content for NAV-I-L2-P16-091 */}
              {hoveredSubItem === "Gigabit 10-port L2 managed industrial bt PoE switch - NAV-I-L2-P16-091" && (
                <div className="w-full max-w-sm bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Product Overview</h3>
                  <p className="text-sm text-gray-700">
                    The NAV-I-L2-P16-091 is a Gigabit 10-port L2 managed industrial bt PoE switch delivering high-power PoE, efficient network control, and strong reliability for advanced industrial applications.
                  </p>
                </div>
              )}
              
              {/* Specific content for NAV-I-L2-P10-092 */}
              {hoveredSubItem === "Gigabit 8-port L2 managed industrial PoE switch - NAV-I-L2-P10-092" && (
                <div className="w-full max-w-sm bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Product Overview</h3>
                  <p className="text-sm text-gray-700">
                    The NAV-I-L2-P10-092 is a Gigabit 8-port L2 managed industrial PoE switch built to ensure stable power delivery, smart network management, and reliable performance in harsh industrial environments.
                  </p>
                </div>
              )}
              
              {/* Specific content for NAV-I-E-L2-P24-066 */}
              {hoveredSubItem === "Gigabit 24-port L2 managed industrial Ethernet switch NAV-I-E-L2-P24-066" && (
                <div className="w-full max-w-sm bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Product Overview</h3>
                  <p className="text-sm text-gray-700">
                    The NAV-I-E-L2-P24-066 is a Gigabit 24-port L2 managed industrial Ethernet switch offering robust network stability, advanced management features, and reliable connectivity for mission-critical industrial operations.
                  </p>
                </div>
              )}
              
              {/* Specific content for NAV-I-E-L2-P10-084 */}
              {hoveredSubItem === "Gigabit 10-port L2 managed industrial Ethernet switch NAV-I-E-L2-P10-084" && (
                <div className="w-full max-w-sm bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Product Overview</h3>
                  <p className="text-sm text-gray-700">
                    The NAV-I-E-L2-P10-084 is a Gigabit 10-port L2 managed industrial Ethernet switch designed for reliable data transmission, intelligent network control, and seamless connectivity in industrial environments.
                  </p>
                </div>
              )}
              
              {/* Specific content for NAV-I-E-L2-P8-085 */}
              {hoveredSubItem === "Gigabit 8-port L2 managed industrial Ethernet switch NAV-I-E-L2-P8-085" && (
                <div className="w-full max-w-sm bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Product Overview</h3>
                  <p className="text-sm text-gray-700">
                    The NAV-I-E-L2-P8-085 is a Gigabit 8-port L2 managed industrial Ethernet switch built for dependable connectivity, efficient network management, and reliable performance in rugged industrial environments.
                  </p>
                </div>
              )}
              
              {/* Specific content for NAV-P-L2-P18-003 */}
              {hoveredSubItem === "Gigabit 18-port L2 managed PoE switch NAV-P-L2-P18-003" && (
                <div className="w-full max-w-sm bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Product Overview</h3>
                  <p className="text-sm text-gray-700">
                    The NAV-P-L2-P18-003 is a Gigabit 18-port L2 managed PoE switch offering stable power delivery, smart network control, and reliable industrial-grade performance for critical applications.
                  </p>
                </div>
              )}
              
              {/* Specific content for NAV-P-L2-P26-004 */}
              {hoveredSubItem === "Gigabit 26-port L2 managed PoE switch NAV-P-L2-P26-004" && (
                <div className="w-full max-w-sm bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Product Overview</h3>
                  <p className="text-sm text-gray-700">
                    The NAV-P-L2-P26-004 is a Gigabit 26-port L2 managed PoE switch engineered for efficient power distribution, robust network management, and high-performance connectivity in industrial and enterprise environments.
                  </p>
                </div>
              )}
              
              {/* Specific content for NAV-P-L2-P28-012 */}
              {hoveredSubItem === "Gigabit 28-port L2 managed PoE switch NAV-P-L2-P28-012" && (
                <div className="w-full max-w-sm bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Product Overview</h3>
                  <p className="text-sm text-gray-700">
                    The NAV-P-L2-P28-012 is a Gigabit 28-port L2 managed PoE switch delivering reliable power, advanced network control, and high-performance connectivity suited for demanding industrial and commercial applications.
                  </p>
                </div>
              )}
              
              {/* Specific content for NAV-P-L0-P28-029 */}
              {hoveredSubItem === "Gigabit 28-port Easy managed PoE switch NAV-P-L0-P28-029" && (
                <div className="w-full max-w-sm bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Product Overview</h3>
                  <p className="text-sm text-gray-700">
                    The NAV-P-L0-P28-029 is a Gigabit 28-port easy managed PoE switch designed for simplified network management, stable power delivery, and dependable performance in industrial and commercial environments.
                  </p>
                </div>
              )}
              
              {/* Specific content for NAV-P-L0-P27-034 */}
              {hoveredSubItem === "Gigabit 27-port PoE switch NAV-P-L0-P27-034" && (
                <div className="w-full max-w-sm bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Product Overview</h3>
                  <p className="text-sm text-gray-700">
                    The NAV-P-L0-P27-034 is a Gigabit 27-port PoE switch offering reliable power transmission, easy network management, and robust connectivity for versatile industrial and commercial applications.
                  </p>
                </div>
              )}
              
              {/* Specific content for NAV-P-L2-P52-052 */}
              {hoveredSubItem === "10G uplink 52-port L2 managed PoE switch NAV-P-L2-P52-052" && (
                <div className="w-full max-w-sm bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Product Overview</h3>
                  <p className="text-sm text-gray-700">
                    The NAV-P-L2-P52-052 is a 10G uplink, 52-port L2 managed PoE switch built for large-scale networks, offering intelligent management, stable power delivery, and high-performance industrial connectivity.
                  </p>
                </div>
              )}
              
              {/* Specific content for NAV-P-L2-P36-072 */}
              {hoveredSubItem === "10G uplink 36-port L2 managed PoE switch NAV-P-L2-P36-072" && (
                <div className="w-full max-w-sm bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Product Overview</h3>
                  <p className="text-sm text-gray-700">
                    The NAV-P-L2-P36-072 is a 10G uplink, 36-port L2 managed PoE switch delivering efficient power distribution, advanced network control, and high-speed performance for industrial and enterprise environments.
                  </p>
                </div>
              )}
              
              {/* Specific content for NAV-P-L0-P8-085 */}
              {hoveredSubItem === "Gigabit 8-port PoE switch NAV-P-L0-P8-085" && (
                <div className="w-full max-w-sm bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Product Overview</h3>
                  <p className="text-sm text-gray-700">
                    The NAV-P-L0-P8-085 is a Gigabit 8-port PoE switch offering compact design, stable power transmission, and simple network management for small-scale industrial and commercial applications.
                  </p>
                </div>
              )}
              
              {/* Specific content for NAV-P-L0-P12-087 */}
              {hoveredSubItem === "Gigabit uplink 12-port PoE switch NAV-P-L0-P12-087" && (
                <div className="w-full max-w-sm bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Product Overview</h3>
                  <p className="text-sm text-gray-700">
                    The NAV-P-L0-P12-087 is a Gigabit uplink, 12-port PoE switch designed for efficient power delivery, simplified management, and reliable network performance in industrial and commercial environments.
                  </p>
                </div>
              )}
              
              {/* Specific content for NAV-P-L2-P18-091 */}
              {hoveredSubItem === "Gigabit uplink 18-port L2 managed PoE switch NAV-P-L2-P18-091" && (
                <div className="w-full max-w-sm bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Product Overview</h3>
                  <p className="text-sm text-gray-700">
                    The NAV-P-L2-P18-091 is a Gigabit uplink, 18-port L2 managed PoE switch delivering intelligent network control, reliable power distribution, and high-performance connectivity for industrial and commercial applications.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}