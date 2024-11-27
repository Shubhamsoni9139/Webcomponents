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
                key={`${rowIndex}-${keyIndex}`}
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

export default Test;
