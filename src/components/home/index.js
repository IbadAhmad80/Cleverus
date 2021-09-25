import React from "react";
import Aim from "./aim";
import Counter from "./counter";
import HeroSection from "./hero-section";
import Steps from "./steps";
import TopFeatures from "./top-features";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <TopFeatures />
      <Counter />
      <Aim />
      <Steps />
      <Footer />
    </div>
  );
}
