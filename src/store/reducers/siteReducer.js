import {
  SET_ALL_PROPERTY,
  SET_ALL_SPACE,
  SET_LOGIN_LOADING, SET_PROPERTY, SET_SPACE, SET_USER_DETAIL,
} from "../types/siteTypes";

const initalState = {
  property: {},
  space: {}
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
    case SET_PROPERTY:
      return {
        ...state,
        property: action.payload,
      };
    case SET_ALL_SPACE:
      return {
        ...state,
        allSpace: action.payload,
      };
    case SET_SPACE:
      return {
        ...state,
        space: action.payload,
      };
    default:
      return state;
  }
};

export default siteReducer;
