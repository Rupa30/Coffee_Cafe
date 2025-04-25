import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#4B2E0E] text-yellow-300 py-8 px-6 md:px-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <p>© {new Date().getFullYear()} Coffee Cafe. All rights reserved.</p>
        <p>Made by Rupa☕</p>
        <div className="flex space-x-6 text-yellow-300">
          <a href="#" aria-label="Facebook" className="hover:text-yellow-400 transition">
            <FaFacebookF size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-yellow-400 transition">
            <FaTwitter size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-yellow-400 transition">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
