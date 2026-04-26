"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Building AI-powered systems that solve real-world problems
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-400"
          >
            AI Engineer @ Deloitte | RAG • Computer Vision • Full Stack Developer
          </motion.p>

          <div className="mt-8 flex gap-4">
            <a href="#projects" className="bg-blue-500 px-6 py-3 rounded-lg">
              View Projects
            </a>

            <a href="/resume.pdf" className="border px-6 py-3 rounded-lg">
              Download Resume
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center"
        >
          <div className="w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        </motion.div>

      </div>
    </section>
  );
}