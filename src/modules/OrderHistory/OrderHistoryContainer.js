import { connect } from 'react-redux';
import OrderHistory from './OrderHistory'

const mapStateToProps = (state) => {
    const { CartReducer }= state;
    return {
        cancelledOrders: CartReducer.cancelledOrder,
        successfulOrders: CartReducer.successfulOrder
    };
}

export default connect(mapStateToProps, null)(OrderHistory);