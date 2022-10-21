import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import './changePassword.scss'
import Button from "../../components/button/Button";
import Input from '../../components/input/Input'
import { toast } from 'react-toastify';
import { onChangePassword } from '../../store/actions/siteAction';






const ChangePassword = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [values, setValues] = useState({})
    const [visible, setVisible] = useState(false)
    const [loading, setLoading] = useState(false)
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const [updateState, setUpdateState] = useState(false)

    const userDetail = useSelector(state => state.site.userDetail)



    // useEffect(() => {
    //     if (userDetail?.token) {
    //         //navigate("/")
    //     }
    // }, [userDetail])

    const onInputChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };
    const onSubmit = e => {
        e.preventDefault();

        const {newPassword, cPassword, currentPassword } = values;

        if (newPassword.length <= 5) {
            toast.error("Password must be at least 6 characters.");
            return false;
        }

        if (newPassword !== cPassword) {
            toast.error("Password should be same!");
            return false;
        }

        const data = {
            currentPassword,
            newPassword
        };

        dispatch(
            onChangePassword(data,
                (value) => setLoading(value),
                () => setValues({newPassword:"", cPassword:"", currentPassword:""})
                
            )
        )
        
    };


    return (

        <div>
            <div className="flex justify-between">
                <text className="text-2xl font-bold">Change Password</text>
            </div>
            <div className="flex items-center mt-5 rounded">
                <div className="ml-0 w-2/5">
                    <form onSubmit={onSubmit}>
                        <Input
                            type="password"
                            label={"Current Password"}
                            name="currentPassword"
                            value={values.currentPassword}
                            onChange={onInputChange}
                            placeholder='Enter Current Password'
                            required
                        />
                        <Input
                            type="password"
                            label={"New Password"}
                            name="newPassword"
                            value={values.newPassword}
                            onChange={onInputChange}
                            placeholder='Enter New Password'
                            required

                        />
                        <Input
                            type="password"
                            label={"Confirm New Password"}
                            name="cPassword"
                            value={values.cPassword}
                            onChange={onInputChange}
                            placeholder='Confirm New Password'
                            required
                        />
                        <div className="flex">
                            <Button
                                type='submit'
                                buttonType={"dark"}
                                
                                loading={loading}
                                className={`w-full`}
                            >
                                Save
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default ChangePassword