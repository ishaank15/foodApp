import React, { Component } from 'react';
import { calculateDiscount } from '../../common/utils'
class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checkoutAlert: false
        };
    }

    checkout = () => {
        const { selectedItems = [], toggleSuccessModal } = this.props;
        this.setState({
            checkoutAlert: true
        });
        this.props.checkoutCurrentOrder(selectedItems);
        if(typeof toggleSuccessModal === 'function'){
            toggleSuccessModal(true)
        }
    }

    removeItemFromCart = (idx) => {
        let arr = [...this.props.selectedItems];
        arr.splice(idx, 1);
        this.props.removeItemFromCart(arr);
    }

    itemTuple = (index, name, discountPrice, showRemove = true) => {
        return (
            <tr key={index}>
                {showRemove && <td><span className="btn-remove" onClick={e => this.removeItemFromCart(index)} >{'Remove'}</span></td>}
                <td>{'1' + name}</td>
                <td>{' X '}</td>
                <td>{'₹' + discountPrice}</td>
                <td>{' = '}</td>
                <td><b>{'₹' + discountPrice}</b></td>
            </tr>
        );
    }

    resetCart = () => {
        this.setState({
            checkoutAlert: false
        })
    }

    cancelOrders = () => {
        this.resetCart();
        this.props.cancelOrder(this.props.selectedItems);
    }
    render() {
        let total = 0;
        let discountPrice = 0;
        let actualTotal = 0;
        const { selectedItems = [] } = this.props
        let cartItemList = selectedItems && selectedItems.length && selectedItems.map((item, index) => {
            discountPrice = calculateDiscount(item.price, item.discount);
            total = total + discountPrice;
            return this.itemTuple(index, item.name, discountPrice)
        });
        actualTotal = total;
        total = (0.9 * total).toFixed(2) ;
        return (
            <div>
                {selectedItems && selectedItems.length > 0 && (
                    <div className="cart-container">
                        <div className="card-title">{'ORDER SUMMARY'} </div>
                        <br />
                        <table className="table table-striped">
                            <tbody>{cartItemList}</tbody>
                        </table>
                        <br />
                        <div className='card-discount'>
                            <span className='text'>{'Actual Price(Total)'}</span>
                            <span className='value'>{': ₹' + actualTotal}</span>
                        </div>
                        <div className='card-discount'>
                            <span className='text'>{'InFeedo Special Discount'}</span>
                            <span className='value'>{': 10%'}</span>
                        </div>
                        <div className='card-discount'>
                            <span className='text'>{'After Discount Price(Total)'}</span>
                            <span className='value'>{': ₹ ' + total}</span>
                        </div>
                        <div className="cart-total">
                            {'Total: ₹' + total}
                        </div>
                        <button onClick={this.checkout}>CHECKOUT</button>
                        <button onClick={this.cancelOrders}>CANCEL ORDER</button>
                    </div>
                )}
                {this.state.checkoutAlert && !selectedItems.length && (
                    <div className="cart-container">
                        <div className="success">
                            {'Your order is on it\'s way and will be delivered in 30 minutes.'}
                        </div>
                        <button onClick={this.resetCart}>PLACE NEW ORDER</button>
                    </div>
                )}
            </div>
        );
    }
}

export default Cart