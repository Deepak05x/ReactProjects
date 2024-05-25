import React, { useState } from 'react';
import { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import './StarRating.css';

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(undefined);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };

   const handleMouseLeave = () => {
     setHover(undefined);
   };

  useEffect(()=>{
    setHover(undefined)
    setRating(0)
  },[])

  return (
    <div className="react__star">
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
              onMouseLeave={()=> handleMouseLeave()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;