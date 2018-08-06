import {
    FETCH_REQUEST_TITLE,
    SET_REQUESTS,
    PENDING
} from '../actions/types';

const INIT_STATE = {
    requests: [],
    selectedRequestType: PENDING
}

export default function(state = INIT_STATE, action) {
    switch (action.type) {
        case FETCH_REQUEST_TITLE:
            const title = action.payload;
            return {
                ...state,
                selectedRequestType: title
            }
        case SET_REQUESTS:
            return {
                ...state,
                requests: action.payload
            }
        default:
            return state;
    }
}