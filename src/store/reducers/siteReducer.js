import {
  SET_ALL_PROPERTY,
  SET_LOGIN_LOADING, SET_USER_DETAIL,
} from "../types/siteTypes";

const initalState = {
};

const siteReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_LOGIN_LOADING:
      return {
        ...state,
        isLoginLoading: action.payload,
      };
    case SET_USER_DETAIL:
      return {
        ...state,
        userDetail: action.payload,
      };
    case SET_ALL_PROPERTY:
      return {
        ...state,
        allProperties: action.payload,
      };
    default:
      return state;
  }
};

export default siteReducer;
