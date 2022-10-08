import Axios from "../../Axios";
import {
  SET_ALL_PROPERTY,
  SET_ALL_SPACE,
  SET_LOGIN_LOADING,
  SET_MY_BOOKING,
  SET_PROPERTY,
  SET_SPACE,
  SET_USER_DETAIL,
} from "../types/siteTypes";
import { toast } from 'react-toastify';


const getConfig = () => {
  const userDetail = JSON.parse(localStorage.getItem("ss_user"))
  return {
    headers: {
      Authorization: `Bearer ${userDetail?.token}`,
    },
  };
}


export const getUserId = () => {
  if (localStorage.getItem("ss_user")) {
    const userDetail = JSON.parse(localStorage.getItem("ss_user"))
    return userDetail?._id
  } else {
    return false
  }
}



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


export const getProperty = (data, loading) => async (dispatch) => {
  loading(true)
  try {
    const response = await Axios.post(`/property/getOne`, data, getConfig())

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


export const getAllSpace = (data, loading) => async (dispatch) => {
  loading(true)
  try {
    const response = await Axios.post('/space/getAll', data)

    if (response) {
      dispatch({
        type: SET_ALL_SPACE,
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


export const getSpace = (spaceId, loading) => async (dispatch) => {
  loading(true)
  try {
    const response = await Axios.get(`/space/${spaceId}`)

    if (response) {
      dispatch({
        type: SET_SPACE,
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


export const addBooking = (data, loading, completed) => async (dispatch) => {
  loading(true)
  try {
    const res = await Axios.post(`/booking/add`, data, getConfig())
    if (res.data.success) {
      toast.success(res.data.message);
      loading(false)
      completed(true)
    } else {
      toast.error(res.data.message);
      loading(false)
    }

  } catch (error) {
    console.log("error", error.response);
    loading(false)
    // toast.error(res.data.message);
  }
};


export const getMyBookings = (data, loading) => async (dispatch) => {
  loading(true)
  try {
    const response = await Axios.post('/booking/user/getAll', data, getConfig())

    if (response) {
      dispatch({
        type: SET_MY_BOOKING,
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


export const onUpdateUserProfile = (userId, data, loading, navigate) => async (dispatch) => {
  loading(true)
  try {
    const res = await Axios.put(`/user/updateUserProfile/${userId}`, data, getConfig())
    if (res.data.success) {
      toast.success(res.data.message);


      const userDetail = JSON.parse(localStorage.getItem('ss_user'))
      const newUserDetail = {
        ...res.data.data,
        token: userDetail.token
      }

      // Setting up data in localstorage and redux
      localStorage.setItem("ss_user", JSON.stringify(newUserDetail))
      dispatch({
        type: SET_USER_DETAIL,
        payload: newUserDetail,
      });

      loading(false)
      navigate()
    } else {
      toast.error(res.data.message);
      loading(false)
    }

  } catch (error) {
    console.log("error", error.response);
    loading(false)
    // toast.error(res.data.message);
  }
};



export const onLikedProperty = (propertyId, getAllProperty, loading) => async (dispatch) => {
  loading(true)
  try {
    const response = await Axios.get(`/user/liked/${propertyId}`, getConfig())

    if (response) {
      getAllProperty()
    } else {
      loading(false)
    }
  } catch (error) {
    console.log("error", error.response);
    // toast.error(res.data.message);
  }
};

export const onUnlikedProperty = (propertyId, getAllProperty, loading) => async (dispatch) => {
  loading(true)
  try {
    const response = await Axios.get(`/user/unliked/${propertyId}`, getConfig())

    if (response) {
      getAllProperty()
    } else {
      loading(false)
    }
  } catch (error) {
    console.log("error", error.response);
    // toast.error(res.data.message);
  }
};

