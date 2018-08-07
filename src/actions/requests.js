import {
    FETCH_REQUEST_TITLE,
    SET_REQUESTS
} from './types';

import axios from 'axios';
import { ROOT_URL } from '../config';

export function changeSelectedRequest(title) {
    return {
        type: FETCH_REQUEST_TITLE,
        payload: title
    }
}

export function createNewRequest(userID, formData, success) {
    const token = localStorage.getItem("token");

    return function () {
        axios.post(`${ROOT_URL}/requests/new`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                authorization: token
            }
        })
            .then(response => {
                success();
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export function fetchRequests() {
    const token = localStorage.getItem("token");
    return function (dispatch) {
        axios.get(`${ROOT_URL}/requests`, {
            headers: { authorization: token }
        })
            .then(response => {
                dispatch({
                    type: SET_REQUESTS,
                    payload: response.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export function changeStatus({ _id, status }, success) {
    const token = localStorage.getItem("token");
    return function () {
        axios.post(`${ROOT_URL}/requests/update-status`, { _id, status }, {
            headers: { authorization: token }
        })
            .then(response => {
                console.log(response.data);
                success();
            })
            .catch(err => {
                console.log(err);
            })
    }
}