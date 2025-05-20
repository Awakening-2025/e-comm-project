// frontend/src/pages/ServicesPage.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link
import { FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa';
import { getAllServices } from '../data/servicesData'; // Import from your new data file

// Placeholder for a banner image
const bannerImageUrl = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'; // Example

const ServicesPageStyles = () => (
  <style type="text/css">{`
    .services-page {
      padding-bottom: 3rem;
      background-color: #f8f9fa;
    }
    .services-hero {
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerImageUrl}) no-repeat center center;
      background-size: cover;
      color: white;
      padding: 5rem 1rem;
      text-align: center;
      margin-bottom: 3rem;
    }
    .services-hero h1 { font-size: 2.8rem; font-weight: bold; margin-bottom: 1rem; text-shadow: 2px 2px 4px rgba(0,0,0,0.7); }
    .services-hero p { font-size: 1.15rem; max-width: 700px; margin: 0 auto 1.5rem auto; }
    .section-title { text-align: center; margin-bottom: 1rem; font-size: 2.2rem; font-weight: bold; color: #333; }
    .section-subtitle { text-align: center; margin-bottom: 3rem; font-size: 1.1rem; color: #555; max-width: 800px; margin-left: auto; margin-right: auto; }
    .title-underline { width: 100px; height: 4px; background-color: #4CAF50; margin: 0 auto 3rem auto; }
    .service-card { border: none; border-radius: 0.5rem; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; height: 100%; display: flex; flex-direction: column; }
    .service-card:hover { transform: translateY(-10px); box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15); }
    .service-card .card-body { padding: 2rem; display: flex; flex-direction: column; flex-grow: 1; }
    .service-icon-wrapper { font-size: 3rem; color: #4CAF50; margin-bottom: 1.5rem; text-align: center; }
    .service-card .card-title { font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 1rem; text-align: center; }
    .service-card .card-text { font-size: 0.95rem; color: #555; line-height: 1.6; flex-grow: 1; margin-bottom: 1.5rem; }
    .service-card .btn-learn-more { background-color: #4a773c; border-color: #4a773c; font-weight: bold; padding: 0.6rem 1.5rem; text-transform: uppercase; font-size: 0.9rem; align-self: center; }
    .service-card .btn-learn-more:hover { background-color: #3e6531; border-color: #3e6531; }
    .why-choose-us-section { background-color: #ffffff; padding: 4rem 1rem; margin-top: 3rem; }
    .why-choose-us-item { text-align: center; margin-bottom: 2rem; }
    .why-choose-us-icon { font-size: 2.5rem; color: #4CAF50; margin-bottom: 1rem; }
    .why-choose-us-item h5 { font-size: 1.2rem; font-weight: bold; color: #333; margin-bottom: 0.5rem; }
    .why-choose-us-item p { font-size: 0.9rem; color: #555; }
    .final-cta-section { background-color: #2d2d2d; color: white; padding: 4rem 1rem; text-align: center; margin-top: 3rem; }
    .final-cta-section h2 { font-size: 2rem; font-weight: bold; margin-bottom: 1rem; }
    .final-cta-section p { font-size: 1.1rem; margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto; }
    .final-cta-section .btn-contact-us { background-color: #4CAF50; border-color: #4CAF50; color: white; font-weight: bold; padding: 0.8rem 2.5rem; font-size: 1.1rem; text-transform: uppercase; }
    .final-cta-section .btn-contact-us:hover { background-color: #45a049; border-color: #45a049; }
    @media (max-width: 768px) {
      .services-hero h1 { font-size: 2.2rem; }
      .services-hero p { font-size: 1rem; }
      .section-title { font-size: 1.8rem; }
      .service-card { margin-bottom: 2rem; }
    }
  `}
  </style>
);

const whyChooseUsData = [
  { icon: <FaUsers />, title: "Client-Centric Approach", description: "Your success is our priority. We listen, understand, and collaborate closely with you." },
  { icon: <FaLightbulb />, title: "Innovative Solutions", description: "We leverage the latest technologies and creative strategies to deliver cutting-edge results." },
  { icon: <FaRocket />, title: "Results-Driven", description: "Our focus is on delivering measurable outcomes that help your business grow." }
];

function ServicesPage() {
  const services = getAllServices(); // Get data from the imported function

  return (
    <>
      <ServicesPageStyles />
      <div className="services-page">
        <div className="services-hero">
          <Container>
            <h1>Our Digital Expertise</h1>
            <p>
              At Awakening Coins, we empower businesses with innovative digital solutions.
              From concept to launch and beyond, we're your dedicated partner in navigating the digital landscape.
            </p>
          </Container>
        </div>

        <Container className="mt-5">
          <h2 className="section-title">What We Offer</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            We provide a comprehensive suite of services designed to elevate your brand,
            engage your audience, and drive business growth. Explore how we can help you succeed.
          </p>
          <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
            {services.map((service, index) => (
              <Col key={service.id || index} className="d-flex align-items-stretch mb-4"> {/* Use service.id for key */}
                <Card className="service-card">
                  <Card.Body>
                    <div className="service-icon-wrapper">{service.icon}</div>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>
                      {service.description}
                    </Card.Text>
                    <Button as={Link} to={`/services/${service.id}`} className="btn-learn-more mt-auto">Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

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

        <div className="final-cta-section">
          <Container>
            <h2>Ready to Elevate Your Digital Presence?</h2>
            <p>
              Let's discuss your project and how Awakening Coins can help you achieve your business goals.
              Reach out today for a free consultation!
            </p>
            <Button as={Link} to="/contact-us" className="btn-contact-us"> {/* Link to your contact page */}
              Contact Us Now
            </Button>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ServicesPage;