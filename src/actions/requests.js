import {
    FETCH_REQUEST_TITLE
} from './types';

export function changeSelectedRequest(title) {
    return {
        type: FETCH_REQUEST_TITLE,
        payload: title
    }
}