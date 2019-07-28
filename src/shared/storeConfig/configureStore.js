import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';

import api from '../api';

const initialState = {};
const middlewares = [
    reduxThunk.withExtraArgument({api}),
];

const __BROWSER__ = typeof window!=="undefined";

const storeEnhancers = [
  applyMiddleware(...middlewares),
  __BROWSER__  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : (f) => f,
];

const composedEnhancers = compose(
    ...storeEnhancers,
)

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
)

export default store;