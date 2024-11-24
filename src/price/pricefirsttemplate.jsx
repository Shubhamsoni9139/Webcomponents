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
const PricingCard = ({ plan, price, description, isPopular }) => {
  return (
    <div
      className={`relative rounded-2xl p-6 ${
        isPopular ? "bg-black text-white" : "bg-white"
      }`}
    >
      {/* Enhanced gradient effect for the popular plan */}
      {isPopular && (
        <>
          <div className="absolute -inset-[2px] -z-10 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 opacity-75 blur-md animate-pulse" />
          <div className="absolute -inset-[1px] -z-10 rounded-2xl bg-gradient-to-r from-rose-400 via-purple-500 to-cyan-500 opacity-75 blur-sm" />
        </>
      )}

      <h3
        className={`text-xl font-semibold ${!isPopular ? "text-gray-900" : ""}`}
      >
        {plan}
      </h3>
      <div className="mt-4 mb-6">
        <span
          className={`text-5xl font-bold ${!isPopular ? "text-gray-900" : ""}`}
        >
          ${price}
        </span>
      </div>

      <p
        className={`text-sm mb-6 ${
          isPopular ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {description}
      </p>

      <button
        className={`w-full rounded-lg py-2.5 px-4 text-center font-semibold transition-colors ${
          isPopular
            ? "bg-white text-black hover:bg-gray-100"
            : "bg-black text-white hover:bg-gray-800"
        }`}
      >
        Get Started
      </button>

      <div className="mt-8">
        <p className={`font-medium mb-4 ${!isPopular ? "text-gray-900" : ""}`}>
          What's included:
        </p>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <span className={isPopular ? "text-gray-300" : "text-gray-600"}>
              130+ Coded Blocks
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className={isPopular ? "text-gray-300" : "text-gray-600"}>
              Best for Developers, Freelancers
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className={isPopular ? "text-gray-300" : "text-gray-600"}>
              Made with TailwindCSS
            </span>
          </li>
          {isPopular && (
            <>
              <li className="flex items-center gap-2">
                <span className="text-gray-300">Premium Support</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-300">Future Updates</span>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

const PreviewSection = () => {
  const plans = [
    {
      plan: "Basic",
      price: "99",
      description:
        "Best for small business owners, startups who needs landing page for their business.",
      isPopular: false,
    },
    {
      plan: "Premium",
      price: "199",
      description:
        "Best for medium business owners, startups who needs landing page for their business.",
      isPopular: true,
    },
    {
      plan: "Enterprise",
      price: "399",
      description:
        "Best for large companies, business owners who needs landing page for their business.",
      isPopular: false,
    },
  ];

  return (
    <div className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12 mt-20">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Make the wise decision
            <br />
            for your business
          </h2>
          <p className="text-gray-400">Choose from our affordable 3 packages</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent blur-xl" />

          {plans.map((plan, index) => (
            <div key={index} className="relative">
              <PricingCard
                plan={plan.plan}
                price={plan.price}
                description={plan.description}
                isPopular={plan.isPopular}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CodeView = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const codeString = `import React from 'react';

const PricingCard = ({ plan, price, description, isPopular }) => {
  return (
    <div
      className={\`relative rounded-2xl p-6 \${isPopular ? "bg-black text-white" : "bg-white"}\`}
    >
      {/* Enhanced gradient effect for the popular plan */}
      {isPopular && (
        <>
          <div className="absolute -inset-[2px] -z-10 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 opacity-75 blur-md animate-pulse" />
          <div className="absolute -inset-[1px] -z-10 rounded-2xl bg-gradient-to-r from-rose-400 via-purple-500 to-cyan-500 opacity-75 blur-sm" />
        </>
      )}

      <h3 className={\`text-xl font-semibold \${!isPopular ? "text-gray-900" : ""}\`}>
        {plan}
      </h3>
      <div className="mt-4 mb-6">
        <span className={\`text-5xl font-bold \${!isPopular ? "text-gray-900" : ""}\`}>
          \${price}
        </span>
      </div>

      <p className={\`text-sm mb-6 \${isPopular ? "text-gray-300" : "text-gray-600"}\`}>
        {description}
      </p>

      <button
        className={\`w-full rounded-lg py-2.5 px-4 text-center font-semibold transition-colors \${isPopular ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-800"}\`}
      >
        Get Started
      </button>

      <div className="mt-8">
        <p className={\`font-medium mb-4 \${!isPopular ? "text-gray-900" : ""}\`}>
          What's included:
        </p>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <span className={isPopular ? "text-gray-300" : "text-gray-600"}>
              130+ Coded Blocks
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className={isPopular ? "text-gray-300" : "text-gray-600"}>
              Best for Developers, Freelancers
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className={isPopular ? "text-gray-300" : "text-gray-600"}>
              Made with TailwindCSS
            </span>
          </li>
          {isPopular && (
            <>
              <li className="flex items-center gap-2">
                <span className="text-gray-300">Premium Support</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-300">Future Updates</span>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

const Test = () => {
  const plans = [
    {
      plan: "Basic",
      price: "99",
      description:
        "Best for small business owners, startups who needs landing page for their business.",
      isPopular: false,
    },
    {
      plan: "Premium",
      price: "199",
      description:
        "Best for medium business owners, startups who needs landing page for their business.",
      isPopular: true,
    },
    {
      plan: "Enterprise",
      price: "399",
      description:
        "Best for large companies, business owners who needs landing page for their business.",
      isPopular: false,
    },
  ];

  return (
    <div className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12 mt-20">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Make the wise decision
            <br />
            for your business
          </h2>
          <p className="text-gray-400">Choose from our affordable 3 packages</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent blur-xl" />
          
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              <PricingCard
                plan={plan.plan}
                price={plan.price}
                description={plan.description}
                isPopular={plan.isPopular}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
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

const Pricetemplatefirst = () => {
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

export default Pricetemplatefirst;
