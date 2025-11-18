"use client";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function NavIL3P24021Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Product Header */}
      <div className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              10G uplink 24-port L3 managed industrial PoE - NAV-I-L3-P24-021
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              The NAV-I-L3-P24-021 is a 10G uplink, 24-port L3 managed industrial PoE switch offering high reliability, robust performance, and seamless connectivity for industrial networking environments.
            </p>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <main className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <img 
                  src="/slide-1.jpg" 
                  alt="10G uplink 24-port L3 managed industrial PoE - NAV-I-L3-P24-021" 
                  className="w-full h-64 object-contain"
                />
              </div>
            </div>
            
            {/* Product Specifications */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Specifications</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="font-medium text-gray-900 w-48">Model:</span>
                    <span className="text-gray-700">NAV-I-L3-P24-021</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-900 w-48">Ports:</span>
                    <span className="text-gray-700">24-port</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-900 w-48">Uplink:</span>
                    <span className="text-gray-700">10G</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-900 w-48">Management:</span>
                    <span className="text-gray-700">L3 managed</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-900 w-48">Type:</span>
                    <span className="text-gray-700">Industrial PoE</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-900 w-48">Environment:</span>
                    <span className="text-gray-700">Industrial networking</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    High reliability for industrial environments
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Robust performance under demanding conditions
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Seamless connectivity for industrial networking
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Product Description */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Overview</h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                The NAV-I-L3-P24-021 is a 10G uplink, 24-port L3 managed industrial PoE switch designed specifically for 
                industrial networking environments. This switch offers high reliability and robust performance, making it 
                ideal for demanding applications where consistent connectivity is crucial.
              </p>
              <p>
                With its 24 ports and 10G uplink capability, this switch provides ample connectivity for various industrial 
                devices while ensuring high-speed data transmission. The L3 management capabilities allow for advanced 
                network configuration and optimization.
              </p>
              <p>
                Built to withstand harsh industrial conditions, the NAV-I-L3-P24-021 ensures seamless connectivity and 
                reliable operation in challenging environments.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}