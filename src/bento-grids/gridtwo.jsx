import React, { useState, useEffect } from "react";
import { Code, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LineChart, Line, YAxis } from "recharts";
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
const data = [
  { value: 30000 },
  { value: 30000 },
  { value: 35000 },
  { value: 38000 },
  { value: 45000 },
  { value: 42000 },
  { value: 50000 },
];
const PreviewSection = () => {
  return (
    <div className="min-h-screen bg-[#0F0F1A] p-8 relative overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute top-10 left-20 w-96 h-96 bg-purple-600/30 rounded-full blur-[128px]" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-600/30 rounded-full blur-[128px]" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {/* Analytics Card */}
        <div className="group p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-black/30">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <span className="text-gray-400">Advanced analytics data</span>
          </div>

          <h2 className="text-2xl font-bold text-white mb-8">
            Access powerful data to help you boost your business
          </h2>

          <div className="bg-black/30 rounded-2xl p-6">
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-white">$68,900</span>
              <span className="text-sm px-2 py-1 bg-green-500/20 text-green-400 rounded-full">
                +25%
              </span>
            </div>
            <LineChart width={400} height={100} data={data}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#f97316"
                strokeWidth={2}
                dot={false}
              />
              <YAxis hide={true} />
            </LineChart>
          </div>
        </div>

        {/* Support Card */}
        <div className="group p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-black/30">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 18v-6a9 9 0 0118 0v6a3 3 0 01-3 3h-12a3 3 0 01-3-3z"
                />
              </svg>
            </div>
            <span className="text-gray-400">Fantastic support</span>
          </div>

          <h2 className="text-2xl font-bold text-white mb-8">
            24/7 fast chat support
          </h2>

          <div className="bg-black/30 rounded-2xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-600">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
                  alt="Support Avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="bg-white/10 rounded-2xl p-3">
                <p className="text-white">Hey there! I'm here to help. 👋</p>
              </div>
            </div>
          </div>
        </div>

        {/* Integrations Card */}
        <div className="group p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-black/30">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <span className="text-gray-400">Awesome integrations</span>
          </div>

          <h2 className="text-2xl font-bold text-white mb-8">
            Works with your favorite tools
          </h2>

          <div className="flex gap-4">
            {[
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUX5LMRa7atIsNfl0nP3DaUaV4URhV0PHfA&s",
              "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png?20200221181224",
              "https://www.logo.wine/a/logo/Google_Drive/Google_Drive-Logo.wine.svg",
            ].map((imageSrc, index) => (
              <div
                key={index}
                className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-black/30"
              >
                <img
                  src={imageSrc}
                  alt={"Image " + (index + 1)}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Card */}
        <div className="group p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-black/30">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="text-gray-400">Customize newsletters</span>
          </div>

          <h2 className="text-2xl font-bold text-white mb-8">
            We made it simple to create stunning newsletters
          </h2>

          <div className="space-y-4">
            <div className="flex gap-2 items-center">
              <span className="text-gray-400 text-sm">To:</span>
              <button className="bg-black/30 text-white px-3 py-1 rounded-lg text-sm">
                All Contacts ▾
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-gray-400 text-sm">Subject:</span>
              <span className="text-white text-sm">
                Exciting updates are on the way!
              </span>
            </div>
            <div className="bg-black/30 p-4 rounded-xl">
              <div className="text-orange-500 inline-block px-3 py-1 text-sm rounded-lg border border-orange-500/30">
                Monthly updates
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CodeView = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const codeString = `
import React from "react";
import { LineChart, Line, YAxis } from "recharts";

const data = [
  { value: 30000 },
  { value: 30000 },
  { value: 35000 },
  { value: 38000 },
  { value: 45000 },
  { value: 42000 },
  { value: 50000 },
];

const test = () => {
  return (
    <div className="min-h-screen bg-[#0F0F1A] p-8 relative overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute top-10 left-20 w-96 h-96 bg-purple-600/30 rounded-full blur-[128px]" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-600/30 rounded-full blur-[128px]" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {/* Analytics Card */}
        <div className="group p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-black/30">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <span className="text-gray-400">Advanced analytics data</span>
          </div>

          <h2 className="text-2xl font-bold text-white mb-8">
            Access powerful data to help you boost your business
          </h2>

          <div className="bg-black/30 rounded-2xl p-6">
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-white">$68,900</span>
              <span className="text-sm px-2 py-1 bg-green-500/20 text-green-400 rounded-full">
                +25%
              </span>
            </div>
            <LineChart width={400} height={100} data={data}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#f97316"
                strokeWidth={2}
                dot={false}
              />
              <YAxis hide={true} />
            </LineChart>
          </div>
        </div>

        {/* Support Card */}
        <div className="group p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-black/30">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 18v-6a9 9 0 0118 0v6a3 3 0 01-3 3h-12a3 3 0 01-3-3z"
                />
              </svg>
            </div>
            <span className="text-gray-400">Fantastic support</span>
          </div>

          <h2 className="text-2xl font-bold text-white mb-8">
            24/7 fast chat support
          </h2>

          <div className="bg-black/30 rounded-2xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-600">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
                  alt="Support Avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="bg-white/10 rounded-2xl p-3">
                <p className="text-white">Hey there! I'm here to help. 👋</p>
              </div>
            </div>
          </div>
        </div>

        {/* Integrations Card */}
        <div className="group p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-black/30">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <span className="text-gray-400">Awesome integrations</span>
          </div>

          <h2 className="text-2xl font-bold text-white mb-8">
            Works with your favorite tools
          </h2>

          <div className="flex gap-4">
            {[
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUX5LMRa7atIsNfl0nP3DaUaV4URhV0PHfA&s",
              "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png?20200221181224",
              "https://www.logo.wine/a/logo/Google_Drive/Google_Drive-Logo.wine.svg",
            ].map((imageSrc, index) => (
              <div
                key={index}
                className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-black/30"
              >
                <img
                  src={imageSrc}
                  alt={"Image " + (index + 1)}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Card */}
        <div className="group p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-black/30">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="text-gray-400">Customize newsletters</span>
          </div>

          <h2 className="text-2xl font-bold text-white mb-8">
            We made it simple to create stunning newsletters
          </h2>

          <div className="space-y-4">
            <div className="flex gap-2 items-center">
              <span className="text-gray-400 text-sm">To:</span>
              <button className="bg-black/30 text-white px-3 py-1 rounded-lg text-sm">
                All Contacts ▾
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-gray-400 text-sm">Subject:</span>
              <span className="text-white text-sm">
                Exciting updates are on the way!
              </span>
            </div>
            <div className="bg-black/30 p-4 rounded-xl">
              <div className="text-orange-500 inline-block px-3 py-1 text-sm rounded-lg border border-orange-500/30">
                Monthly updates
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default test;
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
        <span className="text-sm">template.jsx</span>
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

const Gridfirst = () => {
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

export default Gridfirst;
