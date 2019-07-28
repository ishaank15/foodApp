import { combineReducers } from 'redux';
import DashboardReducer from '../../modules/Dashboard/reducer';
import CartReducer from '../../modules/Cart/reducer';

const rootReducer = combineReducers({
    DashboardReducer,
    CartReducer
});

export default rootReducer;