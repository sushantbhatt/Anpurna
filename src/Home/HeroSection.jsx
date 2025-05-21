import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import image1 from "./SlideImg/1.jpg";
import image2 from "./SlideImg/2img.jpg";
import image3 from "./SlideImg/3img.jpg";
import card1 from "./HomeImg/stick-on-skirting.jpg";
import card2 from "./HomeImg/carpet.jpg";
import card3 from "./HomeImg/flooring.jpg";
import card4 from "./HomeImg/aluminum-slim-glass-partition-1000x1000.webp";
import card5 from "./HomeImg/grass3.jpg";
// import years from "./HomeImg/15+excellence.png";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      src: image1,
      caption: {
        title: "Premium Flooring Solutions",
        description: "Discover our high-quality flooring products",
        buttonText: "View Products",
      },
    },
    {
      src: image2,
      caption: {
        title: "Modern Designs",
        description: "Latest trends in home and commercial flooring",
      },
    },
    {
      src: image3,
      caption: {
        title: "Expert Installation",
        description: "Professional installation services available",
        buttonText: "Get a Quote",
      },
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="hs-container">
      <div className="hs-slideshow-container">
        <div
          className="hs-slides-wrapper"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="hs-slide"
              style={{ backgroundImage: `url(${slide.src})` }}
              aria-hidden={index !== currentIndex}
            />
          ))}
        </div>

        <button
          className="hs-nav-arrow hs-prev-arrow"
          onClick={goToPrev}
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        <button
          className="hs-nav-arrow hs-next-arrow"
          onClick={goToNext}
          aria-label="Next slide"
        >
          &#10095;
        </button>
      </div>

      <div className="hs-product-cards-container">
        <a href="/aluminum-profile-skirtings" className="hs-product-card">
          <div className="hs-card-image-container">
            <img src={card1} alt="Skirting & Profile" className="hs-card-image" />
            <div className="hs-image-overlay"></div>
          </div>
          <div className="hs-card-content">
            <h3 className="hs-card-title">Aluminum Profile and Skirtings</h3>
            <div className="hs-card-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#333333"
                  fillRule="evenodd"
                  d="M12 3.25a.75.75 0 0 1 .75.75v14.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06l4.72 4.72V4a.75.75 0 0 1 .75-.75"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </a>

        <a href="/carpets" className="hs-product-card">
          <div className="hs-card-image-container">
            <img src={card2} alt="Carpets" className="hs-card-image" />
            <div className="hs-image-overlay"></div>
          </div>
          <div className="hs-card-content">
            <h3 className="hs-card-title">Carpets</h3>
            <div className="hs-card-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#333333"
                  fillRule="evenodd"
                  d="M12 3.25a.75.75 0 0 1 .75.75v14.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06l4.72 4.72V4a.75.75 0 0 1 .75-.75"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </a>

        <a href="/flooring" className="hs-product-card">
          <div className="hs-card-image-container">
            <img src={card3} alt="Flooring" className="hs-card-image" />
            <div className="hs-image-overlay"></div>
          </div>
          <div className="hs-card-content">
            <h3 className="hs-card-title">Flooring</h3>
            <div className="hs-card-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#333333"
                  fillRule="evenodd"
                  d="M12 3.25a.75.75 0 0 1 .75.75v14.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06l4.72 4.72V4a.75.75 0 0 1 .75-.75"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </a>

        <a href="/Aluminium_Glass_Partitions" className="hs-product-card">
          <div className="hs-card-image-container">
            <img src={card4} alt="Aluminium Glass Partition" className="hs-card-image" />
            <div className="hs-image-overlay"></div>
          </div>
          <div className="hs-card-content">
            <h3 className="hs-card-title">Aluminium Glass Partition</h3>
            <div className="hs-card-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#333333"
                  fillRule="evenodd"
                  d="M12 3.25a.75.75 0 0 1 .75.75v14.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06l4.72 4.72V4a.75.75 0 0 1 .75-.75"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </a>
        
        <a href="/Moreproducts" className="hs-product-card">
          <div className="hs-card-image-container">
            <img src={card5} alt="More Products" className="hs-card-image" />
            <div className="hs-image-overlay"></div>
          </div>
          <div className="hs-card-content">
            <h3 className="hs-card-title">More...</h3>
            <div className="hs-card-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#333333"
                  fillRule="evenodd"
                  d="M12 3.25a.75.75 0 0 1 .75.75v14.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06l4.72 4.72V4a.75.75 0 0 1 .75-.75"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </a>
      </div>

      {/* <div className="hs-years-image-wrapper">
        <img src={years} alt="15+ Years Excellence" className="hs-years-image" />
      </div> */}
    </section>
  );
};

export default HeroSection;