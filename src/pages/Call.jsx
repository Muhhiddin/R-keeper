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
                    <Link to={'/'} className='d-content'>
                        <div>
                            <svg className="imgArrowNext" width="20" height="19" viewBox="0 0 20 19" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.72882 2.38977L1.72882 9.47245L8.72882 16.5551" stroke="white"
                                      strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M1.72882 9.47244H17.7288" stroke="white" strokeWidth="3"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </Link>
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