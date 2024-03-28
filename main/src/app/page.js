import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

export const page = () => {
  return (
    <div className="bg-black font-white h-screen font-spacemono">
      <div className="text-white">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default page;
