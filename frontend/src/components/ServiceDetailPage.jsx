// frontend/src/pages/ServiceDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, ListGroup, Card, Breadcrumb, Alert } from 'react-bootstrap';
import { getServiceById } from '../data/servicesData'; // Import from your data file
import { FaArrowLeft, FaCheckCircle, FaProjectDiagram, FaBullseye } from 'react-icons/fa'; // Example icons

// Reusable Section Component
const DetailSection = ({ title, children, className = '' }) => (
    <div className={`service-detail-section ${className} pt-3 pb-4 mb-4`}>
        {title && <h2 className="section-title-detail mb-4">{title}</h2>}
        {children}
    </div>
);

// Styles for ServiceDetailPage
const ServiceDetailPageStyles = ({ bannerUrl }) => (
    <style type="text/css">{`
    .service-detail-page {
      background-color: #fff;
      padding-top: 0; /* Remove top padding if banner is full width */
    }
    .service-detail-hero {
      background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${bannerUrl || 'https://via.placeholder.com/1200x400.png?text=Our+Service'}) no-repeat center center;
      background-size: cover;
      color: white;
      padding: 6rem 1rem; /* Increased padding */
      text-align: center;
      margin-bottom: 0; /* No bottom margin for hero */
    }
    .service-detail-hero h1 {
      font-size: 3.2rem; /* Slightly larger */
      font-weight: bold;
      margin-bottom: 0.5rem;
      text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
    }
    .service-detail-hero p.lead {
      font-size: 1.3rem; /* Slightly larger */
      max-width: 800px;
      margin: 0 auto 1rem auto;
      opacity: 0.95;
    }
    .breadcrumb-bar {
      background-color: #f1f3f5; /* Lighter grey */
      padding: 0.75rem 0;
      margin-bottom: 2.5rem; /* Increased margin */
      border-bottom: 1px solid #dee2e6;
    }
    .section-title-detail {
      color: #2c3e50; /* Darker blue-grey */
      font-weight: 700; /* Bolder */
      font-size: 1.8rem; /* Size adjustment */
      border-bottom: 3px solid #4CAF50;
      padding-bottom: 0.6rem;
      display: inline-block;
      margin-bottom: 1.5rem !important; /* Ensure margin for title */
    }
    .service-detail-section ul {
      padding-left: 0;
      list-style: none;
    }
    .service-detail-section ul li {
      margin-bottom: 0.75rem; /* Increased spacing */
      font-size: 1rem;
      color: #495057; /* Softer black */
      display: flex;
      align-items: flex-start; /* Align icon with first line of text */
    }
    .service-detail-section ul li svg { /* Style for icons in lists */
      color: #4CAF50;
      margin-right: 0.75rem;
      font-size: 1.2em;
      flex-shrink: 0; /* Prevent icon from shrinking */
      margin-top: 0.15em; /* Align icon better with text */
    }
    .service-process-card {
      background-color: #f8f9fa;
      border-left: 5px solid #4CAF50;
      margin-bottom: 1.2rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .service-process-card .card-body { padding: 1.5rem; }
    .service-process-card .card-title { color: #4CAF50; font-weight: bold; }
    .service-cta-card {
      background-color: #e9f5e9;
      border: 1px solid #c8e6c9;
      text-align: center;
      border-radius: 8px;
    }
    .btn-service-cta {
      background-color: #4CAF50;
      border-color: #4CAF50;
      font-size: 1.1rem;
      padding: 0.75rem 2rem;
      font-weight: 500;
    }
    .btn-service-cta:hover { background-color: #45a049; border-color: #45a049; }
    .btn-back { margin-bottom: 0; font-size: 0.9rem; border-radius: 20px; padding: 0.4rem 1rem; }
    .sidebar-card { border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
    .sidebar-card .card-header { background-color: #4CAF50; color: white; font-weight: 500; }
    .content-paragraph {
      font-size: 1.05rem;
      line-height: 1.7;
      color: #343a40;
      margin-bottom: 1rem;
    }
  `}</style>
);

