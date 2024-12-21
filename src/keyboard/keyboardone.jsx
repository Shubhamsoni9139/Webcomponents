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
  const keyboardLayout = [
    [
      "Esc",
      "F1",
      "F2",
      "F3",
      "F4",
      "F5",
      "F6",
      "F7",
      "F8",
      "F9",
      "F10",
      "F11",
      "F12",
    ],
    [
      "`",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "-",
      "=",
      "Backspace",
    ],
    ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
    ["Caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter"],
    ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Shift"],
    ["Ctrl", "Win", "Alt", "Space", "Alt", "Fn", "Ctrl"],
  ];

  const getKeyWidth = (key) => {
    switch (key) {
      case "Backspace":
        return "w-24";
      case "Tab":
      case "Caps":
      case "\\":
        return "w-20";
      case "Shift":
        return "w-28";
      case "Enter":
        return "w-24";
      case "Space":
        return "w-64";
      case "Ctrl":
      case "Alt":
      case "Win":
      case "Fn":
        return "w-16";
      default:
        return "w-12";
    }
  };

  return (
    <div className="p-8 bg-gray-900 rounded-xl shadow-2xl perspective-1000">
      <div className="flex flex-col gap-1">
        {keyboardLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1 justify-center">
            {row.map((key, keyIndex) => (
              <div
                key={rowIndex + "-" + keyIndex}
                className={`
                      ${getKeyWidth(key)}
                      h-12
                      flex
                      items-center
                      justify-center
                      bg-gray-800
                      text-gray-300
                      rounded-lg
                      font-medium
                      relative
                      group
                      cursor-pointer
                      transition-transform
                      duration-150
                      transform
                      hover:-translate-y-1
                      active:translate-y-0
                      before:content-['']
                      before:absolute
                      before:inset-0
                      before:bg-gradient-to-b
                      before:from-gray-700/50
                      before:to-transparent
                      before:rounded-lg
                      after:content-['']
                      after:absolute
                      after:inset-0
                      after:bg-gradient-to-t
                      after:from-black/50
                      after:to-transparent
                      after:rounded-lg
                      after:opacity-0
                      after:group-hover:opacity-100
                      after:transition-opacity
                      border-t
                      border-gray-600/30
                      shadow-[inset_0_-2px_0_0_#1a1a1a,0_1px_2px_1px_rgba(0,0,0,0.9)]
                    `}
              >
                <span className="relative z-10">{key}</span>
                {/* Side of the key - 3D effect */}
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gray-900 rounded-b-lg transform skew-x-12"></div>
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gray-900 rounded-b-lg transform -skew-x-12"></div>
              </div>
            ))}
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
  
  const Test = () => {
    const keyboardLayout = [
      [
        "Esc",
        "F1",
        "F2",
        "F3",
        "F4",
        "F5",
        "F6",
        "F7",
        "F8",
        "F9",
        "F10",
        "F11",
        "F12",
      ],
      [
        "\`",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "-",
        "=",
        "Backspace",
      ],
      ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\\\"],
      ["Caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter"],
      ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Shift"],
      ["Ctrl", "Win", "Alt", "Space", "Alt", "Fn", "Ctrl"],
    ];
  
    const getKeyWidth = (key) => {
      switch (key) {
        case "Backspace":
          return "w-24";
        case "Tab":
        case "Caps":
        case "\\\\":
          return "w-20";
        case "Shift":
          return "w-28";
        case "Enter":
          return "w-24";
        case "Space":
          return "w-64";
        case "Ctrl":
        case "Alt":
        case "Win":
        case "Fn":
          return "w-16";
        default:
          return "w-12";
      }
    };
  
    return (
      <div className="p-8 bg-gray-900 rounded-xl shadow-2xl perspective-1000">
        <div className="flex flex-col gap-1">
          {keyboardLayout.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-1 justify-center">
              {row.map((key, keyIndex) => (
                <div
                  key={\`\${rowIndex}-\${keyIndex}\`}
                  className={\`
                    \${getKeyWidth(key)}
                    h-12
                    flex
                    items-center
                    justify-center
                    bg-gray-800
                    text-gray-300
                    rounded-lg
                    font-medium
                    relative
                    group
                    cursor-pointer
                    transition-transform
                    duration-150
                    transform
                    hover:-translate-y-1
                    active:translate-y-0
                    before:content-['']
                    before:absolute
                    before:inset-0
                    before:bg-gradient-to-b
                    before:from-gray-700/50
                    before:to-transparent
                    before:rounded-lg
                    after:content-['']
                    after:absolute
                    after:inset-0
                    after:bg-gradient-to-t
                    after:from-black/50
                    after:to-transparent
                    after:rounded-lg
                    after:opacity-0
                    after:group-hover:opacity-100
                    after:transition-opacity
                    border-t
                    border-gray-600/30
                    shadow-[inset_0_-2px_0_0_#1a1a1a,0_1px_2px_1px_rgba(0,0,0,0.9)]
                  \`}
                >
                  <span className="relative z-10">{key}</span>
                  {/* Side of the key - 3D effect */}
                  <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gray-900 rounded-b-lg transform skew-x-12"></div>
                  <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gray-900 rounded-b-lg transform -skew-x-12"></div>
                </div>
              ))}
            </div>
          ))}
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

const Keyboardone = () => {
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

export default Keyboardone;
