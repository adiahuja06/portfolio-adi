"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full z-50 bg-white/90 border-b border-purple-100 shadow-sm backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        <span className="text-2xl font-extrabold text-purple-700 tracking-tight">Aditya Ahuja</span>

        <div className="hidden md:flex gap-8 text-base font-medium">
          <a href="#projects" className="hover:text-purple-600 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-purple-600 transition-colors">Experience</a>
          <a href="#blog" className="hover:text-purple-600 transition-colors">Blog</a>
          <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>
        </div>

        <a
          href="/resume.pdf"
          className="ml-4 px-5 py-2 rounded-lg text-base font-semibold bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow hover:from-purple-600 hover:to-purple-800 transition-colors"
        >
          Resume
        </a>
      </div>
    </motion.nav>
  );
}