// frontend/src/data/orthopedicProductsData.js

// --- IMPORT YOUR IMAGES HERE ---
import kneeBrace1 from '../assets/orthopedic/knee-brace-1.jpg'; // Make sure this file exists
import kneeBrace2 from '../assets/orthopedic/knee-brace-2.jpg'; // Make sure this file exists
import kneeBrace3 from '../assets/orthopedic/knee-brace-3.jpg'; // Example
import kneeBrace4 from '../assets/orthopedic/knee-brace-4.jpg'; // Example

// Example imports for new products (MAKE SURE THESE FILES EXIST or adjust names/paths)
import ankleSupport1 from '../assets/orthopedic/ankle-support-1.jpg'; // Example image
import ankleSupport2 from '../assets/orthopedic/ankle-support-2.jpg'; // Example image
import wristBrace1 from '../assets/orthopedic/wrist-brace-1.jpg';     // Example image
import wristBrace2 from '../assets/orthopedic/wrist-brace-2.jpg';     // Example image
import backSupport1 from '../assets/orthopedic/back-support-1.jpg';   // Example, if different from lumbar

// If you have separate thumbnail images, import them too:
// import kneeBrace1Thumb from '../assets/orthopedic/knee-brace-1-thumb.jpg';
// import ankleSupport1Thumb from '../assets/orthopedic/ankle-support-1-thumb.jpg';


const orthopedicProductsData = [
    {
        id: 'premium-knee-brace-adjustable',
        name: 'Premium Adjustable Knee Brace',
        shortDescription: 'Advanced support for active recovery and pain relief from knee injuries.',
        longDescription: 'Our Premium Adjustable Knee Brace offers superior stability and comfort. Designed with breathable, high-quality materials, it provides optimal compression to reduce swelling and alleviate pain from injuries, arthritis, and strenuous activities. Fully adjustable straps ensure a perfect fit for all-day wear.',
        images: [
            kneeBrace1,
            kneeBrace2,
            kneeBrace3, // Add more if you have them
            kneeBrace4,
        ],
        // If you have specific thumbnail files and imported them:
        // thumbnails: [ kneeBrace1Thumb, kneeBrace2Thumb, ... ],
        // Otherwise, use an empty array or remove the key.
        thumbnails: [],
        whatsappNumber: '918745866373',
        predefinedWhatsappMessage: 'Hello, I am interested in the Premium Adjustable Knee Brace. Could you please provide more details?',
        callNumber: '+918745866373',
    },
    {
        id: 'ergonomic-lumbar-support-belt', // Changed ID slightly for clarity
        name: 'Ergonomic Lumbar Support Belt',
        shortDescription: 'Alleviates lower back pain and effectively improves posture.',
        longDescription: 'This Ergonomic Lumbar Back Support Belt is engineered to provide targeted support to your lower back, reducing pain and discomfort. Its contoured design promotes healthy posture, making it ideal for individuals suffering from chronic back issues or those who spend long hours sitting. Made with durable, breathable fabric for extended comfort.',
        images: [
            backSupport1, // Assuming you have a backSupport1.jpg
            kneeBrace1 // Placeholder if you don't have a second back support image yet
        ],
        thumbnails: [],
        whatsappNumber: '918745866373',
        predefinedWhatsappMessage: 'Hi, I want to know more about the Ergonomic Lumbar Support Belt.',
        callNumber: '+918745866373',
    },
    {
        id: 'stabilizing-ankle-support',
        name: 'Stabilizing Ankle Support Brace',
        shortDescription: 'Provides robust stabilization and comfort for weak or injured ankles.',
        longDescription: 'Our Stabilizing Ankle Support Brace is designed to offer maximum protection and support following an injury or to prevent re-injury. Features adjustable straps for a custom fit and compression, lightweight materials for breathability, and a slim design to fit in most shoes. Ideal for sprains, strains, and general ankle instability.',
        images: [
            ankleSupport1, // Make sure ankle-support-1.jpg exists
            ankleSupport2  // Make sure ankle-support-2.jpg exists
        ],
        thumbnails: [],
        whatsappNumber: '918745866373',
        predefinedWhatsappMessage: 'Hello, I am interested in the Stabilizing Ankle Support Brace.',
        callNumber: '+918745866373',
    },
    {
        id: 'carpal-tunnel-wrist-brace',
        name: 'Carpal Tunnel Wrist Brace',
        shortDescription: 'Relieves pain from carpal tunnel, arthritis, and tendonitis with firm support.',
        longDescription: 'This wrist brace provides comfortable, moderate support and compression for injured, weak, or post-cast wrists. It features a removable palmar splint and adjustable straps for a customized fit. The breathable material ensures comfort throughout the day and night, helping to reduce pain and swelling associated with carpal tunnel syndrome, arthritis, and tendonitis.',
        images: [
            wristBrace1, // Make sure wrist-brace-1.jpg exists
            wristBrace2  // Make sure wrist-brace-2.jpg exists
        ],
        thumbnails: [],
        whatsappNumber: '918745866373',
        predefinedWhatsappMessage: 'I would like to know more about the Carpal Tunnel Wrist Brace.',
        callNumber: '+918745866373',
    }

];

export const getOrthopedicProducts = () => {
    return orthopedicProductsData;
};

export const getOrthopedicProductById = (id) => {
    return orthopedicProductsData.find(product => product.id === id);
};