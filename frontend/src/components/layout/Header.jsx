// import React from 'react';
// import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
// import awakeningCoinsLogo from '../../assets/websitelogo.jpeg';
// import { useNavigate } from 'react-router-dom';

// function Header() {
//   const navigate = useNavigate();

//   // Color Palette
//   const darkBgColor = '#0A192F'; 
//   const goldenAccentColor = '#d4a053';  
//   const whiteTextColor = '#FFFFFF';      
//   const darkTextColorForButton = '#0A192F'; 

//   const mainNavStyle = {
//     backgroundColor: darkBgColor, 
//     paddingTop: '0.5rem',
//     paddingBottom: '0.5rem',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//   };

//   const requestCallButtonStyle = {
//     backgroundColor: goldenAccentColor,
//     borderColor: goldenAccentColor,
//     color: darkTextColorForButton,
//     fontWeight: 'bold',
//     textTransform: 'uppercase',
//   };

//   const navLinkStyle = {
//     color: whiteTextColor, // <<< CHANGED: White text for nav links on dark background
//     fontWeight: '500',
//     textTransform: 'uppercase',
//     paddingLeft: '1rem',
//     paddingRight: '1rem',
//     fontSize: '0.9rem',
//   };

//   const logoMainTextStyle = {
//     color: whiteTextColor, // <<< CHANGED: Golden text for "AWAKENING COINS" on dark background
//     fontWeight: 'bold',
//     fontSize: '1.5rem',
//     textTransform: 'uppercase',
//     letterSpacing: '1px',
//   };

//   const logoSubTextStyle = {
//     color: goldenAccentColor, // Golden text for sub-text, looks good on dark background
//     fontSize: '0.85rem',
//     display: 'block',
//     lineHeight: '1.2',
//     fontWeight: 'bold', // Kept bold as per your code
//     letterSpacing: '0.5px',
//   };

//   return (
//     <>
//       <Navbar style={mainNavStyle} expand="lg" sticky="top" variant="dark"> {/* variant="dark" is correct for dark background */}
//         <Container fluid className="px-md-4 px-lg-5">
//           <Navbar.Brand href="/" className="d-flex align-items-center">
//             <img
//               src={awakeningCoinsLogo}
//               height="60" // Adjusted for better balance, 90 might be too large for a nav bar
//               className="d-inline-block align-middle me-3" // Added me-3 for spacing between logo and text
//               alt="Awakening Coins Logo"
//             />
//             <div>
//               <span style={logoMainTextStyle}>AWAKENING COINS</span>
//               <span style={logoSubTextStyle}>Unlock Your Business Growth</span>
//             </div>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="main-navbar-nav" />
//           <Navbar.Collapse id="main-navbar-nav" className="justify-content-end">
//             <Nav className="mx-auto">
//               <Nav.Link href="/" style={navLinkStyle}>Home</Nav.Link>
//               <Nav.Link href="/services" style={navLinkStyle}>Services</Nav.Link>
//               <Nav.Link href="/about" style={navLinkStyle}>About</Nav.Link>
//               <NavDropdown title="Dropdown" style={navLinkStyle} id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//             </NavDropdown>
//               <Nav.Link href="/contact" style={navLinkStyle}>Contact Us</Nav.Link>
//             </Nav>
//             <Nav>
//               <Button
//                 style={requestCallButtonStyle}
//                 className="px-4 py-2 rounded-pill"
//                 onClick={() => navigate('/contact')}
//               >
//                 Request a Call
//               </Button>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default Header;


import React from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom'; // Import NavLink
import awakeningCoinsLogo from '../../assets/websitelogo.jpeg'; // Ensure this path is correct

