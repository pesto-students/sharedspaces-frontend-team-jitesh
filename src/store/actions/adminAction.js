import Axios from "../../Axios";
import {
    SET_ADMIN_LOADING, SET_ALL_AMENITY, SET_ALL_BOOKING, SET_ALL_PROPERTY, SET_ALL_USER, SET_DASHBOARD_TOTALS
} from "../types/adminTypes";
import { toast } from 'react-toastify';


const getConfig = () => {
    const userDetail = JSON.parse(localStorage.getItem("ss_user"))
    return {
        headers: {
            Authorization: `Bearer ${userDetail?.token}`,
        },
    };
}

// SET ADMIN LOGIN LOADING
export const setAdminLoading = (data) => (dispatch) => {
    dispatch({
        type: SET_ADMIN_LOADING,
        payload: data,
    });
};

export const getDashboardTotals = (loading) => async (dispatch) => {
    loading(true)
    try {
        const response = await Axios.get('/common/dashboard/getAll', getConfig())

        if (response) {
            console.log(response)
            dispatch({
                type: SET_DASHBOARD_TOTALS,
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


export const getAllProperty = (data, loading) => async (dispatch) => {
    loading(true)
    try {
        const response = await Axios.post('/property/admin/getAll', data, getConfig())

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
        const res = await Axios.post(`/property/add`, data, getConfig())
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
        const res = await Axios.post(`/space/add`, data, getConfig())
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

export const getAllUser = (data, loading) => async (dispatch) => {
    loading(true)
    try {
        const response = await Axios.post('/user/getAll', data, getConfig())

        if (response) {
            dispatch({
                type: SET_ALL_USER,
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


export const getAllBooking = (data, loading) => async (dispatch) => {
    loading(true)
    try {
        const response = await Axios.post('/booking/admin/getAll', data, getConfig())

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


export const getAllAmenity = (data, loading) => async (dispatch) => {
    loading(true)
    try {
        const response = await Axios.post('/amenity/getAll', data, getConfig())

        if (response) {
            dispatch({
                type: SET_ALL_AMENITY,
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


export const addAmenity = (data, loading, navigate) => async (dispatch) => {
    loading(true)
    try {
        const res = await Axios.post(`/amenity/add`, data, getConfig())
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