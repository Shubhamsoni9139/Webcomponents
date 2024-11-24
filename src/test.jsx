import React, { useState } from "react";
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
