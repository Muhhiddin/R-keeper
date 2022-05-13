import React, {useEffect, useState} from 'react';
import categories from "../Api";
import Layout from "../Layout";
import {Link} from "react-router-dom";

const Categories = () => {
    const [categoryList, setCategories] = useState({
        loading: false,
        data: []
    })

    const fetchCategories = async () => {
        const response = await categories();
        setCategories({loading: false, data: response});
        return response;
    }

    useEffect(() => {
        setCategories({loading: true});
        fetchCategories();
    }, [setCategories]);

    return (
        <Layout>
            <div className="allBar">
                <div className="div">
                    <Link to={'/'}>
                    <img className="imgArrow"
                         src="https://hamdloko.uz/static/media/arrow-left.76c49801d78388a0b113fd68f307cb0a.svg"
                         alt=""/>
                    </Link>
                </div>

                <CategoryLists loading={categoryList.loading} data={categoryList.data} />
            </div>
        </Layout>
    );
};

const CategoryLists = ({loading, data}) => {
    return (
        <>
            {
                loading ?  <div className="loading-block">
                    <div className="loading"></div>
                </div> : data.map((category =>
                    <Link to={`/categories/${category.id}/products`} key={category.id} className="prewButton">
                        {category.name}
                    </Link>
                ))
            }
        </>
    );
}

export default Categories;