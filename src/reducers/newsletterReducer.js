import {
    SET_NEWSLETTERS
} from '../actions/types';

const INIT_STATE = {
    newsletters: []
}

export default function(state = INIT_STATE, action) {
    switch (action.type) {
        case SET_NEWSLETTERS:
            const newsletters = action.payload;
            return {
                ...state,
                newsletters
            }
        default:
            return state;
    }
}