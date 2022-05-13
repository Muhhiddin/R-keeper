import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrementProductCnt, incrementProductCnt} from "../store/basketSlice";

const Basket = () => {
    const basket = useSelector(state => state.basket.basketSliceStore);
    const dispatch = useDispatch();

    const increment = (data) => {
        dispatch(incrementProductCnt({
            id: data.id,
            name: data.name,
            price: data.price,
            count: data.count,
        }));
    }

    const decrement = (data) => {
        dispatch(decrementProductCnt({
            id: data.id,
            name: data.name,
            price: data.price,
            count: data.count,
        }));
    }

   /* let amount = 0;
    for ( let i = 0; i < basket.length; i++) {
        amount += products[i].price
    }
    console.log(amount)*/

    return (
        <>
            {
                basket.length > 0
                ?
                basket.map(product =>
                    <div className="bar-aside-block" key={product.id}>
                        <div><p>{product.name}</p></div>
                        <div className="bar_main_bot">
                            <div className="buttonWindow">
                                <button onClick={() => decrement(product)}>-</button>
                                <p>{product.count}</p>
                                <button onClick={() => increment(product)}>+</button>
                            </div>
                        </div>
                    </div>
                )
                :
                <div>
                    Ваша корзина пуста добавьте товар
                </div>
            }

        </>
    );
};

export default Basket;