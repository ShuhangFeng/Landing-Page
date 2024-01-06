import React, { useState } from 'react';
import './TrendingSliders.css';

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default function TrendingSliders({ slides, cards = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function goToPrevious() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function goToNext() {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className="trending-slider-container">
      <button className="trending-button trending-button-prev" onClick={goToPrevious}>{'<'}</button>
      <div className="trending-slide">
        <div className="slide-image-container">
          <img src={slides[currentIndex].image} alt={slides[currentIndex].description} />
          <p>{slides[currentIndex].description}</p>
        </div>
        <div className="card-stack">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
      <button className="trending-button trending-button-next" onClick={goToNext}>{'>'}</button>
    </div>
  );
}
