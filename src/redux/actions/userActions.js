import * as actionTypes from "./actionTypes";
import Cookie from 'js-cookie'

const signIn = (email,password) => async (dispatch) => {
    try {
        dispatch({type: actionTypes.USER_SIGIN_REQUEST, payload: {email,password}});
        const response = await fetch("/api/users/signin",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({email,password})
        });
        var data = await response.json();
        dispatch({type: actionTypes.USER_SIGIN_SUCCESS, payload: data});
        Cookie.set('userInfo',JSON.stringify(data));
    } catch (error) {
        dispatch({type: actionTypes.USER_SIGIN_FAIL, payload: error.message});
    }

}


const register = (name,email,password) => async (dispatch) => {

    try {
        
        dispatch({type: actionTypes.USER_REGISTER_REQUEST, payload:{name,email,password}});
        const response = await fetch("/api/users/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({name,email,password})
        });
        var data = await response.json();
        dispatch({type: actionTypes.USER_REGISTER_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: actionTypes.USER_REGISTER_FAIL, payload: error.message})
    }

}

export {signIn, register}