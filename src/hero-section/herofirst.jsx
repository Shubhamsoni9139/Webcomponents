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

const PreviewSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-8 text-gray-200 pt-20">
      {/* Announcement Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <span className="text-sm text-gray-400">
          Announcing our next round of funding.{" "}
          <button
            onClick={() => alert("Read more")}
            className="text-cyan-400 hover:text-cyan-600 transition-colors"
          >
            Read more →
          </button>
        </span>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div {...fadeIn} className="flex-1 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl font-bold mb-6 text-white"
            >
              Optimize, Outperform with Data
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-gray-400 mb-8 text-lg"
            >
              Save time and money with automated inventory management. Transform
              your online business with powerful data insights.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors">
                Get started
              </button>
              <button className="text-gray-300 px-6 py-3 rounded-lg border border-gray-500 hover:bg-gray-800 transition-colors">
                Learn more →
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <div className="relative">
              <div className="w-full h-[500px] bg-gray-800 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="https://lh7-us.googleusercontent.com/iIS_pCALWqGScsc4M5t3IcZHcFbnSffzfRBXKGdywbzuDe6BwJmQsx72GYdc2KRLRUUPSbIFg98t3FEL_QWeAdiXpg0l1MQpb6FJOiZU0JNlaE1Jr8zDLeCsHl6qdkidePxxLRnFXJT3dMk3U_NuWNA"
                    alt="Mobile app interface"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const CodeView = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const codeString = `import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PreviewSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-8 text-gray-200 pt-20">
      {/* Announcement Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <span className="text-sm text-gray-400">
          Announcing our next round of funding.{" "}
          <a
            href="#"
            className="text-cyan-400 hover:text-cyan-600 transition-colors"
          >
            Read more →
          </a>
        </span>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div {...fadeIn} className="flex-1 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl font-bold mb-6 text-white"
            >
              Optimize, Outperform with Data
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-gray-400 mb-8 text-lg"
            >
              Save time and money with automated inventory management. Transform
              your online business with powerful data insights.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors">
                Get started
              </button>
              <button className="text-gray-300 px-6 py-3 rounded-lg border border-gray-500 hover:bg-gray-800 transition-colors">
                Learn more →
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <div className="relative">
              <div className="w-full h-[500px] bg-gray-800 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/api/placeholder/800/500"
                    alt="Mobile app interface"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};`;

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

const Herofirst = () => {
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

export default Herofirst;
