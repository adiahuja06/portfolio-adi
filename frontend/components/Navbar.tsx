"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        <h1 className="text-xl font-bold">Aditya</h1>

        <div className="hidden md:flex gap-6 text-sm">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="/resume.pdf"
          className="bg-blue-500 px-4 py-2 rounded-lg text-sm hover:bg-blue-600"
        >
          Resume
        </a>
      </div>
    </motion.nav>
  );
}