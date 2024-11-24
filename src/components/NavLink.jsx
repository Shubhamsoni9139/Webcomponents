import React from "react";

const NavLink = ({
  children,
  active,
  icon: Icon,
  as: Component = "button",
  ...props
}) => {
  return (
    <Component
      className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors
        ${
          active
            ? "bg-gray-700 text-white"
            : "text-gray-300 hover:bg-gray-700 hover:text-white"
        }`}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </Component>
  );
};

export default NavLink;
