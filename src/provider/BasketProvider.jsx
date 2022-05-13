import {createContext, useContext, useState} from "react";

export const BasketContext = createContext();

const BasketProvider = ({children}) => {
    const [basketProducts, setBasketProducts] = useState([]);

    const value = {
        basketProducts,
        setBasketProducts
    }

    return (
        <BasketContext.Provider value={value}>
            <BasketContext.Consumer>
                {
                    () => children
                }
            </BasketContext.Consumer>
        </BasketContext.Provider>
    );
};

export const useBasket = (setter) => {
    const {basketProducts, setBasketProducts} = useContext(BasketContext)
    return setter ? [setBasketProducts] : [basketProducts, setBasketProducts]
}

export default BasketProvider;