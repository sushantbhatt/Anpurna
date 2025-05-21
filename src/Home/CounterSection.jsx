import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CounterSection.css';
import counterBg1 from "./HomeImg/banner1.jpg";
import counterBg2 from "./HomeImg/banner2.jpg";
import counterBg3 from "./HomeImg/banner3.jpg";

const CounterSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const controls = useAnimation();
  const [counters, setCounters] = useState([
    { id: 1, value: 0, target: 2540, suffix: '+', label: 'Happy Clients' },
    { id: 2, value: 0, target: 25, suffix: '+', label: 'Years Experience' },
    { id: 3, value: 0, target: 268, suffix: '+', label: 'Projects Completed' },
    { id: 4, value: 0, target: 98, suffix: '%', label: 'Client Satisfaction' }
  ]);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      animateCounters();
    }
  }, [inView, controls]);

  const animateCounters = () => {
    const duration = 4000; // 4 seconds for slower animation
    const startTime = performance.now();

    const updateCounters = (timestamp) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounters(prevCounters => 
        prevCounters.map(counter => ({
          ...counter,
          value: Math.floor(progress * counter.target)
        }))
      );

      if (progress < 1) {
        requestAnimationFrame(updateCounters);
      } else {
        setCounters(prevCounters => 
          prevCounters.map(counter => ({
            ...counter,
            value: counter.target
          }))
        );
      }
    };

    requestAnimationFrame(updateCounters);
  };

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
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="counter-section" ref={ref}>
      {/* Full-width Image Carousel Background */}
      <div className="counter-carousel-container">
        <Carousel 
          controls={false} 
          indicators={false} 
          interval={5000}
          pause={false}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={counterBg1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={counterBg2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={counterBg3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <div className="carousel-overlay" style={{ backgroundColor: 'rgba(95, 95, 95, 0.49)' }}></div>
      </div>

      {/* Counter Content */}
      <motion.div 
        className="counter-content-container"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="counter-content">
          <motion.div className="section-header" variants={itemVariants}>
            <h4 className="section-subtitle" style={{ color: 'red', fontSize:'30px',marginBottom:'1px'  }}>OUR MILESTONES</h4>
            <h3 className="section-title" style={{ color: '#E3EED4' }}>Experience
            The magic of AIDF</h3>
            <p style={{color:'white', fontSize:'16px'}}>Our products are manufactured using the most advanced machinery and technology to provide great durability and quality.</p>
          </motion.div>

          <div className="counters-grid">
            {counters.map((counter) => (
              <motion.div 
                key={counter.id} 
                className="counter-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)'
                }}
              >
                <div className="counter-value" style={{ color: '#E3EED4' }}>
                  {counter.value.toLocaleString()}
                  <span style={{ color: '#AEC3B0' }}>{counter.suffix}</span>
                </div>
                <div className="counter-label" style={{ color: '#AEC3B0' }}>{counter.label}</div>
                <div className="counter-divider" style={{ backgroundColor: '#AEC3B0' }}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CounterSection;