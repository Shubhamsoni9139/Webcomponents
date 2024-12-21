import React, { useState, useEffect } from "react";
import { ChevronRight, Code, Package, Zap, Shield, Star } from "lucide-react";
import TestimonialsGrid from "./TestimonialsGrid";
import HeroSection from "./HeroSection";
import { Link } from "react-router-dom";
// Animated Falling Balls Component
const FallingBalls = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => {
        const size = 4 + Math.random() * 8;
        const initialX = Math.random() * 100;
        const duration = 15 + Math.random() * 20;
        const delay = Math.random() * -20;

        return (
          <div
            key={i}
            className="absolute rounded-full animate-fall"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${initialX}%`,
              top: "-20px",
              animation: `fall ${duration}s linear infinite`,
              animationDelay: `${delay}s`,
              background:
                "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(255,255,255,0.1))",
              boxShadow: "0 0 10px rgba(255,255,255,0.3)",
            }}
          />
        );
      })}
      <style>
        {`
          @keyframes fall {
            0% {
              transform: translateY(-20px) scale(1);
              opacity: 0;
            }
            10% {
              opacity: 0.8;
            }
            90% {
              opacity: 0.8;
            }
            100% {
              transform: translateY(100vh) scale(0.5);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

// Crystal Background Component
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

        {/* Crystalline shapes with glowing lines */}
        {[...Array(20)].map((_, i) => {
          const size = 100 + Math.random() * 200;
          const rotation = Math.random() * 360;
          const initialX = Math.random() * 100;
          const initialY = Math.random() * 100;

          return (
            <div
              key={i}
              className="absolute opacity-20"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${initialX}%`,
                top: `${initialY}%`,
                transform: `rotate(${rotation}deg)`,
                background: `linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)`,
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                boxShadow: `
                  0 0 15px rgba(255, 255, 255, 0.5), 
                  0 0 30px rgba(255, 255, 255, 0.4), 
                  0 0 45px rgba(255, 255, 255, 0.3),
                  0 0 60px rgba(0, 128, 255, 0.2)`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const LandingPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showDemo, setShowDemo] = useState(false);

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Ready-to-Use Components",
      description:
        "Drop-in solutions for your next web project. Save hours of development time.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "High Performance",
      description:
        "Optimized for speed and efficiency. Built with modern best practices.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Tested",
      description:
        "Every component thoroughly tested and regularly updated for security.",
    },
  ];

  const components = [
    {
      id: 1,
      title: "Dashboard UI Kit",
      tags: ["Admin", "Dashboard", "Charts"],
      stars: 4.8,
    },
    {
      id: 2,
      title: "E-commerce Bundle",
      tags: ["Shop", "Cart", "Checkout"],
      stars: 4.9,
    },
    {
      id: 3,
      title: "Authentication Pack",
      tags: ["Login", "Register", "OAuth"],
      stars: 4.7,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <CrystalBackground />
      <FallingBalls />
      <div className="container mx-auto px-4 py-16 pt-20 mt-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
            Premium Web Components
          </h1>
          <p className="text-xl text-gray-300">
            Build beautiful websites faster with our pre-built components
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/components">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 backdrop-blur-sm">
                Browse Components <ChevronRight className="w-4 h-4" />
              </button>
            </Link>

            <Link to="/components">
              <button className="backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/10 px-6 py-3 rounded-lg font-medium transition-all duration-200">
                View Demo
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section with crystal cards */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all duration-200 border border-white/10"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3 rounded-lg w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Components Preview with enhanced glass effect */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">
          Popular Components
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {components.map((component, index) => (
            <div
              key={index}
              className={`backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10 transition-all duration-300 ${
                hoveredCard === index
                  ? "transform -translate-y-2 bg-white/10"
                  : ""
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{component.title}</h3>
              </div>
              <div className="flex gap-2 mb-4 flex-wrap">
                {component.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white/10 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{component.stars}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-3xl font-bold text-center mb-12">
        What Our Users Say
      </h2>
      <TestimonialsGrid />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="backdrop-blur-xl bg-gradient-to-r from-black-100 to-black-600 rounded-2xl p-12 text-center border border-white/10">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Faster?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of developers using our components to build amazing
            websites
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
