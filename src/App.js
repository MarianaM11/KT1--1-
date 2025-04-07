import React from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import InfoSection from "./components/InfoSection/InfoSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import RentalSection from "./components/RentalSection/RentalSection";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <ServicesSection />
      <InfoSection />
      <FeaturesSection />
      <RentalSection />
      <Footer />
    </div>
  );
}

export default App;