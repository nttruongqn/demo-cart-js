import actionTypes from "../actions/actionTypes";

const initState = {
  productRedux: [],
};

export const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      // console.log("check p by redux:",action)
      state.productRedux = action.payload;
      return {
        ...state,
      };
    default:
      return state;
  }
};
