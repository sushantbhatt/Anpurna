// import React, { useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';
// import { motion, useAnimation } from 'framer-motion';
// import './AboutUs.css'; 
// import heroImg from "./img/heroImg.png";
// import visionImg from "./img/Managing Director.png"; // Add your vision image
// import missionImg from "./img/chairman image.png"; // Add your mission image

// const AboutUs = () => {
//   // Animation controls for Vision & Mission sections
//   const [visionRef, visionInView] = useInView({ threshold: 0.2, triggerOnce: true });
//   const [missionRef, missionInView] = useInView({ threshold: 0.2, triggerOnce: true });
//   const visionControls = useAnimation();
//   const missionControls = useAnimation();

//   useEffect(() => {
//     if (visionInView) {
//       visionControls.start("visible");
//     }
//   }, [visionControls, visionInView]);

//   useEffect(() => {
//     if (missionInView) {
//       missionControls.start("visible");
//     }
//   }, [missionControls, missionInView]);

//   const leftToRight = {
//     hidden: { opacity: 0, x: -100 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const rightToLeft = {
//     hidden: { opacity: 0, x: 100 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <div className="aboutPage-us-page">
//       {/* ========== Top Hero Section ========== */}
//       <section className="aboutPage-hero-section">
//         <div className="aboutPage-hero-container">
//           <div className="aboutPage-hero-content">
//             <h1>
//               <span className="highlight">PARAMOUNT WHOLESALER, EXPORTER & PROVIDER</span>
//             </h1>
//             <div className="divider"></div>
//             <p>
//               Established in 1995, AIDF GROUP is a pioneering force in the industry. With over 25 years of excellence, 
//               we are a leading manufacturer, wholesaler, service provider, and exporter of premium flooring solutions 
//               and wooden products.
//             </p>
//           </div>
//           <div className="aboutPage-hero-image">
//             <img src={heroImg} alt="AIDF GROUP Products" />
//           </div>
//         </div>
//       </section>

