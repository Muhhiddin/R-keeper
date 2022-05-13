import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import Layout from "../Layout";
import {getProductsByCategory} from "../Api";
import {incrementProductCnt} from "../store/basketSlice";
import {useDispatch} from "react-redux";

const Products = () => {
    let {categoryId} = useParams();

    const [products, setProducts] = useState({
        loading: false,
        data: []
    })

    const fetchCategories = async () => {
        const response = await getProductsByCategory(categoryId);
        setProducts({loading: false, data: response.data});
        return response;
    }

    useEffect(() => {
        setProducts({loading: true});
        fetchCategories();
    }, [setProducts]);

    return (
        <Layout>
            <div className="allBar">
                <Link to={'/categories'} className='d-content'>
                    <div className="div">
                        <div className="imgArrowNext"></div>
                    </div>
                </Link>

                <ProductLists loading={products.loading} data={products.data}/>
            </div>
        </Layout>
    );
};

const ProductLists = ({loading, data}) => {

    const dispatch = useDispatch();

    const addToBasket = (data) => {
        dispatch(incrementProductCnt({
            id: data.id,
            name: data.name,
            price: data.price,
        }));
    }

    return (
        <>
            {
                loading ? <div className="loading-block">
                    <div className="loading"></div>
                </div> : data.map((product =>
                        <div key={product.id} className="div" onClick={() => addToBasket(product)}>
                            {product.name}
                            <span>{product.price} sum</span>
                        </div>
                ))
            }
        </>
    );
}

export default Products;