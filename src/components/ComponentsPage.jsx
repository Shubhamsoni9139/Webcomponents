import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const BlurEffect = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => {
        const size = 100 + Math.random(); // Size of the blur
        const initialX = Math.random() * 100; // Initial horizontal position
        const initialY = Math.random() * 100; // Initial vertical position
        const duration = 8 + Math.random() * 12; // Transition duration
        const delay = Math.random() * -10; // Animation delay

        return (
          <div
            key={i}
            className="absolute animate-blur"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${initialX}%`,
              top: `${initialY}%`,
              background: "white",
              filter: "blur(50px)",
              opacity: 0.2,
              borderRadius: "50%", // Circular shape
              animation: `blurMove ${duration}s ease-in-out infinite`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
      <style>
        {`
          @keyframes blurMove {
            0% {
              transform: translate(-20px, -20px) scale(1);
              opacity: 0.2;
            }
            50% {
              transform: translate(20px, 20px) scale(1.5);
              opacity: 0.4;
            }
            100% {
              transform: translate(-20px, -20px) scale(1);
              opacity: 0.2;
            }
          }
        `}
      </style>
    </div>
  );
};

const TechIcon = ({ type }) => {
  const iconClasses = "h-8 w-8 text-gray-400 dark:text-gray-600";

  switch (type) {
    case "html":
      return (
        <div className="flex items-center text-white gap-2">
          <svg className={iconClasses} viewBox="0 0 24 24" fill="white">
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
          </svg>
          <span>HTML</span>
        </div>
      );
    case "react":
      return (
        <div className="flex items-center text-white gap-2">
          <svg className={iconClasses} viewBox="0 0 24 24" fill="white">
            <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046z" />
          </svg>
          <span>React</span>
        </div>
      );
    default:
      return null;
  }
};
const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <div className="relative max-w-2xl mx-auto mt-8">
    <div className="relative">
      <input
        type="text"
        placeholder="Search components..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
      />
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
        <kbd className="hidden sm:inline-block px-2 py-1 text-xs font-semibold bg-gray-900 rounded">
          Search
        </kbd>
      </div>
    </div>
  </div>
);

const ComponentCard = ({
  title = "Untitled",
  description = "",
  imageUrl,
  count = 0,
  onClick,
}) => (
  <div
    onClick={onClick}
    className="group relative bg-black rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-200 cursor-pointer"
  >
    <div className="p-4">
      <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg bg-gray-900">
        <img
          src={imageUrl || "/api/placeholder/400/300"}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-400">{count} components</p>
      </div>
    </div>
  </div>
);

const ComponentsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const sections = [
    {
      title: "Hero Sections",
      description: "Create stunning landing pages",
      count: 12,
      imageUrl:
        "https://cdn.dribbble.com/userupload/14447069/file/original-ca79afa0fc5aef918e5f269b28d43fc9.png?resize=1600x1200&vertical=center",
      path: "hero-sections",
    },
    {
      title: "Testimonials",
      description: "Showcase your product reviews",
      count: 2,
      imageUrl:
        "https://cdn.dribbble.com/userupload/13707945/file/original-67afb478391d0d7714ce0f397009512c.png",
      path: "testimonials",
    },
    // {
    //   title: "Feature Sections",
    //   description: "Showcase your product features",
    //   count: 20,
    //   imageUrl:
    //     "https://cdn.dribbble.com/userupload/14216871/file/original-13e963abfb7152f14c2c0f161f80c085.png?resize=1600x1200&vertical=center",
    //   path: "feature-sections",
    // },
    // {
    //   title: "CTA Sections",
    //   description: "Drive user actions",
    //   count: 11,
    //   imageUrl:
    //     "https://cdn.dribbble.com/userupload/13895926/file/original-86b412c167258bbc413a260e445c4b3f.png?resize=2048x1536&vertical=center",
    //   path: "cta-sections",
    // },
    {
      title: "Pricing Sections",
      description: "Display your pricing plans",
      count: 14,
      imageUrl:
        "https://cdn.dribbble.com/userupload/14407251/file/original-750c71d92fde86022df4033e0c22294e.jpg?resize=2048x1536&vertical=center",
      path: "pricing-sections",
    },
    // {
    //   title: "Header Sections",
    //   description: "Navigation and branding",
    //   count: 10,
    //   imageUrl:
    //     "https://cdn.dribbble.com/userupload/15936352/file/original-6735a5397fc20689b40ee862aedc00f7.png?resize=2048x1536&vertical=center",
    //   path: "header-sections",
    // },
    {
      title: "KeyBoard",
      description: "Create stunning products",
      count: 12,
      imageUrl:
        "https://cdn.dribbble.com/userupload/7691407/file/original-506ded33be53aa87ff822b5bc3d88db7.png?resize=752x&vertical=center",
      path: "KeyBoard",
    },
    {
      title: "Bento Grids",
      description: "Display your pricing plans",
      count: 14,
      imageUrl:
        "https://cdn.dribbble.com/userupload/10227101/file/original-c91250365db2d1325e1ab7fa1c814695.png",
      path: "bento-grids",
    },
  ];
  const filteredSections = sections.filter(
    (section) =>
      section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      section.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-black ">
          <div className="absolute inset-0">
            <BlurEffect />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <p className="text-white font-medium">
                  By the makers of Breakui
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                  Beautiful UI components,
                  <br />
                  crafted with Love.
                </h1>
              </div>

              <p className="max-w-2xl mx-auto text-lg text-gray-400">
                Over 500+ professionally designed, fully responsive, expertly
                crafted component examples you can drop into your Tailwind
                projects and customize to your heart's content.
              </p>

              <div className="flex justify-center gap-4 text-sm font-medium">
                <TechIcon type="html" />
                <TechIcon type="react" />
                <TechIcon type="vue" />
              </div>

              <div className="flex justify-center gap-4">
                <button className="px-6 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors">
                  Live preview
                </button>
                <button className="px-6 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors">
                  Documentation
                </button>
              </div>
            </div>
          </div>
        </div>

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Page Sections
            </h2>
            <p className="text-lg text-gray-400">
              Beautiful, responsive page sections built with Tailwind CSS
            </p>
          </div>

          {/* Components Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSections.map((section, index) => (
              <ComponentCard
                key={index}
                title={section.title}
                description={section.description}
                imageUrl={section.imageUrl}
                count={section.count}
                onClick={() => navigate(`/${section.path}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentsPage;
