import { CHECKIN_CLIENT } from "../types/CheckInClientType";
import { url_backend } from "../environments/APIRest";
import axios from 'axios';


export function checkinClient (value) {
    return {
        type: CHECKIN_CLIENT,
        payload: {
            checkin: value
        }
    }
}

export  function checkinClientAsync (userData) {
    return async (dispatch) => {
        let requestOptions = {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }  
        try {

            let response = await fetch(`${url_backend}/users/signup/`, requestOptions);

            if(response.status === 201) {
                let res = await response.json();

                dispatch(checkinClient(true))
                console.log(res);
            }
            if(response.status === 400) {
                let res = await response.json();
                
                dispatch(checkinClient(false))
                console.log(res);
            }
                              
        }catch (err) {
            throw err
        }
    }
}