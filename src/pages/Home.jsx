import React from "react";
import About from "../components/landing/About";
import Features from "../components/landing/Feature";
import Footer from "../components/landing/Footer";
import Hero from "../components/landing/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Footer />
    </>
  );
}
