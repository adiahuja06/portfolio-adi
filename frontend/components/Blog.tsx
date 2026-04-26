"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const blogs = [
  {
    title: "Understanding Apache Spark: Breaking Down the Core Concepts",
    desc: "Apache Spark is a unified computing engine and set of libraries for parallel data processing on a computer cluster.While most resources present the same definition of Apache Spark, the real value lies in understanding what each term actually means. We’ll break down the definition step by step and explore every concept in detail...",
    link: "https://medium.com/@ahujaaditya04/understanding-apache-spark-breaking-down-the-core-concepts-1e704dcc4f81",
  },
  {
    title: "Inside Apache Spark Architecture: Execution Flow Explained with an Example",
    desc: "In this article, we will be looking at the architecture of Spark, its core components, and an example.Spark has three main components, namely the Driver, the Cluster Manager, and the Node...",
    link: "https://medium.com/@ahujaaditya04/inside-apache-spark-architecture-execution-flow-explained-with-an-example-b5c406700062",
  },
  {
    title: "Repartition vs Coalesce in PySpark: A Beginner’s Guide to Fixing Data Skew and Optimizing Your Spark Jobs",
    desc: "Ever had a Spark job take far longer than expected, only to realize one task was doing all the heavy lifting while the others sat idle? Let’s look at why this happens and explore the solutions to fix it...",
    link: "https://medium.com/@ahujaaditya04/repartition-vs-coalesce-in-pyspark-a-beginners-guide-to-fixing-data-skew-and-optimizing-your-9b03986cc34b",
  },
];

export default function Blog() {
  const [index, setIndex] = useState(0);

  const visibleCards = 2;
  const maxIndex = blogs.length - visibleCards;

  return (
    <section id="blog" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 text-center mb-12">
          Blog
        </h2>

        {/* Slider */}
        <div className="relative">

          {/* Cards Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${index * 50}%` }}
              transition={{ duration: 0.5 }}
            >
              {blogs.map((blog, i) => (
                <div
                  key={i}
                  className="min-w-[50%] bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {blog.desc}
                  </p>

                  <a
                    href={blog.link}
                    target="_blank"
                    className="text-purple-700 font-semibold hover:underline"
                  >
                    Read more →
                  </a>
                </div>
              ))}
            </motion.div>
          </div>

          {/* LEFT BUTTON */}
          <button
            onClick={() => setIndex((prev) => Math.max(prev - 1, 0))}
            disabled={index === 0}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full disabled:opacity-30 hover:bg-purple-100 transition"
          >
            <ChevronLeft className="text-purple-700" />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={() =>
              setIndex((prev) => Math.min(prev + 1, maxIndex))
            }
            disabled={index === maxIndex}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full disabled:opacity-30 hover:bg-purple-100 transition"
          >
            <ChevronRight className="text-purple-700" />
          </button>

        </div>
      </div>
    </section>
  );
}