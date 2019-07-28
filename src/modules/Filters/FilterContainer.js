import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './action.js';
import Filters from './FilterComponent';

const mapStateToProps = (state) => {
    return {
        items: state.DashboardReducer.items,
        filteredItems: state.DashboardReducer.filteredItems
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterItems: bindActionCreators(actions.filterMenu, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);