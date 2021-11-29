import axios from "../axios";


const getAllProducts = () => {
    return axios.get(`/api/getAllProduct`);
}



export {
    getAllProducts
}