"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Java", img: "/skills/java.png" },
  { name: "Power BI", img: "/skills/powerbi.png" },
  { name: "FastAPI", img: "/skills/fastapi.png" },
  { name: "Python", img: "/skills/python.png" },
  { name: "Excel", img: "/skills/excel.png" },
  { name: "PySpark", img: "/skills/spark.png" },
  { name: "SQL", img: "/skills/sql.png" },
];

export default function Skills() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 text-center mb-12">
        Skills
      </h2>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">
        
        <motion.div
          className="flex gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {/* Duplicate for infinite scroll */}
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="min-w-[120px] flex flex-col items-center"
            >
              <div className="bg-gray-100 p-4 rounded-xl shadow-md hover:scale-110 transition">
                
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                />
              </div>

              <p className="mt-2 text-sm font-medium text-gray-700">
                {skill.name}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}