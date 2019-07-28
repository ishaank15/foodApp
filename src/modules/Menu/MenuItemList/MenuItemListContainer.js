import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../Cart/action';
import MenuItemList from './MenuItemList.jsx';

const mapStateToProps =(state)=> {
    const {DashboardReducer, CartReducer } = state;
    return {
        filteredItems: DashboardReducer.filteredItems,
        selectedItems: CartReducer.selection
    };
}

const mapDispatchToProps = dispatch => ({
    addItemToCart: bindActionCreators(actions.addItemToCart, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItemList);