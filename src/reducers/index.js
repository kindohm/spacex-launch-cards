const initialState = {
    launches: [],
    detail: null
};

export const setLaunches = launches => ({ type: "SET_LAUNCHES", payload: launches });
export const setDetail = launch => ({ type: "SET_DETAIL", payload: launch });

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LAUNCHES":
            return { ...state, launches: action.payload };
        case "SET_DETAIL":
            return { ...state, detail: action.payload };
        default:
            return state;
    }
};
