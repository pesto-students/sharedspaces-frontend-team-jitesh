import {
    SET_ADMIN_LOADING,SET_BOOKING_DETAILS, SET_ALL_AMENITY, SET_ALL_BOOKING, SET_ALL_PROPERTY, SET_ALL_USER, SET_DASHBOARD_TOTALS
} from "../types/adminTypes";

const initalState = {
};

const adminReducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_ADMIN_LOADING:
            return {
                ...state,
                isAdminLoading: action.payload,

            };
        case SET_DASHBOARD_TOTALS:
            return {
                ...state,
                dashboardTotals: action.payload,
            };
        case SET_ALL_USER:
            return {
                ...state,
                allUsers: action.payload,
            };
        case SET_ALL_PROPERTY:
            return {
                ...state,
                allProperties: action.payload,
            };
        case SET_ALL_BOOKING:
            return {
                ...state,
                allBookings: action.payload.reverse(),
            };
        case SET_BOOKING_DETAILS:
            return {
                ...state,
                bookingDetails: action.payload,
            };
            
        case SET_ALL_AMENITY:
            return {
                ...state,
                allAmenities: action.payload,
            };
        default:
            return state;
    }
};

export default adminReducer;
