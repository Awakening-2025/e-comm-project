

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaPinterest, FaInstagram, FaWhatsapp, FaPaperPlane, FaDownload, FaUpload } from 'react-icons/fa';
import { REST_URL_OBJ } from '../utils/constant/restUrl';
import httpClient from '../utils/httpclint';



const GitsCloneStyles = () => (
  <style type="text/css">{`
    .contact-page-gits-clone {
      padding-top: 3rem; /* Add some space from top if no global navbar padding */
      padding-bottom: 3rem;
      background-color: #ffffff; /* Assuming white page background */
    }

    .form-section-gits {
      padding-right: 2rem; /* Space between form and sidebar */
    }

    .form-title-gits {
      font-size: 1.75rem; /* Approx size from image */
      font-weight: bold;
      color: #333333;
      margin-bottom: 0.5rem;
    }

    .form-title-underline-gits {
      width: 80px; /* Approx width */
      height: 4px;
      background-color: #4CAF50; /* Primary Green - adjust if needed */
      margin-bottom: 2.5rem;
    }

    .form-control-gits {
      background-color: #f0f0f0 !important; /* Light grey for inputs, !important to override bootstrap */
      border: 1px solid #e0e0e0 !important;
      border-radius: 0 !important; /* Square inputs */
      padding: 0.75rem 1rem !important;
      font-size: 0.9rem !important;
      color: #333 !important;
      margin-bottom: 1rem; /* Default margin for inputs */
    }
    .form-control-gits::placeholder {
      color: #777 !important;
    }
    .form-control-gits:focus {
      background-color: #f0f0f0 !important;
      border-color: #4CAF50 !important; /* Green border on focus */
      box-shadow: none !important;
    }
    .form-label-gits { /* Not explicitly visible in screenshot, but good for accessibility */
        display: none; 
    }


    .btn-send-gits {
      background-color: #4a773c !important; /* Darker Green from image */
      color: white !important;
      font-weight: bold !important;
      text-transform: uppercase;
      border-radius: 2px !important; /* Very slight radius or 0 */
      width: auto; /* Or 100% if it spans full form width */
      padding: 0.75rem 2.5rem !important;
      border: none !important;
      font-size: 1rem !important;
      margin-top: 1rem; /* Space above button */
      transition: background-color 0.2s ease;
    }
    .btn-send-gits:hover {
      background-color: #3e6531 !important; /* Slightly darker green on hover */
    }

    .sidebar-gits {
      background-color: #2d2d2d; /* Dark grey sidebar */
      color: #e0e0e0; /* Light text for sidebar */
      padding: 2rem;
      height: 100%; /* Make sidebar full height of its content or row */
    }
    .sidebar-gits h5 { /* For "GITS Projects Pvt. Ltd." */
      color: white;
      font-weight: bold;
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
    }
    .sidebar-gits p, .sidebar-gits a {
      font-size: 0.9rem;
      color: #cccccc;
      text-decoration: none;
      margin-bottom: 0.8rem; 
      display: flex; 
      align-items: flex-start; /* Align icon with first line of text */
    }
    .sidebar-gits a:hover {
      color: white;
    }
    .sidebar-icon-gits {
      color: #6fbf73; /* Green for icons in dark sidebar */
      margin-right: 0.8rem;
      font-size: 1rem; /* Icon size */
      margin-top: 0.15em; /* Fine-tune vertical alignment */
    }

    .social-links-gits .list-group-item {
      background-color: #536d53; /* Muted green for social buttons, slightly darker than icons */
      color: white !important;
      border-radius: 2px;
      margin-bottom: 0.75rem;
      padding: 0.6rem 1rem;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      border: none !important;
      text-decoration: none;
      transition: background-color 0.2s ease;
    }
    .social-links-gits .list-group-item:hover {
      background-color: #455a45; /* Darker on hover */
    }
    .social-links-gits .social-icon {
      margin-right: 0.75rem;
      font-size: 1.1rem; /* Social media icon size */
    }
    
    /* Adjust gutter for closer columns if needed */
    .row-gits-custom-gutter {
        --bs-gutter-x: 1.5rem; /* Default is 1.5rem, adjust as needed */
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
    budget: '', // Budget field not in the screenshot, but keeping it for now
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
        setFormData({
          name: "",
          email: "",
          phone_number: "",
          website_link: "",
          query: "",
          budget: ""
        });
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



  // If you want the map section from globalit, you'd need its specific iframe code
  // const mapEmbedCode = `...`;

  return (
    <>
      <GitsCloneStyles /> {/* Include the custom styles */}

      <Container className="contact-page-gits-clone">
        <Row className="row-gits-custom-gutter"> {/* Optional: Custom gutter class */}
          {/* Left Column: Contact Form */}
          <Col lg={8} md={7} className="form-section-gits">
            <h3 className="form-title-gits">Send Message Us</h3>
            <div className="form-title-underline-gits"></div>

            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formNameGits">
                    {/* <Form.Label className="form-label-gits">Name*</Form.Label> */}
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Name*"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control-gits"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formEmailGits">
                    {/* <Form.Label className="form-label-gits">Email*</Form.Label> */}
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email*"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-control-gits"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="formMobileGits">
                {/* <Form.Label className="form-label-gits">Mobile*</Form.Label> */}
                <Form.Control
                  type="tel"
                  name="phone_number"
                  placeholder="Mobile*"
                  value={formData.phone_number}
                  onChange={handleChange}
                  className="form-control-gits"
                />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group controlId="formWebsiteGits">
                    {/* <Form.Label className="form-label-gits">Website</Form.Label> */}
                    <Form.Control
                      type="url"
                      name="website_link"
                      placeholder="Website*" // In screenshot it's Website*
                      value={formData.website_link}
                      onChange={handleChange}
                      className="form-control-gits"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formBudgetGits">
                    {/* <Form.Label className="form-label-gits">Budget</Form.Label> */}
                    <Form.Control
                      type="text"
                      name="budget"
                      placeholder="Budget*" // In screenshot it's Budget*
                      value={formData.budget}
                      onChange={handleChange}
                      className="form-control-gits"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="formRequirementGits">
                {/* <Form.Label className="form-label-gits">Your Requirement*</Form.Label> */}
                <Form.Control
                  as="textarea"
                  name="query"
                  rows={5}
                  placeholder="Your Requirement*"
                  value={formData.query}
                  onChange={handleChange}
                  required
                  className="form-control-gits"
                />
              </Form.Group>

              <div className="d-flex flex-wrap gap-2 mt-4">
                {/* Send Now Button */}
                <Button type="submit" className="btn-action-gits  whatsapp-btn">
                  <FaPaperPlane className="me-2" /> Send Now
                </Button>

                {/* Call Now Button */}
                <Button as="a" href="tel:+918745866373" className="btn-action-gits  whatsapp-btn">
                  <FaPhoneAlt className="me-2" /> Call Now
                </Button>

                <Button
                  as="a"
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-action-gits whatsapp-btn"
                >
                  <FaWhatsapp className="me-2" /> WhatsApp Now
                </Button>

                <Button
                  as="a"
                  href="/Website_SOP_Requirement_Form.docx"
                  download
                  className="btn-action-gits whatsapp-btn"
                >
                  <FaDownload className="me-2" /> Download SOP
                </Button>
                {/* <Button
                  as="a"
                  href="/Website_SOP_Requirement_Form.docx"
                  download
                  className="btn-action-gits whatsapp-btn"
                >
                  <FaUpload className="me-2" /> Upload SOP
                </Button> */}
              </div>

            </Form>
          </Col>

          {/* Right Column: Contact Details & Social */}
          <Col lg={4} md={5}>
            <div className="sidebar-gits">
              <h5>Awakening Coins</h5>
              <p>
                <FaMapMarkerAlt className="sidebar-icon-gits" />
                E-6,7, KH.NO-103, PANCHSHEEL COLONY, LAL KUAN LANDMARK SHIV MANDIR, Ghaziabad, Uttar Pradesh, 201009
              </p>
              <p>
                <FaPhoneAlt className="sidebar-icon-gits" />
                Phone: <a href="tel:+919958732814" className="text-decoration-none" style={{ color: '#ccc' }}>+(91) 8745866373</a>
              </p>
              <p>
                <FaPhoneAlt className="sidebar-icon-gits" />
                Office: <a href="tel:+911204151836" className="text-decoration-none" style={{ color: '#ccc' }}>+(91) 8745866373</a>
              </p>
              <p>
                <FaEnvelope className="sidebar-icon-gits" />
                Email: <a href="mailto:info.awakeningcoins@gmail.com" className="text-decoration-none" style={{ color: '#ccc' }}>info.awakeningcoins@gmail.com
                </a>
              </p>

              <ListGroup className="social-links-gits mt-4">
                <ListGroup.Item as="a" href="https://www.facebook.com/profile.php?id=61575380657504" target="_blank">
                  <FaFacebookF className="social-icon" /> Follow Us facebook
                </ListGroup.Item>
                <ListGroup.Item as="a" href="https://in.pinterest.com/awakeningcoins/" target="_blank">
                  <FaPinterest className="social-icon" /> Follow Us Pintrest
                </ListGroup.Item>
                <ListGroup.Item as="a" href="https://www.youtube.com/@AwakeningCoinsnew" target="_blank"> {/* Example YT Link */}
                  <FaYoutube className="social-icon" /> Follow Us YouTube
                </ListGroup.Item>
                <ListGroup.Item as="a" href="https://www.linkedin.com/in/awakening-coins-464104363/" target="_blank">
                  <FaLinkedinIn className="social-icon" /> Follow Us linkedin
                </ListGroup.Item>
                <ListGroup.Item as="a" href="https://www.instagram.com/awakeningcoinsnew/" target="_blank">
                  <FaInstagram className="social-icon" /> Follow Us Instagram
                </ListGroup.Item>

              </ListGroup>
            </div>
          </Col>
        </Row>

      </Container>
    </>
  );
}

export default ContactPage;