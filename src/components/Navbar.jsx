import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // trigger shrink after 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 flex items-center justify-between px-6 bg-white/10 backdrop-blur shadow-md"
      initial={{ y: 0 }}
      animate={{
        height: scrolled ? 48 : 64, // shrink banner on scroll
        paddingTop: scrolled ? 2 : 4,
        paddingBottom: scrolled ? 2 : 4,
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Left: Logo + Name */}
      <motion.div
        className="flex items-center space-x-2 cursor-pointer"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <motion.img
          src={logo}
          alt="Logo"
          className="h-10 w-auto"
          animate={{ scale: scrolled ? 0.85 : 1 }} // scale logo on scroll
          transition={{ duration: 0.3 }}
        />
        <AnimatePresence>
          {(hovered || scrolled) && (
            <motion.span
              className="font-logo text-xl font-bold text-gray-800"
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -5 }}
              transition={{ duration: 0.3 }}
            >
              Maajidah Sait
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Right: Optional Connect Button */}
      <AnimatePresence>
        {!scrolled && (
          <motion.a
            href="#connect"
            className="px-4 py-1 border border-gray-800 text-sm rounded-full text-gray-800 hover:bg-gray-900 hover:text-white transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            Connect
          </motion.a>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
