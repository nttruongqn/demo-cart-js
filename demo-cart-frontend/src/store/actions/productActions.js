import { getAllProducts } from "../../services/productServices";
import actionType from "./actionTypes";

// export const fetchAllProduct = () => async(dispatch) => {
//     const res = await fetch("/api/products");
//     dispatch({
//         type: FETCH_PRODUCTS,
//         payload: res.data
//     })
//}

export const fetchAllProduct = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllProducts();
      // console.log("check res action", res);
      dispatch({
        type: actionType.FETCH_PRODUCTS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
