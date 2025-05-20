// frontend/src/data/servicesData.js
import React from 'react'; // React import for JSX in icons
import { FaLaptopCode, FaSearchDollar, FaMousePointer, FaPalette, FaObjectGroup } from 'react-icons/fa';

const servicesData = [
    {
        id: "web-development",
        // icon: <FaLaptopCode />,
        title: "Web Development",
        description: "We craft responsive, high-performance websites and complex web applications tailored to your business needs. From stunning portfolios to robust e-commerce platforms, our solutions are scalable, secure, and built using modern technologies to ensure a seamless user experience across all devices.",
        detailedContent: {
            hero: {
                title: "Comprehensive Web Development Solutions",
                subtitle: "Building Digital Experiences That Drive Results",
                imageUrl: "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            overview: "In today's digital-first world, your website is often the first interaction potential customers have with your brand. At Awakening Coins, we specialize in creating custom web solutions that not only look great but also perform exceptionally. Our development process is collaborative, transparent, and focused on achieving your business objectives.",
            keyFeatures: [
                "Custom Website Design & Development",
                "E-commerce Solutions (Shopify, WooCommerce, Custom)",
                "Content Management Systems (WordPress, Strapi, Custom)",
                "Responsive Design for All Devices",
                "API Integration & Development",
                "Website Maintenance & Support",
                "Performance Optimization & Security"
            ],
            process: [
                { title: "Discovery & Strategy", description: "Understanding your goals, target audience, and project requirements." },
                { title: "Design & Prototyping", description: "Creating wireframes and mockups for a user-centric design." },
                { title: "Development", description: "Building the website with clean, efficient code and modern technologies." },
                { title: "Testing & QA", description: "Ensuring functionality, performance, and compatibility across browsers." },
                { title: "Deployment & Launch", description: "Successfully launching your website to the world." },
                { title: "Ongoing Support", description: "Providing maintenance and updates post-launch." }
            ],
            cta: {
                text: "Ready to build your impactful online presence?",
                buttonText: "Discuss Your Web Project"
            }
        }
    },
    {
        id: "seo-content-strategy",
        // icon: <FaSearchDollar />,
        title: "SEO & Content Strategy",
        description: "Boost your online visibility and drive organic traffic with our expert SEO services. We perform in-depth keyword research, on-page/off-page optimization, technical SEO audits, and compelling content creation to help you rank higher on search engines and connect with your target audience effectively.",
        detailedContent: {
            hero: {
                title: "Dominate Search Rankings with Expert SEO",
                subtitle: "Strategic SEO and Content to Amplify Your Reach",
                imageUrl: "https://images.unsplash.com/photo-1559526324-c1f275fbfa32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            overview: "Search Engine Optimization (SEO) is crucial for long-term organic growth. Our team at Awakening Coins develops data-driven SEO and content strategies tailored to your industry and audience. We focus on sustainable techniques that improve your search engine rankings, attract qualified leads, and establish your brand as an authority.",
            keyFeatures: [
                "Comprehensive SEO Audits",
                "Keyword Research & Analysis",
                "On-Page & Off-Page Optimization",
                "Technical SEO (Site Speed, Mobile-Friendliness, Schema)",
                "Content Marketing & Creation (Blogs, Articles, Infographics)",
                "Local SEO Optimization",
                "Link Building Strategies",
                "Analytics & Reporting"
            ],
            benefits: [
                "Increased Organic Traffic",
                "Higher Search Engine Rankings",
                "Improved Brand Visibility & Credibility",
                "Better User Experience",
                "Higher Conversion Rates",
                "Long-term ROI"
            ],
            cta: {
                text: "Want to climb the search results and attract more customers?",
                buttonText: "Get Your SEO Audit"
            }
        }
    },
    {
        id: "scm-ppc",
        // icon: <FaMousePointer />,
        title: "Search Campaign Management (SCM/PPC)",
        description: "Maximize your ROI with targeted Search Campaign Management. We design, implement, and manage effective Pay-Per-Click (PPC) campaigns on platforms like Google Ads, ensuring your ads reach the right people at the right time, driving qualified leads and sales while optimizing your ad spend.",
        detailedContent: {
            hero: {
                title: "Targeted Advertising for Immediate Impact",
                subtitle: "Drive Qualified Leads with Strategic PPC Campaigns",
                imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            overview: "Pay-Per-Click (PPC) advertising offers a powerful way to get your brand in front of motivated buyers quickly. Our SCM/PPC experts manage your campaigns from start to finish, focusing on maximizing your return on ad spend (ROAS). We handle keyword selection, ad copywriting, bid management, landing page optimization, and continuous performance tracking.",
            keyFeatures: [
                "Google Ads (Search, Display, Shopping) Management",
                "Social Media Advertising (Facebook, Instagram, LinkedIn)",
                "Keyword Research & Targeting",
                "Ad Copywriting & A/B Testing",
                "Bid Management & Budget Optimization",
                "Landing Page Optimization",
                "Conversion Tracking & Reporting",
                "Remarketing Campaigns"
            ],
            platforms: ["Google Ads", "Microsoft Advertising (Bing Ads)", "Facebook Ads", "Instagram Ads", "LinkedIn Ads"],
            cta: {
                text: "Ready to boost your sales with targeted advertising?",
                buttonText: "Launch Your PPC Campaign"
            }
        }
    },
    {
        id: "graphic-design",
        // icon: <FaPalette />,
        title: "Graphic Design",
        description: "Capture attention and build a strong brand identity with our creative graphic design services. We specialize in logo design, branding packages, marketing collateral (brochures, flyers), social media graphics, and digital ad creatives that are visually stunning and communicate your message clearly.",
        detailedContent: {
            hero: {
                title: "Visual Storytelling That Captivates",
                subtitle: "Creative Graphic Design for a Lasting Impression",
                imageUrl: "https://images.unsplash.com/photo-1602836256291-1095fc069193?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            overview: "Great design is more than just aesthetics; it's about communication and creating a memorable brand experience. Our graphic design team combines creativity with strategic thinking to produce visuals that resonate with your target audience and reinforce your brand message across all touchpoints.",
            servicesOffered: [
                "Logo Design & Brand Identity",
                "Marketing & Advertising Materials (Brochures, Flyers, Posters)",
                "Social Media Graphics & Templates",
                "Website & App Graphics",
                "Infographics & Data Visualization",
                "Packaging Design",
                "Presentation Design"
            ],
            ourApproach: "We believe in a collaborative design process, working closely with you to understand your vision and objectives. Our approach ensures that the final designs are not only beautiful but also strategically aligned with your brand and marketing goals.",
            cta: {
                text: "Need compelling visuals that tell your brand's story?",
                buttonText: "Start Your Design Project"
            }
        }
    },
    {
        id: "ui-ux-design",
        // icon: <FaObjectGroup />,
        title: "UI/UX Design",
        description: "Deliver exceptional user experiences with our intuitive UI/UX design solutions. We focus on creating user-centered designs that are not only visually appealing but also easy to navigate and use. Our process involves research, wireframing, prototyping, and usability testing to ensure your digital product delights users.",
        detailedContent: {
            hero: {
                title: "Designing Intuitive and Engaging User Experiences",
                subtitle: "Crafting Digital Products Users Love",
                imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            overview: "User Interface (UI) and User Experience (UX) design are at the heart of successful digital products. We create designs that are not only aesthetically pleasing but also highly functional, intuitive, and aligned with user needs. Our goal is to make every interaction with your product seamless and enjoyable, leading to increased user satisfaction and engagement.",
            keyAreas: [
                "User Research & Persona Development",
                "Information Architecture & User Flows",
                "Wireframing & Prototyping (Low & High Fidelity)",
                "User Interface (UI) Design",
                "Interaction Design",
                "Usability Testing & Iteration",
                "Mobile App & Web Application Design",
                "Design Systems"
            ],
            benefits: [
                "Improved User Satisfaction & Loyalty",
                "Increased Conversion Rates & Engagement",
                "Reduced Development Costs (by identifying issues early)",
                "Enhanced Brand Perception",
                "Clearer Navigation & Ease of Use"
            ],
            cta: {
                text: "Ready to create a digital product that users will adore?",
                buttonText: "Enhance Your UI/UX"
            }
        }
    }
];

export const getAllServices = () => servicesData;
export const getServiceById = (id) => servicesData.find(service => service.id === id);