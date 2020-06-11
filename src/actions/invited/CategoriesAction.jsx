import { GET_CATEGORIES } from "../../types/CategoriesType"
import axios from "axios"
import { url_backend } from "../../environments/APIRest"

const getCategories = (categories) => {
    return {
        type: GET_CATEGORIES,
        payload: {
            categories
        }
    }
}


export const getCategoriesAsync = () => {
    return async (dispatch) => {
        let response  = await axios.get(`${url_backend}/apiCategoria/categoria/`)
        if(response.status === 200) {
            dispatch(getCategories(response.data.results))
        }
    }
}