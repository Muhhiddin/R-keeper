import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import MyMap from "../companents/MyMap";
import {getAllPrice} from "../Helpers";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {removeStoreData} from "../store/basketSlice";

const CreateOrder = () => {
    const basket = useSelector(state => state.basket.basketSliceStore);
    const dispatch = useDispatch();
    const removeBasket = () => {
        dispatch(removeStoreData({}));
    }
    let products_id = [];
    let products_amount = [];
    const [orderData, setOrderData] = useState({
        name: '',
        phone: '',
        address: '',
        map_location: '',
        comment: '',
        payment_type_id: 16,
        delivery_type_id: 12
    })

    const setValuesHandler = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        orderData[inputName] = inputValue;
        setOrderData({...orderData})
    }

    const crateOrder = async () => {


        if (!orderData.name && !orderData.phone ) {
            alert('Error')
            return false;
        }

        for (let prod of basket) {
            products_id.push(prod.id)
            products_amount.push(prod.count)
        }

        let productData = {...orderData, products_id: products_id, products_amount: products_amount}

        setOrderData(productData)

        let formData = new FormData();

        for (let key in productData) {
            if (Array.isArray(productData[key])) {
                for (let keyInner in productData[key]) {
                    formData.append(`${key}[${keyInner}]`, productData[key][keyInner]);
                }
            } else {
                formData.append(key, productData[key]);
            }
        }

        let config = {
            method: 'post',
            url: 'https://hamd.loko.uz/api/operator/order-new',
            headers: {
                'Content-Type': 'multipart/form-data;',
            },

            data: formData
        };
        if (products_id) {
            axios(config)
                .then(function (response) {
                    removeBasket()
                    /*console.log(JSON.stringify(response.data));*/
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            return false
        }


    }


    return (
        <div className="allVivoz">
            <div className="main-container">
                <p className="informaboutklient">Доставка</p>

                <Link to={'/Delivery'} className="next-div">
                    <div className="imgArrowNext"></div>
                </Link>
                <form className="MuiBox-root css-13r4j3i" noValidate="" autoComplete="off">
                    <div className="allInput">
                        <div className="input-item">
                            <input className="input is-medium"
                                   name="name"
                                   value={orderData.name}
                                   onChange={setValuesHandler}
                                   type="text"
                                   placeholder="Имя"
                            />
                        </div>
                        <div className="input-item">
                            <input className="input is-medium" type="text" defaultValue="Tashkent" placeholder="Город"/>
                        </div>
                        <div className="input-item">
                            <input className="input is-medium"
                                   type="text"
                                   name="address"
                                   value={orderData.address}
                                   onChange={setValuesHandler}
                                   placeholder="Адрес"/>
                        </div>
                        <div className="input-item">
                            <input className="input is-medium" type="number" placeholder="Подьезд"/>
                        </div>
                        <div className="input-item">
                            <input className="input is-medium" type="number" placeholder="Этаж"/>
                        </div>
                        <div className="input-item">
                            <input className="input is-medium" type="number" placeholder="Кв"/>
                        </div>
                        <div className="input-item">
                            <input className="input is-medium" type="number" placeholder="Кв"/>
                        </div>
                        <div className="input-item">
                            <input className="input is-medium" type="text" placeholder="Ориентир"/>
                        </div>
                        <div className="phone-input">
                            <input className="input is-medium"
                                   name="phone"
                                   value={orderData.phone}
                                   onChange={setValuesHandler}
                                   type="text"
                                   placeholder="+998997947207"
                            />
                        </div>
                        <div className="input-item">
                            <input className="input is-medium" required type="text" defaultValue="Доставка"
                                   placeholder="самовывоз"/>
                        </div>
                        <div className="input-item">
                            <input className="input is-medium" required type="text" defaultValue="Tashkent"
                                   placeholder="самовывоз"/>
                        </div>
                        <div className="input-item">
                            <input name="comment"
                                   className="input is-medium"
                                   placeholder="Комментарии"
                                   onChange={setValuesHandler}
                                   value={orderData.comment}/>
                        </div>
                    </div>
                </form>
                <div className="location">
                    <div className="control">
                        <input className="input is-medium is-focused" type="text" placeholder="Focused input"/>
                    </div>
                    <MyMap style={"width: 100%; height: 350px; position: relative; overflow: hidden;"}/>
                </div>
                <div className="samo-price">
                    <div className="price">
                        <div className="button is-warning is-large mr-5"><p>Общая сумма:</p>

                            <span>{getAllPrice(basket)} сум</span></div>
                        <Link to={'/'} className="button is-danger is-large" onClick={crateOrder}><p>Подвердить</p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateOrder;