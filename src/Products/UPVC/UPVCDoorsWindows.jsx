import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./UPVCDoorsWindows.css";

// Import images
import HeroImg from "./img/parker-tiles.png";
import skirtingCard from "./img/parker-tiles.png";
import flooringCard from "./img/wooden-flooring.jpg";
import carpetCard from "./img/carpet-img.png";
import Aluminium_glass from "./img/aluminium_glass/transparent-laminated-glass-partition-for-office-1000x1000.webp";
import skirtingSection from "./img/parker-tiles.png";
import flooringSection from "./img/Daltile-Emerson-Wood.jpg";
import carpetSection from "./img/carpet_pro.jpg";

const services = [
  {
    id: 1,
    title: "Aluminum Profile and Skirtings",
    description: "Premium skirting profiles for perfect finishing",
    badge: "New",
    image: skirtingCard,
    link: "/aluminum-profile-skirtings",
  },
  {
    id: 2,
    title: "Flooring Collections",
    description: "Durable and beautiful flooring options",
    badge: "Popular",
    image: flooringCard,
    link: "/flooring",
  },
  {
    id: 3,
    title: "Carpet Selection",
    description: "Luxurious carpets for ultimate comfort",
    badge: "Eco-Friendly",
    image: carpetCard,
    link: "/carpets",
  },
  {
    id: 4,
    title: "Aluminium Modular Glass Partition",
    description: "Elegant glass partitions for modern spaces",
    badge: "Modern",
    image: Aluminium_glass,
    link: "/aluminium-glass-partitions",
  },
];

