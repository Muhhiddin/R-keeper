export const getAllPrice = (basket) => {
    let totalPrice = 0;

    for (let prod of basket) {
        let prodTotalPrice = prod.count * prod.price;
        totalPrice += prodTotalPrice;
    }

    return totalPrice;
}