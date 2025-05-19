// // frontend/src/pages/AboutPage.jsx
// import React from 'react';
// import { Container, Row, Col, Image } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; // If you need internal links like "Mr. Brij"

// // Placeholder image, replace with your actual image path
// import aboutImage from '../assets/aboutImage.jpg'; 

// // Custom CSS for GITS About Page style
// const GitsAboutStyles = () => (
//   <style type="text/css">{`
//     .about-header-banner-gits {
//       background-color: #4a773c; /* Main Green from GITS (adjust if needed) */
//       color: white;
//       padding: 4rem 1rem; /* Generous padding */
//       text-align: center;
//       margin-bottom: 3rem; /* Space below banner */
//     }

//     .about-header-banner-gits h1 {
//       font-size: clamp(2.2rem, 5vw, 3.5rem); /* Responsive title */
//       font-weight: bold;
//       margin-bottom: 0.75rem;
//     }

//     .about-header-banner-gits p {
//       font-size: clamp(1rem, 2.5vw, 1.15rem);
//       color: rgba(255, 255, 255, 0.9);
//       max-width: 800px;
//       margin-left: auto;
//       margin-right: auto;
//     }

//     .about-main-content-gits {
//       padding-bottom: 3rem; /* Space at the bottom of the page */
//     }

//     .about-content-image-gits {
//       border-radius: 8px; /* Optional: slight rounding for image */
//       box-shadow: 0 4px 15px rgba(0,0,0,0.1); /* Optional: subtle shadow */
//       max-width: 100%;
//       height: auto;
//     }

//     .about-content-text-gits h3 {
//       font-size: 1.6rem; /* Approx size from image */
//       font-weight: bold;
//       color: #333333; /* Dark text color */
//       margin-bottom: 1.5rem;
//       line-height: 1.4;
//     }

//     .about-content-text-gits p {
//       font-size: 0.95rem;
//       line-height: 1.7;
//       color: #555555; /* Standard paragraph text color */
//       margin-bottom: 1rem;
//     }

//     .about-content-text-gits p:last-child {
//       margin-bottom: 0;
//     }

//     .about-content-text-gits .highlight-link-gits {
//       color: #4a773c; /* GITS Green for links */
//       font-weight: bold;
//       text-decoration: none;
//     }
//     .about-content-text-gits .highlight-link-gits:hover {
//       text-decoration: underline;
//     }

//   `}</style>
// );

// function AboutPage() {
//   const companyName = "Global IT Sources"; // Or your actual company name

//   return (
//     <>
//       <GitsAboutStyles /> {/* Include the custom styles */}
      
//       {/* Header Banner Section */}
//       <Container fluid className="about-header-banner-gits">
//         <h1>About Company</h1>
//         <p>
//           {companyName} is a full-service Digital Marketing agency that has been helping brands strike online with its services since its
//           advent in 2013 with holistic solutions that help you generate quality leads.
//         </p>
//       </Container>

//       {/* Main Content Section */}
//       <Container className="about-main-content-gits">
//         <Row className="align-items-center">
//           <Col md={5} className="mb-4 mb-md-0 text-center text-md-start">
//             {/* Replace with your actual image */}
//             <Image 
//               src={aboutImage} // Using the image from their site for exact look
//               alt="Team discussing project" 
//               className="about-content-image-gits" 
//               fluid 
//             />
//             {/* Or if you have it locally:
//             <Image src={aboutImage} alt="Team discussing project" className="about-content-image-gits" fluid />
//             */}
//           </Col>
//           <Col md={7}>
//             <div className="about-content-text-gits">
//               <h3>STAND OUT OF THE CROWD. GENERATE MORE LEADS AND CLOSE MORE DEALS!</h3>
//               <p>
//                 Global IT Sources is a trusted and certified Digital Marketing agency
//                 comprising of experienced marketing professionals and maestros that are
//                 highly qualified and have helped generate incredible sales for their clients
//                 and customers.
//               </p>
//               <p>
//                 We understand that the ease of access to the internet has given your
//                 potential prospects access to more information and knowledge. Their
//                 patterns of choosing and buying products and services has changed.
//               </p>
//               <p>
//                 Hence, Global IT Sources has developed certain strategies and automation
//                 in place for Web Design, SEO, Content Writing, Social Media Marketing &
//                 even paid Google Ad SEnice (Google PPC Management) to empower your business. We understand how these five pillars work together to
//                 help to increase your sales and marketing efficiency and generate more ROI.
//                 We can’t emphasize enough on the importance of Digital Marketing, so we’ll
//                 let our number speak. Ever since we started in 2013, through our SEO
//                 services each of our customers has had an average 300% growth in leads.
//               </p>
//               <p>
//                 We are working on our new Venture for Luxury Real Estate, <Link to="/contact" className="highlight-link-gits">with Brij</Link>. {/* Example Link */}
//               </p>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default AboutPage;


