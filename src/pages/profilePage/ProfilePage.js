import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './profilePage.scss'
import { Outlet } from 'react-router-dom'
import ProfileSidebar from '../../components/profileSidebar/ProfileSidebar'
import Button from '../../components/button/Button'

const ProfilePage = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const userDetail = useSelector(state => state.site.userDetail)

    useEffect(() => {
        if (userDetail) {
            setIsUserLoggedIn(true)
        }
    }, [userDetail, userDetail?.token, userDetail?.role])

    return (
        <div className="main-profile-wrapper py-10">
            <div className="profile-wrapper">
                <div className="left-section">
                    <ProfileSidebar userDetail={userDetail} />
                </div>
                <div className="right-section">
                    {<Outlet />}
                </div>
            </div>
        </div>
    )
}

export default ProfilePage