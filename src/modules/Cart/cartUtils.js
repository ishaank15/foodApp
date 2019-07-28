import { getFromLocalStorage } from '../../common/utils'

export const getCartListFromLS =() => {
    const LsCart = JSON.parse(getFromLocalStorage('cart'));
    if (LsCart && LsCart.length) {
        return LsCart
    }
    return [];
}

export const appendOrders = (orders, key) => {
    const prevOrders = JSON.parse(getFromLocalStorage(key));
    if(!prevOrders)
        return [[...orders]];
    const newOrders = [...prevOrders, orders];
    return newOrders;
}

export const getCancelledOrderFromLs = () => {
    const LsCancelled = JSON.parse(getFromLocalStorage('cancelledOrders'));
    if (LsCancelled && LsCancelled.length) {
        return LsCancelled
    }
    return [];
}

export const getSuccessfulOrderFromLs = () => {
    const LsSuccessOrder = JSON.parse(getFromLocalStorage('successOrder'));
    if (LsSuccessOrder && LsSuccessOrder.length) {
        return LsSuccessOrder
    }
    return [];
}