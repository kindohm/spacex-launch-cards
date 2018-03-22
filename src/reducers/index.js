import * as _ from "lodash";

const initialState = {
    launches: [],
    detail: null,
    detailIndex: null
};

export const setLaunches = launches => ({ type: "SET_LAUNCHES", payload: launches });
export const setDetail = flightNumber => ({ type: "SET_DETAIL", payload: flightNumber });
export const clearDetail = () => ({ type: "CLEAR_DETAIL" });
export const nextIndex = () => ({ type: "NEXT_INDEX" });
export const previousIndex = () => ({ type: "PREVIOUS_INDEX" });

export const rootReducer = (state = initialState, action) => {
    let currentIndex, length, nextIndex;
    switch (action.type) {
        case "SET_LAUNCHES":
            return { ...state, launches: action.payload };
        case "SET_DETAIL":
            const newDetail = _.find(state.launches, launch => launch.flight_number === action.payload);
            const newIndex = _.indexOf(state.launches, newDetail);
            console.log('i', newIndex);
            return {
                ...state,
                detail: newDetail,
                detailIndex: newIndex
            };
        case "NEXT_INDEX":
            currentIndex = state.detailIndex;
            length = state.launches ? state.launches.length : 0;
            nextIndex = length === 0 ? null
                : currentIndex < length - 2 ? currentIndex + 1 : 0;
            return {
                ...state,
                detail: state.launches[nextIndex],
                detailIndex: nextIndex
            };
        case "PREVIOUS_INDEX":
            currentIndex = state.detailIndex;
            length = state.launches ? state.launches.length : 0;
            nextIndex = length === 0 ? null
                : currentIndex > 0 ? currentIndex - 1 : length - 1;
            return {
                ...state,
                detail: state.launches[nextIndex],
                detailIndex: nextIndex
            };

        case "CLEAR_DETAIL":
            return { ...state, detail: null, detailIndex: null };
        default:
            return state;
    }
};
