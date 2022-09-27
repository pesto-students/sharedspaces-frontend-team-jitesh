import {
    SET_ADMIN_LOADING
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

        default:
            return state;
    }
};

export default adminReducer;
