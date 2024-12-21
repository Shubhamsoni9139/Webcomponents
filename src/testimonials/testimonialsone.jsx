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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  return (
    <div className="min-h-screen bg-[#030014] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#030014] via-[#0c0129] to-[#030014]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(99, 102, 241, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content Container */}
      <div
        className="relative z-10 max-w-6xl mx-auto px-4 py-24"
        onMouseMove={handleMouseMove}
      >
        {/* Mouse Light Effect */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(800px circle at " +
              mousePosition.x +
              "px " +
              mousePosition.y +
              "px, rgba(99, 102, 241, 0.07), transparent 40%)",
          }}
        />

        {/* Heading */}
        <div className="text-center mb-20 relative">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300 mb-4">
            What people say
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover what our satisfied customers have to say about their
            experiences with our products/services.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "Small Business Owner",
              content:
                "Since integrating this solution into our workflow, we've experienced a significant improvement in efficiency and collaboration.",
            },
            {
              name: "David Patel",
              role: "Project Manager",
              content:
                "I've tested numerous options in this category, but one stands out for its intuitive design and comprehensive functionality.",
            },
            {
              name: "Emily Carter",
              role: "Operations Manager",
              content:
                "The tool we've adopted has surpassed our expectations, providing invaluable insights and support as our business continues to grow.",
            },
          ].map((testimonial, index) => (
            <div key={index} className="group relative">
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Card Content */}
              <div className="relative h-full bg-[#0A0A1B]/90 backdrop-blur-sm border border-white/5 p-8 rounded-3xl transition duration-300 group-hover:border-white/10">
                {/* Profile */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/SXSW_2024_-_Dev_Patel_2_%28cropped%29.jpg/330px-SXSW_2024_-_Dev_Patel_2_%28cropped%29.jpg"
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover bg-indigo-500/10"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="text-white"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-indigo-200/60">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Quote Icon */}
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  <svg
                    className="w-8 h-8 text-indigo-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300/90 leading-relaxed relative z-10">
                  {testimonial.content}
                </p>
              </div>
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

  const codeString = `
import React, { useState, useEffect } from "react";

const Test = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="min-h-screen bg-[#030014] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#030014] via-[#0c0129] to-[#030014]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(99, 102, 241, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content Container */}
      <div
        className="relative z-10 max-w-6xl mx-auto px-4 py-24"
        onMouseMove={handleMouseMove}
      >
        {/* Mouse Light Effect */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(800px circle at " + mousePosition.x + "px " + mousePosition.y + "px, rgba(99, 102, 241, 0.07), transparent 40%)",
          }}
        />

        {/* Heading */}
        <div className="text-center mb-20 relative">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300 mb-4">
            What people say
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover what our satisfied customers have to say about their
            experiences with our products/services.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "Small Business Owner",
              content:
                "Since integrating this solution into our workflow, we've experienced a significant improvement in efficiency and collaboration.",
            },
            {
              name: "David Patel",
              role: "Project Manager",
              content:
                "I've tested numerous options in this category, but one stands out for its intuitive design and comprehensive functionality.",
            },
            {
              name: "Emily Carter",
              role: "Operations Manager",
              content:
                "The tool we've adopted has surpassed our expectations, providing invaluable insights and support as our business continues to grow.",
            },
          ].map((testimonial, index) => (
            <div key={index} className="group relative">
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Card Content */}
              <div className="relative h-full bg-[#0A0A1B]/90 backdrop-blur-sm border border-white/5 p-8 rounded-3xl transition duration-300 group-hover:border-white/10">
                {/* Profile */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/SXSW_2024_-_Dev_Patel_2_%28cropped%29.jpg/330px-SXSW_2024_-_Dev_Patel_2_%28cropped%29.jpg"
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover bg-indigo-500/10"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="text-white"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-indigo-200/60">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Quote Icon */}
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  <svg
                    className="w-8 h-8 text-indigo-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300/90 leading-relaxed relative z-10">
                  {testimonial.content}
                </p>
              </div>
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

const Testimonialsone = () => {
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

export default Testimonialsone;
