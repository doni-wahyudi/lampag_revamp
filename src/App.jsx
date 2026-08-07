import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import ProjectModal from './components/ProjectModal';

import HomePage from './views/HomePage';
import AboutPage from './views/AboutPage';
import WhatWeOfferPage from './views/WhatWeOfferPage';
import ProductsPage from './views/ProductsPage';
import PortfolioPage from './views/PortfolioPage';
import ContactPage from './views/ContactPage';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [blueprintMode, setBlueprintMode] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (blueprintMode) {
      document.body.classList.add('blueprint-mode');
    } else {
      document.body.classList.remove('blueprint-mode');
    }
  }, [blueprintMode]);

  const renderView = () => {
    switch (activePage) {
      case 'home':
        return (
          <HomePage 
            setActivePage={setActivePage} 
            setSelectedProduct={setSelectedProduct}
            setSelectedProject={setSelectedProject}
            blueprintMode={blueprintMode}
          />
        );
      case 'about':
        return <AboutPage blueprintMode={blueprintMode} />;
      case 'whatweoffer':
        return <WhatWeOfferPage setActivePage={setActivePage} blueprintMode={blueprintMode} />;
      case 'product':
        return <ProductsPage setSelectedProduct={setSelectedProduct} blueprintMode={blueprintMode} />;
      case 'portfolio':
        return <PortfolioPage setSelectedProject={setSelectedProject} blueprintMode={blueprintMode} />;
      case 'contact':
        return <ContactPage blueprintMode={blueprintMode} />;
      default:
        return (
          <HomePage 
            setActivePage={setActivePage} 
            setSelectedProduct={setSelectedProduct}
            setSelectedProject={setSelectedProject}
            blueprintMode={blueprintMode}
          />
        );
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage}
        blueprintMode={blueprintMode}
        setBlueprintMode={setBlueprintMode}
      />

      <main style={{ flex: 1 }}>
        {renderView()}
      </main>

      <Footer setActivePage={setActivePage} />

      {/* Specification Modals */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        blueprintMode={blueprintMode}
      />

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        blueprintMode={blueprintMode}
      />
    </div>
  );
}

export default App;
