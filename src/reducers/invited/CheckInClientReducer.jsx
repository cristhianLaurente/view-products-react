import { Map as map } from 'immutable';
import { CHECKIN_CLIENT } from '../../types/CheckInClientType';

const initalState = map({
    checkin: false
})

const CheckInClient = (state = initalState , action) => {
    switch(action.type) {
        case CHECKIN_CLIENT: 
            return state;
        default:
            return state
    }
}

export default CheckInClient;