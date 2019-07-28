
import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const RatingSection = ({ rating = 0 }) => (<StarRatingComponent
    name="rate1"
    starCount={5}
    value={rating}
/>)

export default RatingSection;