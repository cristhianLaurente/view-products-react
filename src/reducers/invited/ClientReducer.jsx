import { GET_USER, UPDATE_USER } from '../../types/ClientType';
import { Map as map } from 'immutable';

const initialState = map({
    user: {},
})

const Client = (state = initialState , action) => {
    switch (action.type) {
        case GET_USER :
            return state.set('user', action.payload.user)
        case UPDATE_USER:
            return state.set('user', action.payload.user)
        default:
            return state;
    }
}

export default Client;