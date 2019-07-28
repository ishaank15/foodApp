export const calculateDiscount = (originalPrice, discount) => {
    let finalPrice = originalPrice;
    if (discount)
        finalPrice = Number(originalPrice) - (Number(originalPrice) * Number(discount) / 100);
    return finalPrice;
}

export const setInLocalStorage = (key='key', value='') => {
    localStorage.setItem(key, value);
}

export const getFromLocalStorage = (key='key') => {
    return localStorage.getItem(key);
}

export const isArrayWithElements = (data) => {
    if (data instanceof Array && data.length > 0) {
      return true;
    } else {
      return false;
    }
}
