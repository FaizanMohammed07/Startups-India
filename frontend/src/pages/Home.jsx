import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Writing from "../components/Writing";
import Journey from "../components/Journey";
import Speaker from "../components/Speaker";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      <Hero />
      <About />

      <Writing />
      <Journey />
      <Speaker />
      <Contact />
    </div>
  );
}
