import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../Cart/action';
import * as commomAction from '../../common/actions'
import BottomBar from './BottomBarComponent'

const mapStateToProps = (state) => {
    const { CartReducer }= state;
    return {
        selectedItems: CartReducer.selection,
    };
}

const mapDispatchToProps = (dispatch) => ({
    checkoutCurrentOrder: bindActionCreators(actions.checkoutCurrentOrder, dispatch),
    toggleSuccessModal: bindActionCreators(commomAction.toggleSuccessModal, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(BottomBar);