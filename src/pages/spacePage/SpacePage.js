import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './spacePage.scss'
import Button from '../../components/button/Button'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { getSpace } from '../../store/actions/siteAction'
import Loader from '../../components/loader/Loader'
import BookingForm from '../../popups/bookingForm/BookingForm'

const SpacePage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { propertyId, spaceId } = useParams();
    const { space, otherSpaces, ownerDetails } = useSelector(state => state.site.space)
    const [loading, setLoading] = useState(false)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

    const userDetail = useSelector(state => state.site.userDetail)

    useEffect(() => {
        dispatch(getSpace(spaceId, (value) => setLoading(value)))
    }, [spaceId])


    useEffect(() => {
        if (userDetail) {
            setIsUserLoggedIn(true)
        }
    }, [userDetail, userDetail?.token, userDetail?.role])


    const onClose = () => {
        setModalIsOpen(false)
    }

    const onStartBooking = () => {
        if (isUserLoggedIn) {
            setModalIsOpen(true)
        } else {
            navigate('/login')
        }
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
                    <div className="space-wrapper fade-in-bottom">
                        <Link to={`/property/${propertyId}`}>
                            <Button buttonType="primary-outline" className={'inline'}>Go Back</Button>
                        </Link>
                        <div className="space-image-map-section">
                            <div className="space-description">
                                <p className="text-3xl font-bold mt-3">{space?.propertyId?.propertyTitle}</p>
                                <p className="text-1xl text-gray-500">{space?.propertyId?.address}</p>

                                <p className="text-3xl font-bold mt-10">{space?.spaceTitle}</p>
                                <p className="text-1xl text-gray-500">{space?.noOfDesks} Desks Available</p>

                                <Button buttonType={"primary"} className="mt-10" onClick={onStartBooking}>Start Booking</Button>

                                <h2 className="text-lg font-bold mt-10 mb-2">Description</h2>
                                <p className="text-1xl text-gray-500">{space?.spaceDescription}</p>

                                <h2 className="text-lg font-bold mt-10 mb-2">Owner Details</h2>
                                <div className="flex items-center">
                                    <div>
                                        <img className='uploaded-image rounded shadow-new' src={ownerDetails?.profileImage || "/assets/images/blank-profile.png"} alt="" />
                                    </div>
                                    <div className='ml-3'>
                                        <p className="text-1xl text-gray-500"> <b>Name:</b>  {ownerDetails?.name}</p>
                                        <p className="text-1xl text-gray-500"> <b>Email:</b>  {ownerDetails?.email}</p>
                                    </div>
                                </div>


                                <h2 className="text-lg font-bold mt-10 mb-3">Other Spaces</h2>
                                <div className="space-list">
                                    {otherSpaces?.length > 0 ? otherSpaces?.map(space =>
                                        <Link to={`/space/${propertyId}/${space._id}`} className="space-item">
                                            <img src={space.spaceImage || "/assets/images/image-upload.png"} alt={space.spaceTitle} />
                                            <div className="space-details">
                                                <p className="text-1xl font-bold">{space.spaceTitle}</p>
                                                <p className="text-sm text-gray-500">{space.noOfDesks} Desks Available</p>
                                            </div>
                                        </Link>
                                    ) : <div className="flex items-center py-5">No other space available</div>}
                                </div>
                            </div>
                            <div className="space-image">
                                <img src={space?.spaceImage || "/assets/images/image-upload.png"} alt={space?.spaceTitle} />
                            </div>
                        </div>
                    </div>
                )
            }
            {space && <BookingForm modalIsOpen={modalIsOpen} onClose={onClose} space={space} />}

        </>
    )
}

export default SpacePage