const UPVCDoorsWindows = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="upvc-interior-design">
      {/* Hero Section */}
      <section className="upvc-hero-section">
        <div className="upvc-hero-image-container">
          <img
            src={HeroImg || "/placeholder.svg"}
            alt="Premium Flooring Solutions"
            className="upvc-hero-image"
            loading="lazy"
          />
          <div className="upvc-hero-overlay">
            <div className="upvc-hero-content" data-aos="fade-up">
              <h1 className="upvc-hero-title">
                Elevate Your Spaces with Premium Flooring
              </h1>
              <p className="upvc-hero-subtitle">
                Transform your interiors from the ground up with our expert
                flooring services. Elegant, functional, and tailored to your
                unique taste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="upvc-services-section">
        <div className="upvc-section-container">
          <div className="upvc-section-header" data-aos="fade-up">
            <h2 className="upvc-section-title">Our Design Solutions</h2>
            <p className="upvc-section-subtitle">
              Comprehensive services to elevate every aspect of your interior
              space
            </p>
          </div>

          <div className="upvc-services-grid">
            {services.map((service) => (
              <div
                key={service.id}
                className="upvc-service-card"
                data-aos="fade-up"
                data-aos-delay={service.id * 100}
              >
                <div className="upvc-card-image-container">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="upvc-card-image"
                    loading="lazy"
                  />
                  <span
                    className={`upvc-card-badge upvc-badge-${
                      (service.id % 3) + 1
                    }`}
                  >
                    {service.badge}
                  </span>
                </div>
                <div className="upvc-card-content">
                  <h3 className="upvc-card-title">{service.title}</h3>
                  <p className="upvc-card-description">{service.description}</p>
                  <Link to={service.link} className="upvc-card-link">
                    View Options <span className="upvc-arrow-icon">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Sections */}
      <section className="upvc-expertise-section">
        <div className="upvc-section-container">
          <div className="upvc-section-header" data-aos="fade-up">
            <h2 className="upvc-section-title">Why Choose Our Expertise</h2>
            <p className="upvc-section-subtitle">
              Crafting exceptional interiors with precision and passion
            </p>
          </div>

          {/* Skirting Expertise */}
          <div className="upvc-expertise-block" data-aos="fade-up">
            <div className="upvc-expertise-content">
              <div className="upvc-expertise-text" data-aos="fade-right">
                <h3 className="upvc-expertise-title">
                  <span className="upvc-highlight">Premium Skirting</span> &
                  Profile Solutions
                </h3>
                <p className="upvc-expertise-description">
                  Our skirting boards and profiles provide the perfect finishing
                  touch to any interior space, combining aesthetic appeal with
                  practical functionality.
                </p>
                <ul className="upvc-benefits-list">
                  <li>
                    Customizable profiles to match your exact specifications
                  </li>
                  <li>Durable materials resistant to wear and tear</li>
                  <li>Seamless integration with all flooring types</li>
                  <li>Professional installation for flawless results</li>
                </ul>
                <div className="upvc-explore-more">
                  <Link to="/aluminum-profile-skirtings" className="upvc-explore-button">
                    Explore Skirting Solutions
                  </Link>
                </div>
              </div>
              <div className="upvc-expertise-image" data-aos="fade-left">
                <img
                  src={skirtingSection || "/placeholder.svg"}
                  alt="Premium Skirting Solutions"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Carpet Expertise */}
          <div className="upvc-expertise-block upvc-reverse" data-aos="fade-up">
            <div className="upvc-expertise-content">
              <div className="upvc-expertise-text" data-aos="fade-left">
                <h3 className="upvc-expertise-title">
                  <span className="upvc-highlight">Luxury Carpet</span>{" "}
                  Collections
                </h3>
                <p className="upvc-expertise-description">
                  Experience the ultimate in comfort and style with our premium
                  carpet selections, designed to transform any room into a cozy
                  retreat.
                </p>
                <ul className="upvc-benefits-list">
                  <li>Extensive selection of textures, colors, and patterns</li>
                  <li>Eco-friendly and hypoallergenic options available</li>
                  <li>Superior stain and wear resistance technologies</li>
                  <li>Custom cutting and fitting services</li>
                </ul>
                <div className="upvc-explore-more">
                  <Link to="/carpets" className="upvc-explore-button">
                    Explore Carpet 
                  </Link>
                </div>
              </div>
              <div className="upvc-expertise-image" data-aos="fade-right">
                <img
                  src={carpetSection || "/placeholder.svg"}
                  alt="Luxury Carpet Collections"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Flooring Expertise */}
          <div className="upvc-expertise-block" data-aos="fade-up">
            <div className="upvc-expertise-content">
              <div className="upvc-expertise-text" data-aos="fade-right">
                <h3 className="upvc-expertise-title">
                  <span className="upvc-highlight">Innovative Flooring</span>{" "}
                  Solutions
                </h3>
                <p className="upvc-expertise-description">
                  Our flooring solutions combine beauty, durability, and
                  practicality for spaces that inspire and endure through years
                  of use.
                </p>
                <ul className="upvc-benefits-list">
                  <li>Wide range of materials and finishes</li>
                  <li>Waterproof and scratch-resistant options</li>
                  <li>Underfloor heating compatible solutions</li>
                  <li>
                    Professional installation with precision craftsmanship
                  </li>
                </ul>
                <div className="upvc-explore-more">
                  <Link to="/flooring" className="upvc-explore-button">
                    Explore Flooring
                  </Link>
                </div>
              </div>
              <div className="upvc-expertise-image" data-aos="fade-left">
                <img
                  src={flooringSection || "/placeholder.svg"}
                  alt="Innovative Flooring Solutions"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Aluminium Modular Glass Partition Expertise */}
          <div className="upvc-expertise-block upvc-reverse" data-aos="fade-up">
            <div className="upvc-expertise-content">
              <div className="upvc-expertise-text" data-aos="fade-left">
                <h3 className="upvc-expertise-title">
                  <span className="upvc-highlight">
                    Aluminium Modular Glass
                  </span>{" "}
                  Partition
                </h3>
                <p className="upvc-expertise-description">
                  Create sophisticated, versatile spaces with our premium
                  aluminium modular glass partitions, perfect for modern offices
                  and contemporary homes.
                </p>
                <ul className="upvc-benefits-list">
                  <li>Sleek, contemporary designs for modern spaces</li>
                  <li>Customizable configurations to suit any layout</li>
                  <li>Sound insulation options for privacy and comfort</li>
                  <li>Durable aluminium frames with premium glass options</li>
                  <li>Professional installation with minimal disruption</li>
                </ul>
                <div className="upvc-explore-more">
                  <Link to="/aluminium-glass-partitions" className="upvc-explore-button">
                    Explore Glass Partitions
                  </Link>
                </div>
              </div>
              <div className="upvc-expertise-image" data-aos="fade-right">
                <img
                  src={Aluminium_glass || "/placeholder.svg"}
                  alt="Aluminium Modular Glass Partition"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UPVCDoorsWindows;
