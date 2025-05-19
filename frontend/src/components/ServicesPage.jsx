import React from 'react';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import { FaLaptopCode, FaSearchDollar, FaMousePointer, FaPalette, FaObjectGroup, FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa'; // Icons for services

// Placeholder for a banner image - replace with your actual image URL or import
const bannerImageUrl = 'https://via.placeholder.com/1200x400.png?text=Our+Digital+Services'; // Example

const ServicesPageStyles = () => (
  <style type="text/css">{`
    .services-page {
      padding-top: 0; /* Remove top padding if banner is full width */
      padding-bottom: 3rem;
      background-color: #f8f9fa; /* Light background for the page */
    }

    .services-hero {
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerImageUrl}) no-repeat center center;
      background-size: cover;
      color: white;
      padding: 5rem 1rem;
      text-align: center;
      margin-bottom: 3rem;
    }
    .services-hero h1 {
      font-size: 2.8rem;
      font-weight: bold;
      margin-bottom: 1rem;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
    }
    .services-hero p {
      font-size: 1.15rem;
      max-width: 700px;
      margin: 0 auto 1.5rem auto;
    }

    .section-title {
      text-align: center;
      margin-bottom: 1rem;
      font-size: 2.2rem;
      font-weight: bold;
      color: #333;
    }
    .section-subtitle {
      text-align: center;
      margin-bottom: 3rem;
      font-size: 1.1rem;
      color: #555;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }
    .title-underline {
      width: 100px;
      height: 4px;
      background-color: #4CAF50; /* Primary Green */
      margin: 0 auto 3rem auto;
    }

    .service-card {
      border: none;
      border-radius: 0.5rem;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
      height: 100%; /* Ensure cards in a row are same height */
      display: flex;
      flex-direction: column;
    }
    .service-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
    .service-card .card-body {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    .service-icon-wrapper {
      font-size: 3rem;
      color: #4CAF50; /* Primary Green */
      margin-bottom: 1.5rem;
      text-align: center;
    }
    .service-card .card-title {
      font-size: 1.5rem;
      font-weight: bold;
      color: #333;
      margin-bottom: 1rem;
      text-align: center;
    }
    .service-card .card-text {
      font-size: 0.95rem;
      color: #555;
      line-height: 1.6;
      flex-grow: 1; /* Makes text take available space */
      margin-bottom: 1.5rem; /* Space before button */
    }
    .service-card .btn-learn-more {
      background-color: #4a773c; /* Darker Green */
      border-color: #4a773c;
      font-weight: bold;
      padding: 0.6rem 1.5rem;
      text-transform: uppercase;
      font-size: 0.9rem;
      align-self: center; /* Center button in card */
    }
    .service-card .btn-learn-more:hover {
      background-color: #3e6531;
      border-color: #3e6531;
    }

    .why-choose-us-section {
      background-color: #ffffff; /* White background for this section */
      padding: 4rem 1rem;
      margin-top: 3rem;
    }
    .why-choose-us-item {
      text-align: center;
      margin-bottom: 2rem;
    }
    .why-choose-us-icon {
      font-size: 2.5rem;
      color: #4CAF50;
      margin-bottom: 1rem;
    }
    .why-choose-us-item h5 {
      font-size: 1.2rem;
      font-weight: bold;
      color: #333;
      margin-bottom: 0.5rem;
    }
    .why-choose-us-item p {
      font-size: 0.9rem;
      color: #555;
    }

    .final-cta-section {
      background-color: #2d2d2d; /* Dark background */
      color: white;
      padding: 4rem 1rem;
      text-align: center;
      margin-top: 3rem;
    }
    .final-cta-section h2 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    .final-cta-section p {
      font-size: 1.1rem;
      margin-bottom: 2rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
    .final-cta-section .btn-contact-us {
      background-color: #4CAF50;
      border-color: #4CAF50;
      color: white;
      font-weight: bold;
      padding: 0.8rem 2.5rem;
      font-size: 1.1rem;
      text-transform: uppercase;
    }
    .final-cta-section .btn-contact-us:hover {
      background-color: #45a049;
      border-color: #45a049;
    }

    @media (max-width: 768px) {
      .services-hero h1 {
        font-size: 2.2rem;
      }
      .services-hero p {
        font-size: 1rem;
      }
      .section-title {
        font-size: 1.8rem;
      }
      .service-card {
        margin-bottom: 2rem; /* Add space between cards on mobile */
      }
    }
  `}
  </style>
);

const servicesData = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    description: "We craft responsive, high-performance websites and complex web applications tailored to your business needs. From stunning portfolios to robust e-commerce platforms, our solutions are scalable, secure, and built using modern technologies to ensure a seamless user experience across all devices.",
    link: "/services/web-development" // Example link
  },
  {
    icon: <FaSearchDollar />,
    title: "SEO & Content Strategy",
    description: "Boost your online visibility and drive organic traffic with our expert SEO services. We perform in-depth keyword research, on-page/off-page optimization, technical SEO audits, and compelling content creation to help you rank higher on search engines and connect with your target audience effectively.",
    link: "/services/seo"
  },
  {
    icon: <FaMousePointer />,
    title: "Search Campaign Management (SCM/PPC)",
    description: "Maximize your ROI with targeted Search Campaign Management. We design, implement, and manage effective Pay-Per-Click (PPC) campaigns on platforms like Google Ads, ensuring your ads reach the right people at the right time, driving qualified leads and sales while optimizing your ad spend.",
    link: "/services/scm-ppc"
  },
  {
    icon: <FaPalette />,
    title: "Graphic Design",
    description: "Capture attention and build a strong brand identity with our creative graphic design services. We specialize in logo design, branding packages, marketing collateral (brochures, flyers), social media graphics, and digital ad creatives that are visually stunning and communicate your message clearly.",
    link: "/services/graphic-design"
  },
  {
    icon: <FaObjectGroup />,
    title: "UI/UX Design",
    description: "Deliver exceptional user experiences with our intuitive UI/UX design solutions. We focus on creating user-centered designs that are not only visually appealing but also easy to navigate and use. Our process involves research, wireframing, prototyping, and usability testing to ensure your digital product delights users.",
    link: "/services/ui-ux-design"
  }
];

