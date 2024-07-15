import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import image1 from './assets/1.jpg';
import image2 from './assets/2.jpg';
import image3 from './assets/3.jpg';
import './WelcomeSlider.css';
const backgroundImages = [image1, image2, image3];

const WelcomeSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div className="welcome-slider-container">
      <div className="background-slider">
        {backgroundImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Background ${index + 1}`}
            className={index === activeIndex ? 'active' : ''}
          />
        ))}
      </div>
      <div className="welcome-slider">
        <Slider {...settings}>
          <div>
            <h2>Welcome to Dish Management System</h2>
            <p>Manage your dishes efficiently.</p>
          </div>
          <div>
            <h2>Add New Dishes</h2>
            <p>Easily add new dishes to the menu.</p>
          </div>
          <div>
            <h2>Track Dish Availability</h2>
            <p>Keep track of your dish inventory.</p>
          </div>
        </Slider>
      </div>
      <div className="button-container">
        <Link to="/dish-management">
          <button className="welcome-button">Go to Dish Management</button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomeSlider;
