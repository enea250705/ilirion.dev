import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { 
  Home, 
  HumanoidRobot, 
  EnterpriseAI, 
  TechnicalPapers, 
  Careers, 
  NewsUpdates,
  AIConsciousnessEngine,
  SafetySystems,
  VisionPerception,
  NetworkIntelligence,
  ResearchDevelopment,
  CustomRobotics,
  AIConsulting,
  OpenSourceProjects,
  InnovationLab,
  CaseStudies,
  AboutUs,
  Team,
  ContactPage,
  PrivacyPolicy,
  TermsOfService,
  CookiePolicy,
  Presale,
  IlirionIDE
} from './pages';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/humanoid-robot" element={<HumanoidRobot />} />
          <Route path="/enterprise-ai" element={<EnterpriseAI />} />
          <Route path="/technical-papers" element={<TechnicalPapers />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/news" element={<NewsUpdates />} />
          <Route path="/ai-consciousness-engine" element={<AIConsciousnessEngine />} />
          <Route path="/safety-systems" element={<SafetySystems />} />
          <Route path="/vision-perception" element={<VisionPerception />} />
          <Route path="/network-intelligence" element={<NetworkIntelligence />} />
          <Route path="/research-development" element={<ResearchDevelopment />} />
          <Route path="/custom-robotics" element={<CustomRobotics />} />
          <Route path="/ai-consulting" element={<AIConsulting />} />
          <Route path="/open-source" element={<OpenSourceProjects />} />
          <Route path="/innovation-lab" element={<InnovationLab />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/presale" element={<Presale />} />
          <Route path="/ide" element={<IlirionIDE />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;