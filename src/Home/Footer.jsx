



















import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";
import linkedIn from "./HomeImg/linkedin.png";
import facebook from "./HomeImg/facebook.png";
import twitter from "./HomeImg/twitter-50.png";
import logo from "./HomeImg/logo.PNG";

const Footer = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const socialLinks = [
    { icon: linkedIn, url: "https://www.linkedin.com/cws/share?url=https://www.annapurnainteriors.com/", alt: "LinkedIn" },
    { icon: facebook, url: "https://www.facebook.com/sharer.php?u=https://www.annapurnainteriors.com/", alt: "Facebook" },
    { icon: twitter, url: "https://twitter.com/share?url=https://www.annapurnainteriors.com/", alt: "Twitter" },
    
  ];

  const footerColumns = [
    {
      title: "Discover AIDF GROUP",
      links: [
        { text: "Home", url: "/" },
        { text: "About Us", url: "/about-us" },
        { text: "Products", url: "/products" },
        { text: "Blog", url: "/blogs" },
        { text: "Locate Us", url: "/locate-us" },
      ],
    },
    {
      title: "Aluminum Profile and Skirtings",
      links: [
        { text: "Aluminum Screw On Skirting", url: "/aluminum-profile-skirtings" },
        { text: "Easy Fix Modular Skirting", url: "/aluminum-profile-skirtings" },
        { text: "Aluminium Door Profiles", url: "/aluminum-profile-skirtings" },
            { text: "Aluminum Stuck On Skirting", url: "/aluminum-profile-skirtings" },
        { text: "Profiles For Floor PVC Edge Profile", url: "/aluminum-profile-skirtings" },
        { text: "Aluminum Stair Nose", url: "/aluminum-profile-skirtings" },
        { text: "Anodized Aluminum Profile", url: "/aluminum-profile-skirtings" },    
      ],
    },
    {
      title: "Carpets",
      links: [
        { text: "Wall to Wall Carpet", url: "/carpets" },
        { text: "Carpet Tile", url: "/carpets" },
      ],
    },
    {
      title: "Flooring",
      links: [
        { text: "Oak Flooring", url: "/flooring" },
        { text: "Glossy Engineered Flooring", url: "/flooring" },
        { text: "SPC/IPE Flooring", url: "/flooring" },
        
      ],
    },
    {
      title: "Aluminium Glass Partition",
      links: [
        { text: "Curved Glass Partition", url: "/Aluminium_Glass_Partitions" },
        { text: "Aluminum Slim Glass Partition", url: "/Aluminium_Glass_Partitions" },
        { text: "Aluminium Acoustic Slim Glass Partition, For Office", url: "/Aluminium_Glass_Partitions" },
        { text: "Aluminium Grid Partition", url: "/Aluminium_Glass_Partitions" },
        { text: "Slimline Glass Partition", url: "/Aluminium_Glass_Partitions" },
      ],
    },
    {
      title: "Support",
      links: [
        { text: "Terms & Condition", url: "/terms&conditions" },
        { text: "Privacy Policy", url: "/privacy&policy" },
        { text: "Locate Us", url: "/locate-us" },
      ],
    },
  ];

  return (
    <footer className="aidf-footer-container">
      <div className="aidf-footer-content">
        {/* Top Section */}
        <motion.div
          className="aidf-footer-top"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {/* Logo and Tagline */}
          <motion.div className="aidf-footer-brand" variants={fadeIn}>
            <a href="/" className="aidf-footer-logo-link">
              <img src={logo} alt="AIDF Group Logo" className="aidf-footer-logo" />
            </a>
            <div className="aidf-footer-tagline">
              <p>We Provide Best Quality, Complete Flooring Solutions</p>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div className="aidf-social-media-container" variants={fadeIn}>
            <div className="aidf-text-content">
              <h5 className="aidf-social-title">Connect With Us</h5>
              <div className="aidf-call-info">
                <h5 className="aidf-social-title">Call Us - 08047532457</h5>
                <div className="aidf-tel-no"><a href="tel:+911294064647" className="aidf-phone-number"></a></div>
              </div>
            </div>
            <div className="aidf-social-icons">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="aidf-social-icon">
                    <img src={social.icon} alt={social.alt} />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          className="aidf-footer-nav"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {footerColumns.map((column, index) => (
            <motion.div className="aidf-footer-column" key={index} variants={fadeIn}>
              <h6 className="aidf-footer-heading">{column.title}</h6>
              <ul className="aidf-footer-list">
                {column.links.map((link, linkIndex) => (
                  <motion.li
                    className="aidf-footer-list-item"
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a href={link.url}>{link.text}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="aidf-footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p>© {new Date().getFullYear()} AIDF GROUP </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;