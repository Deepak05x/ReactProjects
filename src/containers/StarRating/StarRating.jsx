import React, { useState } from 'react';
import { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import './StarRating.css';

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(undefined);

  const handleClick = (getCurrentIndex) => {
    console.log("Clicked on star:", getCurrentIndex);
    setRating(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex) => {
    console.log("Hovered over star:", getCurrentIndex);
    setHover(getCurrentIndex);
  };

  const handleMouseLeave = () => {
    console.log("Mouse left");
    setHover(undefined);
  };

  useEffect(()=>{
    setHover(undefined)
    setRating(0)
  },[])

  return (
    <div className="react__star" id="bg__color">
      <h1>Star Rating</h1>
      <div className="react__star-icons">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              className={(hover || rating) >= index ? 'active' : 'notActive'}
              key={index}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;