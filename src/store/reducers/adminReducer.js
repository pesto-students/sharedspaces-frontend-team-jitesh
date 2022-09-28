import {
    SET_ADMIN_LOADING, SET_ALL_BOOKING, SET_ALL_PROPERTY
} from "../types/adminTypes";

const initalState = {
    space: {}
};

const adminReducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_ADMIN_LOADING:
            return {
                ...state,
                isAdminLoading: action.payload,
            };
        case SET_ALL_PROPERTY:
            return {
                ...state,
                allProperties: action.payload,
            };
        case SET_ALL_BOOKING:
            return {
                ...state,
                allBookings: action.payload,
            };
        default:
            return state;
    }
};

export default adminReducer;
