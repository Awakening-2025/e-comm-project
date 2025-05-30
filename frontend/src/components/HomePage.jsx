// import React from 'react';
// import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap'; // Carousel is already imported
// import { Link } from 'react-router-dom';
// import { FaLightbulb, FaChartLine, FaUsers, FaLaptopCode, FaSearchDollar, FaPaintBrush, FaPhoneAlt } from 'react-icons/fa';

// // Keep your existing image imports
// import HeroImage1 from "../assets/CodingImage.jpg";
// import HeroImage2 from "../assets/DarkImage.jpg";
// import HeroImage3 from "../assets/FrontCode.jpg";
// // ... (other service images if needed for other sections) ...

// // Ensure this CSS file is imported and contains the necessary shared styles
// // import './ContactPage.css'; // Or your shared styles file
// // import './SharedStyles.css';

// const HomePageGitsInspiredStyles = () => (
//   <style type="text/css">{`
//     /* Styles for Carousel Hero Section */
//     .hero-carousel .carousel-item {
//       position: relative;
//       color: white;
//       text-align: center;
//       padding: 2rem 1rem; /* Padding for content within item */
//       min-height: 70vh;
//       max-height: 550px; /* Max height like original carousel */
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       background-size: cover;
//       background-position: center center;
//       overflow: hidden; /* Ensure image doesn't overflow item boundaries */
//     }

//     .hero-carousel .carousel-item::before { /* Overlay for text readability */
//       content: '';
//       position: absolute;
//       top: 0;
//       left: 0;
//       right: 0;
//       bottom: 0;
//       background: rgba(0, 0, 0, 0.55); /* Dark overlay, slightly increased */
//     }

//     .hero-carousel .carousel-caption-custom { /* Custom class for caption styling */
//       position: relative; /* To be above the overlay */
//       z-index: 1;
//       max-width: 800px;
//       padding: 1.5rem; /* Add some padding inside the caption */
//       /* background: rgba(0, 0, 0, 0.2); /* Optional: slight background for caption box */
//       /* border-radius: 8px; */
//     }

//     .hero-carousel .carousel-caption-custom h1 {
//       font-size: clamp(2.2rem, 5vw, 3.8rem); /* Adjusted for potentially longer titles */
//       font-weight: 700;
//       text-shadow: 0px 2px 5px rgba(0,0,0,0.5);
//       margin-bottom: 0.75rem;
//     }

//     .hero-carousel .carousel-caption-custom .subtitle {
//       font-size: clamp(1rem, 2.5vw, 1.4rem); /* Adjusted for potentially longer subtitles */
//       font-weight: 400; /* Slightly less bold subtitle */
//       color: #ddeeff; /* Lighter blue, ensure good contrast */
//       margin-bottom: 1.5rem;
//       line-height: 1.5;
//     }

//     .hero-carousel .hero-button-gits-inspired {
//       padding: 0.8rem 2rem !important;
//       font-size: 1.1rem !important;
//       font-weight: 600 !important;
//       border-radius: 30px !important; /* Pill shape */
//       display: inline-flex;
//       align-items: center;
//       /* Gradient button style should be applied by .btn-submit-gradient */
//     }
//     .hero-carousel .hero-button-gits-inspired svg {
//       margin-right: 0.5em;
//     }

//     /* Styling for Carousel Controls - making them more visible */
//     .hero-carousel .carousel-control-prev-icon,
//     .hero-carousel .carousel-control-next-icon {
//       background-color: rgba(0, 0, 0, 0.3); /* Semi-transparent background */
//       border-radius: 50%;
//       padding: 10px; /* Make hit area larger */
//       background-size: 60%, 60%; /* Make arrow smaller within the circle */
//     }
//     .hero-carousel .carousel-indicators [data-bs-target] {
//         background-color: rgba(255, 255, 255, 0.7); /* Brighter indicators */
//     }
//     .hero-carousel .carousel-indicators .active {
//         background-color: #0d6efd; /* Active indicator with your primary color */
//     }


