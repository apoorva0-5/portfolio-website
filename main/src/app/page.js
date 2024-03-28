import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Project from "./components/project/Project";
import Footer from "./components/footer/Footer";

export const page = () => {
  return (
    <div className="bg-black h-auto text-white font-spacemono">
      <Navbar />
      <Hero />
      <Project />
      <Footer />
    </div>
  );
};

export default page;
