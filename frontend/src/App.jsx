// frontend/src/App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Spinner, Container } from 'react-bootstrap'; // For fallback UI

// Layout
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import ServiceDetailPage from './components/ServiceDetailPage.jsx';
import QuickInfo from './components/QuickInfo.jsx';

// Lazy load pages for better initial load time
const HomePage = lazy(() => import('./components/HomePage.jsx'));
const ServicesPage = lazy(() => import('./components/ServicesPage.jsx'));
const AboutPage = lazy(() => import('./components/AboutPage.jsx'));
const ContactPage = lazy(() => import('./components/ContactPage.jsx'));
const ChatWidget = lazy(() => import('./components/ChatWidget.jsx'));

// New Orthopedic Pages (Lazy loaded)
const OrthopedicProductPage = lazy(() => import('./components/orthopedic/OrthopedicProductPage.jsx'));
const OrthopedicProductListPage = lazy(() => import('./components/orthopedic/OrthopedicProductListPage.jsx'));

// Fallback UI for Suspense
const PageLoader = () => (
  <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: 'calc(100vh - 200px)' }}>
    <Spinner animation="border" variant="primary" role="status">
      <span className="visually-hidden">Loading page...</span>
    </Spinner>
  </Container>
);

// Placeholder for pages that might not exist yet, to avoid errors
const PlaceholderComponent = ({ title = "Page" }) => (
  <Container className="my-5 text-center">
    <h1>{title}</h1>
    <p>This page is under construction or does not exist.</p>
    <Link to="/" className="btn btn-primary">Go to Homepage</Link>
  </Container>
);


function App() {
  return (
    <Router>
      <Header />
      <main style={{ paddingTop: '0px' }}> {/* Adjust padding if navbar is fixed and overlaps content */}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Aapke existing routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Orthopedic Product Routes */}
            <Route path="/orthopedic-product/:productId" element={<OrthopedicProductPage />} />
            <Route path="/orthopedic-products-list" element={<OrthopedicProductListPage />} />

            {/* Fallback for any other route (404 Not Found) */}
            <Route path="*" element={<PlaceholderComponent title="404 - Page Not Found" />} />
          </Routes>
        </Suspense>
      </main>
      <ChatWidget />
      <QuickInfo />
      <Footer />
    </Router>
  );
}

export default App;