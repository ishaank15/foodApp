import React from 'react';

const BasicPriceDisplay = ({ isHidden = true, price }) => {
    if (isHidden)
        return null
    return (
        <span className="card-price">{'Price - ₹' + price}</span>
    )
}

export default BasicPriceDisplay;