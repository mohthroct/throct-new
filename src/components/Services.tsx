"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    icon: "🚀",
    title: "Custom Software",
    description:
      "High-performance web, mobile, and desktop applications built with cutting-edge technologies. Scalable architecture that grows with you.",
    features: ["Web Apps", "Mobile Apps", "Desktop Software", "API Development"],
    gradient: "from-indigo-600 to-violet-600",
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    description:
      "Enterprise-grade infrastructure that powers your digital solutions. Optimized databases, secure servers, and seamless APIs.",
    features: ["AWS/GCP/Azure", "Serverless", "DevOps", "Microservices"],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: "🛡️",
    title: "Cybersecurity",
    description:
      "Comprehensive protection for your digital infrastructure. Advanced threat detection and incident response systems.",
    features: ["Penetration Testing", "Security Audits", "Compliance", "Monitoring"],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    description:
      "Transform your business with custom ML models, data analytics, and strategic LLM integration for automated intelligence.",
    features: ["Custom Models", "Data Analytics", "LLM Integration", "Automation"],
    gradient: "from-pink-500 to-rose-600",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    setRotateY(mouseX * 0.02);
    setRotateX(-mouseY * 0.02);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: "preserve-3d",
      }}
      className="group relative"
    >
      {/* Glow effect */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
      />

      {/* Card */}
      <div className="relative h-full glass rounded-3xl p-8 transition-all duration-300 group-hover:border-white/20">
        {/* Icon */}
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-3xl mb-6`}
          style={{ transform: "translateZ(20px)" }}
        >
          {service.icon}
        </div>

        {/* Title */}
        <h3
          className="text-2xl font-bold mb-4"
          style={{ transform: "translateZ(30px)" }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          className="text-gray-400 mb-6 leading-relaxed"
          style={{ transform: "translateZ(25px)" }}
        >
          {service.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2" style={{ transform: "translateZ(20px)" }}>
          {service.features.map((feature) => (
            <span
              key={feature}
              className="px-3 py-1 text-sm bg-white/5 rounded-full text-gray-300"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Arrow */}
        <motion.div
          className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="services" className="section relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-medium tracking-wider uppercase text-sm">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Services That <span className="gradient-text">Transform</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive technology solutions designed to help your business
            innovate and thrive in the digital landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
