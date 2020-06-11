import { IS_LOGGED_CLIENT, SIGN_OFF_CLIENT } from "../types/LoggedClientType"
import { url_backend } from "../environments/APIRest"
import { AuthService } from '../services/Auth';
import axios from 'axios';

const _sAuth = new AuthService()


const isLoggedClient = () => {
    return {
        type: IS_LOGGED_CLIENT,
    }
}

export const logout = () => {
    return {
        type: SIGN_OFF_CLIENT
    }
}


export function logoutClient () {
    return (dispatch) => {
        _sAuth.logoutClient()
        dispatch(logout())
    }
}


export  function signInClient(objClient) {
    return async (dispatch) => { 
        try {
            let response = await axios.post(`${url_backend}/users/login/`, objClient);
            let res = await response.data;
            console.log(_sAuth.token, 'lll');
            _sAuth.saveToken(res.acces_token)
            dispatch(isLoggedClient()) 
            return res.user           
        }catch (err) {
            throw err
        }
    }
}