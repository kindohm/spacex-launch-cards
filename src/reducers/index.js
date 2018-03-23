import * as _ from 'lodash';

const initialState = {
    launches: [],
    detail: null,
    detailIndex: null
};

export const setLaunches = launches => ({ type: 'SET_LAUNCHES', payload: launches });
export const setDetail = flightNumber => ({ type: 'SET_DETAIL', payload: flightNumber });
export const clearDetail = () => ({ type: 'CLEAR_DETAIL' });
export const nextIndex = () => ({ type: 'NEXT_INDEX' });
export const previousIndex = () => ({ type: 'PREVIOUS_INDEX' });

const actions = {
    'SET_LAUNCHES': (state, action) => {
        return { ...state, launches: action.payload };
    },
    'SET_DETAIL': (state, action) => {
        const newDetail = _.find(state.launches, launch => launch.flight_number === action.payload);
        const newIndex = _.indexOf(state.launches, newDetail);
        return {
            ...state,
            detail: newDetail,
            detailIndex: newIndex
        };
    },
    'NEXT_INDEX': (state) => {
        const currentIndex = state.detailIndex;
        const length = state.launches ? state.launches.length : 0;
        const nextIndex = length === 0 ? null
            : currentIndex < length - 2 ? currentIndex + 1 : 0;
        return {
            ...state,
            detail: state.detail ? state.launches[nextIndex] : null,
            detailIndex: nextIndex
        };
    },
    'PREVIOUS_INDEX': (state) => {
        const currentIndex = state.detailIndex;
        const length = state.launches ? state.launches.length : 0;
        const nextIndex = length === 0 ? null
            : currentIndex > 0 ? currentIndex - 1 : length - 1;
        return {
            ...state,
            detail: state.detail ? state.launches[nextIndex] : null,
            detailIndex: nextIndex
        };
    },
    'CLEAR_DETAIL': (state) => {
        return { ...state, detail: null, detailIndex: null };
    }
};

export const rootReducer = (state = initialState, action) => {
    
    if (actions[action.type]){
        return actions[action.type](state, action);
    }

    return state;
};
