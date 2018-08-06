import {
    FETCH_REQUEST_TITLE,
    SET_REQUESTS
} from '../actions/types';

const INIT_STATE = {
    requests: [],
    selectedRequests: "Pending"
}

export default function(state = INIT_STATE, action) {
    switch (action.type) {
        case FETCH_REQUEST_TITLE:
            const title = action.payload;
            return {
                ...state,
                selectedRequests: title
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