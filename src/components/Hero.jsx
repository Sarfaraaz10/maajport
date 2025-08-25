import React, { useState, useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import heroImage from "../assets/hero.jpg";

const dynamicRoles = ["Designer", "Architect", "Heart Melting Orchestrator"];

export default function Hero() {
  const staticPart = "Interior";
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const y = useTransform(scrollY, [0, 200], [0, -50]);
  const ctaOpacity = useTransform(scrollY, [0, 150], [1, 0]);
  const bgY = useTransform(scrollY, [0, 300], [0, -50]);

  // Typewriter effect
  useEffect(() => {
    const currentRole = dynamicRoles[roleIndex];
    let timer;

    if (!isDeleting && text.length < currentRole.length) {
      timer = setTimeout(() => setText(currentRole.substring(0, text.length + 1)), 150);
    } else if (isDeleting && text.length > 0) {
      timer = setTimeout(() => setText(currentRole.substring(0, text.length - 1)), 75);
    } else if (!isDeleting && text.length === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % dynamicRoles.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-green">
      {/* Background with parallax */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})`, y: bgY }}
      />
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/25 to-black/0"></div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-8 md:px-16"
      >
        {/* Main Name */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-logo font-bold leading-snug sm:leading-tight md:leading-tight tracking-wide">
          Maajidah Sait
        </h1>

        {/* Dynamic roles - always horizontal */}
        <div className="mt-1 flex flex-row flex-wrap items-baseline">
          <span className="text-white text-xl sm:text-2xl md:text-3xl font-logo">{staticPart}</span>
          <motion.span
            key={roleIndex}
            className="text-white text-xl sm:text-2xl md:text-3xl font-logo ml-2"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1, letterSpacing: "0.05em" }}
            transition={{ duration: 0.3 }}
          >
            {text}
            <span className="ml-1 animate-pulse">|</span>
          </motion.span>
        </div>

        {/* Short bio */}
        <div className="mt-6 max-w-xl">
          <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed">
            Here we can clearly state that you're an amazing girfriend. <br />
            That deserves the world. <br />
            && your boyfriend loves you, always.
          </p>
        </div>

        {/* CTA button */}
        <motion.div style={{ opacity: ctaOpacity }} className="mt-8">
            <a
                href="#work"
                onClick={(e) => {
                e.preventDefault();
                const workSection = document.getElementById("work");
                if (workSection) {
                    workSection.scrollIntoView({ behavior: "smooth" });
                }
                }}
                className="inline-block text-center px-6 py-3 sm:py-4 bg-white/90 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-white transition"
            >
                View Work
            </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
