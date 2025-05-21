// frontend/src/components/layout/Footer.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF,
  FaLinkedinIn, FaInstagram, FaYoutube, FaAngleRight, FaChevronUp,
  FaPinterest
} from 'react-icons/fa';
import logoImage from '../../assets/websitelogo.jpeg'; // UPDATE THIS PATH or remove if no logo

// Placeholder data - you'll likely fetch this from an API or have it in a config file
const footerServices = [
  { name: 'SEO Strategy', link: '/services/seo' },
  { name: 'Web Design & Development', link: '/services/web-design' },
  { name: 'PPC Advertising', link: '/services/ppc' },
  { name: 'Content Marketing', link: '/services/content-marketing' },
  { name: 'Social Media Management', link: '/services/social-media' },
  { name: 'Brand Identity', link: '/services/branding' },
];

const latestNews = [
  { title: 'The Future of AI in Digital Marketing', link: '/blog/ai-digital-marketing', date: 'May 12, 2024' },
  { title: 'Top 5 Web Design Trends for 2024', link: '/blog/web-design-trends-2024', date: 'May 05, 2024' },
  { title: 'Maximizing Your SEO: A Comprehensive Guide', link: '/blog/seo-guide', date: 'April 28, 2024' },
];

function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to a certain amount
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const darkBgColor = '#0A192F';         // Very dark navy/charcoal for the header background

  return (
    <footer className="${darkBgColor}text-light position-relative" style={{ backgroundColor: darkBgColor }}>
      {/* Main Footer Content */}
      <Container className="py-5">
        <Row className="gy-4 gy-lg-0"> {/* Gutters for vertical spacing on small screens */}

          {/* Column 1: Brand & Contact */}
          <Col lg={4} md={6}>
            <Link to="/" className="d-inline-block mb-3">
              {logoImage ? (
                <img src={logoImage} alt="Company Logo" height="95" />
              ) : (
                <h4 className="text-primary fw-bold mb-0">YOUR BRAND</h4>
              )}
            </Link>
            <p className="small text-white-50 mb-3 pe-lg-3">
              Your trusted partner for innovative digital solutions that drive growth and success for businesses worldwide.
            </p>
            <ul className="list-unstyled footer-contact-info">
              <li className="mb-2 d-flex align-items-start">
                <FaMapMarkerAlt size={16} className="me-3 mt-1 text-primary flex-shrink-0" />
                <span className="small text-white-50 mb-3 pe-lg-3">E-6,7, KH.NO-103, PANCHSHEEL COLONY, LAL KUAN LANDMARK SHIV MANDIR, Ghaziabad, Uttar Pradesh, 201009</span>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <FaPhoneAlt size={14} className="me-3 text-primary flex-shrink-0" />
                <a href="tel:+911204151836" className="text-white-50 small hover-primary-text">+91 8745866373</a>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <FaEnvelope size={14} className="me-3 text-primary flex-shrink-0" />
                <a href="mailto:info@yourbrand.com" className="text-white-50 small hover-primary-text">info.awakeningcoins@gmail.com</a>
              </li>
            </ul>
          </Col>

          {/* Column 2: Quick Links */}
          <Col lg={2} md={6} sm={6}>
            <h5 className="text-white mb-3">Quick Links</h5>
            <Nav className="flex-column footer-links">
              <Nav.Link as={Link} to="/about" className="text-white-50 small py-1 hover-primary-text"><FaAngleRight className="me-1" />About Us</Nav.Link>
              <Nav.Link as={Link} to="/services" className="text-white-50 small py-1 hover-primary-text"><FaAngleRight className="me-1" />Services</Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-white-50 small py-1 hover-primary-text"><FaAngleRight className="me-1" />Portfolio</Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-white-50 small py-1 hover-primary-text"><FaAngleRight className="me-1" />Blog</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-white-50 small py-1 hover-primary-text"><FaAngleRight className="me-1" />Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-white-50 small py-1 hover-primary-text"><FaAngleRight className="me-1" />Careers</Nav.Link>
            </Nav>
          </Col>

          {/* Column 3: Our Services */}
          <Col lg={3} md={6} sm={6}>
            <h5 className="text-white mb-3">Our Services</h5>
            <Nav className="flex-column footer-links">
              {footerServices.map(service => (
                <Nav.Link as={Link} to={service.link} key={service.name} className="text-white-50 small py-1 hover-primary-text">
                  <FaAngleRight className="me-1" />{service.name}
                </Nav.Link>
              ))}
            </Nav>
          </Col>

          {/* Column 4: Latest News */}
          <Col lg={3} md={6}>
            <h5 className="text-white mb-3">Latest News</h5>
            <ul className="list-unstyled footer-news">
              {latestNews.slice(0, 3).map((newsItem, index) => ( // Show max 3 news items
                <li key={index} className="mb-3">
                  <Link to={newsItem.link} className="text-white-50 small hover-primary-text d-block text-decoration-none">
                    {newsItem.title}
                  </Link>
                  <small className="text-muted d-block text-white-50" style={{ fontSize: '0.75rem' }}>{newsItem.date}</small>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Bottom Bar: Copyright & Social Media */}
      <div className="footer-bottom-bar py-3" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
              <p className="small mb-0 text-white">© {currentYear} Your Brand Name. All Rights Reserved.</p>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <a href="https://www.facebook.com/profile.php?id=61575380657504" target="_blank" rel="noopener noreferrer" className="text-white me-3 fs-5 hover-primary-text"><FaFacebookF /></a>
              <a href="https://in.pinterest.com/awakeningcoins/" target="_blank" rel="noopener noreferrer" className="text-white me-3 fs-5 hover-primary-text"><FaPinterest /></a>
              <a href="https://www.linkedin.com/in/awakening-coins-464104363/" target="_blank" rel="noopener noreferrer" className="text-white me-3 fs-5 hover-primary-text"><FaLinkedinIn /></a>
              <a href="https://www.instagram.com/awakeningcoinsnew/" target="_blank" rel="noopener noreferrer" className="text-white me-3 fs-5 hover-primary-text"><FaInstagram /></a>
              <a href="https://www.youtube.com/@AwakeningCoinsnew" target="_blank" rel="noopener noreferrer" className="text-white fs-5 hover-primary-text"><FaYoutube /></a>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Back to Top Button */}
      {isVisible && (
        <Button
          onClick={scrollToTop}
          variant="primary"
          className="position-fixed shadow rounded-circle"
          style={{ bottom: '20px', right: '20px', zIndex: 1000, width: '45px', height: '45px', padding: 0 }}
          aria-label="Scroll to top"
        >
          <FaChevronUp size={20} />
        </Button>
      )}
    </footer>
  );
}

export default Footer;