// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './components/HomePage';
// import ProductListPage from './pages/ProductListPage'; // Example for later
// import ProductDetailPage from './pages/ProductDetailPage'; // Example for later
// import CartPage from './pages/CartPage'; // Example for later

import './App.css'; // Your custom app-wide styles
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}> {/* This makes the main content area take up available space */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />}/>
            <Route path="/about" element={<AboutPage />}/>
            {/* Add other routes here later */}
            {/* <Route path="/products" element={<ProductListPage />} /> */}
            {/* <Route path="/product/:slug" element={<ProductDetailPage />} /> */}
            {/* <Route path="/cart" element={<CartPage />} /> */}
          </Routes>
        </main>
        <ChatWidget />
        <Footer />
      </div>
    </Router>
  );
}

export default App;