import React from "react";
import { FaGithub, FaLinkedinIn, FaFilePdf } from "react-icons/fa"; 

export default function Footer() {
  return (
    <footer className="bg-[#4B2E0E] text-yellow-300 py-8 px-6 md:px-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <p>© {new Date().getFullYear()} Coffee Cafe. All rights reserved.</p>
        <p>Made by Rupa☕</p>
        <div className="flex space-x-6 text-yellow-300">
          <a href="https://www.linkedin.com/in/rupa-mahindrakar1/" target="_blank" aria-label="LinkedIn" className="hover:text-yellow-400 transition">
            <FaLinkedinIn size={20} />
          </a>
          <a href="https://github.com/Rupa30" target="_blank" aria-label="Github" className="hover:text-yellow-400 transition">
            <FaGithub size={20} />
          </a>
          <a href="https://drive.google.com/file/d/1XK4gfCe1VbVS7R6UH2oBg-Rx53Khsczt/view?usp=drivesdk" target="_blank" aria-label="ResumeFile" className="hover:text-yellow-400 transition">
            <FaFilePdf size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
