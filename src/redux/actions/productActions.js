import * as actionTypes from "./actionTypes";
import { act } from "react-dom/test-utils";

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

const saveProduct = (product) => async (dispatch, getStateToken) => {
  try {
    dispatch({type: actionTypes.SAVE_PRODUCT_REQUEST,payload: product});
    const {userSignin: {userInfo}} = getStateToken();
    if(!product._id){
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {'Authorization' : 'Bearer ' + userInfo.token},
        body: JSON.stringify(product)
      });
      var data = await response.json();
      dispatch({type: actionTypes.SAVE_PRODUCT_SUCCESS, payload: data})
    }else{
      const response = await fetch("/api/products", {
        method: "PUT",
        headers: {'Authorization' : 'Bearer ' + userInfo.token},
        body: JSON.stringify(product)
      });
      var data = await response.json();
      dispatch({type: actionTypes.SAVE_PRODUCT_SUCCESS, payload: data})
    }
  } catch (error) {
    dispatch({type: actionTypes.SAVE_PRODUCT_FAIL, payload: error.message});
  }
}

const deleteProduct = (productId) => async (dispatch, getStateToken) => {
  try {
    dispatch({type: actionTypes.DELETE_PRODUCT_REQUEST, payload: productId});
    const {userSignin: {userInfo}} = getStateToken();
    const response = await fetch("/api/products" + productId, {
      method: "DELETE",
      headers: {"Authorization" : "Bearer " + userInfo.token},
    });
    var data = await response.json();
    dispatch({type: actionTypes.DELETE_PRODUCT_SUCCESS, payload: data});
  } catch (error) {
    dispatch({type: actionTypes.DELETE_PRODUCT_FAIL, payload: error.message});
  }
}

export {listProducts, detailsProduct, saveProduct, deleteProduct}