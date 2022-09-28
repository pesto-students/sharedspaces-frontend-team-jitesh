import Axios from "../../Axios";
import {
    SET_ADMIN_LOADING, SET_ALL_BOOKING, SET_ALL_PROPERTY
} from "../types/adminTypes";
import { toast } from 'react-toastify';

// const config = {
//   headers: {
//     : "zFLUigHPoTwMvKjLSm7YFaKpJX8M",
//   },
// };

// SET ADMIN LOGIN LOADING
export const setAdminLoading = (data) => (dispatch) => {
    dispatch({
        type: SET_ADMIN_LOADING,
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


export const addProperty = (data, loading, navigate) => async (dispatch) => {
    loading(true)
    try {
        const res = await Axios.post(`/property/add`, data)
        if (res.data.success) {
            toast.success(res.data.message);
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


export const addSpace = (data, loading, navigate) => async (dispatch) => {
    loading(true)
    try {
        const res = await Axios.post(`/space/add`, data)
        if (res.data.success) {
            toast.success(res.data.message);
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


export const getAllBooking = (data, loading) => async (dispatch) => {
    loading(true)
    try {
        const response = await Axios.post('/booking/getAll', data)

        if (response) {
            dispatch({
                type: SET_ALL_BOOKING,
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