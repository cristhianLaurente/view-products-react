import {  GET_PRODUCTS, SEARCH_PRODUCTS, CATEGORIE_PRODUCTS } from "../types/ProductsTypes";
import { url_backend } from "../environments/APIRest";
import axios from "axios";


function getProducts(products) {
    return {
        type:  GET_PRODUCTS,
        payload: {
            products
        }
    }
}

const searchProducts = (products) => {
    return {
        type: SEARCH_PRODUCTS,
        payload: {
            products
        }
    }
}

const getProductsByCategory = (products) => {
    return {
        type: CATEGORIE_PRODUCTS,
        payload: {
            products
        }
    }
}

export function getProductsAsync() {
    return async (dispatch) => {
        let response = await axios.get(`${url_backend}/apiCategoria/producto/`);
        if(response.status === 200 ) {
            console.log(response.data.results);
            dispatch(getProducts(response.data.results))
        }
    }
}


export function searchAsync(query) {
    return async (dispatch) => {
        let response = await axios.get(`${url_backend}/apiCategoria/producto/?search=${query}`);
        response.status === 200 && dispatch(searchProducts(response.data.results))
    }
}


export function getProductsByCategoryAsync(id) {
    console.log(id);
    return async (dispatch) => {
        let response = await axios.get(`${url_backend}/apiCategoria/categoria/${id}/`);
        console.log(response);
        response.status === 200 && dispatch(getProductsByCategory(response.data.results))
    }
}