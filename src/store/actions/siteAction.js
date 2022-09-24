import Axios from "../../Axios";
import {
  SET_LOGIN_LOADING, SET_USER_DETAIL,
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
    Axios.post('/users/login', data).then(res => {
      loading(false);
      if (res.data.status) {
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
    Axios.post('/users/signup', data).then(res => {
      loading(false);
      if (res.data.status) {
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


// SET LOGIN LOADING
export const setUserDetail = (data) => (dispatch) => {
  dispatch({
    type: SET_USER_DETAIL,
    payload: data,
  });
};