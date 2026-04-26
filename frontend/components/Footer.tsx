"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Aditya</h3>
          <p className="text-gray-400 text-sm mt-1">
            Building AI-powered solutions for real-world problems
          </p>
        </div>

        {/* Center Links */}
        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#experience" className="hover:text-white transition">
            Experience
          </a>
          <a href="#blog" className="hover:text-white transition">
            Blog
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

        {/* Right Socials */}
        <div className="flex gap-4 text-sm">
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-gray-400 hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            className="text-gray-400 hover:text-white transition"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-gray-500 text-xs mt-8">
        © {new Date().getFullYear()} Aditya. All rights reserved.
      </div>
    </footer>
  );
}