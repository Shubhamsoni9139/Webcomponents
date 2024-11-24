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
    <>
      <div className="overflow-x-hidden bg-gray-50">
        <header className="py-4 md:py-6" x-data="{expanded: false}">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0">
                <a
                  href="#"
                  title=""
                  className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-8 h-8 bg-indigo-600 rounded"
                  />
                  <span className="text-black ml-5 font-semibold">
                    WebComponents
                  </span>
                </a>
              </div>

              <div className="flex lg:hidden">
                <button type="button" className="text-gray-900">
                  <span x-show="!expanded" aria-hidden="true">
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </span>

                  <span x-show="expanded" aria-hidden="true">
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
                <a
                  href="#"
                  title=""
                  className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  Features{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  Pricing{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  Automation{" "}
                </a>
              </div>

              <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
                <a
                  href="#"
                  title=""
                  className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  Customer Login{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </header>
        <section className="pt-12 bg-gray-50 sm:pt-16">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="px-6 text-lg text-gray-600 font-inter">
                Smart email campaign builder, made for Developers
              </h1>
              <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
                Turn your visitors into profitable
                <span className="relative inline-flex sm:inline">
                  <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                  <span className="relative"> business </span>
                </span>
              </p>

              <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Get more customers
                </a>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
                  role="button"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 18 18"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Watch free demo
                </a>
              </div>

              <p className="mt-8 text-base text-gray-500 font-inter">
                60 Days free trial · No credit card required
              </p>
            </div>
          </div>

          <div className="pb-12 bg-white">
            <div className="relative">
              <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
              <div className="relative mx-auto">
                <div className="lg:max-w-6xl lg:mx-auto">
                  <img
                    className="transform scale-110"
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const CodeView = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const codeString = `
  import React, { useState } from 'react';

const ComponentName = () => {        
    return (
        <div className="overflow-x-hidden bg-gray-50">
    <header className="py-4 md:py-6" x-data="{expanded: false}">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
                <div className="flex-shrink-0">
                    <a href="#" title="" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                        <img className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/clarity/images/logo.svg" alt="" />
                    </a>
                </div>

                <div className="flex lg:hidden">
                    <button type="button" className="text-gray-900" @click="expanded = !expanded" :aria-expanded="expanded">
                        <span x-show="!expanded" aria-hidden="true">
                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </span>

                        <span x-show="expanded" aria-hidden="true">
                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>
                    </button>
                </div>

                <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
                    <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Features </a>

                    <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Pricing </a>

                    <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Automation </a>
                </div>

                <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
                    <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Customer Login </a>

                    <a
                        href="#"
                        title=""
                        className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        role="button"
                    >
                        Sign up
                    </a>
                </div>
            </div>

            <nav x-show="expanded" x-collapse>
                <div className="px-1 py-8">
                    <div className="grid gap-y-7">
                        <a href="#" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Features </a>

                        <a href="#" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Pricing </a>

                        <a href="#" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Automation </a>

                        <a href="#" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Customer Login </a>

                        <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button"
                        >
                            Sign up
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    </header>

    <section className="pt-12 bg-gray-50 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
                <h1 className="px-6 text-lg text-gray-600 font-inter">Smart email campaign builder, made for Developers</h1>
                <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
                    Turn your visitors into profitable
                    <span className="relative inline-flex sm:inline">
                        <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                        <span className="relative"> business </span>
                    </span>
                </p>

                <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                    <a
                        href="#"
                        title=""
                        className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        role="button"
                    >
                        Get more customers
                    </a>

                    <a
                        href="#"
                        title=""
                        className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
                        role="button"
                    >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 18 18" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                                stroke-width="2"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        Watch free demo
                    </a>
                </div>

                <p className="mt-8 text-base text-gray-500 font-inter">60 Days free trial · No credit card required</p>
            </div>
        </div>

        <div className="pb-12 bg-white">
            <div className="relative">
                <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
                <div className="relative mx-auto">
                    <div className="lg:max-w-6xl lg:mx-auto">
                        <img className="transform scale-110" src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

    )
}
export default ComponentName;`;

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

const Herofive = () => {
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

export default Herofive;
