"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

interface SubItem {
  title: string;
  href: string;
  subItems?: SubItem[];
}

interface NetworkingCategory {
  title: string;
  href: string;
  description?: string;
  subItems?: SubItem[];
}

// Define networking categories with the specific options provided
const networkingCategories: NetworkingCategory[] = [
  {
    title: "Indio Cloud",
    href: "/networking/indio-cloud",
    description: "Full Featured, Cloud-based Wi-Fi Management Platform.",
  },
  {
    title: "Indio Connect",
    href: "/networking/indio-connect",
    description: "Effortlessly Manage & Monitor Community Wi-Fi",
  },
  {
    title: "Wireless Access Points",
    href: "/networking/wireless-access-points",
    description: "Powered by OpenWiFi Technology, Designed for Modern Enterprise Networks.",
    subItems: [
      { title: "UM-225AX", href: "/networking/wireless-access-points/um-225ax" },
      { title: "UM-325AX", href: "/networking/wireless-access-points/um-325ax" },
      { title: "UM-525AX", href: "/networking/wireless-access-points/um-525ax" },
      { title: "UM-525AX(M)", href: "/networking/wireless-access-points/um-525ax-m" },
    ],
  },
  {
    title: "UniBox Controllers",
    href: "/networking/unibox-controllers",
    description: "Network Access and Hotspot Controller",
    subItems: [
      { 
        title: "SMB Series", 
        href: "/networking/unibox-controllers/smb-series",
        subItems: [
          { title: "U-50", href: "/networking/unibox-controllers/smb-series/u-50" },
          { title: "U-100", href: "/networking/unibox-controllers/smb-series/u-100" },
        ]
      },
      { 
        title: "Enterprise Series", 
        href: "/networking/unibox-controllers/enterprise-series",
        subItems: [
          { title: "U-500", href: "/networking/unibox-controllers/enterprise-series/u-500" },
          { title: "U-1000", href: "/networking/unibox-controllers/enterprise-series/u-1000" },
        ]
      },
      { 
        title: "Campus Series", 
        href: "/networking/unibox-controllers/campus-series",
        subItems: [
          { title: "U-2500", href: "/networking/unibox-controllers/campus-series/u-2500" },
          { title: "U-5000", href: "/networking/unibox-controllers/campus-series/u-5000" },
        ]
      },
    ],
  },
  {
    title: "Managed PoE Switches",
    href: "/networking/managed-poe-switches",
    description: "Designed to Provide High Throughput in Demanding Networks",
    subItems: [
      { title: "US-8MP Port Switch", href: "/networking/managed-poe-switches/us-8mp" },
      { title: "US-16MP Port Switch", href: "/networking/managed-poe-switches/us-16mp" },
      { title: "US-24MP Port Switch", href: "/networking/managed-poe-switches/us-24mp" },
    ],
  },
  {
    title: "4G 5G Routers",
    href: "/networking/4g-5g-routers",
    description: "Seamless Connectivity on the Go",
    subItems: [
      { title: "MX-705N", href: "/networking/4g-5g-routers/mx-705n" },
      { title: "MX-720AC", href: "/networking/4g-5g-routers/mx-720ac" },
    ],
  },
];

interface NetworkingDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NetworkingDropdown({ isOpen, onClose }: NetworkingDropdownProps) {
  const [openCategory, setOpenCategory] = useState<string | null>(networkingCategories[0].title);
  const [hoveredSubItem, setHoveredSubItem] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const activeCategory = networkingCategories.find((c) => c.title === openCategory) || networkingCategories[0];

  const getNetworkingImage = (itemName: string) => {
    // For now, we'll use a default image for all networking items
    // You can customize this later with specific images for each item
    return "/slide-1.jpg";
  };

