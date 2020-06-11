import { Map as map } from 'immutable';
import { GET_CATEGORIES } from '../../types/CategoriesType';

const initialState = map({
    categories: []
})

const Categories = (state= initialState, action) => {
    switch(action.type) {
        case GET_CATEGORIES:
            return state.set('categories', action.payload.categories) ;
        default:
            return state;
    }
}

export default Categories;