// frontend/src/pages/AboutPage.jsx
// import React from 'react';
// import { Container, Row, Col, Image } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// // Placeholder image, replace with your actual image path
// import aboutImage from '../assets/aboutImage.jpg';

// // Updated Custom CSS for the About Page with the new theme
// const ThemedAboutStyles = () => (
//   <style type="text/css">{`
//     /* Header Banner Section - Updated Theme */
//     .about-header-banner-themed {
//       background-color: #0A192F; /* Dark Blue/Charcoal Background */
//       color: #E0E0E0;           /* Light Gray/Off-White for default text in banner */
//       padding: 4rem 1rem;
//       text-align: center;
//       margin-bottom: 3rem;
//     }

//     .about-header-banner-themed h1 {
//       font-size: clamp(2.2rem, 5vw, 3.5rem);
//       font-weight: bold;
//       margin-bottom: 0.75rem;
//       color: #d4a053;           /* Golden Color for the Main Title */
//     }

//     .about-header-banner-themed p {
//       font-size: clamp(1rem, 2.5vw, 1.15rem);
//       /* color: rgba(255, 255, 255, 0.9); // This is good too */
//       color: #E0E0E0;           /* Light Gray/Off-White for description */
//       max-width: 800px;
//       margin-left: auto;
//       margin-right: auto;
//     }

//     /* Main Content Section - Styles remain largely the same as it's on a white background */
//     .about-main-content-themed {
//       padding-bottom: 3rem;
//     }

//     .about-content-image-themed {
//       border-radius: 8px;
//       box-shadow: 0 4px 15px rgba(0,0,0,0.1);
//       max-width: 100%;
//       height: auto;
//     }

//     .about-content-text-themed h3 {
//       font-size: 1.6rem;
//       font-weight: bold;
//       color: #333333; /* Dark text for headings on white background */
//       margin-bottom: 1.5rem;
//       line-height: 1.4;
//     }

//     .about-content-text-themed p {
//       font-size: 0.95rem;
//       line-height: 1.7;
//       color: #555555; /* Standard paragraph text color on white background */
//       margin-bottom: 1rem;
//     }

//     .about-content-text-themed p:last-child {
//       margin-bottom: 0;
//     }

//     /* Updated Link Color to match the theme */
//     .about-content-text-themed .highlight-link-themed {
//       color: #d4a053; /* Golden Color for links */
//       font-weight: bold;
//       text-decoration: none;
//     }
//     .about-content-text-themed .highlight-link-themed:hover {
//       /* You could use a slightly darker gold or underline on hover */
//       text-decoration: underline;
//       color: #b8860b; /* Example: Darker gold on hover */
//     }

//   `}</style>
// );

// function AboutPage() {
//   const companyName = "Global IT Sources"; // Or your actual company name

//   return (
//     <>
//       <ThemedAboutStyles /> {/* Include the updated custom styles */}
      
//       {/* Header Banner Section - Apply new class */}
//       <Container fluid className="about-header-banner-themed">
//         <h1>About Company</h1>
//         <p>
//           {companyName} is a full-service Digital Marketing agency that has been helping brands strike online with its services since its
//           advent in 2013 with holistic solutions that help you generate quality leads.
//         </p>
//       </Container>

//       {/* Main Content Section - Apply new class prefix for consistency */}
//       <Container className="about-main-content-themed">
//         <Row className="align-items-center">
//           <Col md={5} className="mb-4 mb-md-0 text-center text-md-start">
//             <Image 
//               src={aboutImage} 
//               alt="Team discussing project" 
//               className="about-content-image-themed" 
//               fluid 
//             />
//           </Col>
//           <Col md={7}>
//             <div className="about-content-text-themed">
//               <h3>STAND OUT OF THE CROWD. GENERATE MORE LEADS AND CLOSE MORE DEALS!</h3>
//               <p>
//                 Awakening Coins Sources is a trusted and certified Digital Marketing agency
//                 comprising of experienced marketing professionals and maestros that are
//                 highly qualified and have helped generate incredible sales for their clients
//                 and customers.
//               </p>
//               <p>
//                 We understand that the ease of access to the internet has given your
//                 potential prospects access to more information and knowledge. Their
//                 patterns of choosing and buying products and services has changed.
//               </p>
//               <p>
//                 Hence, Awakening Coins Sources has developed certain strategies and automation
//                 in place for Web Design, SEO, Content Writing, Social Media Marketing &
//                 even paid Google Ad SEnice (Google PPC Management) to empower your business. We understand how these five pillars work together to
//                 help to increase your sales and marketing efficiency and generate more ROI.
//                 We can’t emphasize enough on the importance of Digital Marketing, so we’ll
//                 let our number speak. Ever since we started in 2013, through our SEO
//                 services each of our customers has had an average 300% growth in leads.
//               </p>
//               <p>
//                 We are working on our new Venture for Luxury Real Estate, <Link to="/contact" className="highlight-link-themed">with Brij</Link>.
//               </p>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default AboutPage;


