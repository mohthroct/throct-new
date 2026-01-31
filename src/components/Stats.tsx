"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Projects Delivered" },
  { value: 5000, suffix: "+", label: "Happy Users" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-indigo-400 font-medium tracking-wider uppercase text-sm">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Why Choose <span className="gradient-text">Throct</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              We're passionate about creating technology solutions that drive real
              business outcomes. Founded by a team of industry veterans, we
              specialize in tackling complex projects that demand unique approaches.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: "💡",
                  title: "Innovation First",
                  desc: "We leverage cutting-edge technologies to build solutions that keep you ahead.",
                },
                {
                  icon: "🤝",
                  title: "True Partnership",
                  desc: "We don't just deliver projects—we build lasting relationships.",
                },
                {
                  icon: "⚡",
                  title: "Rapid Delivery",
                  desc: "Agile methodologies ensure fast, iterative development cycles.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-3xl p-8 text-center group"
              >
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400">{stat.label}</div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-600/20 to-transparent rounded-bl-3xl rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
