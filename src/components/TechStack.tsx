"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node.js", icon: "💚" },
  { name: "Python", icon: "🐍" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "⎈" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "Firebase", icon: "🔥" },
  { name: "GraphQL", icon: "◈" },
];

export default function TechStack() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-indigo-950/20 to-gray-950" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-medium tracking-wider uppercase text-sm">
            Technologies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Built With the <span className="gradient-text">Best</span>
          </h2>
        </motion.div>

        {/* Floating tech icons */}
        <div className="relative h-80">
          {technologies.map((tech, index) => {
            const angle = (index / technologies.length) * Math.PI * 2;
            const radius = 140;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius * 0.5;

            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                animate={{
                  y: [y - 10, y + 10, y - 10],
                }}
                whileHover={{ scale: 1.2, zIndex: 10 }}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3 + index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="glass rounded-2xl p-4 cursor-pointer group"
                >
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <div className="text-sm font-medium text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {tech.name}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Center glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-600/30 rounded-full blur-3xl" />
        </div>

        {/* Additional tech marquee */}
        <div className="mt-16 overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex items-center gap-3 px-6 py-3 glass rounded-full"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="text-gray-300 font-medium">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
