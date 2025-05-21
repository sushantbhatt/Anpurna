











import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { assets } from "./assets/asset";
import "./LocateUs.css";
import heroImg from "./assets/locateUs-hero.jpg";
import axios from "axios";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import officeHours from "./assets/officeHours.png"

const LocateUs = () => {
  // Animation controls
  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [contactRef, contactInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [mapRef, mapInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [quoteRef, quoteInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const heroControls = useAnimation();
  const contactControls = useAnimation();
  const mapControls = useAnimation();
  const quoteControls = useAnimation();

  // Loading state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ------------------------------------------------------------------------

  const myFormik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      service: "Skirting & Profile",
      message: "",
    },

    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        await axios.post(`http://localhost:5588/submit-enquiry`, values);
        toast.success("Message Sent Successfully");
        myFormik.resetForm();
      } catch (err) {
        toast.error("Error When Sending Message");
        console.error("Submission error:", err);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  // ---------------------------------------------------------------------

  useEffect(() => {
    if (heroInView) heroControls.start("visible");
    if (contactInView) contactControls.start("visible");
    if (mapInView) mapControls.start("visible");
    if (quoteInView) quoteControls.start("visible");
  }, [heroInView, contactInView, mapInView, quoteInView]);

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const cardItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="locate-us-page">
      {/* Hero Section */}
      <motion.section
        className="locate-us__hero"
        ref={heroRef}
        initial="hidden"
        animate={heroControls}
        variants={fadeIn}
      >
        <div className="locate-us__hero-image-container">
          <img
            src={heroImg}
            alt="Contact Us Banner"
            className="locate-us__hero-image"
          />
          <div className="locate-us__hero-overlay"></div>
        </div>
        <motion.div className="locate-us__hero-content" variants={fadeUp}>
          <h1>
            <span className="locate-us__highlight">Get</span> In Touch
          </h1>
          <p>We'd love to hear from you. Reach out for inquiries or support.</p>
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="locate-us__contact-section"
        ref={contactRef}
        initial="hidden"
        animate={contactControls}
        variants={fadeIn}
      >
        <div className="locate-us__contact-container">
          {/* Contact Info */}
          <motion.div className="locate-us__contact-info" variants={fadeUp}>
            <h2 className="locate-us__contact-info-title">Contact Information</h2>
            <div className="locate-us__info-grid">
              <motion.div
                className="locate-us__info-card"
                variants={cardItem}
                whileHover={{ y: -3 }}
              >
                <div className="locate-us__card-icon">
                  <img src={assets.phone} alt="Phone" />
                </div>
                <div className="locate-us__card-content">
                  <h3 className="locate-us__card-title">Phone</h3>
                  <div className="locate-us__info-values">
                    <span className="locate-us__info-value">
                      +91-08047532457
                    </span>
                   
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="locate-us__info-card"
                variants={cardItem}
                whileHover={{ y: -3 }}
              >
                <div className="locate-us__card-icon">
                  <img src={assets.email} alt="Email" />
                </div>
                <div className="locate-us__card-content">
                  <h3 className="locate-us__card-title">Email</h3>
                  <span className="locate-us__info-value">
                    contact@aidfgroup.com
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="locate-us__info-card"
                variants={cardItem}
                whileHover={{ y: -3 }}
              >
                <div className="locate-us__card-icon">
                  <img src={assets.location} alt="Location" />
                </div>
                <div className="locate-us__card-content">
                  <h3 className="locate-us__card-title">Head Office</h3>
                  <span className="locate-us__info-value">
                                    
                Annapurna Interiors Decorators & Furnitures,
                Ground Floor, 213, S/O Kashi Kant Jha, Gali No-8 Block-F
                Badarpur, New Delhi - 110044, Delhi, India
                                  </span>
                </div>
              </motion.div>


              <motion.div
                className="locate-us__info-card"
                variants={cardItem}
                whileHover={{ y: -3 }}
              >
                <div className="locate-us__card-icon">
                  <img src={officeHours} alt="Location" />
                </div>
                <div className="locate-us__card-content">
                  <h3 className="locate-us__card-title">Office Hours</h3>
                  <div><span className="locate-us__info-value">
                   Monday-Saturday: 10:00 Am - 6:30 Pm
                  </span></div>
                  <div><span className="locate-us__info-value">
                   Sunday: Off
                  </span></div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="locate-us__contact-form"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <div className="locate-us__form-header">
              <h2>Send Us a Message</h2>
              <p>Fill out this quick form and we'll respond promptly</p>
            </div>

            <form onSubmit={myFormik.handleSubmit} className="locate-us__form">
              <div className="locate-us__form-group">
                <input
                  type="text"
                  id="locate-us-name"
                  name="name"
                  placeholder="John Doe"
                  value={myFormik.values.name}
                  onChange={myFormik.handleChange}
                  required
                  className="locate-us__form-input"
                />
              </div>

              <div className="locate-us__form-group">
                <input
                  type="tel"
                  id="locate-us-phone"
                  name="phone"
                  placeholder="Your Phone No."
                  value={myFormik.values.phone}
                  onChange={myFormik.handleChange}
                  required
                  className="locate-us__form-input"
                />
              </div>

              <div className="locate-us__form-group">
                <input
                  type="email"
                  id="locate-us-email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={myFormik.values.email}
                  onChange={myFormik.handleChange}
                  required
                  className="locate-us__form-input"
                />
              </div>

              <div className="locate-us__form-group">
                <select
                  id="locate-us-service"
                  name="service"
                  value={myFormik.values.service}
                  onChange={myFormik.handleChange}
                  required
                  className="locate-us__form-input"
                >
                  <option value="">I'm interested in...</option>
                  <option value="Skirting And Profile">Skirting & Profile</option>
                  <option value="Carpet">Carpet</option>
                  <option value="Flooring">Flooring</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="locate-us__form-group">
                <textarea
                  id="locate-us-message"
                  name="message"
                  placeholder="Your message (optional)"
                  value={myFormik.values.message}
                  onChange={myFormik.handleChange}
                  rows="5"
                  className="locate-us__form-input"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="locate-us__submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="locate-us__spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6l-6 6Z"
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        className="locate-us__map-section"
        ref={mapRef}
        initial="hidden"
        animate={mapControls}
        variants={fadeIn}
      >
        <div className="locate-us__section-header">
          <h2>
            Find Us on <span className="locate-us__highlight">Google Maps</span>
          </h2>
          <p>Visit our location or get directions</p>
        </div>
        <div className="locate-us__map-container">
           <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112007.24118499564!2d77.43824970016279!3d28.68287680321946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7209a9905d9%3A0xc18f59442e2073cd!2sAnnapurna%20Interiors%20Decorators%20%26%20Furnitures!5e0!3m2!1sen!2sin!4v1746691487266!5m2!1sen!2sin "
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AIDF Group Location"
          ></iframe>
        </div>
      </motion.section>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default LocateUs;