// Work.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import project1Img from "../assets/project1.jpg";
import project2Img from "../assets/project2.jpg";
import project3Img from "../assets/project3.jpg";

const projects = [
  {
    id: 0,
    title: "Luxury Living Room",
    description:
      "A luxurious living space balancing comfort and elegance. Curated furniture and lighting enhance the aesthetic appeal.",
    images: [project1Img, project2Img, project3Img],
  },
  {
    id: 1,
    title: "Modern Kitchen",
    description:
      "Sleek, functional, and visually striking kitchen design. Minimalist lines, premium materials, and smart layout for efficiency.",
    images: [project2Img, project3Img, project1Img],
  },
  {
    id: 2,
    title: "Elegant Bedroom",
    description:
      "A serene bedroom with high-end finishes, soft lighting, and layered textures. Designed for rest, style, and luxury.",
    images: [project3Img, project1Img, project2Img],
  },
];

export default function Work() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="work" className="relative w-full min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-start lg:items-center gap-12">
        {/* Project Selectors */}
        <div className="flex lg:flex-col gap-4 mb-8 lg:mb-0">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              onClick={() => setActiveProject(project.id)}
              className={`w-6 h-6 rounded-full cursor-pointer transition-all
                ${activeProject === project.id
                  ? "bg-white/40 backdrop-blur-md shadow-lg"
                  : "bg-white/20 backdrop-blur-md hover:bg-white/30"
                }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>

        {/* Project Details */}
        <div className="flex-1 relative">
          <AnimatePresence exitBeforeEnter>
            {projects.map(
              (project) =>
                activeProject === project.id && (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col lg:flex-row items-start lg:items-center gap-8"
                  >
                    {/* Left: Title & Description */}
                    <div className="flex-1 z-10">
                      <h3 className="text-3xl sm:text-4xl font-logo text-gray-900 mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Right: Stacked Images */}
                    <div className="relative flex-1 w-full lg:w-auto">
                      {project.images.map((img, idx) => (
                        <motion.img
                          key={idx}
                          src={img}
                          alt={`${project.title} ${idx + 1}`}
                          className="w-64 h-40 sm:w-72 sm:h-48 md:w-80 md:h-52 object-cover rounded-lg shadow-lg absolute top-0 right-0"
                          style={{ zIndex: project.images.length - idx, marginTop: idx * 20 }}
                          initial={{ opacity: 0, scale: 0.95, x: 50 }}
                          animate={{ opacity: 1, scale: 1, x: 0 }}
                          exit={{ opacity: 0, scale: 0.95, x: 50 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