//     /* Styles for other sections remain the same */
//     .intro-section-gits-inspired {
//       text-align: center;
//       padding: 3rem 1rem;
//       background-color: #f8f9fa;
//     }
//     .intro-section-gits-inspired h2 {
//       color: #0056b3;
//       font-weight: 600;
//       margin-bottom: 0.75rem;
//     }
//     .intro-section-gits-inspired p {
//       max-width: 700px;
//       margin-left: auto;
//       margin-right: auto;
//       color: #495057;
//       font-size: 1.05rem;
//       line-height: 1.7;
//     }
//     .intro-section-gits-inspired .highlight-text {
//       color: #0d6efd;
//       font-weight: 500;
//     }

//     .services-section-gits-inspired .card {
//       transition: transform 0.3s ease, box-shadow 0.3s ease;
//     }
//     .services-section-gits-inspired .card:hover {
//       transform: translateY(-8px);
//       box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
//     }
//     .services-section-gits-inspired .card-title {
//         color: #0056b3;
//     }
//   `}</style>
// );


// // Data for the Hero Carousel
// const heroCarouselData = [
//   {
//     image: HeroImage1,
//     title: 'INNOVATIVE WEB SOLUTIONS',
//     subtitle: 'Crafting Digital Experiences That Convert & Inspire Action!',
//     buttonText: 'Explore Our Work',
//     buttonLink: '/portfolio', // Example internal link
//     buttonIcon: <FaLaptopCode />
//   },
//   {
//     image: HeroImage2,
//     title: 'DRIVE GROWTH WITH SEO',
//     subtitle: 'Rank Higher, Attract More Customers, and Dominate Your Niche.',
//     buttonText: 'Boost Your SEO',
//     buttonLink: '/services/seo',
//     buttonIcon: <FaSearchDollar />
//   },
//   {
//     image: HeroImage3,
//     title: 'STRATEGIC DIGITAL MARKETING',
//     subtitle: 'Maximize Your Reach & ROI with Data-Driven Strategies.',
//     buttonText: 'Get a Free Quote',
//     buttonLink: '/contact',
//     buttonIcon: <FaChartLine />
//   }
// ];

// // Data for services section (can be the same as before or adjusted)
// const servicesDataHomePage = [
//   { id: 1, name: 'Web Design & Development', icon: <FaLaptopCode size={40} className="text-primary mb-3"/>, description: 'Crafting stunning, responsive websites that engage users and drive conversions.', slug: 'web-design' },
//   { id: 2, name: 'Search Engine Optimization (SEO)', icon: <FaSearchDollar size={40} className="text-primary mb-3"/>, description: 'Boost your online visibility and rank higher on search engines with our expert SEO services.', slug: 'seo' },
//   { id: 3, name: 'Digital Marketing Strategy', icon: <FaPaintBrush size={40} className="text-primary mb-3"/>, description: 'Comprehensive digital marketing strategies including PPC, SMM, and content.', slug: 'digital-marketing' },
// ];


// function HomePage() {
//   return (
//     <>
//       <HomePageGitsInspiredStyles />

//       {/* Hero Section - Carousel */}
//       <Carousel fade interval={5000} className="hero-carousel">
//         {heroCarouselData.map((item, index) => (
//           <Carousel.Item 
//             key={index} 
//             style={{ backgroundImage: `url(${item.image})` }}
//           >
//             {/* Removed img tag, background is set on Carousel.Item directly */}
//             <div className="carousel-caption-custom"> {/* Using div for custom caption layout */}
//               <h1>{item.title}</h1>
//               <p className="subtitle">{item.subtitle}</p>
//               <Button 
//                 as={Link} 
//                 to={item.buttonLink}
//                 variant="primary" // Base variant, actual style from classes
//                 className="hero-button-gits-inspired btn-submit-gradient" // Shared gradient button style
//               >
//                 {item.buttonIcon} {item.buttonText}
//               </Button>
//             </div>
//           </Carousel.Item>
//         ))}
//       </Carousel>

