import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";


export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Work />
      
    </div>
  );
}
