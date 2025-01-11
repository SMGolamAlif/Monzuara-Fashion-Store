"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  const links = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/services", label: "SERVICES" },
    { href: "/process", label: "Our Process" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl bg-gradient-to-r from-purple-400 to-pink-400 
            text-transparent bg-clip-text hover:from-purple-500 hover:to-pink-500 
            transition-all duration-300 font-serif"
          >
            Monzuara Fashion
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm font-medium 
                transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
