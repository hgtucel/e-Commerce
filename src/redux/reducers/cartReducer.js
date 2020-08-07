import * as actionTypes from '../actions/actionTypes';

function cartReducer(state={cartItems:[]}, action) {
    switch (action.type) {
        case actionTypes.CART_ADD_ITEM:
            const item = action.payload;
            const product = state.cartItems.find(x=>x.product === item.product);
            if(product){
                return {
                    cartItems: state.cartItems.map(x=>x.product === product.product ? item: x)
                }
            }
            return {cartItems: [...state.cartItems,item]};
        case actionTypes.CART_REMOVE_ITEM:
            return {
                cartItems: state.cartItems.filter(x=>x.product !== action.payload)
            }
        default:
            return state;
    }
}

export {cartReducer}