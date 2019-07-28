import React from 'react';
import { calculateDiscount } from '../../../../../common/utils';

const DiscountedSection = ({ isHidden = true, price, discount }) => {
    if (isHidden)
        return null
    let finalPrice = calculateDiscount(price, discount);
    return (
        <div>
            {'Price - '}<span className="card-price original-price">{'₹' + price}</span>
            &nbsp;&nbsp;&nbsp;
                <span className="card-price discounted-price">{'₹' + finalPrice + ' (-' + discount + '%)'}</span>
        </div>
    )
}
export default DiscountedSection;
