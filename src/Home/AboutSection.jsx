import React from "react";
import "./AboutSection.css";
import aboutImage from "./HomeImg/74a98132f857ba3e9914942eb25f0ad8.jpg";
import Logo from "./HomeImg/companyLogo.jpg";
import icon1 from "./HomeImg/handshake.png";
import icon2 from "./HomeImg/registration (1).png";
import icon3 from "./HomeImg/exchange.png";
import icon4 from "./HomeImg/registration.png";
import icon5 from "./HomeImg/teamwork.png";
import icon6 from "./HomeImg/balance.png";
import icon7 from "./HomeImg/import.png";
import icon8 from "./HomeImg/trust seal.png";

const features = [
  {
    icon: icon1,
    title: "Nature of Business",
    description: "Trader - Wholesaler/Distributor",
  },
  {
    icon: icon2,
    title: "GST Registration Date",
    description: "01-07-2017",
  },
  {
    icon: icon3,
    title: "Annual Turnover",
    description: "1.5 - 5 Cr",
  },
  {
    icon: icon4,
    title: "GST No.",
    description: "07AHZPJ2789F1ZN",
  },
  {
    icon: icon5,
    title: "Total Number of Employees",
    description: "Upto 10 People",
  },
  {
    icon: icon6,
    title: "Legal Status of Firm",
    description: "Proprietorship",
  },
  {
    icon: icon7,
    title: "Import Export Code (IEC)",
    description: "AHZPJ*****",
  },
  {
    icon: icon8,
    title: "Trustseal Verified",
    description: "",
  },
];

const AIDFAboutSection = () => {
  return (
    <section className="aidf-about-section" style={{ backgroundColor: "#fafafa" }}>
      <div className="aidf-about-container">
        <div className="aidf-about-image large-view-image">
          <img src={aboutImage} alt="Global Logistics and Transport" />
          <div className="aidf-image-overlay" style={{ backgroundColor: "rgba(15, 42, 29, 0.1)" }}></div>
        </div>

        <div className="aidf-about-content">
          <div className="aidf-section-title">
            <h2 style={{ color: "#2a2a2a" }}>Annapurna Interiors Decorators & Furnitures</h2>
            <div className="aidf-about-powered">
              <h6 style={{ fontSize: "16px" }}>Powered by Advant</h6>
              <img src={Logo} alt="Company Logo" style={{ height: "40px" }} />
            </div>
            <div className="aidf-title-decoration" style={{ backgroundColor: "#6B9071" }}></div>
          </div>

          <div className="aidf-about-image mobile-about-header">
            <img src={aboutImage} alt="Interior Decoration Work" />
            <div className="aidf-image-overlay" style={{ backgroundColor: "rgba(15, 42, 29, 0.1)" }}></div>
          </div>

          <p className="aidf-about-text" style={{ color: "#375534" }}>
            We, Annapurna Interiors Decorators & Furnitures are most trusted and appreciated Wholesaler, Service provider, Exporter and Importer of Wooden Flooring, Laminate Flooring, Vinyl Flooring etc.
          </p>

          <div className="aidf-about-features">
            {features.map((feature, index) => (
              <div className="aidf-feature" key={index}>
                <div className="aidf-feature-icon" style={{ backgroundColor: "#fff" }}>
                  <img src={feature.icon} alt={feature.title} style={{ height: "40px" }} />
                </div>
                <div className="aidf-feature-content">
                  <h3 style={{ color: "#2a2a2a" }}>{feature.title}</h3>
                  {feature.description && (
                    <p style={{ color: "#2a2a2a" }}>{feature.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <a
            href="/about-us"
            className="aidf-about-button"
            style={{ backgroundColor: "red", color: "white" }}
          >
            Learn More <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AIDFAboutSection;
