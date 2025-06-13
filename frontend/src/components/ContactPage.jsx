import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
// FaBuilding aur FaStore ko add kiya gaya hai
import {
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn,
  FaYoutube, FaPinterest, FaInstagram, FaWhatsapp, FaPaperPlane, FaDownload,
  FaUpload, FaBuilding, FaStore
} from 'react-icons/fa';
import { REST_URL_OBJ } from '../utils/constant/restUrl';
import httpClient from '../utils/httpclint';


const GitsCloneStyles = () => (
  <style type="text/css">{`
    /* --- AAPKE PURANE STYLES WAISE HI HAIN --- */
    .contact-page-gits-clone {
      padding-top: 3rem;
      padding-bottom: 3rem;
      background-color: #ffffff;
    }
    .form-section-gits {
      padding-right: 2rem;
    }
    .form-title-gits {
      font-size: 1.75rem;
      font-weight: bold;
      color: #333333;
      margin-bottom: 0.5rem;
    }
    .form-title-underline-gits {
      width: 80px;
      height: 4px;
      background-color: #4CAF50;
      margin-bottom: 2.5rem;
    }
    .form-control-gits {
      background-color: #f0f0f0 !important;
      border: 1px solid #e0e0e0 !important;
      border-radius: 0 !important;
      padding: 0.75rem 1rem !important;
      font-size: 0.9rem !important;
      color: #333 !important;
      margin-bottom: 1rem;
    }
    .form-control-gits::placeholder {
      color: #777 !important;
    }
    .form-control-gits:focus {
      background-color: #f0f0f0 !important;
      border-color: #4CAF50 !important;
      box-shadow: none !important;
    }
    .form-label-gits {
        display: none; 
    }
    .btn-send-gits {
      background-color: #4a773c !important;
      color: white !important;
      font-weight: bold !important;
      text-transform: uppercase;
      border-radius: 2px !important;
      width: auto;
      padding: 0.75rem 2.5rem !important;
      border: none !important;
      font-size: 1rem !important;
      margin-top: 1rem;
      transition: background-color 0.2s ease;
    }
    .btn-send-gits:hover {
      background-color: #3e6531 !important;
    }

    /* --- SIDEBAR KE LIYE UPDATED AUR NAYE STYLES --- */

    .sidebar-gits {
      background-color: #2d2d2d;
      color: #e0e0e0;
      padding: 2rem;
      height: 100%;
    }
    .sidebar-gits h5 {
      color: white;
      font-weight: bold;
      font-size: 1.3rem; /* Thoda bada title */
      margin-bottom: 2rem;
      text-align: center;
      border-bottom: 2px solid #4a773c;
      padding-bottom: 1rem;
    }

    /* Naya style: Address block ke liye */
    .sidebar-address-block {
      margin-bottom: 1.5rem;
    }
    .sidebar-address-block h6 {
      color: #ffffff;
      font-weight: 600;
      font-size: 1rem;
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
    }
    .sidebar-address-block p {
      color: #cccccc;
      font-size: 0.9rem;
      line-height: 1.6;
      margin-left: 28px; /* Icon ke neeche text ko align karne ke liye */
      padding: 0;
      margin-bottom: 0;
    }
    .sidebar-address-block .sidebar-icon-gits {
      color: #6fbf73;
      margin-right: 12px;
      font-size: 1.2rem;
    }

    /* Naya style: Contact list ke liye */
    .sidebar-contact-list p {
      display: flex;
      align-items: center;
      margin-bottom: 0.8rem;
    }
    .sidebar-contact-list .sidebar-icon-gits {
      color: #6fbf73;
      margin-right: 12px;
      font-size: 1rem;
    }
    .sidebar-contact-list span {
      color: #e0e0e0;
      font-weight: 500;
      margin-right: 5px;
    }
    .sidebar-contact-list a {
      color: #cccccc;
      text-decoration: none;
      transition: color 0.2s;
    }
    .sidebar-contact-list a:hover {
      color: #ffffff;
      text-decoration: underline;
    }
    
    /* Divider ke liye style */
    .sidebar-divider {
      border-color: #555;
      margin: 1.5rem 0;
    }

    /* Naya style: Social links ke liye */
    .social-links-container {
      text-align: center;
    }
    .social-links-container h6 {
      color: #ffffff;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    .social-icons-wrapper {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 15px;
    }
    .social-icon-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: #fff;
      font-size: 1.1rem;
      text-decoration: none;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .social-icon-link:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }
    .social-icon-link.facebook { background-color: #1877F2; }
    .social-icon-link.pinterest { background-color: #E60023; }
    .social-icon-link.youtube { background-color: #FF0000; }
    .social-icon-link.linkedin { background-color: #0A66C2; }
    .social-icon-link.instagram {
      background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    }

    .row-gits-custom-gutter {
        --bs-gutter-x: 1.5rem;
    }
    .btn-action-gits {
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 8px;
      font-weight: 400;
      display: flex;
      align-items: center;
      transition: all 0.3s ease;
    }
    .btn-action-gits:hover {
      background-color: #212529;
      color: #fff;
      transform: translateY(-2px);
    }
    .whatsapp-btn {
      background-color: #4a773c;
    }
    .whatsapp-btn:hover {
      background-color:rgb(41, 119, 18);
    }
  `}</style>
);


