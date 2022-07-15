import { calcCount, calcTotal } from "./calcTotal";

export const getCartLs = () => {
    const data = localStorage.getItem('cart');
    const items = data ? JSON.parse(data) : [];
    const totalPrice = items.length ? calcTotal(items) : 0
    const totalCount = calcCount(items)
    return {
        items,
        totalPrice,
        totalCount
    }
       
}