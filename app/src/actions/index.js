import { fetchSharePricePerDay } from '../services';

export const TOGGLE_TEXT = 'TOGGLE_TEXT';
export const toggleTextVisibility = () => ({
    type: TOGGLE_TEXT
});

export const FUNDPERFORMANCE_LOAD_START = 'FUNDPERFORMANCE_LOAD_START';
export const requestFundPerformance = () => ({
    type: FUNDPERFORMANCE_LOAD_START
});

export const FUNDPERFORMANCE_LOAD_SUCC = 'FUNDPERFORMANCE_LOAD_SUCC';
export const receiveFundPerformance = (shares) => ({
    type: FUNDPERFORMANCE_LOAD_SUCC,
    data: shares
});

export const fetchFundPerformance = () => {
    return function (dispatch) {
        // Inform that the API is starting
        dispatch(requestFundPerformance());

        return fetchSharePricePerDay()
            .then((shares) => {
                dispatch(receiveFundPerformance(shares));
            });
    }
};

export const SUBSCRIBE_EMAIL_UPDATE = 'SUBSCRIBE_EMAIL_UPDATE';
export const updateSubscribeEmail = (value) => ({
    type: SUBSCRIBE_EMAIL_UPDATE,
    value
});