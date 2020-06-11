import { IS_LOGGED, SIGN_OFF } from "../types/LoggedType";
import { url_backend } from "../environments/APIRest";

let token;

const isLogged = (res) => {
    return {
        type: IS_LOGGED,
    }
}

const logout = () => {
    return {
        type: SIGN_OFF,
    }
}



const loadToken = () => {
    if(localStorage.getItem('token')) {
        token = localStorage.getItem('token')
    }
}
loadToken();

const saveToken = (tokenUser) => {
    console.log(tokenUser);
    token = tokenUser;
    localStorage.setItem('token', token)
}



export function isLoggedSuccess () {
        try {
            if(token === undefined) {
                console.log(token, 'aqui');
                return false
            }
            else {
                return true
            }
        } catch(err) {
            return false
        }
}

export function logoutUser() {
    return (dispatch) => {
        localStorage.removeItem('token');
        token = null;
        dispatch(logout())
    }
} 


export function signIn(objUser) {
    return (dispatch) => {
        let requestOptions = {
            method: 'POST',
            body: JSON.stringify(objUser),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }
        try {
            fetch(`${url_backend}/users/loginSuper/`, requestOptions )
                .then(res => res.json())
                .then(response => {
                    saveToken(response.acces_token)
                    dispatch(isLogged())
                })
                .catch(err =>{
                    console.log(err, 'error')
                })
        } catch(err) {
            console.log(err);
        }
    }
}