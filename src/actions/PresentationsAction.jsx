import { GET_PRESENTATIONS } from "../types/PresentationType"
import { url_backend } from "../environments/APIRest"

const getPresentations = (presentations) => {
    return {
        type: GET_PRESENTATIONS,
        payload: {
            presentations: presentations
        }
    }
}


export const getPresentationsAsync = (id) => {
    return async (dispatch) => {
        let objId = {
            id_prod: id
        }
        let requestOptions = {
            method: 'POST',
            body: JSON.stringify(objId),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }
        let response = await fetch(`${url_backend}/apiCategoria/producto/presentaciones/`, requestOptions)
        if(response.status === 200) {
            let res = await response.json();
            dispatch(getPresentations(res.results));
        } 
        if(response.status === 400) {
            let res = await response.json();
            console.log(res);
        } 
    }
}