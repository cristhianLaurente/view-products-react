import { GET_USER, UPDATE_USER } from "../../types/ClientType"
import axios from "axios"
import { url_backend } from "../../environments/APIRest"


const getUser = (user) => {
    return {
        type: GET_USER,
        payload: {
            user
        }
    }
}

export const updateUser = (user) => {
    return {
        type: UPDATE_USER,
        payload: {
            user
        }
    }
}




export const getUserAsync = (token) => {
    return async (dispatch) => {
        try {
            
            let config = {
                headers: {
                    Authorization: 'Token ' + token,
                },
            }   
            let response = await axios.get(`${url_backend}/users/datos/`, config);
            if(response.status === 200) {
                dispatch(getUser(response.data))
                return response.data
            }
        } catch(err) {
            throw err;
        }
    }
}

export const updateUserAsync = (user, token) => {
    return async (dispatch) => {
        console.log(user);
        try {
            let config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Token ' + token,
                },
            } 
            let response = await axios.put(`${url_backend}/users/actualiza/`, user ,config)
            if(response.status === 200) {
                dispatch(updateUser(response.data))
                return response
            }
            if(response.status === 400) {
                console.log(response);
            }
        } catch(err) {
            console.log(err);
            throw err;
        }
    }
}