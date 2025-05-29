import React, { useState } from 'react';
import { FaPhoneVolume, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const QuickInfo = () => {
    const [open, setOpen] = useState(false);


    const phoneNumber = "+918745866373"; 1
    const whatsappMessage = encodeURIComponent("Hi, I'm interested in exploring your services and how they can help my business. Please get in touch with me at your earliest convenience. Thank you!");


    return (
        <>
            {!open && <button
                onClick={() => setOpen(!open)}
                style={{
                    position: 'fixed',
                    top: '50%',
                    right: 0,
                    transform: 'translateY(-50%)',
                    backgroundColor: '#25d366',  // WhatsApp green color for freshness
                    color: 'white',
                    border: 'none',
                    padding: '12px 20px',
                    cursor: 'pointer',
                    borderTopLeftRadius: '25px',
                    borderBottomLeftRadius: '25px',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontWeight: '600',
                    fontSize: '16px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1ebe57'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#25d366'}
                aria-label="Contact Us"
            >
                <FaPhoneVolume size={24} />
                Contact Us
            </button>}

            <div
                style={{
                    position: 'fixed',
                    top: '50%',
                    right: open ? 0 : '-320px',
                    transform: 'translateY(-50%)',
                    width: '280px',
                    backgroundColor: '#fff',
                    boxShadow: '-2px 0 12px rgba(0,0,0,0.2)',
                    padding: '20px',
                    transition: 'right 0.3s ease-in-out',
                    zIndex: 999,
                    borderTopLeftRadius: '12px',
                    borderBottomLeftRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    fontFamily: 'Arial, sans-serif',
                }}
            >
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '10px',
                    borderBottom: '1px solid #ddd',
                    paddingBottom: '5px',
                }}>
                    <h3 style={{ margin: 0, marginBottom: '10px', color: '#333' }}>Get in Touch</h3>
                    <button
                        onClick={() => setOpen(false)}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            fontSize: '28px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            color: '#888',
                        }}
                        aria-label="Close Contact Panel"
                    >
                        ×
                    </button>
                </div>
                <a
                    href={`tel:${phoneNumber}`}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        padding: '10px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '15px',
                        boxShadow: '0 2px 6px rgba(0,123,255,0.5)',
                    }}
                >
                    <FaPhoneVolume size={20} />
                    Quick Call
                </a>

                <a
                    href={`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        backgroundColor: '#25d366',
                        color: 'white',
                        padding: '10px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '15px',
                        boxShadow: '0 2px 6px rgba(37,211,102,0.5)',
                    }}
                >
                    <FaWhatsapp size={20} />
                    WhatsApp Message
                </a>
            </div>

        </>
    );
};

export default QuickInfo;
