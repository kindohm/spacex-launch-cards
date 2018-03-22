import * as _ from "lodash";

const initialState = {
    launches: [],
    detail: null
};

export const setLaunches = launches => ({ type: "SET_LAUNCHES", payload: launches });
export const setDetail = flightNumber => ({ type: "SET_DETAIL", payload: flightNumber });
export const clearDetail = () => ({type: "CLEAR_DETAIL" });

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LAUNCHES":
            return { ...state, launches: action.payload };
        case "SET_DETAIL":
            return { ...state, detail: _.find(state.launches, launch => launch.flight_number === action.payload) };
        case "CLEAR_DETAIL":
            return {...state, detail: null};
        default:
            return state;
    }
};
