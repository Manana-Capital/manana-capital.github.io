import {
    TOGGLE_TEXT,
    FUNDPERFORMANCE_LOAD_SUCC,
    SUBSCRIBE_EMAIL_UPDATE
} from '../actions';


const defaultState = {
    text: 'Hello World',
    textIsVisible: true,
    fundPerformanceDataLoaded: false,
    fundPerformanceData: [],
    subscribeEmail: {
        value: '',
        submitted: false
    }
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE_TEXT:
            return Object.assign({}, state, {
                fundPerformanceDataLoaded: !state.fundPerformanceDataLoaded
            });
        
        case FUNDPERFORMANCE_LOAD_SUCC:
            return Object.assign({}, state, {
                fundPerformanceDataLoaded: true,
                fundPerformanceData: action.data
            });
        
        case SUBSCRIBE_EMAIL_UPDATE:            
            return Object.assign({}, state, {
                subscribeEmail: Object.assign({}, state.subscribeEmail, {
                    value: action.value
                })
            });
        
        default:
            return state;
    }
}

export default reducer;