
import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const RatingSection = ({ rating = 0 }) => (
<div className="star-rating-wrap">
<StarRatingComponent
    name="rate1"
    starCount={5}
    value={rating}
/>
</div>
)

export default RatingSection;