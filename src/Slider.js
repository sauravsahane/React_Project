import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

const reviewsData = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      reviewer: "User 1",
      profilePicture: "url_to_user1_profile_picture.jpg",
      fullName: "John Doe",
    },
    {
      id: 2,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      reviewer: "User 2",
      profilePicture: "url_to_user2_profile_picture.jpg",
      fullName: "Jane Doe",
    },
  ];
  

const ReviewSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % reviewsData.length);
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);
  
    const goToPrevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + reviewsData.length) % reviewsData.length);
    };
  
    const goToNextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % reviewsData.length);
    };
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      afterChange: (index) => setCurrentSlide(index),
    };
  
    return (
      <div className="slider-container" style={{ height: '50vh' }}>
        <Slider {...settings}>
          {reviewsData.map((review, index) => (
            <div key={review.id} className={`slider-item ${currentSlide === index ? 'active-slide' : 'inactive-slide'}`}>
              <div className="profile-container">
                <img src={review.profilePicture} alt="Profile" className="profile-picture" />
                <p className="user-name">{review.fullName}</p>
              </div>
              <p>{review.text}</p>
              <p>- {review.reviewer}</p>
            </div>
          ))}
        </Slider>
  
        <div className="navigation-buttons">
          <button className="navigation-button" onClick={goToPrevSlide}>Previous</button>
          <button className="navigation-button" onClick={goToNextSlide}>Next</button>
        </div>
      </div>
    );
  };
  
  export default ReviewSlider;
  