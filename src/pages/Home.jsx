import React from 'react';
import "../App.css";
import Layout from "../Layout";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <Layout>
            <div className="first-bar">
                <div>
                    <Link to={'/categories'}>
                        Новый заказ
                    </Link>
                </div>
                <div>
                    <Link to={'/call'}>
                        Информация о звонке
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default Home;