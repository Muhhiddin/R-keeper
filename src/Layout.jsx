import React from 'react';
import {Link} from "react-router-dom";
import MyMap from "./companents/MyMap";
import Basket from "./companents/Basket";
import {useDispatch, useSelector} from "react-redux";
import {removeStoreData} from "./store/basketSlice";
import AllOrders from "./companents/AllOrders";
import Courier from "./companents/Courier";

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
                            <div className="logout">
                                <Link to="/login" role="img" aria-label="logout" onClick={handleOutClick}
                                      className="anticon anticon-logout">
                                    <svg viewBox="64 64 896 896" focusable="false" data-icon="logout" width="1em"
                                         height="1em"
                                         fill="currentColor" aria-hidden="true">
                                        <path
                                            d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z">
                                        </path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="left-maptop">
                            <span>15.03.2021 16:02</span>
                            <span>Основная</span>
                            <span>Администратор</span>
                        </div>
                        <div className="map">
                            <MyMap/>
                        </div>
                        <Courier/>
                        <div className='bar-main-bottom'><Link to={'/categories'}>Меню</Link></div>
                    </div>
                    <div className="barma-main-right">

                        {children}

                        <div className="loading-block">
                            <div className="loading"></div>
                        </div>
                        <AllOrders/>
                    </div>

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
                                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.18229 11.7794L2.5172 7.1143L0.514038 9.11747L7.18229 15.7857L20.9339 2.03413L18.9307 0.0309677L7.18229 11.7794Z"
                                                fill="white"/>
                                        </svg>
                                    </div>
                                </Link> : []}
                        <a aria-current="page" className="error" onClick={removeBasket}>
                            <svg className="img-2" width="14" height="16" viewBox="0 0 14 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.08081 5.70898L10.3679 0.0585938H13.5046L8.77808 7.81445L13.6121 15.6992H10.4431L7.08081 9.96289L3.70776 15.6992H0.549561L5.39429 7.81445L0.656982 0.0585938H3.7937L7.08081 5.70898Z"
                                    fill="white"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;