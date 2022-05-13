import React, {useEffect, useState} from 'react';
import {AllOrderApi} from "../Api";

const Courier = () => {
    const [courier, setCourier] = useState([]);

    const fetchCategories = async () => {
        const response = await AllOrderApi();
        setCourier(response.data);
        return response;
    }

    useEffect(() => {
        fetchCategories();
    }, []);


    return (
        <>
            <div className="couriers">
                <div className="input-title">
                    <p className="courier-title">Курьеры</p>
                    <input type="search"
                           onChange={(e) => {
                               let v = e.target.value;
                               let filteredItems = courier.filter(courierItem => {
                                   if (courierItem.id >= v)
                                   {
                                       return true;
                                   }
                                   return false;
                               });
                               setCourier(filteredItems);
                           }}
                           className="courier_input"
                           placeholder="Kurierning idisini kiriting"
                    />
                </div>
                <div className="all_couriers">
                    {courier.map((item => <div className="courier"  key={item.id}>
                        <div className="courier-img"></div>
                        <div className="courier-info">
                            <p><span>Курьер:</span>NE UKAZANO</p>
                            <p><span>ID заказа:</span>{item.id}</p>
                            <p><span>Маршрут:</span>{item.address}</p>
                        </div>
                    </div>))}
                </div>
            </div>

        </>
    );
};

export default Courier;
