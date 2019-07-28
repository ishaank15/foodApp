import { LOAD_FOOD_ITEMS, ERROR_LOAD_FOOD_ITEMS,FILTER_ITEMS } from '../../shared/constant';

const initialState = {
  items: [],
  filteredItems: []
}

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FOOD_ITEMS: {
        return  {...state, items: action.payload };
      }
    case FILTER_ITEMS: {
        return {...state, filteredItems: action.payload};
      }
    case ERROR_LOAD_FOOD_ITEMS: {
      return {...initialState}
    }
    default:
      return state;
  }
}

export default dashboardReducer;