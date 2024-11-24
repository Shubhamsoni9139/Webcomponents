import React, { useState, useEffect } from "react";
import { Package, Home, Info, Phone, Code } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ href, icon: Icon, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      className="relative px-4 py-2 group flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon className="w-4 h-4" />
      <span>{children}</span>
      {(isHovered || isActive) && (
        <span
          className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 transform origin-left"
          style={{
            animation: "lineGrow 0.2s ease forwards",
          }}
        />
      )}
    </Link>
  );
};

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-gray-800"
          : "bg-transparent"
      }`}
      style={{ marginBottom: "10px" }} // Add gap below the navigation bar
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Package className="w-6 h-6 text-cyan-500" />
            <span className="text-xl font-semibold text-white">
              WebComponents
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            <NavLink href="/" icon={Home}>
              Home
            </NavLink>
            <NavLink href="/components" icon={Code}>
              Components
            </NavLink>
            <NavLink href="/about" icon={Info}>
              About
            </NavLink>
            <NavLink href="/contact" icon={Phone}>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
