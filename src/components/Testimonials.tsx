"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO, FinanceFlow",
    content:
      "Throct transformed our legacy systems into a modern, scalable platform. Their expertise in both technology and business made them the perfect partner for our digital transformation.",
    avatar: "👩‍💼",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Founder, HealthTech Startup",
    content:
      "The team delivered our MVP in record time without compromising quality. Their AI integration expertise gave us a competitive edge we didn't expect.",
    avatar: "👨‍💻",
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Director of Engineering, RetailCo",
    content:
      "Working with Throct was a game-changer. They didn't just build what we asked for—they helped us envision something better. True strategic partners.",
    avatar: "👩‍🔬",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-indigo-950/30 to-gray-950" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-medium tracking-wider uppercase text-sm">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <div className="relative">
          {/* Quote icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-8xl text-indigo-600/20">
            "
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-8 md:p-12 text-center"
            >
              {/* Avatar */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center text-4xl"
              >
                {testimonials[current].avatar}
              </motion.div>

              {/* Content */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed italic"
              >
                "{testimonials[current].content}"
              </motion.p>

              {/* Author */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-lg font-semibold">
                  {testimonials[current].name}
                </div>
                <div className="text-indigo-400">{testimonials[current].role}</div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-indigo-500 w-8"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                setCurrent(
                  (prev) => (prev - 1 + testimonials.length) % testimonials.length
                )
              }
              className="w-12 h-12 glass rounded-full flex items-center justify-center pointer-events-auto -ml-6 opacity-50 hover:opacity-100 transition-opacity"
            >
              ←
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
              className="w-12 h-12 glass rounded-full flex items-center justify-center pointer-events-auto -mr-6 opacity-50 hover:opacity-100 transition-opacity"
            >
              →
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
