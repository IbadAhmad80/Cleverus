import React from "react";
import CallToAction from "./cta";
import HeroSection from "./hero-section";
import Intro from "./intro";
import Team from "./team";
import Vision from "./vision";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";

export default function About() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Intro />
      <Vision />
      <Team />
      <CallToAction />
      <Footer />
    </div>
  );
}
