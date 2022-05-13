import React from 'react';
import {Link} from "react-router-dom";

const Delivery = () => {
    return (
        <div className="allKiper">
            <div className="main-container">
                <p className="informaboutklient">Информация о клиенте</p>
                <div className="next-div">
                    <Link to={'/'}>
                        <div className="imgArrowNext"></div>
                    </Link>
                </div>
                <div className="type-dostavka">
                    <Link to={'/orders'}>
                        <div className="allDostavka">
                            <img
                                src="data:image/png;base64,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"
                                alt=""/>
                            <p>Доставка</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Delivery;