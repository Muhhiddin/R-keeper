import React from 'react';
import {Link} from "react-router-dom";
import MyMap from "./companents/MyMap";
import Basket from "./companents/Basket";
import {useDispatch, useSelector} from "react-redux";
import {removeStoreData} from "./store/basketSlice";

const Layout = ({children}) => {
    const basket = useSelector(state => state.basket.basketSliceStore);
    const dispatch = useDispatch();
    const removeBasket = () => {
        dispatch(removeStoreData({}));
    }


    const getAllPrice = () => {
        let totalPrice = 0;

        for (let prod of basket) {
            let prodTotalPrice = prod.count * prod.price;

            totalPrice += prodTotalPrice;
        }

        return totalPrice;
    }

    /*const totalSum = basket.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    );*/


    const handleOutClick = () => {
        localStorage.removeItem('token')
    }

    return (
        <div className="wrapper">
            <div className="container">
                <div className="bar-main">
                    <div className="bar-main-left">
                        <div className="left-header">
                            <div className="left-header-name">r_k</div>
                        </div>
                        <div className="left-maptop">
                            <span>15.03.2021 16:02</span>
                            <span>Основная</span>
                            <span>Администратор</span>
                        </div>
                        <div className="map">
                            <MyMap/>
                        </div>
                        <div className="couriers">
                            <div className="input-title">
                                <p className="courier-title">Курьеры</p>
                                <input type="text" className="courier_input" placeholder="Kurierning idisini kiriting"/>
                            </div>
                            <div className="all_couriers">
                                <div>
                                    <div className="courier"><img
                                        src="https://hamdloko.uz/static/media/courier.f3e8bc460295f13b010e67c3b77e78d6.svg"
                                        alt=""/>
                                        <div className="courier-info"><p><span>Курьер:</span>NE UKAZANO</p>
                                            <p><span>ID заказа:</span>#5</p>
                                            <p><span>Маршрут:</span>улица Литературная</p></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="courier"><img
                                        src="https://hamdloko.uz/static/media/courier.f3e8bc460295f13b010e67c3b77e78d6.svg"
                                        alt=""/>
                                        <div className="courier-info"><p><span>Курьер:</span>NE UKAZANO</p>
                                            <p><span>ID заказа:</span>#4</p>
                                            <p><span>Маршрут:</span>MX47+X2J</p></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="courier"><img
                                        src="https://hamdloko.uz/static/media/courier.f3e8bc460295f13b010e67c3b77e78d6.svg"
                                        alt=""/>
                                        <div className="courier-info"><p><span>Курьер:</span>NE UKAZANO</p>
                                            <p><span>ID заказа:</span>#2</p>
                                            <p><span>Маршрут:</span>Лисунова 3, 56, 43</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bar-main-right">

                        {children}

                        <div className="loading-block">
                            <div className="loading"></div>
                        </div>
                        <div className="main_bottom_orders">
                            <div className="main_bottom_items">
                                <div className="main_bottom_border">
                                </div>
                                <p>#588</p>
                                <div className="main_bottom_border">
                                </div>
                            </div>
                            <p className="meal">Куриный Суп ... 1 ... 13000сум</p>
                            <p className="result"><span>Итог......</span><span>13000 сум</span></p>
                        </div>
                    </div>
                    <div className='bar-main-bottom'><Link to={'/categories'}>Меню</Link></div>
                </div>
                <div className="bar-aside">
                    <div className="bar-aside-head">
                        <div className="window">
                            <Basket/>
                        </div>
                    </div>
                    <div className="bar-aside-bottom">
                        <div className="bar-total">
                            Оплатить Сум: {getAllPrice()}
                        </div>
                    </div>
                    <div className="bar-aside-bottom-img">
                        {
                            basket.length > 0
                                ?
                            <Link to={'/delivery'} className="correct">
                            <div className="img-1">
                                <img
                                    src="https://hamdloko.uz/static/media/check-succes.63b032317f663918c233692b5d9af3ad.svg"
                                    alt=""/>
                            </div>
                        </Link>: []}
                        <a aria-current="page" className="error active" onClick={removeBasket}>
                            <img className="img-2"
                                 src="https://hamdloko.uz/static/media/Xclosesvg.74a1154723abf7511d87eaa606a776fc.svg"
                                 alt=""/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="logout">
                <Link to="/login" role="img" aria-label="logout" onClick={handleOutClick}
                      className="anticon anticon-logout">
                    <svg viewBox="64 64 896 896" focusable="false" data-icon="logout" width="1em" height="1em"
                         fill="currentColor" aria-hidden="true">
                        <path
                            d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z">
                        </path>
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default Layout;