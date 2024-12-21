import React, { useState, useEffect } from "react";
import { Code, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Twitter } from "lucide-react";

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
const Tweet = ({ author, username, content, verified = false }) => (
  <div className="bg-zinc-900 rounded-xl p-6 break-words transform transition-all hover:scale-[1.02] cursor-pointer">
    <div className="flex items-center gap-3 mb-4">
      <div className="relative">
        <img
          src="https://static.vecteezy.com/system/resources/previews/028/148/762/large_2x/young-man-animation-style-illustration-free-photo.jpg"
          alt={author}
          className="w-10 h-10 rounded-full"
        />
        {verified && (
          <div className="absolute -right-1 -bottom-1 bg-blue-500 rounded-full p-[2px]">
            <svg
              className="w-3 h-3 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          </div>
        )}
      </div>
      <div>
        <div className="flex items-center gap-1">
          <p className="font-semibold text-white">{author}</p>
          {verified && (
            <svg
              className="w-4 h-4 text-blue-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          )}
        </div>
        <p className="text-sm text-gray-500">@{username}</p>
      </div>
      <Twitter className="w-5 h-5 text-gray-500 ml-auto" />
    </div>
    <p className="text-gray-300 text-sm leading-relaxed">{content}</p>
  </div>
);
const PreviewSection = () => {
  const testimonials = [
    {
      title: "Workflow Revolutionized",
      author: "Aarav Gupta",
      username: "aarav_dev_pro",
      content:
        "Breakui has completely transformed my workflow! The features are intuitive and incredibly powerful. 👊",
      verified: true,
    },
    {
      title: "Game-Changing Features",
      author: "Sneha Reddy",
      username: "sneha_tech_wiz",
      content:
        "Every time I return from a break, I find that Breakui has added new, game-changing features. Truly a hub for innovation! ✨🔥",
      verified: false,
    },
    {
      title: "UI Masterpiece",
      author: "Kabir Mehta",
      username: "kabir_ux_creator",
      content:
        "I just discovered Breakui today, and my mind was blown 🤯! The seamless blend of framer-motion, tailwind CSS, and shacdn is a UI masterpiece.",
      verified: true,
    },
    {
      title: "Portfolio Enhancement",
      author: "Ishita Sharma",
      username: "ishita_design_hub",
      content:
        "I integrated Breakui into my portfolio, and the design elements are top-notch. Highly recommend it to every developer looking to elevate their UI! 💻✨",
      verified: true,
    },
    {
      title: "Next-Level Innovation",
      author: "Rohan Verma",
      username: "rohan_innovates",
      content: "Breakui is next level! 🚀",
      verified: true,
    },
    {
      title: "Sleek & Functional",
      author: "Zara Khan",
      username: "zara_dev_creative",
      content:
        "The new updates from Breakui are just amazing. Looks incredibly sleek and functional 👌",
      verified: false,
    },
  ];
  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((tweet, index) => (
          <div
            key={index}
            className={`${index === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
          >
            <Tweet {...tweet} />
          </div>
        ))}
      </div>
    </div>
  );
};

const CodeView = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const codeString = `
  import React from "react";
  import { Twitter } from "lucide-react";
  
  const Tweet = ({ author, username, content, verified = false }) => (
    <div className="bg-zinc-900 rounded-xl p-6 break-words transform transition-all hover:scale-105 cursor-pointer">
      <div className="flex items-center gap-3 mb-4">
        <div className="relative">
          <img
            src="https://static.vecteezy.com/system/resources/previews/028/148/762/large_2x/young-man-animation-style-illustration-free-photo.jpg"
            alt={author}
            className="w-10 h-10 rounded-full"
          />
          {verified && (
            <div className="absolute -right-1 -bottom-1 bg-blue-500 rounded-full p-[2px]">
              <svg
                className="w-3 h-3 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
            </div>
          )}
        </div>
        <div>
          <div className="flex items-center gap-1">
            <p className="font-semibold text-white">{author}</p>
            {verified && (
              <svg
                className="w-4 h-4 text-blue-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
            )}
          </div>
          <p className="text-sm text-gray-500">@{username}</p>
        </div>
        <Twitter className="w-5 h-5 text-gray-500 ml-auto" />
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">{content}</p>
    </div>
  );
  
  const TestimonialsGrid = () => {
    const testimonials = [
      {
        title: "Workflow Revolutionized",
        author: "Aarav Gupta",
        username: "aarav_dev_pro",
        content:
          "Breakui has completely transformed my workflow! The features are intuitive and incredibly powerful. 👊",
        verified: true,
      },
      {
        title: "Game-Changing Features",
        author: "Sneha Reddy",
        username: "sneha_tech_wiz",
        content:
          "Every time I return from a break, I find that Breakui has added new, game-changing features. Truly a hub for innovation! ✨🔥",
        verified: false,
      },
      {
        title: "UI Masterpiece",
        author: "Kabir Mehta",
        username: "kabir_ux_creator",
        content:
          "I just discovered Breakui today, and my mind was blown 🤯! The seamless blend of framer-motion, tailwind CSS, and shacdn is a UI masterpiece.",
        verified: true,
      },
      {
        title: "Portfolio Enhancement",
        author: "Ishita Sharma",
        username: "ishita_design_hub",
        content:
          "I integrated Breakui into my portfolio, and the design elements are top-notch. Highly recommend it to every developer looking to elevate their UI! 💻✨",
        verified: true,
      },
      {
        title: "Next-Level Innovation",
        author: "Rohan Verma",
        username: "rohan_innovates",
        content: "Breakui is next level! 🚀",
        verified: true,
      },
      {
        title: "Sleek & Functional",
        author: "Zara Khan",
        username: "zara_dev_creative",
        content:
          "The new updates from Breakui are just amazing. Looks incredibly sleek and functional 👌",
        verified: false,
      },
    ];
  
    return (
      <div className="w-full max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((tweet, index) => (
            <div
              key={index}
              className={\`\${
                index === 2 ? "md:col-span-2 lg:col-span-1" : ""
              }\`}
            >
              <Tweet {...tweet} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TestimonialsGrid;
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

const Testimonialstwo = () => {
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

export default Testimonialstwo;
