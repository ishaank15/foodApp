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

export const getTotalWithDiscount = (selectedItems) => {
    let total = 0;
    let discountPrice = 0;
    selectedItems && selectedItems.length && selectedItems.forEach((item, index) => {
        discountPrice = calculateDiscount(item.price, item.discount);
        total = total + discountPrice;
    });
    const discountPercent = 10;
    total = (1 -discountPercent/100) * total;
    return total.toFixed(2)
}