import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap'; // Added Button
import { Link } from 'react-router-dom';
import { FaBullseye, FaUsers, FaHandsHelping, FaLightbulb } from 'react-icons/fa'; // Icons for values/mission

// Placeholder image, replace with your actual image path
import aboutImage from '../assets/aboutImage.jpg'; // Ensure this path is correct

const AboutPageStyles = () => (
  <style type="text/css">{`
    /* Using CSS variables defined in a global scope or HomePageStyles for consistency */
    /* If not global, you'd redefine them here or pass via props. Assuming they might be global. */
    :root {
      --primary-color: #4CAF50;
      --primary-dark-color: #4a773c;
      --text-dark: #333333;
      --text-medium: #555555;
      --bg-light: #f8f9fa;
      --bg-dark-section: #2d2d2d;
      --white-color: #ffffff;
    }

    /* Header Banner Section */
    .about-header-banner {
      background-color: var(--bg-dark-section); /* Dark Gray background */
      color: var(--white-color);
      padding: 5rem 1rem; /* Increased padding */
      text-align: center;
      margin-bottom: 0; /* Remove bottom margin if next section has top padding */
    }

    .about-header-banner h1 {
      font-size: clamp(2.5rem, 5.5vw, 3.8rem); /* Slightly larger */
      font-weight: 700; /* Bold */
      margin-bottom: 1rem;
      color: var(--primary-color); /* Green for title */
    }

    .about-header-banner .banner-subtitle {
      font-size: clamp(1.1rem, 3vw, 1.3rem); /* Larger subtitle */
      color: #e0e0e0; /* Lighter text for subtitle */
      max-width: 850px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.7;
    }

    /* Main Content Section */
    .about-main-content {
      padding: 4rem 1rem; /* Added padding top and bottom */
      background-color: var(--white-color); /* White background for main content */
    }

    .about-content-image {
      border-radius: 10px; /* Softer radius */
      box-shadow: 0 6px 20px rgba(0,0,0,0.12); /* Enhanced shadow */
      max-width: 100%;
      height: auto;
      object-fit: cover; /* Ensure image covers its container well */
    }

    .about-content-text .section-heading { /* For "Our Story", "Our Mission" etc. */
      font-size: 2rem; /* Consistent heading size */
      font-weight: 600; /* Bold */
      color: var(--text-dark);
      margin-bottom: 1rem;
      position: relative;
      padding-bottom: 0.5rem;
    }
    .about-content-text .section-heading::after { /* Underline accent */
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 60px;
        height: 3px;
        background-color: var(--primary-color);
    }


    .about-content-text h3 { /* For sub-headings if any */
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--primary-dark-color); /* Darker Green for sub-headings */
      margin-top: 2rem; /* Space above sub-heading */
      margin-bottom: 1rem;
    }

    .about-content-text p {
      font-size: 1rem; /* Standard paragraph size */
      line-height: 1.8; /* Improved line height for readability */
      color: var(--text-medium);
      margin-bottom: 1.2rem; /* Consistent paragraph spacing */
    }
    .about-content-text p:last-child {
      margin-bottom: 0;
    }
    .about-content-text .highlight-link {
      color: var(--primary-dark-color); /* Darker Green for links */
      font-weight: bold;
      text-decoration: none;
      transition: color 0.3s ease;
    }
    .about-content-text .highlight-link:hover {
      color: var(--primary-color); /* Lighter green on hover */
      text-decoration: underline;
    }

    /* Our Values/Mission Section */
    .our-values-section {
        padding: 4rem 1rem;
        background-color: var(--bg-light); /* Light gray background */
    }
    .values-title {
        text-align: center;
        font-size: 2.2rem;
        font-weight: bold;
        color: var(--text-dark);
        margin-bottom: 1rem;
    }
    .values-title-underline {
        width: 80px;
        height: 4px;
        background-color: var(--primary-color);
        margin: 0 auto 3rem auto;
    }
    .value-item {
        text-align: center;
        margin-bottom: 2rem;
    }
    .value-icon {
        font-size: 2.8rem;
        color: var(--primary-color);
        margin-bottom: 1rem;
    }
    .value-item h5 {
        font-size: 1.3rem;
        font-weight: 600;
        color: var(--text-dark);
        margin-bottom: 0.5rem;
    }
    .value-item p {
        font-size: 0.95rem;
        color: var(--text-medium);
    }

    /* Call to Action Button (if needed at the end) */
    .about-cta-button {
        background-color: var(--primary-color) !important;
        border-color: var(--primary-color) !important;
        color: var(--white-color) !important;
        font-weight: bold;
        padding: 0.7rem 2rem;
        font-size: 1rem;
        text-transform: uppercase;
        border-radius: 30px; /* Pill shape */
    }
    .about-cta-button:hover {
        background-color: var(--primary-dark-color) !important;
        border-color: var(--primary-dark-color) !important;
    }

  `}
  </style>
);

