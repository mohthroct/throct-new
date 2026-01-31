"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-medium tracking-wider uppercase text-sm">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? We'd love to hear about
            your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: "name", label: "Your Name", type: "text" },
                  { id: "email", label: "Email Address", type: "email" },
                  { id: "company", label: "Company (Optional)", type: "text" },
                ].map((field) => (
                  <div key={field.id} className="relative">
                    <motion.label
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focused === field.id
                          ? "text-xs top-2 text-indigo-400"
                          : "text-gray-400 top-4"
                      }`}
                    >
                      {field.label}
                    </motion.label>
                    <input
                      type={field.type}
                      name={field.id}
                      onFocus={() => setFocused(field.id)}
                      onBlur={(e) => !e.target.value && setFocused(null)}
                      className="w-full glass rounded-xl px-4 pt-7 pb-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      required={field.id !== "company"}
                    />
                  </div>
                ))}

                <div className="relative">
                  <motion.label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focused === "message"
                        ? "text-xs top-2 text-indigo-400"
                        : "text-gray-400 top-4"
                    }`}
                  >
                    Tell us about your project
                  </motion.label>
                  <textarea
                    name="message"
                    rows={5}
                    onFocus={() => setFocused("message")}
                    onBlur={(e) => !e.target.value && setFocused(null)}
                    className="w-full glass rounded-xl px-4 pt-7 pb-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-3xl p-12 text-center"
              >
                <div className="text-6xl mb-6">🎉</div>
                <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                <p className="text-gray-400">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              {
                icon: "📧",
                title: "Email Us",
                content: "hello@throct.com",
                link: "mailto:hello@throct.com",
              },
              {
                icon: "📍",
                title: "Location",
                content: "Remote-first, Global team",
                link: null,
              },
              {
                icon: "💬",
                title: "Let's Chat",
                content: "Schedule a free consultation",
                link: "#",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="glass rounded-2xl p-6 flex items-center gap-6 cursor-pointer group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-600/20 to-cyan-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">{item.title}</div>
                  <div className="text-lg font-semibold">{item.content}</div>
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <div className="pt-8 border-t border-gray-800">
              <div className="text-sm text-gray-400 mb-4">Follow Us</div>
              <div className="flex gap-4">
                {["𝕏", "in", "📸", "🐙"].map((icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 glass rounded-xl flex items-center justify-center text-xl hover:bg-white/10 transition-colors"
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
