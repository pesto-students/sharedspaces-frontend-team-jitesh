import Axios from "../../Axios";
import {
    SET_ADMIN_LOADING
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



export const addProperty = (data, loading) => (dispatch) => {
    loading(true)
    try {
        Axios.post(`/property/add`, data).then(res => {
            loading(false)
        }).catch(err => {
            loading(false)
            console.log(err)
        })
    } catch (error) {
        console.log("error", error.response);
        loading(false)
        // toast.error(res.data.message);
    }
};