function AboutPage() {
  const companyName = "Awakening Coins"; // Updated company name

  const valuesData = [
    { icon: <FaLightbulb />, title: "Innovation", description: "We constantly seek creative and cutting-edge solutions to drive digital success for our clients." },
    { icon: <FaUsers />, title: "Client Focus", description: "Your goals are our priority. We build partnerships based on trust, transparency, and collaboration." },
    { icon: <FaBullseye />, title: "Results Driven", description: "We are committed to delivering measurable results that contribute to your business growth and ROI." },
    { icon: <FaHandsHelping />, title: "Integrity", description: "We operate with honesty and uphold the highest ethical standards in all our interactions." },
  ];

  return (
    <>
      <AboutPageStyles />
      
      <Container fluid className="about-header-banner">
        <h1>About {companyName}</h1>
        <p className="banner-subtitle">
          Empowering businesses with transformative digital strategies. We are {companyName}, your dedicated partner in navigating the complexities of the online world to achieve tangible results and sustainable growth.
        </p>
      </Container>

      <Container className="about-main-content">
        <Row className="align-items-center">
          <Col lg={5} md={6} className="mb-4 mb-md-0 text-center">
            <Image 
              src={aboutImage} 
              alt="Team at Awakening Coins collaborating" 
              className="about-content-image" 
              fluid 
            />
          </Col>
          <Col lg={7} md={6}>
            <div className="about-content-text">
              <h2 className="section-heading">Our Story: Forging Digital Success</h2>
              <p>
                Founded with a vision to demystify the digital landscape, {companyName} has evolved into a trusted digital solutions provider. We recognized early on that the internet wasn't just a platform, but a dynamic ecosystem where businesses could thrive with the right guidance. Our journey began with a commitment to helping organizations, large and small, unlock their online potential.
              </p>
              <p>
                Today, we stand as a team of passionate strategists, creative designers, skilled developers, and data-driven marketers. We believe in the power of a holistic approach, understanding that true digital success comes from the seamless integration of innovative web design, strategic SEO, compelling content, and effective digital marketing campaigns.
              </p>
              
              <h3 className="mt-4">Why {companyName}?</h3>
              <p>
                In an ever-changing digital world, your prospects have more choices and information than ever before. At {companyName}, we don't just keep up; we stay ahead. We've developed proven strategies and leverage automation for Web Development, SEO, Content Creation, Social Media Marketing, and PPC Advertising to empower your business.
              </p>
              <p>
                Our expertise lies in understanding how these critical pillars work in synergy to enhance your marketing efficiency, generate qualified leads, and maximize your return on investment. We are dedicated to crafting bespoke solutions that resonate with your target audience and deliver outstanding results.
              </p>
              <p>
                For inquiries about specific ventures or collaborations, such as our work in luxury real estate with partners like <Link to="/contact" className="highlight-link">Brij</Link>, please don't hesitate to reach out.
              </p>
              <div className="mt-4 text-center text-md-start">
                 <Button as={Link} to="/services" className="about-cta-button">Explore Our Services</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Our Values Section */}
      <Container fluid className="our-values-section">
        <Container>
            <h2 className="values-title">Our Core Values</h2>
            <div className="values-title-underline"></div>
            <Row>
            {valuesData.map((value, index) => (
                <Col md={6} lg={3} key={index} className="value-item">
                <div className="value-icon">{value.icon}</div>
                <h5>{value.title}</h5>
                <p>{value.description}</p>
                </Col>
            ))}
            </Row>
        </Container>
      </Container>
    </>
  );
}

export default AboutPage;