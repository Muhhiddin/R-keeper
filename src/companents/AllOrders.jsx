import React, {useEffect, useState} from 'react';
import {AcceptOrderApi, AllOrderApi} from "../Api";

const AllOrders = () => {
    const [products, setProducts] = useState([]);
    const [acceptOrder, setAcceptOrder] = useState([]);
    const [orderId, setOrderId] = useState(1);

    const toggleTab = (index) => {
        setOrderId(index)
    }

    const fetchCategories = async () => {
        const response = await AllOrderApi();
        setProducts(response.data);
        return response;
    }
    useEffect(() => {
        fetchCategories();
    }, []);


    const fetchAccept = async () => {
        const response = await AcceptOrderApi(orderId);
        setAcceptOrder(response.data);
        return response;
    }

    useEffect(() => {
        fetchAccept();
    }, []);


    return (
        <>
            <div className="btnBlock">
                <button
                    className={orderId === 1 ? "AllOrdersBtn active-Btn" : "AcceptOrdersBtn"}
                    onClick={() => toggleTab(1)}>Список заказов
                </button>
                <button
                    className={orderId === 2 ? "AcceptOrdersBtn active-Btn" : "AcceptOrdersBtn"}
                    onClick={() => toggleTab(2)}>Принятые заказы
                </button>
                <button
                    className={orderId === 3 ? "SendOrdersBtn active-Btn" : "SendOrdersBtn"}
                    onClick={() => toggleTab(3)}>Заказы в пути
                </button>
                <button
                    className={orderId === 4 ? "EndOrdersBtn active-Btn" : "EndOrdersBtn"}
                    onClick={() => toggleTab(4)}>Завершенные заказы
                </button>
            </div>
            <div className={orderId === 1 ? "main_bottom_orders active" : "main_bottom_orders"}>
                {products.map((product =>
                        <div key={product.id}>
                            <div className="main_bottom_items">
                                <div className="main_bottom_border">
                                </div>
                                <p>#{product.id}</p>
                                <div className="main_bottom_border">
                                </div>
                            </div>
                            {
                                product.orderProducts.length !== 0 && product.orderProducts.map((prodData, index) => (
                                    <RenderItems key={index} data={prodData}/>
                                ))
                            }

                            <p className="result"><span>Итог......</span><span>{product.product_total_sum}</span></p>
                        </div>
                ))}
            </div>
            <div className={orderId === 2 ? "main_bottom_orders active" : "main_bottom_orders"}>
                {acceptOrder.map((product =>
                        <div key={product.id}>
                            <div className="main_bottom_items">
                                <div className="main_bottom_border">
                                </div>
                                <p>#{product.id}3</p>
                                <div className="main_bottom_border">
                                </div>
                            </div>
                            <p className="meal">{product.name}</p>
                            <p className="result"><span>Итог......</span><span>{product.price}2300$</span></p>
                        </div>
                ))}
            </div>
            <div className={orderId === 3 ? "main_bottom_orders active" : "main_bottom_orders"}>
                {acceptOrder.map((product =>
                        <div key={product.id}>
                            <div className="main_bottom_items">
                                <div className="main_bottom_border">
                                </div>
                                <p>#{product.id}22222</p>
                                <div className="main_bottom_border">
                                </div>
                            </div>
                            <p className="meal">{product.name}4</p>
                            <p className="result"><span>Итог......</span><span>{product.price}5000</span></p>
                        </div>
                ))}
            </div>
            <div className={orderId === 4 ? "main_bottom_orders active" : "main_bottom_orders"}>
                {acceptOrder.map((product =>
                        <div key={product.id}>
                            <div className="main_bottom_items">
                                <div className="main_bottom_border">
                                </div>
                                <p>#{product.id}</p>
                                <div className="main_bottom_border">
                                </div>
                            </div>
                            <p className="meal">{product.name}5600</p>
                            <p className="result"><span>Итог......</span><span>{product.price666000}</span></p>
                        </div>
                ))}
            </div>
        </>
    );
};

const RenderItems = ({data}) => {
    if (!data.product) return <></>

    return (
        <>
            <p className="meal">{data.product && data.product.name} - {data.product && data.product.price}</p>
        </>
    )
};


export default AllOrders;