import * as actionTypes from '../actions/actionTypes';

function productListReducer(state={products:[]}, action) {
    switch (action.type) {
        case actionTypes.PRODUCT_LIST_REQUEST:
            return {loading: true, products:[]}
        case actionTypes.PRODUCT_LIST_SUCCESS:
            return {loading: false, products: action.payload}
        case actionTypes.PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}

function productDetailsReducer(state={product:{}}, action) {
    switch (action.type) {
        case actionTypes.PRODUCT_DETAILS_REQUEST:
            return {loading: true}
        case actionTypes.PRODUCT_DETAILS_SUCCESS:
            return {loading: false, product: action.payload}
        case actionTypes.PRODUCT_DETAILS_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}

function saveProductReducer(state={product:{}}, action) {
    switch (action.type) {
        case actionTypes.SAVE_PRODUCT_REQUEST:
            return {loading: true}
        case actionTypes.SAVE_PRODUCT_SUCCESS:
            return {loading: false, success: true, product: action.payload}
        case actionTypes.SAVE_PRODUCT_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}

function deleteProductReducer(state={product:{}}, action) {
    switch (action.type) {
        case actionTypes.DELETE_PRODUCT_REQUEST:
            return {loading: true}
        case actionTypes.DELETE_PRODUCT_SUCCESS:
            return {loading: false, success: true, product: action.payload}
        case actionTypes.DELETE_PRODUCT_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}

export {productListReducer, productDetailsReducer, saveProductReducer, deleteProductReducer}