  const getNetworkingContent = (itemName: string) => {
    switch (itemName) {
      case "Indio Cloud":
        return "Indio Cloud is a full-featured, cloud-based Wi-Fi management platform that provides centralized control and monitoring of your entire wireless network infrastructure. With intuitive dashboards and real-time analytics, managing your Wi-Fi has never been easier.";
      case "Indio Connect":
        return "Indio Connect effortlessly manages and monitors community Wi-Fi, providing seamless connectivity for public spaces. Designed for simplicity and reliability, it ensures optimal performance for community networks.";
      case "Wireless Access Points":
        return "Powered by OpenWiFi technology, our wireless access points are designed for modern enterprise networks. These access points deliver high-performance connectivity with advanced security features and easy management.";
      case "UM-225AX":
        return "The UM-225AX is a high-performance wireless access point that delivers reliable Wi-Fi connectivity for demanding enterprise environments. With support for the latest Wi-Fi standards, it ensures optimal performance and coverage.";
      case "UM-325AX":
        return "The UM-325AX is an advanced wireless access point designed for high-density environments. Featuring enhanced throughput and intelligent traffic management, it provides seamless connectivity for large numbers of devices.";
      case "UM-525AX":
        return "The UM-525AX is a premium wireless access point engineered for mission-critical applications. With enterprise-grade security and advanced analytics, it delivers unparalleled performance and reliability.";
      case "UM-525AX(M)":
        return "The UM-525AX(M) is a managed version of our premium wireless access point, offering additional configuration options and enhanced control features for IT administrators who require granular network management capabilities.";
      case "UniBox Controllers":
        return "UniBox Controllers provide comprehensive network access and hotspot management capabilities. These controllers offer centralized management of multiple access points, user authentication, and detailed analytics for optimized network performance.";
      case "SMB Series":
        return "The SMB Series UniBox Controllers are designed for small to medium businesses, providing essential network management features with an intuitive interface that simplifies deployment and maintenance.";
      case "U-50":
        return "The U-50 is an entry-level UniBox controller designed for small businesses with up to 50 access points. It provides essential management features and easy setup for simplified network administration.";
      case "U-100":
        return "The U-100 is a mid-tier UniBox controller suitable for growing businesses with up to 100 access points. It offers enhanced management capabilities and scalability for expanding network infrastructures.";
      case "Enterprise Series":
        return "The Enterprise Series UniBox Controllers are built for large organizations with complex networking requirements. These controllers provide advanced features for managing extensive networks with thousands of devices.";
      case "U-500":
        return "The U-500 is a high-capacity UniBox controller designed for enterprise environments with up to 500 access points. It offers advanced analytics, security features, and redundancy options for mission-critical deployments.";
      case "U-1000":
        return "The U-1000 is our flagship UniBox controller, capable of managing up to 1000 access points. It provides enterprise-grade features including AI-driven optimization, advanced threat protection, and multi-site management capabilities.";
      case "Campus Series":
        return "The Campus Series UniBox Controllers are specifically designed for large educational institutions, corporate campuses, and similar environments. These controllers offer specialized features for managing distributed networks across multiple buildings.";
      case "U-2500":
        return "The U-2500 is a campus-grade UniBox controller capable of managing up to 2500 access points. It features advanced location services, centralized policy management, and integration with campus security systems.";
      case "U-5000":
        return "The U-5000 is our most powerful UniBox controller, designed for large-scale deployments with up to 5000 access points. It provides cloud-scale management capabilities with on-premises control for maximum security and performance.";
      case "Managed PoE Switches":
        return "Our Managed PoE Switches are designed to provide high throughput in demanding networks. These switches offer advanced management features, Quality of Service (QoS) controls, and Power over Ethernet capabilities for simplified device deployment.";
      case "US-8MP Port Switch":
        return "The US-8MP Port Switch is a compact managed PoE switch with 8 ports, perfect for small offices or remote locations. It provides reliable power and data connectivity with essential management features for network administrators.";
      case "US-16MP Port Switch":
        return "The US-16MP Port Switch is a mid-sized managed PoE switch with 16 ports, ideal for growing businesses. It offers enhanced management capabilities and higher power budgets for supporting more PoE devices.";
      case "US-24MP Port Switch":
        return "The US-24MP Port Switch is a full-featured managed PoE switch with 24 ports, designed for enterprise environments. It provides advanced Layer 2 management, high power budgets, and redundant power options for mission-critical applications.";
      case "4G 5G Routers":
        return "Our 4G/5G Routers provide seamless connectivity on the go, ensuring reliable internet access in remote locations or during network outages. These routers offer enterprise-grade security and performance for mobile and backup connectivity solutions.";
      case "MX-705N":
        return "The MX-705N is a versatile 4G/5G router that provides reliable connectivity for remote offices and mobile applications. With support for multiple carrier networks, it ensures optimal performance and uptime.";
      case "MX-720AC":
        return "The MX-720AC is an advanced 4G/5G router with dual SIM support and automatic failover capabilities. It provides enterprise-grade security features and high-speed connectivity for mission-critical applications.";
      default:
        return "Explore our comprehensive range of networking products designed for modern enterprise environments. Our solutions are engineered to deliver reliable performance, advanced security, and easy management for networks of all sizes.";
    }
  };

