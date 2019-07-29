import React, { useState, Fragment } from 'react'
import { getTotalWithDiscount } from '../../common/utils'
import OrderModal from './OrderModal';
import SuccesModal from './SuccessModal';

const BottomBar = (props) => {
    const { selectedItems = [], checkoutCurrentOrder } = props;
    const [openCartModal, toggleCartModal ] = useState(false)
    const [openSuccessModal, toggleSuccessModal ] = useState(false)
    let textValue = ' ORDER FOOD ONLINE AND GET AMAZING DISCOUNTS '
    const checkoutCart = () => {
        toggleSuccessModal(true);
        checkoutCurrentOrder(selectedItems);
    }
    if (!selectedItems.length) {
        return (
        <Fragment>
            <SuccesModal showModal={openSuccessModal} toggleModal={toggleSuccessModal} />
            <div className='bottomBar welcome'>{textValue}</div>
        </Fragment>)
    }
    const total = getTotalWithDiscount(selectedItems);
    return (
        <Fragment>
            <div className='bottomBar'>
                <span className={'view-cart-button'} onClick={()=> toggleCartModal(true)}>
                    {'Total = ₹' + total}
                    {'(View Cart)'}
                </span>
                <span className={'view-cart-button'} onClick={() => checkoutCart()}>
                    {'Checkout & proceed'}
                    <span className="pic arrow-right"></span>
                </span>
            </div>
            <OrderModal showModal={openCartModal} toggleModal={toggleCartModal} />
        </Fragment>
    )
}

export default BottomBar;