import React, { useState } from "react";
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
const PricingCard = ({ tier, price, features }) => (
  <div className="bg-zinc-950/70 backdrop-blur text-white border border-zinc-800 rounded-2xl w-full max-w-sm relative z-10 overflow-hidden">
    {/* Header */}
    <div className="p-6 border-b border-zinc-800">
      <div className="text-sm text-zinc-400">{tier}</div>
      <div className="text-3xl font-bold mt-1">{price}</div>
    </div>

    {/* Content */}
    <div className="p-6 space-y-6">
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <Check className="h-4 w-4 text-green-500" />
            <span className="text-sm text-zinc-400">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200
          ${
            tier === "Standard Plan"
              ? "bg-white text-black hover:bg-gray-200"
              : "bg-zinc-800 text-white hover:bg-zinc-700"
          }`}
      >
        Get Started
      </button>
    </div>
  </div>
);
const ToggleSwitch = ({ checked, onChange }) => (
  <label className="relative inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      className="sr-only peer"
      checked={checked}
      onChange={onChange}
    />
    <div
      className="w-11 h-6 bg-zinc-800 peer-focus:outline-none rounded-full peer 
                    peer-checked:after:translate-x-full peer-checked:after:border-white 
                    after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                    after:bg-white after:rounded-full after:h-5 after:w-5 
                    after:transition-all"
    ></div>
  </label>
);

const PreviewSection = () => {
  const [billedYearly, setBilledYearly] = useState(false);
  const pricingData = [
    {
      tier: "Free Plan",
      price: "Free",
      features: [
        "Send up to 2 transfers per month",
        "Basic transaction history",
        "Email support",
        "Limited currency support (USD, EUR, GBP)",
        "Basic security features",
      ],
    },
    {
      tier: "Standard Plan",
      price: billedYearly ? "$99.99/y" : "$9.99/m",
      features: [
        "Unlimited transfers",
        "Transaction history with export options",
        "Priority email support",
        "Expanded currency support",
        "Advanced security features",
      ],
    },
    {
      tier: "Pro Plan",
      price: billedYearly ? "$199.99/y" : "$19.99/m",
      features: [
        "Unlimited transfers with priority processing",
        "Comprehensive transaction analytics",
        "24/7 priority support",
        "Full currency support",
        "Enhanced security features",
      ],
    },
  ];
  return (
    <div className="min-h-screen bg-black p-8 relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
        <h1 className="text-[20vw] font-bold text-white select-none">
          Pricing
        </h1>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-40">
          {pricingData.map((plan) => (
            <PricingCard key={plan.tier} {...plan} />
          ))}
        </div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center space-x-3 text-zinc-400 relative z-10 mt-6">
          <span>Billed Yearly</span>
          <ToggleSwitch
            checked={billedYearly}
            onChange={(e) => setBilledYearly(e.target.checked)}
          />
        </div>
      </div>
    </div>
  );
};

const CodeView = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const codeString = `import React, { useState } from "react";
import { Check } from "lucide-react";

const PricingCard = ({ tier, price, features }) => (
  <div className="bg-zinc-950/70 backdrop-blur text-white border border-zinc-800 rounded-2xl w-full max-w-sm relative z-10 overflow-hidden">
    {/* Header */}
    <div className="p-6 border-b border-zinc-800">
      <div className="text-sm text-zinc-400">{tier}</div>
      <div className="text-3xl font-bold mt-1">{price}</div>
    </div>

    {/* Content */}
    <div className="p-6 space-y-6">
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <Check className="h-4 w-4 text-green-500" />
            <span className="text-sm text-zinc-400">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={\`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200
          \${tier === "Standard Plan" ? "bg-white text-black hover:bg-gray-200" : "bg-zinc-800 text-white hover:bg-zinc-700"}\`}
      >
        Get Started
      </button>
    </div>
  </div>
);

const ToggleSwitch = ({ checked, onChange }) => (
  <label className="relative inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      className="sr-only peer"
      checked={checked}
      onChange={onChange}
    />
    <div
      className="w-11 h-6 bg-zinc-800 peer-focus:outline-none rounded-full peer 
                    peer-checked:after:translate-x-full peer-checked:after:border-white 
                    after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                    after:bg-white after:rounded-full after:h-5 after:w-5 
                    after:transition-all"
    ></div>
  </label>
);

const Test = () => {
  const [billedYearly, setBilledYearly] = useState(false);

  const pricingData = [
    {
      tier: "Free Plan",
      price: "Free",
      features: [
        "Send up to 2 transfers per month",
        "Basic transaction history",
        "Email support",
        "Limited currency support (USD, EUR, GBP)",
        "Basic security features",
      ],
    },
    {
      tier: "Standard Plan",
      price: billedYearly ? "$99.99/y" : "$9.99/m",
      features: [
        "Unlimited transfers",
        "Transaction history with export options",
        "Priority email support",
        "Expanded currency support",
        "Advanced security features",
      ],
    },
    {
      tier: "Pro Plan",
      price: billedYearly ? "$199.99/y" : "$19.99/m",
      features: [
        "Unlimited transfers with priority processing",
        "Comprehensive transaction analytics",
        "24/7 priority support",
        "Full currency support",
        "Enhanced security features",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black p-8 relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
        <h1 className="text-[20vw] font-bold text-white select-none">
          Pricing
        </h1>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-40">
          {pricingData.map((plan) => (
            <PricingCard key={plan.tier} {...plan} />
          ))}
        </div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center space-x-3 text-zinc-400 relative z-10 mt-6">
          <span>Billed Yearly</span>
          <ToggleSwitch
            checked={billedYearly}
            onChange={(e) => setBilledYearly(e.target.checked)}
          />
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
        <span className="text-sm">Pricetemplate.jsx</span>
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

const Pricetemplatesecond = () => {
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

export default Pricetemplatesecond;
