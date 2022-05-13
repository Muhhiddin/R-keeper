import React, {useEffect, useState} from 'react';
import {callApi} from '../Api';
import {Link} from "react-router-dom";
import Layout from "../Layout";


const Call = () => {
    const [callList, setCallList] = useState([])


    const fetchCategories = async () => {
        const response = await callApi();
        setCallList(response.data);
        return response;
    }

    useEffect(() => {
        if (callList.length <= 0) {
            fetchCategories();
        }
    }, []);

    return (
        <>
            <Layout>
                <div className="back">
                    <div>
                        <Link to={'/'} >
                            <img className="imgArrow"
                                 src="https://hamdloko.uz/static/media/arrow-left.76c49801d78388a0b113fd68f307cb0a.svg"
                                 alt=""/>
                        </Link>
                    </div>
                </div>
                <h2>Последние звонки:</h2>
                <div className="main_call">
                    {callList.map((operator =>
                            <div className="contact-block" key={operator.id}>
                                <p>{operator.id}.<span>{operator.phone}</span></p>
                                <span className="time">{operator.date}</span>
                            </div>
                    ))}
                </div>
            </Layout>
        </>
    );
};

export default Call;