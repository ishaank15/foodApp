
import { getCartListFromLS, getCancelledOrderFromLs, getSuccessfulOrderFromLs } from './cartUtils';

const initialState = {
  selection: getCartListFromLS(),
  cancelledOrder: getCancelledOrderFromLs() || [],
  successfulOrder: getSuccessfulOrderFromLs() || []
}

export default function CartReducer(state = initialState , action) {
  switch (action.type) {
    case 'ADD_ITEMS':
        return {...state, selection: action.payload};
    case 'REMOVE_ITEMS': 
        return {...state, selection: action.payload};
    case 'CHECKOUT_AND_RESET_SELECTION':
        return {...state, selection: [],successfulOrder: [...action.payload] };
    case 'CANCELLED_ORDER':
        return {...state, cancelledOrder: [...action.payload], selection: []};
    default:
      return state;
  }
}
