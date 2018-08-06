import {
    FETCH_REQUEST_TITLE
} from './types';

import axios from 'axios';
import { ROOT_URL } from '../config';

export function changeSelectedRequest(title) {
    return {
        type: FETCH_REQUEST_TITLE,
        payload: title
    }
}

export function createNewRequest(userID, newRequest, success) {
    console.log("token:", localStorage.getItem("token"));
    console.log("uID:", userID);

    // return function() {
    //     axios.post(`${ROOT_URL}/requests/new`, newRequest)
    //         then(response => {
    //             console.log(response.data);
    //             success();
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }
}