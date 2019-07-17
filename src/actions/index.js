import axios from 'axios'
import { axiosWithAuth } from '../axiosWithAuth';

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL;"
export const signUp = creds => dispatch => {
    dispatch({ type: SIGNUP_START });
    return axios
        .post('http://labstech2rentstaging.herokuapp.com/api/auth/register', creds)
        .then(res => {
            console.log(res)
            localStorage.setItem("token", res.data.payload);
            dispatch({ type: SIGNUP_SUCCESS, payload: res.data.payload})
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: SIGNUP_FAIL, payload: ''})
        })

}

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL;"
export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
        .post('http://labstech2rentstaging.herokuapp.com/api/auth/login', creds)
        .then(res => {
            console.log(`${res}`)
            localStorage.setItem("token", res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: LOGIN_FAIL, payload: ''})
        })

}

export const SUBMIT_START = "SUBMIT_START"
export const SUBMIT_SUCCESS = "SUBMIT_SUCCESS"
export const SUBMIT_FAIL = "SUBMIT_FAIL"
export const getData = () => dispatch => {
    dispatch({ type: SUBMIT_START });
    // const token = localStorage.getItem('token')
    // const config = {
    //     headers: {
    //         Authorization: token,
    //     }
    // }
    return axiosWithAuth()
        .get('http://labstech2rentstaging.herokuapp.com/api/users')
        .then(res => {
            console.log(res)
            
            dispatch({ type: SUBMIT_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: SUBMIT_FAIL, payload: err})
        })

}

export const LOGOUT = "LOGOUT"
export const logOut = () => {
    return {
        type: LOGOUT
        
    }
}

export const RESET = "RESET"
export const reset = () => {
    return {
        type: RESET
        
    }
}
