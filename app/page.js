import React from "react";
// import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import SolutionsSpotlight from "./components/SolutionsSpotlight";
import Services from "./components/Services";
import SafetyAssurance from "./components/SafetyAssurance";
import DocumentSection from "./components/Documents";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <HeroSection />
      <WhyChooseUs />
      <SolutionsSpotlight />
      <Services />
      <SafetyAssurance />
      <DocumentSection />
      <Testimonial />
      <ContactForm />
      <Footer />
    </>
  );
}