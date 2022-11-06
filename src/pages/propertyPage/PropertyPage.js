import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './propertyPage.scss'
import Button from '../../components/button/Button'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { getProperty, getUserId, onLikedProperty, onUnlikedProperty } from '../../store/actions/siteAction'
import Loader from '../../components/loader/Loader'
import PropertyMap from '../../components/propertyMap/propertyMap'


const PropertyPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { propertyId } = useParams();
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const [loading, setLoading] = useState(false)


    const userDetail = useSelector(state => state.site.userDetail)
    const property = useSelector(state => state.site.property)

    useEffect(() => {
        if (userDetail) {
            setIsUserLoggedIn(true)
        }
    }, [userDetail, userDetail?.token, userDetail?.role])

    useEffect(() => {
        const data = {
            propertyId,
        }
        if (getUserId()) {
            data.userId = getUserId()
        }
        dispatch(
            getProperty(
                data,
                (value) => setLoading(value),
            )
        )
    }, [])

    const onLiked = (propertyId) => {
        const data = {
            propertyId
        }
        if (getUserId()) {
            data.userId = getUserId()
        }
        dispatch(
            onLikedProperty(
                propertyId,
                () => dispatch(getProperty(data, () => setLoading(false))),
                () => setLoading(false)
            )
        )
    }

    const onUnliked = (propertyId) => {
        const data = {
            propertyId
        }
        if (getUserId()) {
            data.userId = getUserId()
        }
        dispatch(
            onUnlikedProperty(
                propertyId,
                () => dispatch(getProperty(data, () => setLoading(false))),
                () => setLoading(false)
            )
        )
    }

    return (
        <>
            {loading ?
                (
                    <div className="flex w-100 justify-center py-40">
                        <Loader width={"w-10"} className={"text-gray-200"} />
                    </div>
                ) :
                (
                    <div className="property-wrapper fade-in-bottom">
                        <Link to="/search">
                            <Button buttonType="primary-outline" className={'inline'}>Go Back</Button>
                        </Link>
                        <div className="property-image-map-section">
                            <div className="property-image">
                                <img src={property?.propertyImage || "/assets/images/image-upload.png"} alt={property?.propertyTitle} />
                            </div>
                            <div className="property-map">
                                <PropertyMap
                                    location={{ lat: parseFloat(property?.lat), lng: parseFloat(property?.lng) }}
                                    zoom={12}
                                />
                            </div>
                        </div>
                        <div className="property-title">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-3xl font-bold mb-3">{property?.propertyTitle}</p>
                                    <p className="text-1xl text-gray-500">{property?.address}</p>
                                </div>

                                {isUserLoggedIn ?
                                    property.likedProperty
                                        ? <img className="liked-wrapper" src={"/assets/icons/liked.png"} alt={property.propertyTitle} onClick={() => onUnliked(property._id)} />
                                        : <img className="liked-wrapper" src={"/assets/icons/unliked.png"} alt={property.propertyTitle} onClick={() => onLiked(property._id)} />
                                    : null
                                }

                            </div>
                        </div>
                        <div className="property-description">
                            <h2 className="text-lg font-bold mt-10 mb-2">Description</h2>
                            <p className="text-1xl text-gray-500">{property?.propertyDescription}</p>


                            <h2 className="text-lg font-bold mt-10">Amenities</h2>
                            <div className="amenity-wrapper flex py-3 mb-10">
                                {property?.amenities?.map((amenity, key) =>
                                    <div
                                        id={amenity._id}
                                        key={amenity._id}
                                        className='amenity-item w-30 flex items-center justify-center shadow-new px-5 cursor-pointer py-2 rounded mr-3'
                                    >
                                        <img
                                            className='w-6 mr-2'
                                            src={amenity.amenityImage}
                                            alt={amenity.amenityTitle}
                                        />
                                        {amenity.amenityTitle}
                                    </div>
                                )}
                            </div>


                            <h2 className="text-lg font-bold mt-10 mb-2">Owner Details</h2>
                            <div className="flex items-center">
                                <div>
                                    <img className='uploaded-image rounded shadow-new' src={property?.ownerDetails?.profileImage || "/assets/images/blank-profile.png"} alt="" />
                                </div>
                                <div className='ml-3'>
                                    <p className="text-1xl text-gray-500"> <b>Name:</b>  {property?.ownerDetails?.name}</p>
                                    <p className="text-1xl text-gray-500"> <b>Email:</b>  {property?.ownerDetails?.email}</p>
                                </div>
                            </div>


                            <h2 className="text-lg font-bold mt-10 mb-3">Available Spaces</h2>
                            <div className="space-list">
                                {property?.spaces?.length > 0 ? property?.spaces?.map(space =>
                                    <Link to={`/space/${propertyId}/${space._id}`} className="space-item">
                                        <img src={space.spaceImage || "/assets/images/image-upload.png"} alt={space.spaceTitle} />
                                        <div className="space-details">
                                            <p className="text-1xl font-bold">{space.spaceTitle}</p>
                                            <p className="text-sm text-gray-500">{space.noOfDesks} Desks Available</p>
                                        </div>
                                    </Link>
                                ) : <div className="flex items-center py-5">No space available</div>}
                            </div>
                        </div>
                    </div>
                )
            }
        </>

    )
}

export default PropertyPage