import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './action';
import Cart from './CartComponent';

const mapStateToProps = (state) => {
    const { CartReducer } = state;
    return {
        selectedItems: CartReducer.selection
    };
}

const mapDispatchToProps = (dispatch) => ({
    removeItemFromCart: bindActionCreators(actions.removeItemFromCart, dispatch),
    checkoutCurrentOrder: bindActionCreators(actions.checkoutCurrentOrder, dispatch),
    cancelOrder: bindActionCreators(actions.cancelOrder, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);