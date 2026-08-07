import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import ProjectModal from './components/ProjectModal';
import { LanguageProvider } from './i18n/LanguageContext';

import HomePage from './views/HomePage';
import AboutPage from './views/AboutPage';
import WhatWeOfferPage from './views/WhatWeOfferPage';
import ProductsPage from './views/ProductsPage';
import PortfolioPage from './views/PortfolioPage';
import ContactPage from './views/ContactPage';

function AppContent() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const renderView = () => {
    switch (activePage) {
      case 'home':
        return (
          <HomePage 
            setActivePage={setActivePage} 
            setSelectedProduct={setSelectedProduct}
            setSelectedProject={setSelectedProject}
          />
        );
      case 'about':
        return <AboutPage />;
      case 'whatweoffer':
        return <WhatWeOfferPage setActivePage={setActivePage} />;
      case 'product':
        return <ProductsPage setSelectedProduct={setSelectedProduct} />;
      case 'portfolio':
        return <PortfolioPage setSelectedProject={setSelectedProject} />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <HomePage 
            setActivePage={setActivePage} 
            setSelectedProduct={setSelectedProduct}
            setSelectedProject={setSelectedProject}
          />
        );
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage}
      />

      <main style={{ flex: 1 }}>
        {renderView()}
      </main>

      <Footer setActivePage={setActivePage} />

      {/* Specification Modals */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
