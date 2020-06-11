import { IS_LOGGED, SIGN_OFF } from "../../types/LoggedType";
import { Map as map } from 'immutable';

const initialState = map({
    isLogged: false,
})


const isLogged = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOGGED :
            return state.set('isLogged', true);
        case SIGN_OFF:
            return state.set('islogged', false)
        default : 
            return state;
    }
}

export default isLogged;