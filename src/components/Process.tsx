"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into your business goals, challenges, and vision. Understanding your needs is the foundation of every successful project.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Our team crafts a comprehensive roadmap with clear milestones, timelines, and deliverables tailored to your objectives.",
    icon: "📋",
  },
  {
    number: "03",
    title: "Development",
    description:
      "We bring your vision to life using cutting-edge technologies and agile methodologies. Regular updates keep you in the loop.",
    icon: "⚡",
  },
  {
    number: "04",
    title: "Launch & Scale",
    description:
      "Seamless deployment with ongoing support and optimization. We ensure your solution performs flawlessly and scales with your growth.",
    icon: "🚀",
  },
];

export default function Process() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="process"
      ref={containerRef}
      className="section relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-600/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-indigo-400 font-medium tracking-wider uppercase text-sm">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A proven methodology that delivers exceptional results, every time.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-800 hidden lg:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-indigo-600 via-cyan-500 to-pink-500"
            />
          </div>

          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="inline-block glass rounded-3xl p-8 max-w-xl"
                  >
                    <span className="text-6xl mb-4 block">{step.icon}</span>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-5xl font-bold text-indigo-600/30">
                        {step.number}
                      </span>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center dot */}
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center text-2xl font-bold glow"
                  >
                    {step.number}
                  </motion.div>
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
