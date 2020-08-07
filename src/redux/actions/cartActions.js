import * as actionTypes from "./actionTypes";

const addToCart = (productId, qty) => async (dispatch) => {

    try {
        const response = await fetch(`/api/products/${productId}`);
        const data = await response.json();
        dispatch({
            type: actionTypes.CART_ADD_ITEM,
            payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty: qty
            }
        })
    } catch (error) {
        
    }
}

const removeFromCart = (productId) => async(dispatch) => {
    dispatch({type: actionTypes.CART_REMOVE_ITEM, payload: productId});
}

export {addToCart, removeFromCart}