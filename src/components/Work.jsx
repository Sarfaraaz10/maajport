import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Import images
import work1a from "../assets/work1a.jpg";
import work1b from "../assets/work1b.jpg";
import work1c from "../assets/work1c.jpg";

import work2a from "../assets/work2a.jpg";
import work2b from "../assets/work2b.jpg";
import work2c from "../assets/work2c.jpg";

import work3a from "../assets/work3a.jpg";
import work3b from "../assets/work3b.jpg";
import work3c from "../assets/work3c.jpg";

const projects = [
  {
    title: "Modern Living Room",
    description:
      "A minimalist yet warm residential interior, blending functionality with elegance.",
    images: [work1a, work1b, work1c],
  },
  {
    title: "Corporate Office",
    description:
      "Sleek and functional office design to maximize productivity and aesthetics.",
    images: [work2a, work2b, work2c],
  },
  {
    title: "Boutique Cafe",
    description:
      "Inviting and stylish space combining comfort and sophisticated design elements.",
    images: [work3a, work3b, work3c],
  },
];

export default function Work() {
  const [selected, setSelected] = useState(0);
  const [activeImg, setActiveImg] = useState(null);
  const [loadedImgs, setLoadedImgs] = useState({});

  // Preload images
  useEffect(() => {
    projects.forEach((proj) =>
      proj.images.forEach((img) => {
        const image = new Image();
        image.src = img;
        image.onload = () =>
          setLoadedImgs((prev) => ({ ...prev, [img]: true }));
      })
    );
  }, []);

  return (
    <section
      id="work"
      className="relative w-full bg-gradient-to-br from-[#E6D5C3] via-[#ffe9ec] to-[#E6D5C3] pt-20 sm:pt-24 md:pt-28 pb-20 px-4 sm:px-8 md:px-16"
    >
      {/* Project Selectors */}
      <div className="flex justify-center flex-wrap gap-3 mb-12">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className={`cursor-pointer px-4 py-2 rounded-2xl backdrop-blur bg-white/20 text-gray-900 font-semibold shadow transition ${
              selected === idx
                ? "bg-white/40 shadow-lg scale-105"
                : "hover:bg-white/30"
            }`}
            onClick={() => setSelected(idx)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {proj.title}
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:space-x-12 items-start">
        {/* Left-hand text */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <motion.div className="bg-white/30 backdrop-blur p-6 rounded-2xl shadow-md h-auto md:h-[420px] flex flex-col justify-center">
            <motion.h3
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="text-2xl font-bold text-gray-900"
            >
              {projects[selected].title}
            </motion.h3>
            <motion.p
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-gray-700 mt-3"
            >
              {projects[selected].description}
            </motion.p>
          </motion.div>
        </div>

        {/* Right-hand images */}
        <motion.div
          className="md:w-2/3 flex flex-col items-center md:items-end relative overflow-hidden"
          style={{ minHeight: "420px" }} // keeps layout stable
        >
          {projects[selected].images.map((img, idx) => {
            const offset = idx * 25;
            const scale = 1 - idx * 0.04;

            return (
              <motion.img
                key={img}
                src={img}
                alt={`${projects[selected].title} image ${idx + 1}`}
                className="rounded-xl shadow-2xl object-cover cursor-pointer w-11/12 md:w-full max-h-[400px] mb-[-50px]"
                // Only animate the first time an image loads (prevents jump)
                initial={loadedImgs[img] ? false : { opacity: 0, y: -offset, scale }}
                animate={{ opacity: 1, y: -offset, scale }}
                transition={{
                  duration: 1.2,
                  delay: idx * 0.2,
                  type: "spring",
                  stiffness: 120,
                }}
                onClick={() => setActiveImg(img)}
                whileHover={{ scale: 1.05 }}
              />
            );
          })}
        </motion.div>
      </div>

      {/* Click-to-enlarge overlay */}
      {activeImg && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setActiveImg(null)}
        >
          <motion.img
            src={activeImg}
            className="max-w-3xl max-h-[80vh] rounded-2xl shadow-2xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 120 }}
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
}
