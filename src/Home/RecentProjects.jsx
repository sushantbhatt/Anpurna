

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules'; // Updated import path
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './RecentProjects.css';

import project_1 from "./HomeImg/p1.jpg";
import project_2 from "./HomeImg/p2.png";
import project_3 from "./HomeImg/p3.jpg";
import project_4 from "./HomeImg/p4.jpg";
import project_5 from "./HomeImg/p5.jpg";

const RecentProjects = () => {
  const projects = [
    { id: 1, title: "Wood & Composites", image: project_1 },
    { id: 2, title: "Hospitality & Banquet Carpet", image: project_2 },
    { id: 3, title: "Wall Covering", image: project_3 },
    { id: 4, title: "Laminate Wooden Flooring", image: project_4 },
    { id: 5, title: "Modular Carpet Tiles", image: project_5 }
  ];

  const swiperRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
    <section className="recent-projects-section" style={{ backgroundColor: '#fafafa' }} id="recentproject">
      <motion.div 
        className="recent-projects-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="recent-section-header" variants={itemVariants}>
          <h3 className="recent-section-title" style={{ color: '#0F2A1D' }}>RECENT PRODUCTS</h3>
          <h4 className="recent-section-subtitle" style={{ color: '#61CE70' }}>
            Transform your space, transform your life.
          </h4>
        </motion.div>

        <motion.div className="recent-swiper-container" variants={itemVariants}>
          <Swiper
            ref={swiperRef}
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            speed={300}
            touchRatio={0.7}
            resistanceRatio={0}
            pagination={{ 
              clickable: true,
              el: '.custom-pagination',
              bulletClass: 'custom-bullet',
              bulletActiveClass: 'custom-bullet-active'
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{ 
              delay: 2000, 
              disableOnInteraction: false 
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="project-swiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <motion.div 
                  className="recent-project-card"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="recent-project-image-container">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="recent-project-image"
                    />
                    <div className="recent-image-overlay" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}></div>
                  </div>
                  <div className="recent-project-title" style={{ backgroundColor: 'grey' }}>
                    <h4 style={{ color: '#E3EED4' }}>{project.title}</h4>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="recent-swiper-controls">
            <div className="swiper-button-prev" style={{ color: '#0F2A1D' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </div>
            <div className="recent-custom-pagination"></div>
            <div className="swiper-button-next" style={{ color: '#0F2A1D' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </div>
          </div>
        </motion.div>

        <motion.div className="recent-view-more-container" variants={itemVariants}>
          <a href="/products" className="recent-view-more-link">
            <motion.button 
              className="view-more-btn"
              style={{ 
                backgroundColor: 'red',
                color: '#E3EED4'
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'grey',
                boxShadow: '0 8px 20px rgba(15, 42, 29, 0.3)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              View All Products
            </motion.button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default RecentProjects;