//       {/* Introduction Section - Below Hero */}
//       <Container className="intro-section-gits-inspired">
//         <h2>Digital Marketing Agency in Your City</h2>
//         <p>
//           Your Company Name is a full-service Digital Marketing Agency that has been helping brands thrive online since [Year] with
//           holistic solutions that help you generate quality leads.
//         </p>
//         <p className="mt-3 highlight-text">
//           Starting right from generating a good volume of quality leads, we accelerate processes and
//           the efficiency of lead conversion through our experienced and proficient digital marketing.
//         </p>
//       </Container>

//       {/* Our Core Services Section */}
//       <Container className="my-5 py-4 services-section-gits-inspired">
//         <h2 className="text-center mb-5 display-6 fw-bold" style={{color: "#0056b3"}}>Our Core Services</h2>
//         <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
//           {servicesDataHomePage.map((service) => (
//             <Col key={service.id}>
//               <Card className="h-100 text-center contact-card p-3">
//                 <Card.Body>
//                   {service.icon}
//                   <Card.Title as="h4" className="fw-semibold my-3">{service.name}</Card.Title>
//                   <Card.Text className="text-muted px-2">{service.description}</Card.Text>
//                   <Button as={Link} to={`/services/${service.slug}`} variant="outline-primary" className="mt-4">
//                     Learn More
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>

//       {/* Why Partner With Us Section */}
//       <Container className="text-center py-5 my-4 bg-light rounded">
//         <h2 className="mb-5 display-6 fw-bold" style={{color: "#0056b3"}}>Why Partner With Us?</h2>
//         <Row>
//           {[
//             { icon: <FaLightbulb size={50} className="text-primary mb-3" />, title: 'Innovative Solutions', text: 'Creative strategies tailored to your unique business needs.' },
//             { icon: <FaChartLine size={50} className="text-primary mb-3" />, title: 'Results-Driven', text: 'Focused on delivering measurable results and tangible ROI.' },
//             { icon: <FaUsers size={50} className="text-primary mb-3" />, title: 'Client-Centric Approach', text: 'Your success is our priority. We partner with you every step.' },
//           ].map((benefit, index) => (
//             <Col md={4} key={index} className="mb-4 mb-md-0 px-lg-4">
//               {benefit.icon}
//               <h4 className="fw-semibold my-2" style={{color: "#0056b3"}}>{benefit.title}</h4>
//               <p className="text-muted">{benefit.text}</p>
//             </Col>
//           ))}
//         </Row>
//       </Container>

//       {/* Call to Action Section */}
//       <Container fluid className="page-title-section-contact text-center py-5 my-5">
//         <h2 className="display-5 fw-bold text-white">Ready to Grow Your Business?</h2>
//         <p className="lead fs-4 my-3 text-white-75">Let's discuss how our expert services can help you achieve your goals.</p>
//         <Button as={Link} to="/contact" variant="light" size="lg" className="px-5 py-3 fw-bold mt-2" style={{color: '#0d6efd'}}>
//           Get a Free Consultation
//         </Button>
//       </Container>
//     </>
//   );
// }

// export default HomePage;





import React from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLightbulb, FaChartLine, FaUsers, FaLaptopCode, FaSearchDollar, FaPaintBrush } from 'react-icons/fa'; // Removed FaPhoneAlt if not used

// Keep your existing image imports
import HeroImage1 from "../assets/CodingImage.jpg";
import HeroImage2 from "../assets/DarkImage.jpg";
import HeroImage3 from "../assets/FrontCode.jpg";
import SeoImg from "../assets/bannerImage1.jpeg";
import GraphicsImg from "../assets/graphicsDesign.jpg";


// Ensure you have a shared CSS file or import styles as needed
// For example, if you have a btn-submit-gradient class, ensure it's defined.
// I'll assume button styling will be done within this component for now for clarity.

