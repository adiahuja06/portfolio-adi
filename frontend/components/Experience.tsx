"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Analyst",
    company: "Deloitte",
    duration: "2024 - Present",
    points: [
      "Worked on AI-driven solutions to solve real-world client problems",
      "Built scalable systems using modern tech stack",
      "Collaborated with cross-functional teams to deliver impactful solutions",
    ],
    tech: ["Python", "React", "Node.js", "AI/ML"],
  },
  {
    role: "AI/ML Hackathon Participant",
    company: "Parul University Hackathon",
    duration: "2024",
    points: [
      "Selected among top 75 teams out of 400+ participants",
      "Built AI system for brain tumor & Alzheimer detection",
      "Worked with YOLOv8 and deep learning models",
    ],
    tech: ["YOLOv8", "Deep Learning", "React", "Node.js"],
  },
  {
    role: "DSA Instructor",
    company: "Teaching Experience",
    duration: "2024",
    points: [
      "Taught Data Structures & Algorithms to students",
      "Covered topics like recursion, trees, and dynamic programming",
      "Helped students improve problem-solving skills",
    ],
    tech: ["C++", "DSA", "Teaching"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 text-center mb-16">
          Experience
        </h2>

        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-purple-200 transform -translate-x-1/2"></div>

          {/* Timeline Items */}
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-16 flex justify-between items-center w-full ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              
              {/* Empty space */}
              <div className="w-1/2"></div>

              {/* Dot */}
              <div className="z-10 flex items-center justify-center w-10 h-10 bg-purple-500 text-white rounded-full shadow-lg">
                •
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-1/2 bg-gray-100 p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {exp.role}
                </h3>

                <p className="text-purple-700 font-medium">
                  {exp.company}
                </p>

                <p className="text-sm text-gray-500 mb-3">
                  {exp.duration}
                </p>

                <ul className="text-gray-700 text-sm space-y-1 mb-4">
                  {exp.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}