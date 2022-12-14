import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './searchPage.scss'
import SearchInput from '../../components/searchInput/SearchInput'
import Button from '../../components/button/Button'
import { Link, useParams } from 'react-router-dom'
import { getAllProperty, onLikedProperty, onUnlikedProperty, getUserId } from '../../store/actions/siteAction'
import Loader from '../../components/loader/Loader'
import SearchMap from '../../components/searchMap/SearchMap'


const defaultLocation = {
    center: {
        lat: 24.9922817,
        lng: 78.3902509,
    },
    zoom: 5
}

const SearchPage = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const userDetail = useSelector(state => state.site.userDetail)
    const allProperties = useSelector(state => state.site.allProperties)

    useEffect(() => {
        if (userDetail) {
            setIsUserLoggedIn(true)
        }
    }, [userDetail, userDetail?.token, userDetail?.role])

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let data = {
            search: params.searchKeyword,
        }
        if (getUserId()) {
            data.userId = getUserId()
        }
        dispatch(getAllProperty(data, (value) => setLoading(value)))
    }, [])

    useEffect(() => {
        if (params.searchKeyword) {
            let data = {
                search: params.searchKeyword,
            }
            if (getUserId()) {
                data.userId = getUserId()
            }
            dispatch(getAllProperty(data, (value) => setLoading(value)))
        }
    }, [params])

    const onLiked = (propertyId) => {
        let data = {
            search: params.searchKeyword,
        }
        if (getUserId()) {
            data.userId = getUserId()
        }
        dispatch(
            onLikedProperty(
                propertyId,
                () => dispatch(getAllProperty(data, () => setLoading(false))),
                (data) => setLoading(false)
            )
        )
    }

    const onUnliked = (propertyId) => {
        let data = {
            search: params.searchKeyword,
        }
        if (getUserId()) {
            data.userId = getUserId()
        }
        dispatch(
            onUnlikedProperty(
                propertyId,
                () => dispatch(getAllProperty(data, () => setLoading(false))),
                () => setLoading(false)
            )
        )
    }
    return (

        <div className='search-page flex'>
            <div className="left-section hide-scrollbar">
                <SearchInput value={params.searchKeyword} />
                <p className='gray-700 py-2'>{allProperties?.length} Property Found</p>
                <div className="property-list hide-scrollbar">
                    {loading ?
                        <div className="pt-20">
                            <Loader width={"w-10"} className={"text-gray-200"} />
                        </div>
                        :
                        allProperties?.map(property =>
                            <div className="property-item flex shadow-new cursor-pointer fade-in-bottom">
                                <div className="property-image">
                                    <Link to={`/property/${property._id}`} >
                                        <img src={property.propertyImage || "/assets/images/image-upload.png"} alt={property.propertyTitle} />
                                    </Link>
                                    {isUserLoggedIn ?
                                        property.likedProperty
                                            ? <img className="liked-wrapper" src={"/assets/icons/liked.png"} alt={property.propertyTitle} onClick={() => onUnliked(property._id)} />
                                            : <img className="liked-wrapper" src={"/assets/icons/unliked.png"} alt={property.propertyTitle} onClick={() => onLiked(property._id)} />
                                        : null
                                    }
                                </div>
                                <Link to={`/property/${property._id}`} className="property-description">
                                    <div>
                                        <p className="text-lg font-bold">{property.propertyTitle}</p>
                                        <p className="text-sm text-gray-500">{property.address}</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className='text-sm font-bold text-gray-800'>{property.spaces.length} Spaces Available</p>
                                        {/* <Button buttonType={"primary"}>Book</Button> */}
                                    </div>
                                </Link>
                            </div>
                        )}
                </div>
            </div >
            <div className="right-section">
                <SearchMap
                    location={defaultLocation.center}
                    zoom={defaultLocation.zoom}
                    allProperties={allProperties}
                />
            </div>
        </div >
    )
}

export default SearchPage