const HomePageStyles = () => (
  <style type="text/css">{`
    /* Primary Colors (from Services Page for consistency) */
    :root {
      --primary-color: #4CAF50; /* Green */
      --primary-dark-color: #4a773c; /* Darker Green */
      --text-dark: #333333;
      --text-medium: #555555;
      --bg-light: #f8f9fa;
      --bg-dark-section: #2d2d2d; /* Dark grey for sections */
      --white-color: #ffffff;
    }

    /* Styles for Carousel Hero Section */
    .hero-carousel .carousel-item {
      position: relative;
      color: var(--white-color);
      text-align: center;
      padding: 2rem 1rem;
      min-height: 70vh;
      max-height: 550px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-size: cover;
      background-position: center center;
      overflow: hidden;
    }

    .hero-carousel .carousel-item::before { /* Overlay */
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6); /* Slightly darker overlay for better contrast */
    }

    .hero-carousel .carousel-caption-custom {
      position: relative;
      z-index: 1;
      max-width: 800px;
      padding: 1.5rem;
    }

    .hero-carousel .carousel-caption-custom h1 {
      font-size: clamp(2.2rem, 5vw, 3.5rem); /* Adjusted for better fit */
      font-weight: 700;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
      margin-bottom: 0.75rem;
      color: var(--white-color);
    }

    .hero-carousel .carousel-caption-custom .subtitle {
      font-size: clamp(1rem, 2.5vw, 1.3rem); /* Adjusted */
      font-weight: 400;
      color: #e0e0e0; /* Lighter gray for subtitle */
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .hero-carousel .hero-button {
      padding: 0.8rem 2rem !important;
      font-size: 1.1rem !important;
      font-weight: 600 !important;
      border-radius: 30px !important;
      background-color: var(--primary-color) !important;
      border-color: var(--primary-color) !important;
      color: var(--white-color) !important;
      display: inline-flex;
      align-items: center;
      transition: background-color 0.3s ease, border-color 0.3s ease;
    }
    .hero-carousel .hero-button:hover {
      background-color: var(--primary-dark-color) !important;
      border-color: var(--primary-dark-color) !important;
    }
    .hero-carousel .hero-button svg {
      margin-right: 0.6em;
    }
    
    .hero-carousel .carousel-control-prev-icon,
    .hero-carousel .carousel-control-next-icon {
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 50%;
      padding: 12px;
      background-size: 55%, 55%;
    }
    .hero-carousel .carousel-indicators [data-bs-target] {
      background-color: rgba(255, 255, 255, 0.6);
    }
    .hero-carousel .carousel-indicators .active {
      background-color: var(--primary-color);
    }

    /* Section Title Styling */
    .section-title-gits {
      text-align: center;
      margin-bottom: 1rem;
      font-size: 2.2rem;
      font-weight: bold;
      color: var(--text-dark);
    }
    .section-title-underline-gits {
      width: 80px;
      height: 4px;
      background-color: var(--primary-color);
      margin: 0 auto 3rem auto;
    }
    .section-subtitle-gits {
      text-align: center;
      margin-bottom: 2.5rem;
      font-size: 1.05rem;
      color: var(--text-medium);
      max-width: 750px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.7;
    }

    /* Introduction Section */
    .intro-section {
      text-align: center;
      padding: 4rem 1rem;
      background-color: var(--bg-light);
    }
    .intro-section h2 {
      color: var(--text-dark); /* Changed from blue to standard dark */
      font-weight: 700;
      font-size: 2rem; /* Standardized size */
      margin-bottom: 1rem;
    }
    .intro-section .highlight-text {
      color: var(--primary-dark-color); /* Using darker green for emphasis */
      font-weight: 500;
    }

    /* Services Section */
    .services-section {
      padding: 4rem 1rem;
      background-color: var(--white-color); /* White background for services */
    }
    .services-section .service-card-home {
      border: none;
      border-radius: 0.5rem;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .services-section .service-card-home:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
    }
    .services-section .service-icon-home {
      color: var(--primary-color);
      margin-bottom: 1rem;
    }
    .services-section .card-title-home {
      color: var(--text-dark);
      font-weight: 600;
      font-size: 1.4rem;
    }
    .services-section .service-card-home .card-text {
      color: var(--text-medium);
      font-size: 0.95rem;
      flex-grow: 1;
      margin-bottom: 1.5rem;
    }
    .services-section .btn-learn-more-home {
      background-color: transparent !important;
      border: 2px solid var(--primary-dark-color) !important;
      color: var(--primary-dark-color) !important;
      font-weight: 600;
      padding: 0.5rem 1.5rem;
      text-transform: uppercase;
      font-size: 0.85rem;
      align-self: center;
    }
    .services-section .btn-learn-more-home:hover {
      background-color: var(--primary-dark-color) !important;
      color: var(--white-color) !important;
    }
    
    /* Why Partner With Us Section */
    .why-partner-section {
      padding: 4rem 1rem;
      background-color: var(--bg-light); /* Light background */
    }
    .why-partner-section .benefit-item {
      text-align: center;
      margin-bottom: 2rem;
    }
    .why-partner-section .benefit-icon {
      font-size: 2.8rem; /* Slightly larger icon */
      color: var(--primary-color);
      margin-bottom: 1rem;
    }
    .why-partner-section h5 { /* Title of each benefit */
      font-size: 1.3rem;
      font-weight: 600;
      color: var(--text-dark);
      margin-bottom: 0.5rem;
    }
    .why-partner-section p {
      font-size: 0.95rem;
      color: var(--text-medium);
    }

    /* Call to Action Section */
    .cta-section-home {
      background-color: var(--bg-dark-section); /* Dark background */
      color: var(--white-color);
      padding: 4rem 1rem;
      text-align: center;
    }
    .cta-section-home h2 {
      font-size: 2.2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    .cta-section-home p {
      font-size: 1.1rem;
      margin-bottom: 2rem;
      max-width: 650px;
      margin-left: auto;
      margin-right: auto;
      color: #e0e0e0; /* Lighter text on dark bg */
    }
    .cta-section-home .btn-cta-home {
      background-color: var(--primary-color) !important;
      border-color: var(--primary-color) !important;
      color: var(--white-color) !important;
      font-weight: bold;
      padding: 0.8rem 2.5rem;
      font-size: 1.1rem;
      text-transform: uppercase;
      border-radius: 30px; /* Consistent pill shape */
    }
    .cta-section-home .btn-cta-home:hover {
      background-color: var(--primary-dark-color) !important;
      border-color: var(--primary-dark-color) !important;
    }
      /* Services Section */
.services-section {
  padding: 4rem 1rem;
  background-color: var(--white-color);
}

.service-img-home {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 0.5rem;
}

/* ...rest of your service styles... */

  `}
  </style>
);

