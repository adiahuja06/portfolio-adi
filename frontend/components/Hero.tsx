"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
          >
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700">
              AI-powered systems
            </span>{" "}
            that solve real-world problems
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-lg text-purple-700 font-medium"
          >
            AI Engineer @ Deloitte | RAG • Computer Vision • Full Stack Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 flex gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow hover:from-purple-600 hover:to-purple-800 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="px-6 py-3 rounded-lg font-semibold border border-purple-200 text-purple-700 bg-white shadow hover:bg-purple-50 transition"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">

            {/* Glow Background */}
            <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-30 rounded-3xl"></div>

            {/* Image */}
            <motion.img
              src="/profile.jpeg"
              alt="Aditya"
              className="relative w-[320px] md:w-[420px] object-cover rounded-3xl shadow-2xl border border-purple-200"
              
              // subtle floating animation
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              
              // hover effect
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}