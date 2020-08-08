import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {productListReducer, productDetailsReducer, saveProductReducer, deleteProductReducer} from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducer'
import {signInReducer, registerReducer} from './reducers/userReducer'
import Cookie from 'js-cookie'

const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = {userSignIn: {userInfo}};
const reducer = combineReducers({
    productListReducer,
    productDetailsReducer,
    saveProductReducer,
    deleteProductReducer,
    cartReducer,
    signInReducer,
    registerReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));
export default store;