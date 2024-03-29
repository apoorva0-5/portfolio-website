"use client"
import React from "react";
import Hero from "../components/hero/Hero";
import Project from "../components/project/Project";
import Footer from "../components/footer/Footer";
import Navback from "../components/navbar/Navback";
import Cursor from "../components/cursor/Cursor";
import MovableCursor from "../components/cursor/MovableCursor";

export const page = () => {
  return (
    <div className="bg-black h-auto text-white font-spacemono">
      {/* <MovableCursor /> */}
      <Navback />
      <Hero />
      <Project />
      <Footer />
    </div>
  );
};

export default page;