// Data for the Hero Carousel
const heroCarouselData = [
  {
    image: HeroImage1,
    title: 'INNOVATIVE WEB SOLUTIONS',
    subtitle: 'Crafting Digital Experiences That Convert & Inspire Action!',
    buttonText: 'Explore Our Work',
    buttonLink: '/services/portfolio',
    buttonIcon: <FaLaptopCode />
  },
  {
    image: HeroImage2,
    title: 'DRIVE GROWTH WITH SEO & SCM',
    subtitle: 'Rank Higher, Attract More Customers, and Dominate Your Niche with Targeted Campaigns.',
    buttonText: 'Boost Your Presence',
    buttonLink: '/services/seo',
    buttonIcon: <FaSearchDollar />
  },
  {
    image: HeroImage3,
    title: 'CREATIVE DESIGN & UI/UX',
    subtitle: 'Visually Stunning Graphics and Intuitive User Experiences that Captivate.',
    buttonText: 'See Our Designs',
    buttonLink: '/services/ui-ux-design',
    buttonIcon: <FaPaintBrush />
  }
];

// Updated Data for services section to reflect service page structure more
const servicesDataHomePage = [
  { id: 1, name: 'Web Development', icon: <img src={HeroImage3} alt="Web Development" className="service-img-home" />, description: 'Crafting stunning, responsive websites that engage users and drive conversions.', slug: 'web-development' },
  { id: 2, name: 'SEO & SCM', icon: <img src={SeoImg} alt="Search Engine Optimization" className="service-img-home" />, description: 'Boost visibility and rank higher with expert SEO and targeted Search Campaign Management.', slug: 'seo' }, // Combined SEO & SCM
  { id: 3, name: 'Graphic & UI/UX Design', icon: <img src={GraphicsImg} alt="Graphics Design" className="service-img-home" />, description: 'Creative graphics and intuitive UI/UX designs that make your brand stand out.', slug: 'graphic-design' }, // Combined Graphics & UI/UX
];

