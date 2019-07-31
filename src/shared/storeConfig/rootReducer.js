import { combineReducers } from 'redux';
import DashboardReducer from '../../modules/Dashboard/reducer';
import CartReducer from '../../modules/Cart/reducer';
import configurationReducer from '../../common/reducers'
const rootReducer = combineReducers({
    DashboardReducer,
    CartReducer,
    config: configurationReducer
});

export default rootReducer;