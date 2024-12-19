import React, { useState } from 'react';
import './Carousel.css';
const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="carousel">
      <div className="main-slide">
        <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
        <div className="slide-details">
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].description}</p>
          <p>{slides[currentSlide].price}</p>
        </div>
      </div>
      <div className="thumbnails">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={slide.title}
            className={index === currentSlide ? 'thumbnail active' : 'thumbnail'}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      <button className="prev-btn" onClick={prevSlide}>&#9664;</button>
      <button className="next-btn" onClick={nextSlide}>&#9654;</button>
    </div>
  );
};

export default Carousel;