const whyPartnerData = [
  { icon: <FaLightbulb size={50} className="benefit-icon" />, title: 'Innovative Solutions', text: 'Creative strategies tailored to your unique business needs.' },
  { icon: <FaChartLine size={50} className="benefit-icon" />, title: 'Results-Driven', text: 'Focused on delivering measurable results and tangible ROI.' },
  { icon: <FaUsers size={50} className="benefit-icon" />, title: 'Client-Centric Approach', text: 'Your success is our priority. We partner with you every step.' },
];

function HomePage() {
  return (
    <>
      <HomePageStyles />

      {/* Hero Section - Carousel */}
      <Carousel fade interval={5000} className="hero-carousel">
        {heroCarouselData.map((item, index) => (
          <Carousel.Item
            key={index}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="carousel-caption-custom">
              <h1>{item.title}</h1>
              <p className="subtitle">{item.subtitle}</p>
              <Button
                as={Link}
                to={item.buttonLink}
                className="hero-button" // Uses new class for styling
              >
                {item.buttonIcon} {item.buttonText}
              </Button>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Introduction Section */}
      <Container fluid className="intro-section"> {/* fluid for full width bg */}
        <Container> {/* Inner container for content width */}
          <h2>Welcome to Awakening Coins</h2> {/* Changed to Company Name */}
          <p className="section-subtitle-gits"> {/* Using shared subtitle style */}
            Awakening Coins is a full-service Digital Solutions Agency empowering brands to thrive online since [Year].
            We deliver holistic strategies that generate quality leads and accelerate business growth.
          </p>
          <p className="mt-3 highlight-text">
            From initial concept to final conversion, we enhance process efficiency through our experienced and proficient digital expertise.
          </p>
        </Container>
      </Container>

      {/* Our Core Services Section */}
      <Container className="services-section">
        <h2 className="section-title-gits">Our Core Services</h2>
        <div className="section-title-underline-gits"></div>
        <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
          {servicesDataHomePage.map((service) => (
            <Col key={service.id} className="d-flex align-items-stretch">
              <Card className="service-card-home text-center p-3">
                <Card.Body className="d-flex flex-column">
                  {service.icon}
                  <Card.Title as="h4" className="card-title-home my-3">{service.name}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <Button
                    as={Link}
                    to={`/services/${service.slug}`}
                    className="btn-learn-more-home mt-auto"
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Why Partner With Us Section */}
      <Container fluid className="why-partner-section"> {/* fluid for full width bg */}
        <Container> {/* Inner container for content width */}
          <h2 className="section-title-gits">Why Partner With Us?</h2>
          <div className="section-title-underline-gits"></div>
          <Row>
            {whyPartnerData.map((benefit, index) => (
              <Col md={4} key={index} className="benefit-item px-lg-4">
                {benefit.icon}
                <h5>{benefit.title}</h5>
                <p>{benefit.text}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>

      {/* Call to Action Section */}
      <Container fluid className="cta-section-home"> {/* fluid for full width bg */}
        <Container> {/* Inner container for content width */}
          <h2>Ready to Grow Your Business?</h2>
          <p>Let's discuss how our expert services can help you achieve your goals. Contact us today!</p>
          <Button as={Link} to="/contact" className="btn-cta-home">
            Get a Free Consultation
          </Button>
        </Container>
      </Container>
    </>
  );
}

export default HomePage;