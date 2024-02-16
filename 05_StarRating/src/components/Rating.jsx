import './Rating.css'

import { useState } from "react";
import { FaStar } from "react-icons/fa";
const Rating = ({ noOfStars }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };

  const handleMouseLeave = (getCurrentIndex) => {
    setHover(rating);
  };

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default Rating;
