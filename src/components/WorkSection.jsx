import React from "react";

export default function WorkSection() {
  return (
    <section
      id="work"
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-8 md:px-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-8">Portfolio / Work</h2>
      <p className="max-w-2xl text-center text-gray-700 text-lg md:text-xl leading-relaxed">
        Placeholder for your projects. Each project can have images, descriptions,
        and links to details. This section will grow as you add your portfolio pieces.
      </p>
    </section>
  );
}
