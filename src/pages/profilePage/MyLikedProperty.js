import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './myLikedProperty.scss'
import SearchInput from "../../components/searchInput/SearchInput";
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { getAllProperty, onLikedProperty, onUnlikedProperty, getUserId } from '../../store/actions/siteAction'
import Loader from '../../components/loader/Loader'

const MyLikedProperty = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

    const allProperties = useSelector(state => state.site.allProperties)
    const userDetail = useSelector(state => state.site.userDetail)


    useEffect(() => {
        let data = {}
        if (getUserId()) {
            data.userId = getUserId()
        }
        dispatch(getAllProperty(data, (value) => setLoading(value)))
    }, [])

    useEffect(() => {
        if (userDetail) {
            setIsUserLoggedIn(true)
        }
    }, [userDetail, userDetail?.token, userDetail?.role])


    const onLiked = (propertyId) => {
        let data = {

        }
        if (getUserId()) {
            data.userId = getUserId()
        }
        dispatch(
            onLikedProperty(
                propertyId,
                () => dispatch(getAllProperty(data, (value) => setLoading(value))),
                (value) => setLoading(value)
            )
        )
    }

    const onUnliked = (propertyId) => {
        let data = {

        }
        if (getUserId()) {
            data.userId = getUserId()
        }
        dispatch(
            onUnlikedProperty(
                propertyId,
                () => dispatch(getAllProperty(data, (value) => setLoading(value))),
                (value) => setLoading(value)
            )
        )
    }

    let filteredProperties = allProperties?.filter(p => p.likedProperty)
    return (
        <div>
            <div className="flex items-center justify-between">
                <text className="text-2xl font-bold">My Liked Properties</text>
            </div>
            <div className="my-liked-property-wrapper flex flex-col items-center mt-5 rounded">
                {loading ?
                    <div className="pt-20">
                        <Loader width={"w-10"} className={"text-gray-200"} />
                    </div>
                    :
                    filteredProperties?.length > 0 ?
                        <div className="property-list">
                            {filteredProperties?.map((property, key) =>
                                property.likedProperty &&
                                <div key={key} className="property-item bg-white shadow-new fade-in-bottom">
                                    <div className="property-image">
                                        <Link to={`/property/${property._id}`}>
                                            <img src={property.propertyImage} alt={property.propertyTitle} />
                                        </Link>
                                        {isUserLoggedIn ?
                                            property.likedProperty
                                                ? <img className="liked-wrapper" src={"/assets/icons/liked.png"} alt={property.propertyTitle} onClick={() => onUnliked(property._id)} />
                                                : <img className="liked-wrapper" src={"/assets/icons/unliked.png"} alt={property.propertyTitle} onClick={() => onLiked(property._id)} />
                                            : null
                                        }
                                    </div>
                                    <Link to={`/property/${property._id}`}>
                                        <div className="property-description">
                                            <p className="text-lg font-bold">{property.propertyTitle}</p>
                                            <p className="text-sm text-gray-500">{property.address}</p>
                                            <hr className="my-3" />
                                            <Link to={`/property/${property._id}`} className="flex justify-end">
                                                <Button buttonType={"primary"}>Book</Button>
                                            </Link>
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </div> :
                        <div className="pt-20">
                            No Data Found!
                        </div>
                }
            </div>
        </div>
    )
}

export default MyLikedProperty


