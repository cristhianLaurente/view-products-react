import { Map as map } from 'immutable';
import { IS_LOGGED_CLIENT } from '../../types/LoggedClientType';

const initialState = map({
    isLoggedClient: false,
})

const isLoggedClient = (state = initialState , action) => {
    switch (action.type) {
        case IS_LOGGED_CLIENT :
            return state.set('isLoggedClient', true)
        default: 
            return state;
    }
}

export default isLoggedClient;