function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    website_link: '',
    budget: '',
    query: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const predefinedMessage = "Hi, I'm interested in exploring your services and how they can help my business. Please get in touch with me at your earliest convenience. Thank you!";
  const whatsappNumber = "918745866373";
  const encodedMessage = encodeURIComponent(predefinedMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await httpClient(
        "post",
        REST_URL_OBJ.RAISE_QUERY_FORM.SAVE_DATA,
        formData
      );
      if (response?.message) {
        alert("Your query has been submitted successfully. Our team will contact you shortly.");
        setFormData({ name: "", email: "", phone_number: "", website_link: "", query: "", budget: "" });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data?.message || "Something went wrong!");
      } else if (error.request) {
        alert("No response from the server. Please check your connection.");
      } else {
        alert("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <GitsCloneStyles />

      <Container className="contact-page-gits-clone">
        <Row className="row-gits-custom-gutter">
          {/* Left Column: Contact Form (No Changes) */}
          <Col lg={8} md={7} className="form-section-gits">
            <h3 className="form-title-gits">Send Message Us</h3>
            <div className="form-title-underline-gits"></div>

            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formNameGits">
                    <Form.Control type="text" name="name" placeholder="Name*" value={formData.name} onChange={handleChange} className="form-control-gits" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formEmailGits">
                    <Form.Control type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleChange} required className="form-control-gits" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formMobileGits">
                <Form.Control type="tel" name="phone_number" placeholder="Mobile*" value={formData.phone_number} onChange={handleChange} className="form-control-gits" />
              </Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formWebsiteGits">
                    <Form.Control type="url" name="website_link" placeholder="Website*" value={formData.website_link} onChange={handleChange} className="form-control-gits" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formBudgetGits">
                    <Form.Control type="text" name="budget" placeholder="Budget*" value={formData.budget} onChange={handleChange} className="form-control-gits" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formRequirementGits">
                <Form.Control as="textarea" name="query" rows={5} placeholder="Your Requirement*" value={formData.query} onChange={handleChange} required className="form-control-gits" />
              </Form.Group>
              <div className="d-flex flex-wrap gap-2 mt-4">
                <Button type="submit" className="btn-action-gits  whatsapp-btn">
                  <FaPaperPlane className="me-2" /> Send Now
                </Button>
                <Button as="a" href="tel:+918745866373" className="btn-action-gits  whatsapp-btn">
                  <FaPhoneAlt className="me-2" /> Call Now
                </Button>
                <Button as="a" href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-action-gits whatsapp-btn">
                  <FaWhatsapp className="me-2" /> WhatsApp Now
                </Button>
                <Button as="a" href="/Website_SOP_Requirement_Form.docx" download className="btn-action-gits whatsapp-btn">
                  <FaDownload className="me-2" /> Download SOP
                </Button>
              </div>
            </Form>
          </Col>

          {/* --- RIGHT COLUMN: REDESIGNED SIDEBAR --- */}
          <Col lg={4} md={5}>
            <div className="sidebar-gits">
              <h5>Awakening Coins</h5>

              {/* Address Section */}
              <div className="sidebar-address-block">
                <h6><FaBuilding className="sidebar-icon-gits" /> Main Office</h6>
                <p>E-6,7, KH.NO-103, PANCHSHEEL COLONY, LAL KUAN LANDMARK SHIV MANDIR, Ghaziabad, Uttar Pradesh, 201009</p>
              </div>
              <div className="sidebar-address-block">
                <h6><FaStore className="sidebar-icon-gits" /> Branch Office</h6>
                <p>H.N-B-386, ST N-10, ROUDAS & KAUSHIK SHOP ON STREET BOTH CORNER, 25 FUTA ROAD, GAGAN VIHAR , LANDMARK:- KRISHNA VATIKA, GHAZIABAD, UTTAR PRADESH:-201001</p>
              </div>

              <hr className="sidebar-divider" />

              {/* Contact Details Section */}
              <div className="sidebar-contact-list">
                <p>
                  <FaPhoneAlt className="sidebar-icon-gits" />
                  <span>Phone:</span>
                  <a href="tel:+918745866373">+(91) 8745866373</a>
                </p>
                <p>
                  <FaPhoneAlt className="sidebar-icon-gits" />
                  <span>Office:</span>
                  <a href="tel:+918745866373">+(91) 8745866373</a>
                </p>
                <p>
                  <FaEnvelope className="sidebar-icon-gits" />
                  <span>Email:</span>
                  <a href="mailto:info.awakeningcoins@gmail.com">info.awakeningcoins@gmail.com</a>
                </p>
              </div>

              <hr className="sidebar-divider" />

              {/* Social Links Section */}
              <div className="social-links-container">
                <h6>Connect With Us</h6>
                <div className="social-icons-wrapper">
                  <a href="https://www.facebook.com/profile.php?id=61575380657504" target="_blank" rel="noopener noreferrer" className="social-icon-link facebook">
                    <FaFacebookF />
                  </a>
                  <a href="https://in.pinterest.com/awakeningcoins/" target="_blank" rel="noopener noreferrer" className="social-icon-link pinterest">
                    <FaPinterest />
                  </a>
                  <a href="https://www.youtube.com/@AwakeningCoinsnew" target="_blank" rel="noopener noreferrer" className="social-icon-link youtube">
                    <FaYoutube />
                  </a>
                  <a href="https://www.linkedin.com/in/awakening-coins-464104363/" target="_blank" rel="noopener noreferrer" className="social-icon-link linkedin">
                    <FaLinkedinIn />
                  </a>
                  <a href="https://www.instagram.com/awakeningcoinsnew/" target="_blank" rel="noopener noreferrer" className="social-icon-link instagram">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ContactPage;