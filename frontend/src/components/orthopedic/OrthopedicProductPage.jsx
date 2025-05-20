// frontend/src/components/orthopedic/OrthopedicProductPage.jsx
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button, Modal, Form, Spinner, Alert } from 'react-bootstrap';
import { getOrthopedicProductById } from '../../data/orthopedicProductsData';

// Static styles remain outside
const galleryStyles = `
  .thumbnails-container-desktop { display: flex; flex-direction: column; gap: 0.75rem; max-height: 480px; overflow-y: auto; padding-right: 0.75rem; }
  .thumbnails-container-mobile { display: flex; flex-direction: row; gap: 0.5rem; overflow-x: auto; padding-bottom: 0.75rem; margin-bottom: 0.75rem; max-height: 90px; }
  .thumbnail-item-wrapper { cursor: pointer; }
  .thumbnail-item-wrapper img { width: 100%; height: 70px; object-fit: cover; border: 2px solid #eee; border-radius: 4px; transition: border-color 0.2s ease-in-out; }
  .thumbnails-container-mobile .thumbnail-item-wrapper img { width: 70px; height: 70px; }
  .thumbnail-item-wrapper img.selected-thumbnail { border-color: #d4a053; }
  .main-image-display-wrapper { border: 1px solid #e0e0e0; border-radius: 8px; padding: 10px; display: flex; align-items: center; justify-content: center; min-height: 300px; max-height: 500px; }
  .main-product-image-tag { max-width: 100%; max-height: 480px; object-fit: contain; }
`;

