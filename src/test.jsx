import React from "react";

const CustomButton = ({ children, className = "" }) => (
  <button
    className={`bg-teal-400 text-black px-6 py-2 rounded-full flex items-center gap-2 hover:bg-teal-500 transition-colors ${className}`}
  >
    {children}
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 12h14m-7-7l7 7-7 7" />
    </svg>
  </button>
);

const Test = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center">
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="black" />
              <text
                x="50%"
                y="50%"
                fontSize="20"
                fill="white"
                textAnchor="middle"
                dy=".3em"
              >
                FP
              </text>
            </svg>
          </div>
          <div className="text-sm uppercase tracking-wider">
            <div className="font-bold">FIVE PATHWAYS</div>
            <div>FINANCIAL</div>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <a href="#" className="text-gray-700 hover:text-black">
            My Guide
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Enlighten
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Services
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Products
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Education
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Virtual Office
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            About
          </a>
          <CustomButton>Schedule a meeting</CustomButton>
          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl">
            ?
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 pt-20 relative">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-serif mb-6">
            A retirement roadmap for everyone.
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Retirement is a journey. Take it with confidence.
          </p>
          <CustomButton>Schedule a meeting</CustomButton>
        </div>

        {/* Illustration as background */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-transparent to-amber-50/30">
          <div className="relative h-full">
            {/* This would be where you'd place your SVG illustrations */}
            <div className="absolute bottom-0 right-0 bg-white rounded-lg p-4 shadow-lg">
              <div className="text-center mb-2">Chat with</div>
              <div className="text-3xl font-serif mb-4">Angie</div>
              <img
                src="/api/placeholder/60/60"
                alt="Chat Assistant"
                className="rounded-full mx-auto mb-4"
              />
              <CustomButton className="w-full justify-center">
                Let's Chat!
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
