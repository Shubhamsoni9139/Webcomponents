import React, { useState, useEffect } from "react";
import { Code, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
const Toast = ({ message, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
  >
    <Check size={16} className="text-green-500" />
    {message}
  </motion.div>
);

const PreviewSection = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Content Section */}
        <div className="flex-1 space-y-6">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Your favourite{" "}
            <motion.span
              className="inline-block px-2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent bg-[length:200%_100%]"
              animate={{
                backgroundPosition: ["200% center", "-200% center"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              productivity tool
            </motion.span>{" "}
            is now available for{" "}
            <span className="relative inline-block">
              mobile
              <motion.svg
                className="absolute -bottom-2 w-full"
                viewBox="0 0 100 10"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <motion.path
                  d="M 0 5 Q 25 0, 50 5 Q 75 10, 100 5"
                  fill="none"
                  stroke="#FFD700"
                  strokeWidth="2"
                  className="stroke-[3]"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: [0, 1],
                    pathOffset: [0, 0.2],
                  }}
                  transition={{
                    duration: 1,
                    times: [0, 1],
                    delay: 0.5,
                  }}
                />
                <motion.path
                  d="M 0 5 Q 25 10, 50 5 Q 75 0, 100 5"
                  fill="none"
                  stroke="#FFD700"
                  strokeWidth="2"
                  className="stroke-[3]"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: [0, 1],
                    pathOffset: [0, -0.2],
                  }}
                  transition={{
                    duration: 1,
                    times: [0, 1],
                    delay: 0.7,
                  }}
                />
              </motion.svg>
            </span>
          </motion.h1>

          <motion.p
            className="text-gray-400 text-base md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Breakui AI brings you the best productivity tools for your desktop,
            now available on mobile. Download the app now to avail additional
            20% discount and take your productivity to the next level.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get the app
            </motion.button>
            <motion.button
              className="border border-gray-600 px-6 py-3 rounded-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Read changelog
            </motion.button>
          </motion.div>
        </div>

        {/* Phone Mockup */}
        <motion.div
          className="w-[300px] h-[600px] bg-gray-900 rounded-[40px] p-6 relative overflow-hidden shrink-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[25px] bg-black rounded-b-[20px]" />

          {/* Screen Content */}
          <div className="h-full bg-gray-800 rounded-[30px] p-4 overflow-hidden">
            <div className="space-y-3">
              <div className="bg-gray-700 p-3 rounded-lg text-sm">
                Hey! Please show me my latest images from my latest trip.
              </div>

              <div className="bg-gray-700 p-3 rounded-lg text-sm">
                Sure, here are the latest images from your trip to the island of
                deez nuts.
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [-5, 0, -5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1731902062633-1496d7bcf95c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt={`Travel image ${i}`}
                      className="w-full h-[100px] object-cover rounded-lg"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const NavLink = ({ children }) => (
  <button className="text-gray-300 hover:text-white transition-colors">
    {children}
  </button>
);

const CodeView = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const codeString = `
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-950">
      {/* Background Pattern & Image */}
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-800/20 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M.5 40V.5H40"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid-pattern)" />
      </svg>
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-8 h-8 bg-indigo-500 rounded"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <NavLink>Product</NavLink>
              <NavLink>Features</NavLink>
              <NavLink>Marketplace</NavLink>
              <NavLink>Company</NavLink>
            </div>
            <button className="bg-transparent hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors">
              Log in →
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative">
        {/* Announcement Banner */}
        <div className="text-center py-4 mt-16">
          <span className="text-gray-400 text-sm">
            Announcing our next round of funding.{" "}
            <button className="text-indigo-400 hover:text-indigo-300 transition-colors">
              Read more →
            </button>
          </span>
        </div>

        {/* Hero Content */}
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Data to enrich your online business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Get started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-white px-6 py-3 rounded-lg transition-colors"
              >
                Learn more →
              </motion.button>
            </div>
          </motion.div>
          
          {/* Project App Screenshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"
          >
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <img
                src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
                alt="App screenshot"
                className="w-[76rem] rounded-xl shadow-2xl ring-1 ring-gray-400/10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const NavLink = ({ children }) => (
  <button className="text-gray-300 hover:text-white transition-colors">
    {children}
  </button>
);

export default HeroSection;
`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setIsCopied(true);
      setShowToast(true);
      setTimeout(() => {
        setIsCopied(false);
        setShowToast(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-gray-300 p-6 rounded-lg pt-20 relative"
    >
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm">HeroSection.jsx</span>
        <button
          onClick={handleCopy}
          className="p-2 hover:bg-gray-800 rounded transition-colors flex items-center gap-2"
        >
          {isCopied ? (
            <Check size={16} className="text-green-500" />
          ) : (
            <Copy size={16} />
          )}
          {isCopied ? "Copied!" : "Copy code"}
        </button>
      </div>
      <motion.pre
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="overflow-x-auto"
      >
        <code>{codeString}</code>
      </motion.pre>

      <AnimatePresence>
        {showToast && (
          <Toast
            message="Code copied to clipboard!"
            onClose={() => setShowToast(false)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Herosix = () => {
  const [activeView, setActiveView] = useState("preview");

  return (
    <div className="min-h-screen bg-black text-gray-200 pt-10">
      {/* Navigation */}
      <nav className="p-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveView("preview")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeView === "preview" ? "bg-gray-800" : "hover:bg-gray-800"
              }`}
            >
              Preview
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveView("code")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeView === "code" ? "bg-gray-800" : "hover:bg-gray-800"
              }`}
            >
              <Code className="inline mr-2" size={16} />
              Code
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-4">
        {activeView === "preview" ? <PreviewSection /> : <CodeView />}
      </div>
    </div>
  );
};

export default Herosix;
