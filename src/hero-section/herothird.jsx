import React, { useState, useEffect } from "react";
import { Code, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
const CodePreview = () => (
  <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
    <div className="flex items-center px-4 py-2 bg-gray-800/50">
      <div className="text-sm text-gray-400">NotificationSetting.jsx</div>
      <div className="ml-2 px-2 py-1 text-xs bg-gray-700/50 rounded text-gray-400">
        App.jsx
      </div>
    </div>
    <pre className="p-4 text-sm leading-relaxed">
      <code className="text-gray-300 font-mono">
        <span className="text-purple-400">import</span>
        <span className="text-gray-300"> {useState} </span>
        <span className="text-purple-400">from</span>
        <span className="text-green-400"> 'react'</span>
        {"\n"}
        <span className="text-purple-400">import</span>
        <span className="text-gray-300"> Switch </span>
        <span className="text-purple-400">from</span>
        <span className="text-green-400"> '@headlessui/react'</span>
        {"\n\n"}
        <span className="text-purple-400">function</span>
        <span className="text-blue-400"> Example</span>
        <span className="text-gray-300">() {"{}"}</span>
        {"\n  "}
        <span className="text-purple-400">const</span>
        <span className="text-gray-300">
          {" "}
          [enabled, setEnabled] = useState(
        </span>
        <span className="text-orange-400">true</span>
        <span className="text-gray-300">)</span>
        {"\n\n  "}
        <span className="text-purple-400">return</span>
        <span className="text-gray-300"> (</span>
        {"\n    "}
        <span className="text-blue-400">{"<form"}</span>
        <span className="text-gray-300"> action=</span>
        <span className="text-green-400">"notification-settings"</span>
        <span className="text-gray-300"> method=</span>
        <span className="text-green-400">"post"</span>
        <span className="text-blue-400">{">"}</span>
        {"\n      "}
        <span className="text-blue-400">{"<Switch"}</span>
        {"\n        "}
        <span className="text-gray-300">checked=enabled</span>
        {"\n        "}
        <span className="text-gray-300">onChange=setEnabled</span>
        {"\n        "}
        <span className="text-gray-300">name=</span>
        <span className="text-green-400">"notifications"</span>
        <span className="text-blue-400">{">"}</span>
        {"\n        "}
        <span className="text-gray-400">{"/* ... */"}</span>
        {"\n      "}
        <span className="text-blue-400">{"</Switch>"}</span>
        {"\n      "}
        <span className="text-blue-400">{"<button"}</span>
        <span className="text-gray-300">Submit</span>
        <span className="text-blue-400">{"</button>"}</span>
        {"\n    "}
        <span className="text-blue-400">{"</form>"}</span>
        {"\n  "}
        <span className="text-gray-300">)</span>
        {"\n"}
        <span className="text-gray-300">{"}"}</span>
      </code>
    </pre>
  </div>
);

const PreviewSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Navigation */}
        <nav className="flex items-center justify-between py-6">
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-8 h-8 bg-indigo-600 rounded"
            />
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">What's new</span>
            <div className="flex items-center text-sm text-gray-600">
              <span>Just shipped v0.1.0</span>
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="lg:flex lg:items-center lg:justify-between py-16">
          <div className="lg:w-1/2 lg:pr-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl font-bold text-gray-900 leading-tight">
                Supercharge your web app
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo.
              </p>
              <div className="mt-10 flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Documentation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-600 flex items-center space-x-2 hover:text-gray-900 transition-colors"
                >
                  <span>View on GitHub</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Code Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 lg:mt-0 lg:w-1/2"
          >
            <div className="transform rotate-2">
              <CodePreview />
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

const Herothird = () => {
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

export default Herothird;
