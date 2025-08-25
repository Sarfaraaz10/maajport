import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import AnotherSection from "./components/AnotherSection";

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Work />
      <AnotherSection />
    </div>
  );
}
