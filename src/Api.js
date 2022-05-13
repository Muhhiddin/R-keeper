import axios from "axios";

const API_URL = 'https://hamd.loko.uz/api';
//

export const apiLogin = async ({login, password}) => {
    const response = await axios.post(`${API_URL}/operator/sign-in`, {
        login, password
    });
    return response.data;
}

const categories = async (type = 'product') => {
    const response = await axios.get(`${API_URL}/operator/category?type=${type}`);
    return response.data.data;
}

export const getProductsByCategory = async (categoryId) => {
    const response = await axios.get(`${API_URL}/operator/product/?category_id=${categoryId}`);
    return response.data;
}

export const callApi = async () => {
    const response = await axios.get(`${API_URL}/operator/last-calls`);
    return response.data;
}



export default categories;