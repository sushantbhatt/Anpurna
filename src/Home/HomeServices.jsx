




import React from 'react';
import { color, motion } from 'framer-motion';
import './HomeServices.css';
import icon_1 from "./HomeImg/service_icon1.png";
import icon_2 from "./HomeImg/service_icon2.png";
import icon_3 from "./HomeImg/service_icon3.png";

const HomeServices = () => {
  const services = [
    {
      id: 1,
      title: "Product Sourcing & Vendor Management",
      description: "Identifying reliable global suppliers and negotiating pricing and quality standards.",
      icon: icon_1
    },
    {
      id: 2,
      title: "International Freight & Logistics",
      description: "Coordinating air, sea, and land transportation for global shipping.",
      icon: icon_2,
   
    },
    {
      id: 3,
      title: "Soft Furnishings & Upholstery",
      description: "Providing curtains, cushions, rugs, and fabric-based interior accessories.",
      icon: icon_3
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="home-services-section" style={{ backgroundColor: ' #fafafa' }}>
      <div className="services-container">
        <motion.div 
          className="services-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h4 
            className="services-subtitle" 
            style={{ color: '#61CE70' }}
            variants={itemVariants}
          >
            SERVICE MAKE YOU HAPPIER LIFE!
          </motion.h4>
          <motion.h3 
            className="services-title" 
            style={{ color: '#0F2A1D' }}
            variants={itemVariants}
          >
             PROFESSIONAL FLOORING SOLUTIONS FOR HOMES & OFFICES
          </motion.h3>
        </motion.div>

        <motion.div 
          className="home-services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              className="service-card"
              style={{ backgroundColor: '#FFFFFF' }}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: '0 15px 30px rgba(15, 42, 29, 0.1)'
              }}
            >
              <div 
                className="service-icon-container"
                style={{ backgroundColor: '#6EC1E4' }}
              >
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  className="service-icon"

                />
              </div>
              
              <h6 
                className="service-card-title"
                style={{ color: '#54595F' }}
              >
                {service.title}
              </h6>
              
              <p 
                className="service-card-text"
                style={{ color: 'black' }}
              >
                {service.description}
              </p>
              
              <div className="service-card-line" style={{ backgroundColor: 'red' }}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServices;




