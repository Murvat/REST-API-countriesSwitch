import { CLEAR_DETAILS, SET_COUNTRY, SET_ERROR, SET_LOADING, SET_NEIGHBORS } from "./details-actions";

const initialState = {
    currentCountry: '',
    status: 'idle',
    error: null,
    neighbours:[]
};


export const detailsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                error: null,
                status: 'loading'
            };
        case SET_ERROR:
            return {
                ...state,
                error: payload,
                status: 'rejected'
            };
        case SET_COUNTRY:
            return {
                ...state,
                currentCountry:payload,
                error: null,
                status: 'received'
            };
                case SET_NEIGHBORS:
            return {
                ...state,
                neighbours:payload
               
            };

        case CLEAR_DETAILS:
            return initialState;


            
    
        default:
            return state;
    }
}