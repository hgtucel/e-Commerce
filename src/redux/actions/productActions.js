import * as actionTypes from "./actionTypes";

const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.PRODUCT_LIST_REQUEST });
    const response = await fetch("/api/products");
    const data = await response.json();
    dispatch({
      type: actionTypes.PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
      dispatch({type: actionTypes.PRODUCT_LIST_FAIL, payload: error.message})
  }
};


const detailsProduct = (productId) => async (dispatch) => {
  try {
    dispatch({type: actionTypes.PRODUCT_DETAILS_REQUEST, payload: productId});
    const response = await fetch("/api/products/" + productId);
    const data = await response.json();
    dispatch({
      type: actionTypes.PRODUCT_DETAILS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.PRODUCT_DETAILS_FAIL,
      payload: error.message
    })
  }
}

export {listProducts, detailsProduct}