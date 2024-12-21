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
  const [activeIndex, setActiveIndex] = useState(0);

  // Sample data array - can be any length
  const users = [
    {
      id: 1,
      name: "James Wilson",
      role: "Software Engineer",
      image:
        "https://bobmeijer.nl/wp-content/uploads/2022/09/bobmeijernl-foto-6-1.png",
    },
    {
      id: 2,
      name: "Michael Brooks",
      role: "Product Manager",
      image:
        "https://bobmeijer.nl/wp-content/uploads/2022/09/bobmeijernl-foto-6-1.png",
    },
    {
      id: 3,
      name: "Robert Chen",
      role: "UX Designer",
      image:
        "https://bobmeijer.nl/wp-content/uploads/2022/09/bobmeijernl-foto-6-1.png",
    },
    {
      id: 4,
      name: "Emily Parker",
      role: "Marketing Lead",
      image:
        "https://bobmeijer.nl/wp-content/uploads/2022/09/bobmeijernl-foto-6-1.png",
    },
    // Add more users as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % users.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [users.length]);

  // Calculate grid columns based on number of items
  const getGridCols = (count) => {
    if (count <= 1) return 1;
    if (count <= 4) return 2;
    if (count <= 9) return 3;
    return 4; // Max 4 columns for larger sets
  };

  const gridCols = getGridCols(users.length);
  return (
    <div className="w-full max-w-2xl mx-auto p-4  bg-black">
      <div
        className="relative grid gap-2"
        style={{
          gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
          aspectRatio: "1/1",
        }}
      >
        {users.map((user, index) => (
          <div key={user.id} className="relative overflow-hidden bg-gray-900">
            {/* Image Container */}
            <div className="absolute inset-0">
              <img
                src={user.image}
                alt={user.name}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  activeIndex === index ? "grayscale-0 scale-105" : "grayscale"
                }`}
              />
            </div>

            {/* Overlay with user info */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent
              transition-opacity duration-500 flex flex-col justify-end p-4
              ${activeIndex === index ? "opacity-100" : "opacity-0"}`}
            >
              <h3 className="text-white font-semibold text-lg">{user.name}</h3>
              <p className="text-white/80 text-sm">{user.role}</p>
            </div>

            {/* Selection Frame */}
            {activeIndex === index && (
              <div className="absolute inset-0 z-10">
                {/* Animated corners */}
                <div className="absolute top-0 left-0 w-[20%] h-[20%] border-t-4 border-l-4 border-blue-500" />
                <div className="absolute top-0 right-0 w-[20%] h-[20%] border-t-4 border-r-4 border-blue-500" />
                <div className="absolute bottom-0 left-0 w-[20%] h-[20%] border-b-4 border-l-4 border-blue-500" />
                <div className="absolute bottom-0 right-0 w-[20%] h-[20%] border-b-4 border-r-4 border-blue-500" />

                {/* Counter badge */}
                <div className="absolute top-2 right-2 bg-blue-500 text-white text-sm px-2 py-1 rounded-full">
                  {activeIndex + 1}/{users.length}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-500"
          style={{ width: `${((activeIndex + 1) / users.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

const CodeView = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const codeString = `
import React, { useState, useEffect } from "react";

const Test = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Sample data array - can be any length
  const users = [
    {
      id: 1,
      name: "James Wilson",
      role: "Software Engineer",
      image: "https://bobmeijer.nl/wp-content/uploads/2022/09/bobmeijernl-foto-6-1.png",
    },
    {
      id: 2,
      name: "Michael Brooks",
      role: "Product Manager",
      image: "https://bobmeijer.nl/wp-content/uploads/2022/09/bobmeijernl-foto-6-1.png",
    },
    {
      id: 3,
      name: "Robert Chen",
      role: "UX Designer",
      image: "https://bobmeijer.nl/wp-content/uploads/2022/09/bobmeijernl-foto-6-1.png",
    },
    {
      id: 4,
      name: "Emily Parker",
      role: "Marketing Lead",
      image: "https://bobmeijer.nl/wp-content/uploads/2022/09/bobmeijernl-foto-6-1.png",
    },
    {
      id: 5,
      name: "Emily Parker",
      role: "Marketing Lead",
      image: "https://bobmeijer.nl/wp-content/uploads/2022/09/bobmeijernl-foto-6-1.png",
    },
    {
      id: 6,
      name: "Emily Parker",
      role: "Marketing Lead",
      image: "https://bobmeijer.nl/wp-content/uploads/2022/09/bobmeijernl-foto-6-1.png",
    },
    {
      id: 7,
      name: "Emily Parker",
      role: "Marketing Lead",
      image: "https://bobmeijer.nl/wp-content/uploads/2022/09/bobmeijernl-foto-6-1.png",
    },
    // Add more users as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % users.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [users.length]);

  // Calculate grid columns based on number of items
  const getGridCols = (count) => {
    if (count <= 1) return 1;
    if (count <= 4) return 2;
    if (count <= 9) return 3;
    return 4; // Max 4 columns for larger sets
  };

  const gridCols = getGridCols(users.length);

  return (
    <div className="w-full max-w-6xl mx-auto p-4  bg-black">
      <div
        className="relative grid gap-2"
        style={{
          gridTemplateColumns: \`repeat(\${gridCols}, 1fr)\`,
          aspectRatio: "1/1",
        }}
      >
        {users.map((user, index) => (
          <div key={user.id} className="relative overflow-hidden bg-gray-900">
            {/* Image Container */}
            <div className="absolute inset-0">
              <img
                src={user.image}
                alt={user.name}
                className={\`w-full h-full object-cover transition-all duration-500 \${activeIndex === index ? "grayscale-0 scale-105" : "grayscale"}\`}
              />
            </div>

            {/* Overlay with user info */}
            <div
              className={\`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent
                transition-opacity duration-500 flex flex-col justify-end p-4
                \${activeIndex === index ? "opacity-100" : "opacity-0"}\`}
            >
              <h3 className="text-white font-semibold text-lg">{user.name}</h3>
              <p className="text-white/80 text-sm">{user.role}</p>
            </div>

            {/* Selection Frame */}
            {activeIndex === index && (
              <div className="absolute inset-0 z-10">
                {/* Animated corners */}
                <div className="absolute top-0 left-0 w-[20%] h-[20%] border-t-4 border-l-4 border-blue-500" />
                <div className="absolute top-0 right-0 w-[20%] h-[20%] border-t-4 border-r-4 border-blue-500" />
                <div className="absolute bottom-0 left-0 w-[20%] h-[20%] border-b-4 border-l-4 border-blue-500" />
                <div className="absolute bottom-0 right-0 w-[20%] h-[20%] border-b-4 border-r-4 border-blue-500" />

                {/* Counter badge */}
                <div className="absolute top-2 right-2 bg-blue-500 text-white text-sm px-2 py-1 rounded-full">
                  {activeIndex + 1}/{users.length}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-500"
          style={{ width: \`\${((activeIndex + 1) / users.length) * 100}%\` }}
        />
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