const ServiceDetailPage = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const currentService = getServiceById(serviceId);
        if (currentService) {
            setService(currentService);
            window.scrollTo(0, 0);
        } else {
            navigate('/services', { replace: true }); // Or to a 404 page
        }
        setLoading(false);
    }, [serviceId, navigate]);

    if (loading) {
        return <Container className="text-center py-5"><h2>Loading...</h2></Container>;
    }

    if (!service) {
        return (
            <Container className="text-center py-5">
                <Alert variant="danger">Service not found.</Alert>
                <Button as={Link} to="/services" variant="primary">Back to Services</Button>
            </Container>
        );
    }

    const { title, detailedContent: content } = service;

    // Helper to render list items with icons
    const renderListItems = (items, IconComponent = FaCheckCircle) => (
        <ul>
            {items.map((item, index) => (
                <li key={index}><IconComponent /> {item}</li>
            ))}
        </ul>
    );

    return (
        <>
            <ServiceDetailPageStyles bannerUrl={content.hero?.imageUrl} />
            <div className="service-detail-page">
                <div className="service-detail-hero">
                    <Container>
                        <h1>{content.hero?.title || title}</h1>
                        {content.hero?.subtitle && <p className="lead">{content.hero.subtitle}</p>}
                    </Container>
                </div>

                <div className="breadcrumb-bar">
                    <Container className="d-flex justify-content-between align-items-center">
                        <Breadcrumb listProps={{ className: 'mb-0 flex-grow-1' }}>
                            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/services" }}>Services</Breadcrumb.Item>
                            <Breadcrumb.Item active>{title}</Breadcrumb.Item>
                        </Breadcrumb>
                        <Button variant="outline-secondary" onClick={() => navigate(-1)} className="btn-back ms-auto">
                            <FaArrowLeft className="me-1" /> Back
                        </Button>
                    </Container>
                </div>

                <Container>
                    <Row>
                        <Col md={8} lg={9} className="pe-md-4">
                            <DetailSection title="Service Overview">
                                <p className="content-paragraph">{content.overview}</p>
                            </DetailSection>

                            {content.keyFeatures && (
                                <DetailSection title="Key Features">
                                    {renderListItems(content.keyFeatures, FaCheckCircle)}
                                </DetailSection>
                            )}

                            {content.benefits && (
                                <DetailSection title="Core Benefits">
                                    <Row xs={1} sm={2} className="g-3">
                                        {content.benefits.map((benefit, index) => (
                                            <Col key={index}>
                                                <Card bg="light" text="dark" className="h-100 border-0 shadow-sm">
                                                    <Card.Body className="d-flex align-items-center">
                                                        <FaBullseye className="me-3 text-success flex-shrink-0" size="1.5em" />
                                                        <Card.Text className="mb-0">{benefit}</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </DetailSection>
                            )}

                            {content.servicesOffered && (
                                <DetailSection title="What We Deliver">
                                    {renderListItems(content.servicesOffered)}
                                </DetailSection>
                            )}

                            {content.keyAreas && (
                                <DetailSection title="Our Focus Areas">
                                    {renderListItems(content.keyAreas)}
                                </DetailSection>
                            )}

                            {content.process && (
                                <DetailSection title="Our Streamlined Process">
                                    {content.process.map((step, index) => (
                                        <Card key={index} className="service-process-card">
                                            <Card.Body>
                                                <Card.Title as="h5"><FaProjectDiagram className="me-2" /> {index + 1}. {step.title}</Card.Title>
                                                <Card.Text className="content-paragraph mb-0">{step.description}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    ))}
                                </DetailSection>
                            )}

                            {content.ourApproach && (
                                <DetailSection title="Our Approach">
                                    <p className="content-paragraph">{content.ourApproach}</p>
                                </DetailSection>
                            )}
                        </Col>

                        <Col md={4} lg={3} className="mt-4 mt-md-0">
                            <Card className="sticky-top sidebar-card" style={{ top: '90px' }}>
                                <Card.Header as="h5" className="text-center">Quick Inquiry</Card.Header>
                                <Card.Body className="text-center">
                                    <Card.Text className="mb-3">
                                        Interested in our <strong>{title}</strong>? Let's discuss how we can achieve your goals.
                                    </Card.Text>
                                    <Button
                                        as={Link}
                                        to="/contact"
                                        className="w-100 btn-service-cta"
                                    >
                                        {content.cta?.buttonText || 'Get in Touch'}
                                    </Button>
                                    <hr className="my-3" />
                                    <Button variant="outline-dark" size="sm" as={Link} to="/services" className="w-100">
                                        View All Services
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {content.cta && (
                        <DetailSection className="text-center mt-5 py-5" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                            <h3 className="mb-3" style={{ fontWeight: '600', color: '#333' }}>{content.cta.text}</h3>
                            <Button
                                as={Link}
                                to="/contact"
                                size="lg"
                                className="btn-service-cta"
                            >
                                {content.cta.buttonText}
                            </Button>
                        </DetailSection>
                    )}
                </Container>
            </div>
        </>
    );
};

export default ServiceDetailPage;