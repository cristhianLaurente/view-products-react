import { Map as map } from 'immutable';
import {  GET_PRODUCTS, SEARCH_PRODUCTS, CATEGORIE_PRODUCTS } from '../../types/ProductsTypes';

const initialState = map({
    products: [],
})

const Products = (state = initialState, action) => {
    switch(action.type) {
        case  GET_PRODUCTS:
            return state.set('products', action.payload.products);
        case SEARCH_PRODUCTS:
            return state.set('products', action.payload.products);
        case CATEGORIE_PRODUCTS:
            return state.set('products', action.payload.products)
        default: 
            return state;
    }
}

export default Products;