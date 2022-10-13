import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './myProfile.scss'
import Button from "../../components/button/Button";
import ProfileImageUpload from '../../components/profileImageUpload/ProfileImageUpload';
import Input from '../../components/input/Input'
import { onUpdateUserProfile } from '../../store/actions/siteAction';



const MyProfile = () => {
    const dispatch = useDispatch()
    const [values, setValues] = useState({})
    const [loading, setLoading] = useState(false)
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const [updateState, setUpdateState] = useState(false)

    const userDetail = useSelector(state => state.site.userDetail)

    useEffect(() => {
        if (userDetail) {
            setIsUserLoggedIn(true)
            setValues(
                {
                    name: userDetail.name,
                    email: userDetail.email,
                    phoneNumber: userDetail.phoneNumber
                }
            )
        }
    }, [userDetail, userDetail?.token, userDetail?.role])


    const uploadPath = (imagePath) => {
        setValues({
            ...values,
            profileImage: imagePath
        })
    }

    const onInputChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault()

        const data = {
            ...values
        }
        dispatch(
            onUpdateUserProfile(userDetail._id, data,
                (value) => setLoading(value),
                () => setUpdateState(false)
            )
        )
    }

    return (

        <div>
            <div className="flex justify-between">
                <text className="text-2xl font-bold">My Profile</text>
                <Button buttonType="primary" className="ml-2" onClick={() => setUpdateState(!updateState)}>Update Profile</Button>
            </div>
            <div className="flex items-center shadow-new mt-5 p-10 rounded fade-in-bottom">
                <ProfileImageUpload
                    uploadPath={uploadPath}
                    uploadType="profile"
                    className={"rounded-full"}
                    placeHolderImage={userDetail?.profileImage ? userDetail?.profileImage : "/assets/images/blank-profile.png"}
                />
                {updateState ? <div className="ml-20">
                    <form onSubmit={onSubmit}>
                        <Input
                            type="text"
                            label={"Name"}
                            name="name"
                            value={values.name}
                            placeholder='Enter Name'
                            onChange={onInputChange}
                            required
                        />
                        <Input
                            type="email"
                            label={"Email"}
                            name={"email"}
                            value={values.email}
                            placeholder='Enter Email'
                            onChange={onInputChange}
                            required
                            disabled={true}
                        />
                        <Input
                            type="number"
                            label={"Phone Number"}
                            name={"phoneNumber"}
                            value={values.phoneNumber}
                            placeholder='Enter Phone Number'
                            onChange={onInputChange}
                            required
                        />
                        <div className="flex">
                            <Button
                                type='submit'
                                buttonType={"dark"}
                                onSubmit={onSubmit}
                                loading={loading}
                                className={`w-full`}
                            >
                                Submit
                            </Button>
                            <Button
                                buttonType={"dark-outline"}
                                className="ml-2"
                                onClick={() => setUpdateState(!updateState)}
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div> :
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
                }
            </div>
        </div>

    )
}
export default MyProfile