import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Projects from "./components/Projects";
import StatsSection from "./components/StatsSection";
import AboutUs from "./components/AboutUs";
import HowItWorks from "./components/HowItWorks";
import RecentProjectsCarousel from "./components/RecentProjects";
import CarouselTestimonial from "./components/CarouselTestimonial";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Services />
      <Projects />
      <StatsSection />
      <AboutUs />
      <HowItWorks />
      <RecentProjectsCarousel />
      <CarouselTestimonial />
      <ContactForm />
      <Footer />
    </>
  );
}