const whyChooseUsData = [
  {
    icon: <FaUsers />,
    title: "Client-Centric Approach",
    description: "Your success is our priority. We listen, understand, and collaborate closely with you."
  },
  {
    icon: <FaLightbulb />,
    title: "Innovative Solutions",
    description: "We leverage the latest technologies and creative strategies to deliver cutting-edge results."
  },
  {
    icon: <FaRocket />,
    title: "Results-Driven",
    description: "Our focus is on delivering measurable outcomes that help your business grow."
  }
];


function ServicesPage() {
  return (
    <>
      <ServicesPageStyles />
      <div className="services-page">
        {/* Hero Section */}
        <div className="services-hero">
          <Container>
            <h1>Our Digital Expertise</h1>
            <p>
              At Awakening Coins, we empower businesses with innovative digital solutions.
              From concept to launch and beyond, we're your dedicated partner in navigating the digital landscape.
            </p>
            {/* Optional Button for Hero */}
            {/* <Button variant="light" size="lg" href="/contact">Get Started</Button> */}
          </Container>
        </div>

        {/* Main Services Section */}
        <Container>
          <h2 className="section-title">What We Offer</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            We provide a comprehensive suite of services designed to elevate your brand,
            engage your audience, and drive business growth. Explore how we can help you succeed.
          </p>
          <Row xs={1} md={2} lg={3} className="g-4 justify-content-center"> {/* g-4 for gutters, adjust as needed */}
            {servicesData.map((service, index) => (
              <Col key={index} className="d-flex align-items-stretch mb-4">
                <Card className="service-card">
                  <Card.Body>
                    <div className="service-icon-wrapper">{service.icon}</div>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>
                      {service.description}
                    </Card.Text>
                    {/* You can link this button to a more detailed service page or contact form */}
                    <Button href={service.link || "/contact"} className="btn-learn-more mt-auto">Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        {/* Why Choose Us Section */}
        <div className="why-choose-us-section">
          <Container>
            <h2 className="section-title">Why Partner With Us?</h2>
            <div className="title-underline"></div>
            <Row>
              {whyChooseUsData.map((item, index) => (
                <Col md={4} key={index} className="why-choose-us-item">
                  <div className="why-choose-us-icon">{item.icon}</div>
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

        {/* Final Call to Action Section */}
        <div className="final-cta-section">
          <Container>
            <h2>Ready to Elevate Your Digital Presence?</h2>
            <p>
              Let's discuss your project and how Awakening Coins can help you achieve your business goals.
              Reach out today for a free consultation!
            </p>
            <Button href="/contact" className="btn-contact-us">
              Contact Us Now
            </Button>
          </Container>
        </div>

      </div>
    </>
  );
}

export default ServicesPage;