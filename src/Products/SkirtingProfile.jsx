import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SkirtingProfile.css";
import { Link } from "react-router-dom";

import skirtingIcon from "./UPVC/img/stick-on-skirting.jpg"; // Replace with actual image
import profileIcon from "./UPVC/img/easy-fix-pvc.jfif"; // Replace with actual image
import screwOnImg from "./UPVC/img/screw-on-skirting.webp";
import stickOnImg from "./UPVC/img/stick-on-toe.jpeg";
import lineImg from "./UPVC/img/line-skirting.avif";
import easyFixImg from "./UPVC/img/easy-fix-pvc.jfif";

const SkirtingProfile = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="skirting-profile-page">
      {/* Full-width Hero Section */}
      <section className="skirting-hero-fullwidth">
        <div className="hero-overlay">
          <div className="hero-content" data-aos="fade-up">
            <h1>Aluminium Skirting & Profile Solutions</h1>
            <p>
              Premium architectural solutions for modern residential and
              commercial spaces, combining durability with elegant design.
            </p>
          </div>
        </div>
      </section>

      {/* Bifurcation Section */}
      <section className="bifurcation-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">
            Our Product Range
          </h2>
          <p
            className="section-subtitle"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Two specialized solutions for all your architectural needs
          </p>

          <div className="bifurcation-grid">
            <div className="bifurcation-card" data-aos="fade-right">
              <div className="bifurcation-icon">
                <img src={skirtingIcon} alt="Skirting Solutions" />
              </div>
              <h3>Skirting Solutions</h3>
              <p>
                Elegant finishing touches that protect walls and create seamless
                transitions between floors and walls in any space.
              </p>
              <ul>
                <li>Multiple height options</li>
                <li>Various material finishes</li>
                <li>Easy installation</li>
              </ul>
              <Link to="/skirtingProfile/skirting" className="visit-ctn">
                View
              </Link>
            </div>

            <div className="divider" data-aos="fade-up" data-aos-delay="200">
              <span>OR</span>
            </div>

            <div className="bifurcation-card" data-aos="fade-left">
              <div className="bifurcation-icon">
                <img src={profileIcon} alt="Profile Solutions" />
              </div>
              <h3>Profile Solutions</h3>
              <p>
                Modern, functional designs for commercial spaces with additional
                features like cable management and expansion gap coverage.
              </p>
              <ul>
                <li>Hi-tech appearance</li>
                <li>Cable concealment</li>
                <li>Commercial-grade durability</li>
              </ul>
              <button href="/skirtingProfile/skirting" className="visit-ctn">
                View
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      <section className="service-sections">
        {/* Screw On Skirting */}
        <div className="service-section" data-aos="fade-up">
          <div className="service-content">
            <span className="service-badge">Skirting Solution</span>
            <h2>Screw On Skirting</h2>
            <div className="service-features">
              <h3>ADVANTAGES</h3>
              <p>
                Ideal to cover any type of wall base to protect from foot
                scratches and to cover flooring edges, providing a neat finish
                on the joint.
              </p>
              <ul>
                <li>
                  Available in natural silver anodized, stainless steel & powder
                  coat finishes
                </li>
                <li>5 height options: 50mm, 75mm, 100mm, 125mm, 150mm</li>
                <li>Covers flooring edges for smooth transition</li>
                <li>Supplied in 3m lengths with end caps included</li>
                <li>Optional aluminium beading available</li>
                <li>Quick and easy mechanical fix</li>
              </ul>
            </div>
          </div>
          <div className="service-image" data-aos="fade-left">
            <img src={screwOnImg} alt="Screw On Skirting" />
          </div>
        </div>

        {/* Stick On Toe Skirting */}
        <div className="service-section reverse" data-aos="fade-up">
          <div className="service-content">
            <span className="service-badge">Profile Solution</span>
            <h2>Stick On Toe Skirting</h2>
            <div className="service-features">
              <h3>ADVANTAGES</h3>
              <p>
                Modern, streamlined finish for commercial environments where a
                Hi-Tech appearance is required.
              </p>
              <ul>
                <li>Multiple finish options including powder coat</li>
                <li>3 height choices: 60mm, 80mm, 100mm</li>
                <li>Sit-on profile design for floor coverings</li>
                <li>Capped toe design hides expansion gaps</li>
                <li>PVC end caps for neat finishing</li>
                <li>Easy installation with appropriate adhesive</li>
              </ul>
            </div>
          </div>
          <div className="service-image" data-aos="fade-right">
            <img src={stickOnImg} alt="Stick On Toe Skirting" />
          </div>
        </div>

        {/* Line Skirting */}
        <div className="service-section" data-aos="fade-up">
          <div className="service-content">
            <span className="service-badge">Profile Solution</span>
            <h2>Line Skirting</h2>
            <div className="service-features">
              <h3>ADVANTAGES</h3>
              <p>
                Hi-Tech solution for modern commercial environments with cable
                management functionality.
              </p>
              <ul>
                <li>Available in multiple premium finishes</li>
                <li>2 height options: 75mm, 100mm</li>
                <li>Designed to sit on top of floor</li>
                <li>Conceals low voltage cables (computer & telephone)</li>
                <li>PVC end caps for clean installation</li>
                <li>Quick adhesive installation</li>
              </ul>
            </div>
          </div>
          <div className="service-image" data-aos="fade-left">
            <img src={lineImg} alt="Line Skirting" />
          </div>
        </div>

        {/* Easy Fix PVC Skirting */}
        <div className="service-section reverse" data-aos="fade-up">
          <div className="service-content">
            <span className="service-badge">Skirting Solution</span>
            <h2>Easy Fix PVC Skirting</h2>
            <div className="service-features">
              <h3>ADVANTAGES</h3>
              <p>
                Modern, stylish solution with practical benefits for easy
                installation and maintenance.
              </p>
              <ul>
                <li>Natural silver anodized and aluminium finishes</li>
                <li>Sit-on profile design for floor coverings</li>
                <li>Includes PVC end caps for neat finishing</li>
                <li>Conceals low voltage cables</li>
                <li>Removable upper part for easy painting/wallpapering</li>
                <li>Flexible material adjusts to wall irregularities</li>
                <li>Simple screw fixing</li>
              </ul>
            </div>
          </div>
          <div className="service-image" data-aos="fade-right">
            <img src={easyFixImg} alt="Easy Fix PVC Skirting" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="skirting-cta" data-aos="fade-up">
        <div className="cta-container">
          <h2>Ready to Transform Your Space?</h2>
          <p>
            Our experts are ready to help you choose the perfect solution for
            your project
          </p>
          <div className="cta-buttons">
            <button className="cta-button">Get a Free Quote</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkirtingProfile;
