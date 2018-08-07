import { UPDATE_HEADER } from '../actions/types';

const INIT_STATE = {
    title: "",
    subtitle: "",
    hideBar: false
}

export default function (state = INIT_STATE, action) {
    switch (action.type) {
        case UPDATE_HEADER:
            const { title, subtitle, hideBar } = action.payload;
            return {
                ...state,
                title, 
                subtitle,
                hideBar
            }
        default: 
            return state;
    }
}