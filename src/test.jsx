import React, { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Actions is an exciting development and unlocks so much potential beyond CI/CD. It promises to streamline our workflows for a variety of tasks, from deploying our websites to querying the GitHub API for custom status reports to standard CI builds.",
    author: "Ralf Gommers",
    role: "SciPy Maintainer",
  },
  {
    quote:
      "GitHub Actions has revolutionized our deployment process. The integration capabilities and workflow automation have significantly reduced our development cycle time.",
    author: "Sarah Chen",
    role: "DevOps Engineer",
  },
  {
    quote:
      "The flexibility of Actions allows us to create custom workflows that perfectly match our needs. It's been a game-changer for our continuous deployment strategy.",
    author: "Marcus Peterson",
    role: "Lead Developer",
  },
];

const Test = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 200);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0D1117] p-8 relative overflow-hidden">
      {/* Gradient Elements */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#3CDE8C]/20 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#6366F1]/20 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] bg-[#F6E05E]/10 rounded-full filter blur-[100px]"></div>

      {/* Main Content Container */}
      <div className="max-w-[1200px] mx-auto">
        <div className="relative max-w-[800px] mx-auto mt-12">
          {/* Card */}
          <div className="rounded-[20px] bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 p-12">
            {/* Quote Mark */}
            <div className="mb-6">
              <span className="text-[#3CDE8C] text-6xl font-serif leading-none">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </span>
            </div>

            {/* Quote Content */}
            <div
              className={`transition-opacity duration-200 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="space-y-4">
                <p className="text-white text-[28px] font-medium leading-tight">
                  {testimonials[currentIndex].quote.split(".")[0]}.
                </p>
                <p className="text-gray-400 text-xl leading-relaxed">
                  {testimonials[currentIndex].quote
                    .split(".")
                    .slice(1)
                    .join(".")
                    .trim()}
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8">
                <h3 className="text-white font-medium">
                  {testimonials[currentIndex].author}
                </h3>
                <p className="text-gray-400 text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
