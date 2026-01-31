"use client";

import { motion } from "framer-motion";

const footerLinks = {
  Services: ["Custom Software", "Cloud Solutions", "Cybersecurity", "AI & ML"],
  Company: ["About Us", "Careers", "Blog", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="#"
              className="text-3xl font-bold gradient-text inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Throct
            </motion.a>
            <p className="text-gray-400 mb-6 max-w-sm">
              Building the next generation of technology solutions. We help
              businesses scale faster, smarter, and more securely.
            </p>
            <div className="flex gap-4">
              {["𝕏", "in", "📸", "🐙"].map((icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4 text-white">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Throct. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Built with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ⚡
            </motion.span>
            <span>by Throct</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
