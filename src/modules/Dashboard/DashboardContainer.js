import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DashboardActions from './action.js';
import * as filterActions from '../Filters/action';
import Dashboard from './DashboardComponent'
import * as commomAction from '../../common/actions'

const mapStateToProps = (state) => {
    const { config }= state;
    return {
        showSuccessModal: config.showSuccessModal
    }
}

const mapDispatchToProps = dispatch => ({
    filterMenu: bindActionCreators(filterActions, dispatch),
    DashboardActions: bindActionCreators(DashboardActions, dispatch),
    toggleSuccessModal: bindActionCreators(commomAction.toggleSuccessModal, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
