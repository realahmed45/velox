import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import VeloxResponsive from "./components/Velox";
import Projects from "./components/Projects";
import AiSolutions from "./components/AiSolutions";
import Contact from "./components/Contact";
import Pricing from './components/Pricing';
import AboutAutomation from './components/AboutAutomation';
import EcommercePlatform from "./projects/EcommercePlatform";
import SaasDashboard from "./projects/SaasDashboard";
import {
  RealEstatePortal,
  HealthcarePlatform,
  EducationalPlatform,
  FintechApp,
  FitnessStudio,
  TravelAgency,
  CreativePortfolio,
  RestaurantWebsite,
} from "./projects/index";

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<VeloxResponsive />} />
            <Route path="/ai-solutions" element={<AiSolutions />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/what-is-automation" element={<AboutAutomation />} />
            <Route path="/projects/ecommerce" element={<EcommercePlatform />} />
            <Route path="/projects/saas-dashboard" element={<SaasDashboard />} />
            <Route path="/projects/restaurant" element={<RestaurantWebsite />} />
            <Route path="/projects/real-estate" element={<RealEstatePortal />} />
            <Route path="/projects/healthcare" element={<HealthcarePlatform />} />
            <Route path="/projects/education" element={<EducationalPlatform />} />
            <Route path="/projects/fintech" element={<FintechApp />} />
            <Route path="/projects/fitness" element={<FitnessStudio />} />
            <Route path="/projects/travel" element={<TravelAgency />} />
            <Route path="/projects/portfolio" element={<CreativePortfolio />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </div>
  );
}

export default App;
