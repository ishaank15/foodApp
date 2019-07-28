import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DashboardActions from './action.js';
import * as filterActions from '../Filters/action';
import Dashboard from './DashboardComponent'

const mapStateToProps = (state) => {
    // const {} = state;
    return {}
}

const mapDispatchToProps = dispatch => ({
    filterMenu: bindActionCreators(filterActions, dispatch),
    DashboardActions: bindActionCreators(DashboardActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);