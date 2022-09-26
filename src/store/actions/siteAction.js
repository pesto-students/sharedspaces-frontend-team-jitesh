import Axios from "../../Axios";
import {
  SET_ALL_PROPERTY,
  SET_LOGIN_LOADING, SET_PROPERTY, SET_USER_DETAIL,
} from "../types/siteTypes";
import { toast } from 'react-toastify';

// const config = {
//   headers: {
//     : "zFLUigHPoTwMvKjLSm7YFaKpJX8M",
//   },
// };

// SET LOGIN LOADING
export const setLoginLoading = (data) => (dispatch) => {
  dispatch({
    type: SET_LOGIN_LOADING,
    payload: data,
  });
};


export const onLogin = (data, loading, navigate) => (dispatch) => {
  loading(true)
  try {
    Axios.post('/user/login', data).then(res => {
      loading(false);
      if (res.data.success) {
        localStorage.setItem("ss_user", JSON.stringify(res.data.data));
        dispatch({
          type: SET_USER_DETAIL,
          payload: res.data.data
        })
        navigate()
        toast.success(res.data.message)
      } else {
        toast.error(res.data.message);
      }
    });
  } catch (error) {
    console.log("error", error.response);
    // toast.error(res.data.message);
    loading(false);
  }
};

export const onRegister = (data, loading, navigate) => (dispatch) => {
  loading(true)
  try {
    Axios.post('/user/signup', data).then(res => {
      loading(false);
      if (res.data.success) {
        localStorage.setItem("ss_user", JSON.stringify(res.data.data));
        dispatch({
          type: SET_USER_DETAIL,
          payload: res.data.data
        })
        navigate()
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    });
  } catch (error) {
    console.log("error", error.response);
    // toast.error(res.data.message);
    loading(false);
  }
};


// SET USER DETAILS
export const setUserDetail = (data) => (dispatch) => {
  dispatch({
    type: SET_USER_DETAIL,
    payload: data,
  });
};


export const getAllProperty = (data, loading) => async (dispatch) => {
  loading(true)
  try {
    const response = await Axios.post('/property/getAll', data)

    if (response) {
      dispatch({
        type: SET_ALL_PROPERTY,
        payload: response.data.data
      })
      loading(false)
    } else {
      loading(false)
    }
  } catch (error) {
    console.log("error", error.response);
    // toast.error(res.data.message);
  }
};


export const getProperty = (propertyId, loading) => async (dispatch) => {
  loading(true)
  try {
    const response = await Axios.get(`/property/${propertyId}`)

    if (response) {
      dispatch({
        type: SET_PROPERTY,
        payload: response.data.data
      })
      loading(false)
    } else {
      loading(false)
    }
  } catch (error) {
    console.log("error", error.response);
    // toast.error(res.data.message);
  }
};