//       {/* ========== Leadership Section ========== */}
//       <section id='chairman-section' className="leadership-section">
//         <div className="section-header">
//           <h2>Leadership</h2>
//           <div className="section-divider"></div>
//         </div>
//         <div className="leader-container">
//           <div className="leader-card">
//             <div className="leader-icon">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M15.5 12a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-6.5a6.001 6.001 0 00-9.888 0H2.751a.75.75 0 100 1.5h4.305a6.001 6.001 0 009.888 0h4.305a.75.75 0 100-1.5h-4.305z" />
//               </svg>
//             </div>
//             <div className="leader-info">
//               <h3>Chairman</h3>
//               <div className="leader-bio">
//                 <p>
//                   Under visionary leadership, AIDF GROUP has evolved into an industry benchmark, combining decades 
//                   of experience with modern innovation. The Chairman's unwavering dedication to quality and strategic 
//                   growth has helped AIDF become a global brand known for reliability and customer satisfaction.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="leader-card">
//             <div className="leader-icon">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M12 11a5 5 0 015 5v6h-2v-6a3 3 0 00-2.824-2.995L12 13a3 3 0 00-2.995 2.824L9 16v6H7v-6a5 5 0 015-5zm-6.5 3c.279 0 .55.033.81.094a5.947 5.947 0 00-.301 1.575L6 16v.086a1.492 1.492 0 00-.356-.08L5.5 16a1.5 1.5 0 00-1.493 1.356L4 17.5V22H2v-4.5A3.5 3.5 0 015.5 14zm13 0a3.5 3.5 0 013.5 3.5V22h-2v-4.5a1.5 1.5 0 00-1.356-1.493L18.5 16c-.175 0-.343.03-.5.085V16c0-.666-.108-1.306-.309-1.904.26-.063.53-.096.809-.096zm-13-6a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm13 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-13 2a.5.5 0 100 1 .5.5 0 000-1zm13 0a.5.5 0 100 1 .5.5 0 000-1zM12 2a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z" />
//               </svg>
//             </div>
//             <div className="leader-info">
//               <h3>Managing Director</h3>
//               <div className="leader-bio">
//                 <p>
//                   The Managing Director of AIDF GROUP plays a pivotal role in steering the company's success through 
//                   innovation, customer-first focus, and sustainable practices. Their leadership ensures continuous 
//                   development, unmatched service, and cutting-edge products tailored for diverse global markets.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ========== Our Story Section ========== */}
//       <section id='ourstory' className="our-story-section">
//         <div className="section-header">
//           <h2><span className="highlight">OUR</span> STORY</h2>
//           <div className="section-divider"></div>
//         </div>
//         <div className="story-container">
//           <div className="story-content">
//             <div className="story-left">
//               <p>
//                 Established in 1995, AIDF GROUP is a pioneering force in the industry. With a rich legacy of over 25 years, we have cemented our position as a leading manufacturer, wholesaler, service provider, and exporter of premium flooring solutions and wooden products.
//               </p>
//               <p>
//                 Our extensive portfolio boasts an impressive range of products, including Wooden Flooring, Laminate Flooring, Vinyl Flooring, Carpet Tiles, Aluminum Profiles, Aluminum Skirting, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, and Brazilian Flooring.
//               </p>
//               <p className="signature">AIDF GROUP</p>
//             </div>
//             <div className="story-right">
//               <div className="story-features">
//                 <div className="feature-item">
//                   <div className="feature-icon">✓</div>
//                   <span>Sourced from world-class vendors</span>
//                 </div>
//                 <div className="feature-item">
//                   <div className="feature-icon">✓</div>
//                   <span>Exceptional weather resistance</span>
//                 </div>
//                 <div className="feature-item">
//                   <div className="feature-icon">✓</div>
//                   <span>Termite-proof materials</span>
//                 </div>
//                 <div className="feature-item">
//                   <div className="feature-icon">✓</div>
//                   <span>Rigorous quality control</span>
//                 </div>
//                 <div className="feature-item">
//                   <div className="feature-icon">✓</div>
//                   <span>Customization options</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ========== Vision Section ========== */}
//       <section id='vision' className="vision-section" ref={visionRef}>
//         <div className="vision-container">
//           <motion.div 
//             className="vision-image"
//             initial="hidden"
//             animate={visionControls}
//             variants={leftToRight}
//           >
//             <img src={visionImg} alt="Our Vision" />
//           </motion.div>
//           <motion.div 
//             className="vision-content"
//             initial="hidden"
//             animate={visionControls}
//             variants={rightToLeft}
//             transition={{ delay: 0.3 }}
//           >
//             <div className="vision-header">
//               <span className="vision-label">Our Vision</span>
//               <h3>Crafting Timeless Excellence</h3>
//               <div className="vision-divider"></div>
//             </div>
//             <p>
//               To become the most respected global brand in interior and wooden solutions, known for innovation, 
//               quality, and commitment to customer satisfaction. We envision reaching new heights through 
//               craftsmanship, integrity, and a passion for creating extraordinary spaces.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ========== Mission Section ========== */}
//       <section id='mission' className="mission-section" ref={missionRef}>
//         <div className="mission-container">
//           <motion.div 
//             className="mission-content"
//             initial="hidden"
//             animate={missionControls}
//             variants={leftToRight}
//           >
//             <div className="mission-header">
//               <span className="mission-label">Our Mission</span>
//               <h3>Driven by Quality</h3>
//               <div className="mission-divider"></div>
//             </div>
//             <p>
//               To manufacture and deliver premium, durable, and customizable flooring and wooden products that exceed 
//               client expectations while promoting ethical sourcing, environmental sustainability, and continual 
//               innovation in the global market.
//             </p>
//           </motion.div>
//           <motion.div 
//             className="mission-image"
//             initial="hidden"
//             animate={missionControls}
//             variants={rightToLeft}
//             transition={{ delay: 0.3 }}
//           >
//             <img src={missionImg} alt="Our Mission" />
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;





import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, stagger } from 'framer-motion';
import './AboutUs.css'; 
import heroImg from "./img/heroImg.png";
import visionImg from "./img/vision.jpg";
import missionImg from "./img/mission.jpg";
import chairmanIcon from "./img/chairman-icon.png"

