import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
const CrystalBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-black">
        {/* Crystal grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Crystalline shapes */}
        {[...Array(20)].map((_, i) => {
          const size = 100 + Math.random() * 200;
          const rotation = Math.random() * 360;
          const initialX = Math.random() * 100;
          const initialY = Math.random() * 100;

          return (
            <div
              key={i}
              className="absolute opacity-5"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${initialX}%`,
                top: `${initialY}%`,
                transform: `rotate(${rotation}deg)`,
                background: `linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)`,
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
const AnimatedText = ({ children, delay = "0" }) => {
  const letters = children.split("");

  return (
    <span className="inline-block overflow-hidden">
      {letters.map((letter, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-300 hover:opacity-0 hover:translate-y-[-10px] hover:scale-110"
          style={{
            transitionDelay: `${index * 50}ms`,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  );
};

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center p-8 mt-20">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(#333 1px, transparent 1px),
          linear-gradient(90deg, #333 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <CrystalBackground />
      <div className="relative max-w-6xl mx-auto">
        {/* Small Highlight Text */}
        <div className="mb-6">
          <span className="group px-4 py-2 rounded-full border border-gray-800 text-sm text-gray-400 inline-flex items-center gap-2 cursor-pointer hover:border-gray-700 transition-colors">
            <span className="overflow-hidden inline-block">
              <span className="inline-block transition-transform duration-300 group-hover:translate-y-[-100%]">
                Introducing Proactiv Template
              </span>
            </span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>

        {/* Main Heading */}
        <div className="space-y-8 mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            <AnimatedText>Make your</AnimatedText>
            <br />
            <AnimatedText>websites look</AnimatedText>
            <br />
            <AnimatedText>10x better</AnimatedText>
          </h1>
          <p className="relative text-xl text-gray-400 max-w-2xl overflow-hidden group cursor-default">
            <span className="inline-block transition-transform duration-500 group-hover:translate-y-[-100%] group-hover:opacity-0">
              Copy paste the most trending components and use them in your
              websites without having to worry about styling and animations.
            </span>
            <span className="absolute top-0 left-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0">
              Discover a collection of beautiful, ready-to-use components that
              will transform your web development workflow.
            </span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative px-8 py-4 rounded-full bg-white text-black font-medium overflow-hidden"
          >
            <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-y-[-100%]">
              Browse Components
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button className="group px-8 py-4 rounded-full bg-gray-900 text-white font-medium border border-gray-800 overflow-hidden">
            <span className="inline-block transition-transform duration-300 group-hover:translate-y-[-100%]">
              Custom Components
            </span>
          </button>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
};

export default HeroSection;
