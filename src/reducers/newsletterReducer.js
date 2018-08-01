import {
    SET_NEWSLETTERS,
    FETCH_NEWSLETTER_ID
} from '../actions/types';

const INIT_STATE = {
    newsletters: [],
    requestedNewsletter: {}
}

export default function(state = INIT_STATE, action) {
    switch (action.type) {
        case SET_NEWSLETTERS:
            const newsletters = action.payload;
            return {
                ...state,
                newsletters
            };
        case FETCH_NEWSLETTER_ID:
            const newsletterID = action.payload;
            var requestedNewsletter = {};
            state.newsletters.map(newsletter => {
                if (newsletter._id == newsletterID) {
                    requestedNewsletter = newsletter;
                }
            });
            return {
                ...state,
                requestedNewsletter
            };
        default:
            return state;
    }
}