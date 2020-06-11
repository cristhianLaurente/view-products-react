import { Map as map } from 'immutable';
import { GET_PRESENTATIONS } from '../../types/PresentationType';

const initialState = map ({
    presentations: [],
})

const Presentations = (state = initialState, action) => {
    switch(action.type) {
        case GET_PRESENTATIONS : 
            return state.set('presentations', action.payload.presentations)
        default: 
            return state;
    }
}

export default Presentations;