const AboutUs = () => {
  // Animation controls for all sections
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [leadershipRef, leadershipInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [storyRef, storyInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [visionRef, visionInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [missionRef, missionInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const heroControls = useAnimation();
  const leadershipControls = useAnimation();
  const storyControls = useAnimation();
  const visionControls = useAnimation();
  const missionControls = useAnimation();

  // Hero animation trigger
  useEffect(() => {
    if (heroInView) {
      heroControls.start("visible");
    }
  }, [heroControls, heroInView]);

  // Leadership animation trigger
  useEffect(() => {
    if (leadershipInView) {
      leadershipControls.start("visible");
    }
  }, [leadershipControls, leadershipInView]);

  // Story animation trigger
  useEffect(() => {
    if (storyInView) {
      storyControls.start("visible");
    }
  }, [storyControls, storyInView]);

  // Vision animation trigger
  useEffect(() => {
    if (visionInView) {
      visionControls.start("visible");
    }
  }, [visionControls, visionInView]);

  // Mission animation trigger
  useEffect(() => {
    if (missionInView) {
      missionControls.start("visible");
    }
  }, [missionControls, missionInView]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const leftToRight = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const rightToLeft = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="aboutPage-us-page">
      {/* ========== Top Hero Section ========== */}
      <motion.section 
        className="aboutPage-hero-section"
        ref={heroRef}
        initial="hidden"
        animate={heroControls}
        variants={fadeIn}
      >
        <div className="aboutPage-hero-container">
          <motion.div 
            className="aboutPage-hero-content"
            variants={leftToRight}
          >
            <motion.h1 variants={staggerItem}>
              <span className="highlight">PARAMOUNT WHOLESALER, EXPORTER & PROVIDER</span>
            </motion.h1>
            <motion.div className="divider" variants={staggerItem} />
            <motion.p variants={staggerItem}>
              Established in 1995, AIDF GROUP is a pioneering force in the industry. With over 25 years of excellence, 
              we are a leading manufacturer, wholesaler, service provider, and exporter of premium flooring solutions 
              and wooden products.
            </motion.p>
          </motion.div>
          <motion.div 
            className="aboutPage-hero-image"
            variants={rightToLeft}
          >
            <motion.img 
              src={heroImg} 
              alt="AIDF GROUP Products" 
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ========== Leadership Section ========== */}
      <motion.section 
        id='chairman-section' 
        className="leadership-section"
        ref={leadershipRef}
        initial="hidden"
        animate={leadershipControls}
        variants={fadeIn}
      >
        <motion.div className="section-header" variants={scaleUp}>
          <h2>Leadership</h2>
          <div className="section-divider"></div>
        </motion.div>
        <motion.div 
          className="leader-container"
          variants={staggerContainer}
        >
          <motion.div 
            className="leader-card"
           
          
          >
            <div className="leader-icon">
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.5 12a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-6.5a6.001 6.001 0 00-9.888 0H2.751a.75.75 0 100 1.5h4.305a6.001 6.001 0 009.888 0h4.305a.75.75 0 100-1.5h-4.305z" />
              </svg> */}
              <span><img src={chairmanIcon} alt="chairman"  width={'50px'} /> </span>
            </div>
            <div className="leader-info">
              <h3>Chairman</h3>
              <div className="leader-bio">
                <p>
                  Under visionary leadership, AIDF GROUP has evolved into an industry benchmark, combining decades 
                  of experience with modern innovation. The Chairman's unwavering dedication to quality and strategic 
                  growth has helped AIDF become a global brand known for reliability and customer satisfaction.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="leader-card"
           
          >
            <div className="leader-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 11a5 5 0 015 5v6h-2v-6a3 3 0 00-2.824-2.995L12 13a3 3 0 00-2.995 2.824L9 16v6H7v-6a5 5 0 015-5zm-6.5 3c.279 0 .55.033.81.094a5.947 5.947 0 00-.301 1.575L6 16v.086a1.492 1.492 0 00-.356-.08L5.5 16a1.5 1.5 0 00-1.493 1.356L4 17.5V22H2v-4.5A3.5 3.5 0 015.5 14zm13 0a3.5 3.5 0 013.5 3.5V22h-2v-4.5a1.5 1.5 0 00-1.356-1.493L18.5 16c-.175 0-.343.03-.5.085V16c0-.666-.108-1.306-.309-1.904.26-.063.53-.096.809-.096zm-13-6a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm13 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-13 2a.5.5 0 100 1 .5.5 0 000-1zm13 0a.5.5 0 100 1 .5.5 0 000-1zM12 2a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
            </div>
            <div className="leader-info">
              <h3>Managing Director</h3>
              <div className="leader-bio">
                <p>
                  The Managing Director of AIDF GROUP plays a pivotal role in steering the company's success through 
                  innovation, customer-first focus, and sustainable practices. Their leadership ensures continuous 
                  development, unmatched service, and cutting-edge products tailored for diverse global markets.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ========== Our Story Section ========== */}
      <motion.section 
        id='ourstory' 
        className="our-story-section"
        ref={storyRef}
        initial="hidden"
        animate={storyControls}
        variants={fadeIn}
      >
        <motion.div className="section-header" variants={scaleUp}>
          <h2><span className="highlight">OUR</span> STORY</h2>
          <div className="section-divider"></div>
        </motion.div>
        <motion.div 
          className="story-container"
          variants={staggerContainer}
        >
          <motion.div className="story-content">
            <motion.div 
              className="story-left"
              variants={leftToRight}
            >
              <motion.p variants={staggerItem}>
                Established in 1995, AIDF GROUP is a pioneering force in the industry. With a rich legacy of over 25 years, we have cemented our position as a leading manufacturer, wholesaler, service provider, and exporter of premium flooring solutions and wooden products.
              </motion.p>
              <motion.p variants={staggerItem}>
                Our extensive portfolio boasts an impressive range of products, including Wooden Flooring, Laminate Flooring, Vinyl Flooring, Carpet Tiles, Aluminum Profiles, Aluminum Skirting, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, and Brazilian Flooring.
              </motion.p>
              <motion.p className="signature" variants={staggerItem}>AIDF GROUP</motion.p>
            </motion.div>
            <motion.div 
              className="story-right"
              variants={rightToLeft}
            >
              <motion.div 
                className="story-features"
                variants={staggerContainer}
              >
                <motion.div className="feature-item" variants={staggerItem}>
                  <div className="feature-icon">✓</div>
                  <span>Sourced from world-class vendors</span>
                </motion.div>
                <motion.div className="feature-item" variants={staggerItem}>
                  <div className="feature-icon">✓</div>
                  <span>Exceptional weather resistance</span>
                </motion.div>
                <motion.div className="feature-item" variants={staggerItem}>
                  <div className="feature-icon">✓</div>
                  <span>Termite-proof materials</span>
                </motion.div>
                <motion.div className="feature-item" variants={staggerItem}>
                  <div className="feature-icon">✓</div>
                  <span>Rigorous quality control</span>
                </motion.div>
                <motion.div className="feature-item" variants={staggerItem}>
                  <div className="feature-icon">✓</div>
                  <span>Customization options</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ========== Vision Section ========== */}
      <motion.section 
        id='vision' 
        className="vision-section"
        ref={visionRef}
        initial="hidden"
        animate={visionControls}
        variants={fadeIn}
      >
        <motion.div 
          className="vision-container"
          variants={staggerContainer}
        >
          <motion.div 
            className="vision-image"
            variants={leftToRight}
            whileHover={{ scale: 1.03 }}
          >
            <img src={visionImg} alt="Our Vision" />
          </motion.div>
          <motion.div 
            className="vision-content"
            variants={rightToLeft}
            transition={{ delay: 0.3 }}
          >
            <motion.div className="vision-header" variants={staggerItem}>
              <motion.span className="vision-label" variants={staggerItem}>Our Vision</motion.span>
              <motion.h3 variants={staggerItem}>Crafting Timeless Excellence</motion.h3>
              <motion.div className="vision-divider" variants={staggerItem} />
            </motion.div>
            <motion.p variants={staggerItem}>
              To become the most respected global brand in interior and wooden solutions, known for innovation, 
              quality, and commitment to customer satisfaction. We envision reaching new heights through 
              craftsmanship, integrity, and a passion for creating extraordinary spaces.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ========== Mission Section ========== */}
      <motion.section 
        id='mission' 
        className="mission-section"
        ref={missionRef}
        initial="hidden"
        animate={missionControls}
        variants={fadeIn}
      >
        <motion.div 
          className="mission-container"
          variants={staggerContainer}
        >
          <motion.div 
            className="mission-content"
            variants={leftToRight}
          >
            <motion.div className="mission-header" variants={staggerItem}>
              <motion.span className="mission-label" variants={staggerItem}>Our Mission</motion.span>
              <motion.h3 variants={staggerItem}>Driven by Quality</motion.h3>
              <motion.div className="mission-divider" variants={staggerItem} />
            </motion.div>
            <motion.p variants={staggerItem}>
              To manufacture and deliver premium, durable, and customizable flooring and wooden products that exceed 
              client expectations while promoting ethical sourcing, environmental sustainability, and continual 
              innovation in the global market.
            </motion.p>
          </motion.div>
          <motion.div 
            className="mission-image"
            variants={rightToLeft}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
          >
            <img src={missionImg} alt="Our Mission" />
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutUs;