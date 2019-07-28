import {setInLocalStorage } from '../../common/utils'
import { appendOrders} from './cartUtils'

export const addItemToCart = (response) => {
    setInLocalStorage('cart', JSON.stringify(response));
    return { type: 'ADD_ITEMS', payload: response };
}

export const removeItemFromCart = (response) => {
    setInLocalStorage('cart', JSON.stringify(response));
    return { type: 'REMOVE_ITEMS', payload: response };
}

export const checkoutCurrentOrder = (response) => {
    response.status = 'success'
    const newOrders= appendOrders(response, 'successOrder');
    setInLocalStorage('successOrder', JSON.stringify(newOrders));
    setInLocalStorage('cart', JSON.stringify([]));
    return { type: 'CHECKOUT_AND_RESET_SELECTION', payload: newOrders };
}

export const cancelOrder = (response) => {
    response.status = 'cancelled'
    const newOrders= appendOrders(response, 'cancelledOrders');
    setInLocalStorage('cancelledOrders', JSON.stringify(newOrders));
    setInLocalStorage('cart', JSON.stringify([]));
    return { type: 'CANCELLED_ORDER', payload: newOrders}
}