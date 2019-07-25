import axios from 'axios'
import { axiosWithAuth } from '../axiosWithAuth';

export const RANDOM_USER = "RANDOM_USER";
export const RANDOM_SUCCESS = "RANDOM_USER";
export const RANDOM_FAIL = "RANDOM_USER";
//takes in 'creds' or 'credentials -- username and pass --, and sends it to the endpoint

export const random = dispatch =>{
    dispatch({ type: RANDOM_USER });
    return axios
        .get("https://randomuser.me/api/?results=4&inc=name,picture,email,registered")
        .then(res => {
            console.log(res)
            
            dispatch({ type: RANDOM_SUCCESS, payload: res.data.payload}) 
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: RANDOM_FAIL, payload: ''})
        })

}


    

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL;"
//takes in 'creds' or 'credentials -- username and pass --, and sends it to the endpoint
export const signUp = creds => dispatch => {
    dispatch({ type: SIGNUP_START });
    return axios
        .post('https://labstech2rentstaging.herokuapp.com/api/auth/register', creds)
        .then(res => {
            console.log(res)
            //it returns a token as a result and we are setting that token to local storage for now
            localStorage.setItem("token", res.data.payload);
            dispatch({ type: SIGNUP_SUCCESS, payload: res.data.payload}) /// set token as the payload
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: SIGNUP_FAIL, payload: ''})
        })

}

export const ADD_USER_START = "ADD_USER_START";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAIL = "ADD_USER_FAIL;"
//takes in 'creds' or 'credentials -- username and pass --, and sends it to the endpoint
export const addUser = creds => dispatch => {
    //console.log('hello from add user function')
    dispatch({ type: ADD_USER_START });
    return axios
        .post('https://labstech2rent.herokuapp.com//api/auth/register', creds)
        .then(res => {
            console.log(res)
           
            dispatch({ type: ADD_USER_SUCCESS, payload: res}) /// set token as the payload
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: ADD_USER_FAIL, payload: ''})
        })

}

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL;"
export const login = creds => dispatch => {
    //login takes credentials -- username and pass --
    dispatch({ type: LOGIN_START });
    return axios
        .post('https://labstech2rent.herokuapp.com/api/auth/login', creds)
        .then(res => {
            console.log(`${res}`)
            // token is received and set to local storage
            localStorage.setItem("token", res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data}) // token set to payload
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
 
    // token that is on payload is used and placed in the header of 'axiosWithAuth' -- this is what gives us access to data
    return axiosWithAuth()
        .get('https://labstech2rent.herokuapp.com/api/users')
        .then(res => {
            console.log(res)
            // if successful then set the data to the payload
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
