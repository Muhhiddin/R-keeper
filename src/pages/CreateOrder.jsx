import React from 'react';
import {Link} from "react-router-dom";
import MyMap from "../companents/MyMap";

const ClientsInfo = () => {
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
                            <input className="input is-medium" name="name" type="text" placeholder="Имя"/>
                        </div>
                        <div className="input-item">
                            <input className="input is-medium" type="text" defaultValue="Tashkent" placeholder="Город"/>
                        </div>
                        <div className="input-item">
                            <input className="input is-medium" type="text" placeholder="Улица"/>
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
                            <input className="input is-medium" type="text" defaultValue="+998" placeholder="+998997947207"/>
                            {/*<div className="flag-dropdown ">
                                <div className="selected-flag" title="Uzbekistan: + 998" tabIndex="0" role="button"
                                     aria-haspopup="listbox">
                                    <div className="flag-uz">
                                        <div className="arrow"></div>
                                    </div>
                                </div>
                            </div>*/}
                        </div>
                        <div className="input-item">
                            <input className="input is-medium" required type="text" defaultValue="Доставка"
                                   placeholder="самовывоз"/>
                        </div>
                        <div className="input-item">
                            <input className="input is-medium" required type="text" defaultValue="Tashkent"
                                   placeholder="самовывоз"/>
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
                        <div className="button is-warning is-large mr-5"><p>Общая сумма:</p><span>0 сум</span></div>
                        <div className="button is-danger is-large "><p>Подвердить</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientsInfo;