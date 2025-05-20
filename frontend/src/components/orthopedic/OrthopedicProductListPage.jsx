// frontend/src/components/orthopedic/OrthopedicProductListPage.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Spinner, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// Data import
import { getOrthopedicProducts } from '../../data/orthopedicProductsData';

const OrthopedicProductListPage = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true);
        setError('');
        // Simulate API call delay
        setTimeout(() => {
            try {
                const fetchedProducts = getOrthopedicProducts();
                if (fetchedProducts && fetchedProducts.length > 0) {
                    setProducts(fetchedProducts);
                } else {
                    setError('No products found at the moment. Please check back later.');
                }
            } catch (err) {
                setError('Failed to load products. Please try again.');
                console.error("Error fetching products:", err);
            }
            setLoading(false);
        }, 500);
    }, []);

    if (loading) {
        return (
            <Container className="text-center py-5">
                <Spinner animation="border" role="status" variant="primary">
                    <span className="visually-hidden">Loading products...</span>
                </Spinner>
                <p className="mt-2">Loading Products...</p>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="py-5">
                <Alert variant="warning">
                    <Alert.Heading>Could not load products</Alert.Heading>
                    <p>{error}</p>
                </Alert>
            </Container>
        );
    }

    return (
        <Container className="my-4 my-md-5">
            <Row className="mb-4">
                <Col>
                    <h1 className="text-center" style={{ color: '#0A192F' }}>Our Orthopedic Products</h1>
                </Col>
            </Row>
            {products.length === 0 && !loading && (
                <Col xs={12} className="text-center">
                    <p>No orthopedic products are currently available.</p>
                </Col>
            )}
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {products?.map((product) => (
                    <Col key={product.id}>
                        <Card className="h-100 shadow-sm product-card-hover">
                            <Link to={`/orthopedic-product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card.Img
                                    variant="top"
                                    src={product.images[0]} // Display first image
                                    alt={product.name}
                                    style={{ height: '200px', objectFit: 'cover', borderBottom: '1px solid #eee' }}
                                    onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available'; /* Fallback Image */ }}
                                />
                            </Link>
                            <Card.Body className="d-flex flex-column">
                                <Card.Title
                                    as={Link}
                                    to={`/orthopedic-product/${product.id}`}
                                    className="h5 mb-2"
                                    style={{ textDecoration: 'none', color: '#0A192F' }}
                                >
                                    {product.name}
                                </Card.Title>
                                <Card.Text className="text-muted small" style={{ flexGrow: 1 }}>
                                    {product.shortDescription.substring(0, 80)}...
                                </Card.Text>
                                <Button
                                    variant="primary"
                                    onClick={() => navigate(`/orthopedic-product/${product.id}`)}
                                    style={{ backgroundColor: '#d4a053', borderColor: '#d4a053', color: '#0A192F', fontWeight: '500' }}
                                    className="mt-auto"
                                >
                                    View Details
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <style jsx global>{`
        .product-card-hover {
          transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }
        .product-card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.1) !important;
        }
      `}</style>
        </Container>
    );
};

export default OrthopedicProductListPage;