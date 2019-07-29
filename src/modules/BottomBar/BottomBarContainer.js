import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../Cart/action';
import BottomBar from './BottomBarComponent'

const mapStateToProps = (state) => {
    const { CartReducer }= state;
    return {
        selectedItems: CartReducer.selection
    };
}

const mapDispatchToProps = (dispatch) => ({
    checkoutCurrentOrder: bindActionCreators(actions.checkoutCurrentOrder, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(BottomBar);