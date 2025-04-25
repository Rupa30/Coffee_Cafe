import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 md:px-20 flex justify-between items-center h-16">
        <a href="#home" className="text-3xl font-merriweather font-extrabold text-coffeeBrown">
          Coffee Cafe
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 font-medium text-[#6B4E16]">
          {links.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className="hover:text-yellow-500 cursor-pointer"
                onClick={() => setOpen(false)}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-[#4B2E0E]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 px-6 py-6 font-semibold text-[#4B2E0E]">
            {links.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block hover:text-yellow-500"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
