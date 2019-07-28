import React from 'react';
import  DiscountedSection from './components/DiscountedSection'
import  BasicPriceDisplay from './components/BasicPriceDisplay'
import  Ingredients from './components/Ingredients'
import  MenuTitle from './components/MenuTitle'
import RatingSection from './components/RatingSection'
const MenuItem = (props) => {
    const { data = {} } = props;
    const { price = 0, discount = 0, name = '', ingredients , rating} = data;
    return (
        <div className="col-xs-12 col-md-12 card-container">
            <div className="card">
                <div className="card-block">
                    <MenuTitle name={name}/>
                    <br />
                    <DiscountedSection isHidden={!discount} price={price} discount={discount} />
                    <BasicPriceDisplay isHidden={discount} price={price} />
                    <hr />
                    <RatingSection rating={rating}/>
                    <Ingredients ingredients={ingredients} />
                </div>
            </div>
            <button onClick={e => props.addToCart(data)}>ADD</button>
        </div>
    );
};

export default MenuItem;
