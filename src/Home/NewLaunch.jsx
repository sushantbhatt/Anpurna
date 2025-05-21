



import { useState, useEffect, useRef } from "react";
import img1 from "./NewLaunchImg/ULTRA- Glass Partition.jpg";
import img2 from "./NewLaunchImg/ULTRA STRONG- Glass Partition.jpg";
import img3 from "./NewLaunchImg/ultra-max.jpg";
import img4 from "./NewLaunchImg/project-4.jpeg";
import img5 from "./NewLaunchImg/STILE DOORS- Glass Partition.webp";
import img6 from "./NewLaunchImg/Oak Walnut Art Tiles.webp";
import "./NewLaunch.css";

const NewLaunch = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = 6;
  const autoPlayInterval = 5000; // 5 seconds
  const timerRef = useRef(null);

  const projects = [
    { id: 1, image: img1, title: "ULTRA- Glass Partition", location: "Bangalore" },
    { id: 2, image: img2, title: "ULTRA STRONG- Glass Partition", location: "Mumbai" },
    { id: 3, image: img3, title: "ULTRA MAX- Glass Partition", location: "Goa" },
    { id: 4, image: img4, title: "Aluminium Glass Partition", location: "Pune" },
    { id: 5, image: img5, title: "STILE DOORS- Glass Partition", location: "Delhi" },
    { id: 6, image: img6, title: "Oak Walnut Art Tiles", location: "Dehradun" },
  ];

  // Function to go to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Function to go to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Function to go to a specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Set up auto-play
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setTimeout(() => {
        nextSlide();
      }, autoPlayInterval);
    }

    // Cleanup function
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentSlide, isPaused]);

  // Pause auto-play when user interacts with carousel
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  // Resume auto-play when user stops interacting
  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className="new-launch-section">
      <div className="nl-section-header">
        <h2 className="nl-section-title"> OUR NEWLY LAUNCHED PROJECTS </h2>
        <p className="nl-section-subtitle" style={{ color: "#61CE70" }}>
          Discover exceptional living spaces crafted with precision and elegance
        </p>
      </div>

      <div
        className="nl-carousel-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="nl-carousel-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div className="nl-carousel-slide" key={project.id}>
              <img
                src={project.image}
                alt={project.title}
                className="nl-carousel-image"
              />
              <div className="nl-slide-content">
                <div className="nl-content-wrapper">
                  <span className="nl-project-badge">New Launch</span>
                  <h2>{project.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="carousel-button prev-button"
          onClick={prevSlide}
          aria-label="Previous slide"
        > 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          
        </button> 

        <button
          className="carousel-button next-button"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

       
      </div>
    </section>
  );
};

export default NewLaunch;