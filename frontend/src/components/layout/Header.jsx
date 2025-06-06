// frontend/src/components/layout/Header.jsx
import React from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import awakeningCoinsLogo from '../../assets/websitelogo.jpeg'; // Path sahi hai

// HeaderStyles component (aapka existing code, isme koi change nahi hai)
const HeaderStyles = () => {
  // ... aapka poora styles code yahan ...
  const darkBgColor = '#0A192F';
  const goldenAccentColor = '#d4a053';
  const whiteTextColor = '#FFFFFF';
  const darkTextColorForButton = '#0A192F';
  const slightlyLighterNavText = '#E0E0E0';
  const dropdownHoverBg = '#1c2e4a';

  return (
    <style type="text/css">{`
      .main-navbar-gits {
        background-color: ${darkBgColor} !important;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        border-bottom: 1px solid ${goldenAccentColor}33;
      }
      .navbar-brand-custom .logo-main-text {
        color: ${whiteTextColor};
        font-weight: 700;
        font-size: 1.6rem;
        text-transform: uppercase;
        letter-spacing: 1.2px;
        transition: color 0.3s ease;
      }
      .navbar-brand-custom:hover .logo-main-text {
        color: ${goldenAccentColor};
      }
      .navbar-brand-custom .logo-sub-text {
        color: ${goldenAccentColor};
        font-size: 0.8rem;
        display: block;
        line-height: 1.1;
        font-weight: 500;
        letter-spacing: 0.5px;
        text-transform: capitalize;
      }
      .main-navbar-gits .nav-link-custom {
        color: ${slightlyLighterNavText} !important;
        font-weight: 500;
        text-transform: uppercase;
        padding: 0.4rem 1.2rem !important;
        font-size: 0.9rem;
        transition: color 0.3s ease, background-color 0.3s ease;
        border-radius: 4px;
        margin: 0 0.2rem;
      }
      .main-navbar-gits .nav-link-custom:hover,
      .main-navbar-gits .nav-link-custom.active {
        color: ${goldenAccentColor} !important;
        background-color: rgba(255, 255, 255, 0.05);
      }
      .main-navbar-gits .nav-link-custom.active {
        font-weight: 700;
      }
      .main-navbar-gits .nav-dropdown-custom .dropdown-toggle {
        color: ${slightlyLighterNavText} !important;
      }
      .main-navbar-gits .nav-dropdown-custom .dropdown-toggle:hover,
      .main-navbar-gits .nav-dropdown-custom .dropdown-toggle.active,
      .main-navbar-gits .nav-dropdown-custom.show .dropdown-toggle {
        color: ${goldenAccentColor} !important;
        background-color: rgba(255, 255, 255, 0.05);
      }
      .main-navbar-gits .nav-dropdown-custom .dropdown-menu {
        background-color: ${darkBgColor} !important;
        border: 1px solid ${goldenAccentColor}55 !important;
        border-radius: 0.25rem;
        margin-top: 0.5rem !important;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
      }
      .main-navbar-gits .nav-dropdown-custom .dropdown-item {
        color: ${slightlyLighterNavText} !important;
        padding: 0.6rem 1.2rem !important;
        font-weight: 500;
        font-size: 0.9rem;
        transition: color 0.3s ease, background-color 0.3s ease;
      }
      .dropdown-item {
        display: block;
        width: 100% !important; /* width ko 100% rakha hai, jo standard hai */
      }
      .main-navbar-gits .nav-dropdown-custom .dropdown-item:hover,
      .main-navbar-gits .nav-dropdown-custom .dropdown-item:focus {
        color: ${darkTextColorForButton} !important;
        background-color: ${goldenAccentColor} !important;
      }
      .main-navbar-gits .nav-dropdown-custom .dropdown-item.active {
        color: ${darkTextColorForButton} !important;
        background-color: ${goldenAccentColor} !important;
        font-weight: 700;
      }
      .request-call-button-gits {
        background-color: ${goldenAccentColor} !important;
        border-color: ${goldenAccentColor} !important;
        color: ${darkTextColorForButton} !important;
        font-weight: bold;
        text-transform: uppercase;
        padding: 0.6rem 1.5rem !important;
        font-size: 0.9rem;
        border-radius: 50px !important;
        transition: background-color 0.3s ease, border-color 0.3s ease, transform 0.2s ease;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      }
      .request-call-button-gits:hover {
        background-color: #c89340 !important;
        border-color: #c89340 !important;
        transform: translateY(-2px);
        box-shadow: 0 4px 10px rgba(0,0,0,0.15);
      }
      .navbar-dark .navbar-toggler-icon {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.8)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
      }
      .navbar-dark .navbar-toggler {
        border-color: rgba(255,255,255,0.2) !important;
      }
    `}
    </style>
  );
};

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <HeaderStyles />
      <Navbar className="main-navbar-gits" expand="lg" sticky="top" variant="dark">
        <Container fluid className="px-md-3 px-lg-4">
          <Navbar.Brand as={NavLink} to="/" className="navbar-brand-custom d-flex align-items-center">
            <img
              src={awakeningCoinsLogo}
              height="55"
              className="d-inline-block align-middle me-2"
              alt="Awakening Coins Logo"
            />
            <div>
              <span className="logo-main-text">AWAKENING COINS</span>
              <span className="logo-sub-text">Unlock Your Business Growth</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav" className="justify-content-end">
            <Nav className="mx-auto align-items-center">
              <Nav.Link as={NavLink} to="/" className="nav-link-custom" end>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/services" className="nav-link-custom">Services</Nav.Link>
              <Nav.Link as={NavLink} to="/about" className="nav-link-custom">About</Nav.Link>

              {/* ===== YAHAN CHANGE HUA HAI: NAYA DROPDOWN JODA GAYA HAI ===== */}
              <NavDropdown title="Join Us" id="join-us-nav-dropdown" className="nav-link-custom nav-dropdown-custom">
                <NavDropdown.Item
                  // IMPORTANT: Yahan apne internship Google Form ka link daalein
                  href="https://docs.google.com/forms/d/e/1FAIpQLScfEBexshohmAm7DjQbuzbxEcBUR_B_c1H4AMpIeg5QFRELTQ/viewform?usp=dialog"
                  target="_blank" // Naye tab mein kholne ke liye
                  rel="noopener noreferrer" // Security ke liye
                >
                  Apply for Internship
                </NavDropdown.Item>
              </NavDropdown>
              {/* ===== END OF CHANGE ===== */}

              <Nav.Link as={NavLink} to="/contact" className="nav-link-custom">Contact Us</Nav.Link>
            </Nav>
            <Nav>
              <Button
                className="request-call-button-gits ms-lg-3"
                onClick={() => navigate('/contact')}
              >
                Request a Call
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;