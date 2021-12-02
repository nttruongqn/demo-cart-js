import axios from "../axios";


const getAllProducts = () => {
    return axios.get(`/api/getAllProduct`);
}

const getAllSize = () => {
    return axios.get(`/api/getAllSize`)
}

const getAllProductByPamram = (data) => {
    return axios.get(`/api/getAllProductByParam?size=${data.size}&sort=${data.sort}`)
}



export {
    getAllProducts,
    getAllSize,
    getAllProductByPamram
}