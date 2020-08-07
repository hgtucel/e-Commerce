import * as actionTypes from '../actions/actionTypes';

function signInReducer(state={},action) {
    switch (action.type) {
        case actionTypes.USER_SIGIN_REQUEST:
            return {loading: true}
        case actionTypes.USER_SIGIN_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case actionTypes.USER_SIGIN_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}

function registerReducer(state={},action) {
    switch (action.type) {
        case actionTypes.USER_REGISTER_REQUEST:
            return {loading: true}
        case actionTypes.USER_REGISTER_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case actionTypes.USER_SIGIN_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}

export {signInReducer, registerReducer}