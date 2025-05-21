import React, { useState, useEffect, useRef } from 'react';
import './SlideShow.css';
import image1 from './SlideImg/parker-tiles.png';
import image2 from './SlideImg/slide-4.jpg';
import image3 from './SlideImg/wall-covering.jpg';

const SlideShow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const timerRef = useRef(null);
    const interval = 5000; 

    const slides = [
        {
          src: image1,
          caption: {
            title: 'Premium Flooring Solutions',
            description: 'Discover our high-quality flooring products',
            buttonText: 'View Products'
          }
        },
        {
          src: image2,
          caption: {
            title: 'Modern Designs',
            description: 'Latest trends in home and commercial flooring'
          }
        },
        {
          src: image3,
          caption: {
            title: 'Expert Installation',
            description: 'Professional installation services available',
            buttonText: 'Get a Quote'
          }
        }
    ];

    // Auto-advance slides
    useEffect(() => {
        if (!isHovered) {
            timerRef.current = setTimeout(() => {
                goToNext();
            }, interval);
        }
        return () => clearTimeout(timerRef.current);
    }, [currentIndex, isHovered, interval]);

    const goToNext = () => {
        setCurrentIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const goToPrev = () => {
        setCurrentIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div 
            className="slideshow-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Slides */}
            <div 
                className="slides-wrapper"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div 
                        key={index} 
                        className="slide"
                        style={{ backgroundImage: `url(${slide.src})` }}
                        aria-hidden={index !== currentIndex}
                    >
                        {slide.caption && (
                            <div className="slide-caption">
                                <h3>{slide.caption.title}</h3>
                                <p>{slide.caption.description}</p>
                                {slide.caption.buttonText && (
                                    <button className="cta-button">
                                        {slide.caption.buttonText}
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button 
                className="nav-arrow prev-arrow" 
                onClick={goToPrev}
                aria-label="Previous slide"
            >
                &#10094;
            </button>
            <button 
                className="nav-arrow next-arrow" 
                onClick={goToNext}
                aria-label="Next slide"
            >
                &#10095;
            </button>

            {/* Indicators */}
            <div className="indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default SlideShow;