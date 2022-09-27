import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './spacePage.scss'
import Button from '../../components/button/Button'
import { Link, useParams } from 'react-router-dom'
import { getSpace } from '../../store/actions/siteAction'
import Loader from '../../components/loader/Loader'
import BookingForm from '../../popups/bookingForm/BookingForm'

const SpacePage = () => {
    const dispatch = useDispatch()
    const { propertyId, spaceId } = useParams();
    const { space, otherSpaces } = useSelector(state => state.site.space)
    const [loading, setLoading] = useState(false)
    const [modalIsOpen, setModalIsOpen] = useState(true)

    useEffect(() => {
        dispatch(getSpace(spaceId, (value) => setLoading(value)))
    }, [spaceId])


    const onClose = () => {
        setModalIsOpen(false)
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

                                <Button buttonType={"primary"} className="mt-10" onClick={() => setModalIsOpen(true)}>Start Booking</Button>

                                <h2 className="text-lg font-bold mt-10 mb-2">Description</h2>
                                <p className="text-1xl text-gray-500">{space?.spaceDescription}</p>

                                <h2 className="text-lg font-bold mt-10 mb-2">Owner Details</h2>
                                <p className="text-1xl text-gray-500">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>


                                <h2 className="text-lg font-bold mt-10 mb-3">Other Spaces</h2>
                                <div className="space-list">
                                    {otherSpaces?.length > 0 ? otherSpaces?.map(space =>
                                        <Link to={`/space/${propertyId}/${space._id}`} className="space-item">
                                            <img src="/assets/images/space-one.png" alt="" />
                                            <div className="space-details">
                                                <p className="text-1xl font-bold">{space.spaceTitle}</p>
                                                <p className="text-sm text-gray-500">{space.noOfDesks} Desks Available</p>
                                            </div>
                                        </Link>
                                    ) : <div className="flex items-center py-5">No other space available</div>}
                                </div>
                            </div>
                            <div className="space-map">
                                <img src="/assets/images/property-image.png" alt="" />
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