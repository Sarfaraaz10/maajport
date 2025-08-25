import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";


export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#E6D5C3] via-[#F1E7DC] to-[#FFF9F5]">
      <Navbar />
      <Hero />
      <Work />
      
    </div>
  );
}
