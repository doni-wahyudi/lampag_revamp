import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import ProjectModal from './components/ProjectModal';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';

import HomePage from './views/HomePage';
import AboutPage from './views/AboutPage';
import WhatWeOfferPage from './views/WhatWeOfferPage';
import ProductsPage from './views/ProductsPage';
import PortfolioPage from './views/PortfolioPage';
import ContactPage from './views/ContactPage';

function getPageFromHash() {
  if (typeof window === 'undefined') return 'home';
  const raw = window.location.hash.replace('#', '').toLowerCase();
  if (['home', 'about', 'services', 'whatweoffer', 'product', 'products', 'portfolio', 'contact'].includes(raw)) {
    if (raw === 'whatweoffer') return 'services';
    if (raw === 'product') return 'products';
    return raw;
  }
  return 'home';
}

function AppContent() {
  const [activePage, setActivePageState] = useState(getPageFromHash);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const { langCode, t } = useLanguage();

  // Helper to change page and sync hash in address bar
  const setActivePage = (newPage) => {
    setActivePageState(newPage);
    if (newPage === 'home') {
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    } else {
      window.location.hash = newPage;
    }
  };

  // Listen to browser hash changes (Back/Forward navigation)
  React.useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setActivePageState(page);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Dynamic SEO meta update per active page & selected language
  React.useEffect(() => {
    let seoKey = 'home';
    if (activePage === 'about') seoKey = 'about';
    else if (activePage === 'services' || activePage === 'whatweoffer') seoKey = 'services';
    else if (activePage === 'product' || activePage === 'products') seoKey = 'products';
    else if (activePage === 'portfolio') seoKey = 'portfolio';
    else if (activePage === 'contact') seoKey = 'contact';

    const seoData = t.seo?.[seoKey] || t.seo?.home || (langCode === 'DE' ? {
      title: 'Willkommen in der Zukunft des Bauens | LAMPAG GmbH',
      desc: 'Willkommen in der Zukunft des Bauens: Präzisionsgefertigte Aluminiumfenster, -türen und Fassaden von LAMPAG – energieeffizient, modern und langlebig.'
    } : {
      title: 'Welcome to the Future of Construction | LAMPAG GmbH',
      desc: "Welcome to the Future of Construction: Discover LAMPAG's precision-engineered aluminium windows, doors, and curtain wall systems in Germany."
    });

    // Update document title
    document.title = seoData.title;

    // Update html lang attribute
    document.documentElement.lang = langCode.toLowerCase();

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', seoData.desc);

    // Update Open Graph tags
    const pageUrl = `https://lampag.com/${seoKey === 'home' ? '' : '#' + seoKey}`;
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', pageUrl);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', seoData.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', seoData.desc);

    let ogLocale = document.querySelector('meta[property="og:locale"]');
    if (!ogLocale) {
      ogLocale = document.createElement('meta');
      ogLocale.setAttribute('property', 'og:locale');
      document.head.appendChild(ogLocale);
    }
    ogLocale.setAttribute('content', langCode === 'DE' ? 'de_DE' : 'en_US');

    // Update Twitter Card tags
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', seoData.title);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', seoData.desc);

    // Update Canonical Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageUrl);
  }, [activePage, langCode, t]);

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
      case 'services':
      case 'whatweoffer':
        return <WhatWeOfferPage setActivePage={setActivePage} />;
      case 'product':
      case 'products':
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
