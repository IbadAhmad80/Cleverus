import React from "react";
import Form from "./form";
import HeroSection from "./hero-section";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import Map from "./map";

export default function Contact() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Form />
      <Map />
      <Footer />
    </div>
  );
}
