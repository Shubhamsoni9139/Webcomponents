import React, { useState, useEffect } from "react";
import { Calendar, Search, Star, Github } from "lucide-react";

const CustomButton = ({
  children,
  className = "",
  variant = "default",
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition-colors duration-200";
  const variants = {
    default: "bg-blue-600 hover:bg-blue-700 text-white",
    outline: "border border-gray-700 hover:border-gray-600 bg-transparent",
    black: "bg-black hover:bg-gray-900 text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const CustomInput = ({ className = "", icon: Icon, ...props }) => (
  <div className="relative">
    {Icon && (
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
    )}
    <input
      className={`w-full bg-gray-700 rounded-lg px-4 py-2 text-gray-100 
        placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
        ${Icon ? "pl-10" : ""} ${className}`}
      {...props}
    />
  </div>
);

const CustomCalendar = ({ value, onChange }) => {
  const [currentDate, setCurrentDate] = useState(value || new Date());
  const [selectedDate, setSelectedDate] = useState(value);

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const days = [...Array(daysInMonth)].map((_, i) => i + 1);
  const weeks = [];
  let week = Array(7).fill(null);

  days.forEach((day, index) => {
    const dayIndex = (index + firstDayOfMonth) % 7;
    week[dayIndex] = day;

    if (dayIndex === 6 || index === days.length - 1) {
      weeks.push([...week]);
      week = Array(7).fill(null);
    }
  });

  const handleDateSelect = (day) => {
    if (!day) return;
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    setSelectedDate(newDate);
    onChange?.(newDate);
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() =>
            setCurrentDate(
              new Date(currentDate.setMonth(currentDate.getMonth() - 1))
            )
          }
          className="p-2 hover:bg-gray-700 rounded"
        >
          ←
        </button>
        <h2 className="text-lg font-semibold">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button
          onClick={() =>
            setCurrentDate(
              new Date(currentDate.setMonth(currentDate.getMonth() + 1))
            )
          }
          className="p-2 hover:bg-gray-700 rounded"
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {dayNames.map((day) => (
          <div key={day} className="text-center text-sm text-gray-400 py-2">
            {day}
          </div>
        ))}

        {weeks.map((week, weekIndex) =>
          week.map((day, dayIndex) => (
            <button
              key={`${weekIndex}-${dayIndex}`}
              onClick={() => handleDateSelect(day)}
              disabled={!day}
              className={`
                p-2 text-center rounded hover:bg-gray-700 transition-colors
                ${!day ? "invisible" : ""}
                ${
                  selectedDate &&
                  day === selectedDate.getDate() &&
                  currentDate.getMonth() === selectedDate.getMonth()
                    ? "bg-blue-600 hover:bg-blue-700"
                    : ""
                }
              `}
            >
              {day}
            </button>
          ))
        )}
      </div>
    </div>
  );
};

const FloatingInput = ({ text, style, animationDelay }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const amplitude = 20;
    const period = 4000 + Math.random() * 2000;

    const animate = () => {
      const time = Date.now();
      const x = amplitude * Math.sin((2 * Math.PI * time) / period);
      const y = amplitude * Math.cos((2 * Math.PI * time) / (period * 1.5));
      setPosition({ x, y });
    };

    const intervalId = setInterval(animate, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="absolute transform -rotate-3 pointer-events-none transition-transform duration-1000 ease-in-out"
      style={{
        ...style,
        transform: `translate(${position.x}px, ${position.y}px) rotate(-3deg)`,
        transition: "transform 0.5s ease-out",
        animationDelay: `${animationDelay}s`,
      }}
    >
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-700">
        <div className="text-gray-400 text-sm mb-1">{text}</div>
        <div className="bg-gray-700/50 rounded h-10 w-64"></div>
      </div>
    </div>
  );
};

const YouTubeEmbed = ({ videoId }) => (
  <div className="relative rounded-xl overflow-hidden bg-gray-800/80 backdrop-blur-sm aspect-video">
    <iframe
      className="absolute inset-0 w-full h-full"
      src={`https://www.youtube.com/embed/${videoId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);

const Test = () => {
  const [prompt, setPrompt] = useState("");
  const [date, setDate] = useState(new Date());

  const floatingInputs = [
    {
      text: "Who is Shubham Soni?",
      style: { top: "15%", left: "10%" },
      delay: 0,
    },
    {
      text: "Create a modal component...",
      style: { top: "25%", right: "15%" },
      delay: 0.2,
    },
    {
      text: "Generate a pricing table...",
      style: { top: "45%", left: "5%" },
      delay: 0.4,
    },
    {
      text: "Design a notification system...",
      style: { bottom: "35%", right: "10%" },
      delay: 0.6,
    },
    {
      text: "Build a dashboard layout...",
      style: { bottom: "25%", left: "20%" },
      delay: 0.8,
    },
    {
      text: "Make an authentication flow...",
      style: { top: "60%", right: "25%" },
      delay: 1.0,
    },
    {
      text: "Create a dark theme toggle...",
      style: { bottom: "45%", left: "15%" },
      delay: 1.2,
    },
    {
      text: "Design a file upload component...",
      style: { top: "35%", left: "25%" },
      delay: 1.4,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-hidden relative">
      {/* Floating Background Inputs */}
      <div className="fixed inset-0 overflow-hidden">
        {floatingInputs.map((input, index) => (
          <FloatingInput
            key={index}
            text={input.text}
            style={input.style}
            animationDelay={input.delay}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="border-b border-gray-800 p-4 relative z-10 bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-xl font-bold">BreakUI</div>
          <CustomButton variant="outline">Login</CustomButton>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 relative z-10">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-5xl font-bold">
            Need awesome components to ship?
          </h1>
          <p className="mb-8 text-xl text-gray-400">
            Your one-stop solution for UI components. Supporting multiple
            libraries and frameworks.
          </p>

          {/* Search Section */}
          <div className="max-w-2xl mx-auto bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg mb-16">
            <div className="relative">
              <CustomInput
                icon={Search}
                placeholder="Acter make me a glowing button component..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <CustomButton
                variant="black"
                className="absolute right-2 top-1/2 -translate-y-1/2"
              >
                Generate
              </CustomButton>
            </div>
          </div>

          {/* Calendar and Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg">
              <CustomCalendar value={date} onChange={setDate} />
            </div>

            <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg">
              <YouTubeEmbed videoId="dQw4w9WgXcQ" />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {[
              "Generate a SaaS pricing calculator",
              "How can I structure LLM output?",
              "Write code to implement a min heap",
            ].map((text) => (
              <CustomButton
                key={text}
                variant="outline"
                className="text-left h-auto"
              >
                {text} →
              </CustomButton>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-800 pt-8 text-sm text-gray-400 relative z-10 bg-gray-900/80 backdrop-blur-sm">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-100">
                Terms
              </a>
              <a href="#" className="hover:text-gray-100">
                Privacy
              </a>
              <a href="#" className="hover:text-gray-100">
                AI Policy
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              <span>By Shubham Soni</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Test;
