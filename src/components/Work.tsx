"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "FinTech Dashboard",
    category: "Web Application",
    description:
      "A comprehensive financial analytics platform with real-time data visualization and AI-powered insights.",
    tech: ["React", "Node.js", "PostgreSQL", "TensorFlow"],
    color: "from-indigo-600 to-violet-600",
    image: "🏦",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Full Stack",
    description:
      "Scalable e-commerce solution handling 100k+ daily transactions with seamless checkout experience.",
    tech: ["Next.js", "Stripe", "AWS", "Redis"],
    color: "from-cyan-500 to-blue-600",
    image: "🛒",
  },
  {
    id: 3,
    title: "Healthcare App",
    category: "Mobile Application",
    description:
      "HIPAA-compliant telemedicine platform connecting patients with healthcare providers.",
    tech: ["React Native", "Firebase", "WebRTC", "AI"],
    color: "from-emerald-500 to-teal-600",
    image: "🏥",
  },
];

export default function Work() {
  const [activeProject, setActiveProject] = useState(0);
  const containerRef = useRef(null);

  return (
    <section id="work" className="section relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-600/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-indigo-400 font-medium tracking-wider uppercase text-sm">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A selection of our recent work that showcases our expertise and
            commitment to excellence.
          </p>
        </motion.div>

        <div ref={containerRef} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project list */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveProject(index)}
                className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 ${
                  activeProject === index
                    ? "glass border-l-4 border-indigo-500"
                    : "hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-sm text-indigo-400 font-medium">
                    {project.category}
                  </span>
                  {activeProject === index && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 bg-green-400 rounded-full"
                    />
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs bg-white/5 rounded-full text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project preview */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden"
                style={{ perspective: 1000 }}
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${projects[activeProject].color}`}
                />

                {/* Glass overlay */}
                <div className="absolute inset-0 glass opacity-50" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="text-8xl mb-6"
                  >
                    {projects[activeProject].image}
                  </motion.div>
                  <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl font-bold text-white text-center"
                  >
                    {projects[activeProject].title}
                  </motion.h4>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-20 h-20 border border-white/20 rounded-full" />
                <div className="absolute bottom-4 right-4 w-32 h-32 border border-white/10 rounded-full" />
              </motion.div>
            </AnimatePresence>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 glass rounded-2xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-xl flex items-center justify-center text-2xl">
                  ✓
                </div>
                <div>
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
