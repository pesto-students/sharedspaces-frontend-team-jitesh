import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import Button from '../../components/button/Button'
import { onUpdateUserRole } from '../../store/actions/siteAction';
import './listYourSpacePage.scss'

const ListYourSpacePage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

    const userDetail = useSelector(state => state.site.userDetail)

    useEffect(() => {
        if (userDetail) {
            setIsUserLoggedIn(true)
        } else {
            navigate("/sign-up")
        }
    }, [userDetail, userDetail?.token, userDetail?.role])


    const onStartNow = () => {
        dispatch(
            onUpdateUserRole(userDetail._id,
                (value) => setLoading(value),
                () => navigate('/admin/property')
            )
        )
    }

    return (
        <div className="add-your-space-section py-10 flex flex-col items-center text-center">
            <h1 className="text-3xl font-bold leading-tight mb-5">
                List Your Own Space
            </h1>
            <p className="text-gray-900 mb-10">
                More people use sharedspace.com to discover coworking spaces than <br />
                all the other platforms combined.
            </p>

            <Button
                buttonType={"primary"}
                onClick={onStartNow}
                loading={loading}>
                Start Now
            </Button>
        </div>
    )
}

export default ListYourSpacePage