// Define a component for styles to keep the main component cleaner
const HeaderStyles = () => {
  // Color Palette from your original code
  const darkBgColor = '#0A192F'; // Deep Navy Blue
  const goldenAccentColor = '#d4a053'; // Muted Gold
  const whiteTextColor = '#FFFFFF';
  const darkTextColorForButton = '#0A192F'; // For text on golden button
  const slightlyLighterNavText = '#E0E0E0'; // For subtle hover or inactive states
  const dropdownHoverBg = '#1c2e4a'; // Slightly lighter navy for dropdown hover

  return (
    <style type="text/css">{`
      .main-navbar-gits {
        background-color: ${darkBgColor} !important;
        padding-top: 0.75rem; /* Slightly increased padding */
        padding-bottom: 0.75rem;
        box-shadow: 0 4px 8px rgba(0,0,0,0.15); /* Softer, more pronounced shadow */
        border-bottom: 1px solid ${goldenAccentColor}33; /* Subtle golden bottom border */
      }

      .navbar-brand-custom .logo-main-text {
        color: ${whiteTextColor};
        font-weight: 700; /* Bolder */
        font-size: 1.6rem; /* Slightly larger */
        text-transform: uppercase;
        letter-spacing: 1.2px;
        transition: color 0.3s ease;
      }
      .navbar-brand-custom:hover .logo-main-text {
        color: ${goldenAccentColor};
      }

      .navbar-brand-custom .logo-sub-text {
        color: ${goldenAccentColor};
        font-size: 0.8rem; /* Slightly smaller for better hierarchy */
        display: block;
        line-height: 1.1;
        font-weight: 500; /* Less bold than main */
        letter-spacing: 0.5px;
        text-transform: capitalize; /* Or none, if preferred */
      }

      .main-navbar-gits .nav-link-custom {
        color: ${slightlyLighterNavText} !important; /* Slightly muted for normal state */
        font-weight: 500;
        text-transform: uppercase;
        padding: 0.4rem 1.2rem !important; /* Consistent padding */
        font-size: 0.9rem;
        transition: color 0.3s ease, background-color 0.3s ease;
        border-radius: 4px; /* Subtle rounding for hover bg */
        margin: 0 0.2rem; /* Small margin between links */
      }

      .main-navbar-gits .nav-link-custom:hover,
      .main-navbar-gits .nav-link-custom.active { /* Style for NavLink active state */
        color: ${goldenAccentColor} !important;
        background-color: rgba(255, 255, 255, 0.05); /* Very subtle bg on hover/active */
      }
      
      /* Specifically for NavLink active state if you want it stronger */
      .main-navbar-gits .nav-link-custom.active {
        font-weight: 700; /* Bolder active link */
        /* color: ${goldenAccentColor} !important; */ /* Already handled */
      }


      /* Dropdown Specific Styling */
      .main-navbar-gits .nav-dropdown-custom .dropdown-toggle {
        color: ${slightlyLighterNavText} !important; /* Match nav links */
      }
      .main-navbar-gits .nav-dropdown-custom .dropdown-toggle:hover,
      .main-navbar-gits .nav-dropdown-custom .dropdown-toggle.active, /* For when a dropdown item makes the parent active */
      .main-navbar-gits .nav-dropdown-custom.show .dropdown-toggle { /* When dropdown is open */
        color: ${goldenAccentColor} !important;
        background-color: rgba(255, 255, 255, 0.05);
      }
      .main-navbar-gits .nav-dropdown-custom .dropdown-menu {
        background-color: ${darkBgColor} !important;
        border: 1px solid ${goldenAccentColor}55 !important; /* Golden border for dropdown */
        border-radius: 0.25rem;
        margin-top: 0.5rem !important; /* Space between toggle and menu */
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
        width: 95% !important;
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
      /* End Dropdown Styling */


      .request-call-button-gits {
        background-color: ${goldenAccentColor} !important;
        border-color: ${goldenAccentColor} !important;
        color: ${darkTextColorForButton} !important;
        font-weight: bold;
        text-transform: uppercase;
        padding: 0.6rem 1.5rem !important; /* Adjusted padding */
        font-size: 0.9rem;
        border-radius: 50px !important; /* Pill shape */
        transition: background-color 0.3s ease, border-color 0.3s ease, transform 0.2s ease;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      }
      .request-call-button-gits:hover {
        background-color: #c89340 !important; /* Slightly darker gold on hover */
        border-color: #c89340 !important;
        transform: translateY(-2px);
        box-shadow: 0 4px 10px rgba(0,0,0,0.15);
      }

      /* Navbar toggle icon color for dark variant */
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
        <Container fluid className="px-md-3 px-lg-4"> {/* Adjusted fluid padding */}
          <Navbar.Brand as={NavLink} to="/" className="navbar-brand-custom d-flex align-items-center">
            <img
              src={awakeningCoinsLogo}
              height="55" // Slightly adjusted
              className="d-inline-block align-middle me-2" // Reduced margin a bit
              alt="Awakening Coins Logo"
            />
            <div>
              <span className="logo-main-text">AWAKENING COINS</span>
              <span className="logo-sub-text">Unlock Your Business Growth</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav" className="justify-content-end">
            <Nav className="mx-auto align-items-center"> {/* mx-auto for centering, align-items-center for vertical alignment on mobile */}
              <Nav.Link as={NavLink} to="/" className="nav-link-custom" end>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/services" className="nav-link-custom">Services</Nav.Link>
              <Nav.Link as={NavLink} to="/about" className="nav-link-custom">About</Nav.Link>
              <NavDropdown title="Healbrace" id="explore-nav-dropdown" className="nav-link-custom nav-dropdown-custom">
                {/* Example: Dropdown items linking to sections or other pages */}
                <NavDropdown.Item as={NavLink} to="/portfolio" className="nav-link-custom">Blog</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="https://www.awakeningcoins.com/" target='_blank' className="nav-link-custom">Our Work</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/contact" className="nav-link-custom">Contact Us</Nav.Link>
            </Nav>
            <Nav>
              <Button
                className="request-call-button-gits ms-lg-3" /* Added margin for large screens */
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