  return (
    <div 
      className="fixed top-20 left-0 right-0 z-[9999] bg-black/10 backdrop-blur-sm" 
      onClick={onClose}
      ref={dropdownRef}
    >
      <div
        className={`absolute top-0 left-0 right-0 max-h-[calc(100vh-4rem)] bg-white shadow-lg border-t border-gray-200 transform transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          mounted ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8">
          
          {/* GRID LAYOUT - SAME AS PRODUCT DROPDOWN */}
          <div
            className="grid grid-cols-1 lg:grid-cols-[260px_360px_440px] gap-0 items-start border-t pt-4"
            onMouseLeave={() => setOpenCategory(networkingCategories[0].title)}
          >
            {/* LEFT COLUMN - Categories with descriptions */}
            <div className="bg-white border-r border-gray-200 shadow-sm h-full">
              <h3 className="text-gray-800 font-semibold text-sm px-4 pt-4"></h3>
              <div className="max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
                {networkingCategories.map((category, idx) => (
                  <div 
                    key={idx} 
                    onMouseEnter={() => setOpenCategory(category.title)} 
                    className="hover:bg-gray-50 transition duration-200"
                  >
                    <Link 
                      href={category.href} 
                      className="flex items-center justify-between py-2 px-4 text-sm text-gray-700 hover:text-blue-600"
                    >
                      <div className="font-medium">{category.title}</div>
                      {(category.subItems || category.title === "Indio Cloud" || category.title === "Indio Connect") && <span className="text-gray-400">›</span>}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* MIDDLE COLUMN - Category Description and Sub Items */}
            <div className="bg-white p-4 border-r border-gray-200 shadow-sm max-h-[60vh] overflow-y-auto">
              {/* Display category description at the top */}
              {activeCategory?.description && (
                <div className="mb-4 p-3 bg-gray-50 rounded-md">
                  <p className="text-sm text-gray-700">{activeCategory.description}</p>
                </div>
              )}
              
              {/* Display sub items if they exist */}
              {activeCategory?.subItems && activeCategory.subItems.map((subItem, i) => (
                <div key={i}>
                  <Link
                    href={subItem.href}
                    onMouseEnter={() => setHoveredSubItem(subItem.title)}
                    className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                  >
                    <div className="flex items-center justify-between">
                      <span>{subItem.title}</span>
                      {subItem.subItems && <span className="text-gray-400">›</span>}
                    </div>
                  </Link>
                  {/* Display nested sub items on hover */}
                  {subItem.subItems && hoveredSubItem === subItem.title && (
                    <div className="pl-4 border-l border-gray-200 ml-2 my-1">
                      {subItem.subItems.map((nestedItem, j) => (
                        <Link
                          key={j}
                          href={nestedItem.href}
                          className="block py-1 text-sm text-gray-500 hover:text-blue-600"
                        >
                          {nestedItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* RIGHT COLUMN - Content/Image */}
            <div className="flex flex-col gap-0">
              <div className="bg-white p-4 border border-gray-200 shadow-sm rounded-md">
                <img
                  src={hoveredSubItem ? getNetworkingImage(hoveredSubItem) : getNetworkingImage(activeCategory?.title || networkingCategories[0].title)}
                  alt={hoveredSubItem || activeCategory?.title || networkingCategories[0].title}
                  className="w-full h-48 object-contain"
                />
              </div>

              {/* NETWORKING OVERVIEW */}
              <div className="w-full max-w-sm bg-white p-5 border border-gray-100 shadow-sm mt-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {hoveredSubItem || activeCategory?.title || networkingCategories[0].title}
                </h3>
                <p className="text-sm text-gray-700">
                  {getNetworkingContent(hoveredSubItem || activeCategory?.title || networkingCategories[0].title)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}