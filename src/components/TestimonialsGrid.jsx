import React from "react";
import { Twitter } from "lucide-react";

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

const TestimonialsGrid = () => {
  const testimonials = [
    {
      title: "Workflow Revolutionized",
      author: "Alex Johnson",
      username: "alex_dev_works",
      content:
        "WebComponents has completely transformed my workflow! The features are intuitive and incredibly powerful. 👊",
      verified: true,
    },
    {
      title: "Game-Changing Features",
      author: "Priya Mehta",
      username: "priya_techie",
      content:
        "Every time I return from a break, I find that WebComponents has added new, game-changing features. Truly a hub for innovation! ✨🔥",
      verified: false,
    },
    {
      title: "UI Masterpiece",
      author: "Sanjay Kapoor",
      username: "sanjay_ux_design",
      content:
        "I just discovered ui.aceternity.com today, and my mind was blown 🤯! The seamless blend of framer-motion, tailwind CSS, and shacdn is a UI masterpiece. Big props to @mannupaaji for creating such an inspirational resource for developers. #UI #nextjs",
      verified: true,
    },
    {
      title: "Portfolio Enhancement",
      author: "Rhea Sharma",
      username: "rhea_tech_creator",
      content:
        "I integrated WebComponents into my portfolio, and the design elements are top-notch. Highly recommend it to every developer looking to elevate their UI! 💻✨",
      verified: true,
    },
    {
      title: "Next-Level Innovation",
      author: "Daniel Cruz",
      username: "daniel_innovator",
      content: "WebComponents is next level! 🚀",
      verified: true,
    },
    {
      title: "Sleek & Functional",
      author: "Omar Al-Fayed",
      username: "omar_dev_mind",
      content:
        "The new updates from WebComponents are just amazing. Looks incredibly sleek and functional 👌",
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

export default TestimonialsGrid;