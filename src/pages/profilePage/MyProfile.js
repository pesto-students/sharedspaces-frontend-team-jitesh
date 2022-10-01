import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import './myProfile.scss'
import Button from "../../components/button/Button";
import ProfileImageUpload from '../../components/profileImageUpload/ProfileImageUpload';



const MyProfile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [values, setValues] = useState({})
    const [loading, setLoading] = useState(false)
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const userDetail = useSelector(state => state.site.userDetail)

    useEffect(() => {
        if (userDetail) {
            setIsUserLoggedIn(true)
        }
    }, [userDetail, userDetail?.token, userDetail?.role])


    const uploadPath = (imagePath) => {
        setValues({
            ...values,
            propertyImage: imagePath
        })
    }

    const onSubmit = () => {
        // dispatch(onUpdateUserProfile)
    }

    return (

        <div>
            <div className="flex items-center justify-between">
                <text className="text-2xl font-bold">Profile</text>
                <Button buttonType="primary-outline" className="ml-2">Update Profile</Button>
            </div>
            <div className="flex items-center shadow-new mt-5 p-10 rounded">
                <ProfileImageUpload
                    uploadPath={uploadPath}
                    uploadType="profile"
                    className={"rounded-full"}
                    placeHolderImage={userDetail?.profileImage ? userDetail?.profileImage : "/assets/images/blank-profile.png"}
                />
                <div className="ml-20">
                    <div className="mb-5">
                        <label className='font-bold'>Name</label>
                        <p>{userDetail?.name}</p>
                    </div>

                    <div className="mb-5">
                        <label className='font-bold'>Email</label>
                        <p>{userDetail?.email}</p>
                    </div>

                    <div className="mb-5">
                        <label className='font-bold'>Phone Number</label>
                        <p>{userDetail?.phoneNumber}</p>
                    </div>
                    <div className="mb-2">
                        <label className='font-bold'>Password</label>
                    </div>
                    <Button buttonType="primary-outline">Change password</Button>
                </div>

            </div>
        </div>

    )
}
export default MyProfile