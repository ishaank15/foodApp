import React, { Fragment, Component } from 'react';
import { calculateDiscount, isArrayWithElements } from '../../common/utils'
import { Tabs, Tab } from 'react-bootstrap';

class OrderHistoryCard extends Component {
    itemTuple = (index, name, discountPrice) => {
        return (
            <tr key={index}>
                <td>1 {name}</td>
                <td>{' X '}</td>
                <td>{'₹' + discountPrice}</td>
                <td>{' = '}</td>
                <td><b>{'₹' + discountPrice}</b></td>
            </tr>
        );
    }

    getCartItemList = () => {

    }
    render() {
        let total = 0;
        let discountPrice = 0;
        let actualTotal = 0;
        const { selectedItems = [], cancelled = false } = this.props
        let cartItemList = selectedItems && selectedItems.length && selectedItems.map((item, index) => {
            discountPrice = calculateDiscount(item.price, item.discount);
            total = total + discountPrice;
            return this.itemTuple(index, item.name, discountPrice)
        });
        actualTotal = total;
        total = 0.9 * total;
        return (
            <Fragment>
                {selectedItems && (
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
                            <span className='value'>{': ₹' + total}</span>
                        </div>
                        <div className="cart-total">
                            {'Total: ₹' + total}
                        </div>
                        {cancelled && <button>CANCELLED ORDER</button>}
                        {!cancelled && <button>ORDER SUCCESSFULL</button>}
                    </div>
                )}
            </Fragment>

        );
    }
}

class OrderHistory extends Component {
    render() {
        const { orderList = [], cancelled } = this.props;
        if (!isArrayWithElements(orderList))
            return <div>{`You haven't ordered any food item yet.`}</div>
        return orderList.map((order, index) => {
            return <OrderHistoryCard key={index} selectedItems={order} cancelled={cancelled} />
        })
    }
}


const OrderHistoryTab = (props) => {
    const { cancelledOrders, successfulOrders } = props;
    return (
        <Tabs defaultActiveKey="Successful Orders" id="uncontrolled-tab-example" className="OrderTab">
            <Tab eventKey="Successful Orders" title="Successful Orders" className="successfulTab">
                <OrderHistory orderList={successfulOrders} cancelled={false} />
            </Tab>
            <Tab eventKey="Cancelled Orders" title="Cancelled Orders" className="cancelledTab">
                <OrderHistory orderList={cancelledOrders} cancelled={true} />
            </Tab>
        </Tabs>
    )
}
export default OrderHistoryTab