const OrthopedicProductPage = () => {
    // 1. Basic Hooks (useState, useParams, useNavigate)
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedImage, setSelectedImage] = useState('');
    const [showMeetingModal, setShowMeetingModal] = useState(false);
    const [meetingDetails, setMeetingDetails] = useState({ name: '', email: '', phone: '', dateTime: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // 2. useEffect (should be high up)
    useEffect(() => {
        setLoading(true); // Ensure loading is true at the start of data fetch
        setError('');     // Clear previous errors
        const timer = setTimeout(() => {
            const fetchedProduct = getOrthopedicProductById(productId);
            if (fetchedProduct) {
                setProduct(fetchedProduct);
                if (fetchedProduct.images && fetchedProduct.images.length > 0) {
                    setSelectedImage(fetchedProduct.images[0]);
                } else {
                    setSelectedImage('https://via.placeholder.com/600x400?text=No+Image+Available');
                }
            } else {
                setError('Product not found. It might have been removed or the link is incorrect.');
                setProduct(null); // Clear product if not found
                setSelectedImage(''); // Clear selected image
            }
            setLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, [productId]);

    // 3. useCallback for all handlers
    const handleThumbnailClick = useCallback((imageSrc) => {
        setSelectedImage(imageSrc);
    }, []);

    const handleNavigateToAllProducts = useCallback(() => {
        navigate('/orthopedic-products-list');
    }, [navigate]);

    const handleWhatsAppNow = useCallback(() => {
        if (!product) return; // Guard clause
        const message = product.predefinedWhatsappMessage || `Hello, I am interested in ${product.name}.`;
        const url = `https://wa.me/${product.whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    }, [product]); // product can be null initially, function handles it

    const handleCallNow = useCallback(() => {
        if (!product) return; // Guard clause
        window.location.href = `tel:${product.callNumber}`;
    }, [product]);

    const handleMeetingNow = useCallback(() => setShowMeetingModal(true), []);
    const handleCloseMeetingModal = useCallback(() => {
        setShowMeetingModal(false);
        // Optionally reset form details if modal is closed without submission
        // setMeetingDetails({ name: '', email: '', phone: '', dateTime: '', message: '' });
    }, []);

    const handleMeetingFormChange = useCallback((e) => {
        const { name, value } = e.target;
        setMeetingDetails(prev => ({ ...prev, [name]: value }));
    }, []);

    const handleMeetingSubmit = useCallback(async (e) => {
        e.preventDefault();
        if (!product) return; // Should not happen if modal is tied to product page
        setIsSubmitting(true);
        const submissionTimer = setTimeout(() => {
            alert(`Meeting request for ${product.name} with ${meetingDetails.name} has been noted. We will contact you soon.`);
            setIsSubmitting(false);
            handleCloseMeetingModal(); // Close modal on successful submission
            setMeetingDetails({ name: '', email: '', phone: '', dateTime: '', message: '' }); // Reset form
        }, 1000);
        // In a real app, you'd clear the timer on unmount if the submission was a real async op
        // return () => clearTimeout(submissionTimer); // Not strictly needed for a simple setTimeout alert
    }, [product, meetingDetails, handleCloseMeetingModal]);


    // 4. useMemo for derived data (MUST BE BEFORE EARLY RETURNS)
    // Ensure these handle `product` being potentially null.
    const mainImages = useMemo(() => product?.images || [], [product]);

    const thumbnailSources = useMemo(() =>
        (product?.thumbnails && product.thumbnails.length === mainImages.length)
            ? product.thumbnails
            : mainImages, // If product is null, mainImages will be [], so this is safe
        [product, mainImages]
    );

    const productLongDescriptionHTML = useMemo(() => ({
        __html: (product?.longDescription || '').replace(/\n/g, '<br />')
    }), [product]);

    const memoizedThumbnails = useMemo(() => {
        if (!product || mainImages.length <= 1) return null; // Guard against null product or single/no image

        return thumbnailSources.map((thumbSrc, index) => (
            <div
                key={`thumb-${index}-${mainImages[index] || index}`} // Ensure key is stable and unique
                className="thumbnail-item-wrapper"
                onClick={() => handleThumbnailClick(mainImages[index])}
            >
                <Image
                    src={thumbSrc}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className={selectedImage === mainImages[index] ? 'selected-thumbnail' : ''}
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/70?text=Err'; }}
                />
            </div>
        ));
    }, [product, mainImages, thumbnailSources, selectedImage, handleThumbnailClick]);


    // 5. Conditional Returns (Loading, Error, No Product FOUND after loading)
    if (loading) {
        return (
            <Container className="text-center py-5">
                <Spinner animation="border" role="status" variant="primary"><span className="visually-hidden">Loading...</span></Spinner>
                <p className="mt-2">Loading Product Details...</p>
            </Container>
        );
    }

    if (error) { // If there was an error fetching/finding data
        return (
            <Container className="py-5">
                <Alert variant="danger">
                    <Alert.Heading>Error</Alert.Heading><p>{error}</p>
                    <Button onClick={handleNavigateToAllProducts} variant="primary">View All Products</Button>
                </Alert>
            </Container>
        );
    }

    if (!product) { // If loading is done, no error, but product is still null
        return (
            <Container className="py-5 text-center">
                <Alert variant="warning">
                    <Alert.Heading>Product Not Available</Alert.Heading>
                    <p>The product you are looking for could not be found.</p>
                    <Button onClick={handleNavigateToAllProducts} variant="primary">View All Products</Button>
                </Alert>
            </Container>
        );
    }

    // 6. Main JSX Return (if all checks above pass and product exists)
    return (
        <>
            <style>{galleryStyles}</style>
            <Container className="my-4 my-md-5">
                <Row>
                    <Col md={2} className="d-none d-md-block">
                        <div className="thumbnails-container-desktop">
                            {memoizedThumbnails}
                        </div>
                    </Col>

                    <Col md={6} xs={12}>
                        <div className="d-md-none thumbnails-container-mobile">
                            {memoizedThumbnails}
                        </div>
                        <div className="main-image-display-wrapper shadow-sm">
                            <Image
                                src={selectedImage}
                                alt={product.name} // product is guaranteed to exist here
                                className="main-product-image-tag"
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/500x400?text=Image+Load+Error'; }}
                            />
                        </div>
                    </Col>

                    <Col md={4} xs={12} className="mt-3 mt-md-0">
                        <h1 className="h2 mb-3" style={{ color: '#0A192F' }}>{product.name}</h1>
                        <p className="text-muted">{product.shortDescription}</p>
                        <div className="product-description mb-4" dangerouslySetInnerHTML={productLongDescriptionHTML} />

                        <div className="d-grid gap-3">
                            <Button variant="primary" size="lg" onClick={handleNavigateToAllProducts} style={{ backgroundColor: '#0A192F', borderColor: '#0A192F' }}>
                                See All Products
                            </Button>
                            <Button variant="success" size="lg" onClick={handleWhatsAppNow}>
                                WhatsApp Now
                            </Button>
                            <Button variant="info" size="lg" onClick={handleCallNow} className="text-white">
                                Call Now
                            </Button>
                            <Button variant="warning" size="lg" onClick={handleMeetingNow} style={{ color: '#0A192F' }}>
                                Schedule a Meeting
                            </Button>
                        </div>
                    </Col>
                </Row>

                <Modal show={showMeetingModal} onHide={handleCloseMeetingModal} centered backdrop="static">
                    <Modal.Header closeButton style={{ backgroundColor: '#0A192F', color: '#FFFFFF' }}>
                        <Modal.Title>Schedule Meeting for: {product.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleMeetingSubmit}>
                            <Form.Group className="mb-3" controlId="meetingName"><Form.Label>Full Name</Form.Label><Form.Control type="text" name="name" value={meetingDetails.name} onChange={handleMeetingFormChange} placeholder="Your Full Name" required /></Form.Group>
                            <Form.Group className="mb-3" controlId="meetingEmail"><Form.Label>Email</Form.Label><Form.Control type="email" name="email" value={meetingDetails.email} onChange={handleMeetingFormChange} placeholder="your.email@example.com" required /></Form.Group>
                            <Form.Group className="mb-3" controlId="meetingPhone"><Form.Label>Phone Number</Form.Label><Form.Control type="tel" name="phone" value={meetingDetails.phone} onChange={handleMeetingFormChange} placeholder="+91 12345 67890" required /></Form.Group>
                            <Form.Group className="mb-3" controlId="meetingDateTime"><Form.Label>Preferred Date & Time (Optional)</Form.Label><Form.Control type="datetime-local" name="dateTime" value={meetingDetails.dateTime} onChange={handleMeetingFormChange} /></Form.Group>
                            <Form.Group className="mb-3" controlId="meetingMessage"><Form.Label>Message (Optional)</Form.Label><Form.Control as="textarea" name="message" rows={3} value={meetingDetails.message} onChange={handleMeetingFormChange} placeholder="Any specific questions or requirements?" /></Form.Group>
                            <Button variant="primary" type="submit" disabled={isSubmitting} style={{ backgroundColor: '#d4a053', borderColor: '#d4a053', color: '#0A192F', fontWeight: 'bold' }}>
                                {isSubmitting ? <><Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> Submitting...</> : 'Request Meeting'}
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </Container>
        </>
    );
};

export default OrthopedicProductPage;