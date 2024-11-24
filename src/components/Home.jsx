import React, { useState, useEffect } from "react";
import { ChevronRight, Code, Package, Zap, Shield, Star } from "lucide-react";

const StarBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => {
        const animationDuration = 15 + Math.random() * 10;
        const size = Math.random() * 2;
        const initialX = Math.random() * 100;
        const initialY = Math.random() * 100;

        return (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-70 animate-twinkle"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${initialX}%`,
              top: `${initialY}%`,
              animation: `twinkle ${animationDuration}s linear infinite`,
              animationDelay: `${Math.random() * -15}s`,
            }}
          />
        );
      })}
    </div>
  );
};

const LandingPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showDemo, setShowDemo] = useState(false);
  const [activeSection, setActiveSection] = useState("components");

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

  const handleBrowseComponents = () => {
    setActiveSection("components");
    document
      .getElementById("components-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  const handleViewDemo = () => {
    setShowDemo(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <style>
        {`
          @keyframes twinkle {
            0% { transform: translateY(0) scale(1); opacity: 0.7; }
            50% { transform: translateY(-500px) scale(1.2); opacity: 0.9; }
            100% { transform: translateY(-1000px) scale(1); opacity: 0.7; }
          }
          .animate-twinkle {
            will-change: transform, opacity;
          }
        `}
      </style>

      <StarBackground />

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 relative">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Premium Web Components
          </h1>
          <p className="text-xl text-gray-300">
            Build beautiful websites faster with our pre-built components
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleBrowseComponents}
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
            >
              Browse Components <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleViewDemo}
              className="border border-gray-600 hover:border-gray-500 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              View Demo
            </button>
          </div>
          {showDemo && (
            <div className="mt-8 p-4 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Live Demo</h3>
              <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
                <p>Demo Content Would Appear Here</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-all duration-200 border border-gray-700 backdrop-blur-sm"
            >
              <div className="bg-blue-500/20 p-3 rounded-lg w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Components Preview */}
      <div
        id="components-section"
        className="container mx-auto px-4 py-16 relative"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          Popular Components
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {components.map((component, index) => (
            <div
              key={index}
              className={`bg-gray-800/50 rounded-xl p-6 border border-gray-700 transition-all duration-300 backdrop-blur-sm ${
                hoveredCard === index ? "transform -translate-y-2" : ""
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
                    className="bg-gray-700 px-3 py-1 rounded-full text-sm"
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

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 relative">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center backdrop-blur-sm">
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
