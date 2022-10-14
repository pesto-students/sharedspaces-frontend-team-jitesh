
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { getBookingDetails } from '../../store/actions/adminAction';
import { useParams } from 'react-router-dom';
import Loader from '../../components/loader/Loader'

const BookingDetails = ()=>{
    const dispatch = useDispatch()
    const params = useParams()
    const [values, setValues] = useState({})
    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(false)
    const bookingDetails = useSelector(state => state.admin.bookingDetails)

    
    useEffect(() => {
        const bookingId = params.bookingId
        dispatch(
            getBookingDetails(bookingId,
                (value) => setLoading(value),
            )
        )
        console.log(bookingDetails,'-------------bookingDetails')
    }, [])
    console.log(bookingDetails,'-----------ll--bookingDetails')
    return(
        <>
        <div className="admin-body">
            <div className="admin-header">
                <h1 className="heading text-lg font-bold mb-3">Booking Details</h1>
            </div>
        </div>
        <div  className={`booking-item flex justify-between p-5 my-4 w-full rounded shadow-new fade-in-bottom`} onClick={() => setVisible(!visible)}>
                            <div className="left-section">
                                <div className="flex">
                                    <p className="text-red-500 font-bold mb-4">Booking Details</p>
                                    <div className='ml-5'>
                                        {bookingDetails?.status === "Booked" ? <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Booked</span> : <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Booked</span>}
                                        {/* {b.status === "pending" && <span class="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">Pending</span>} */}
                                        {bookingDetails?.status === "Canceled" && <span class="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">Cancelled</span>}
                                    </div>
                                </div>

                                <div class="flex flex-col mb-4">
                                    <p className='font-bold'> Booking Id</p>
                                    <span>{bookingDetails?._id}</span>
                                </div>

                                <div class="flex flex-col mb-4">
                                    <p className='font-bold'> Booked Date</p>
                                    <span>{moment(bookingDetails?.createdAt).format("DD-MM-YYYY")}</span>
                                </div>


                                <div class="flex flex-col mb-4">
                                    <p className='font-bold'> Start Date</p>
                                    <span>{moment(bookingDetails?.startDate).format("DD-MM-YYYY")}</span>
                                </div>

                                <div class="flex flex-col mb-4">
                                    <p className='font-bold'> End Date</p>
                                    <span>{moment(bookingDetails?.endDate).format("DD-MM-YYYY")}</span>
                                </div>

                             
                            </div>

                            <div className='right-section flex flex-col'>
                                <p className="text-red-500 font-bold mb-4">Property Details</p>
                                <div className='flex'>
                                    <div>
                                        <img className='w-32 rounded mr-3' src={bookingDetails?.propertyId?.propertyImage} />
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <h6 className='font-bold'>{bookingDetails?.propertyId?.propertyTitle}</h6>
                                        <h6 className='text-sm text-slate-400 mb-4'>{bookingDetails?.propertyId?.address}</h6>
                                    </div>
                                </div>
                                <p className="text-red-500 font-bold mb-4 mt-10">Space Details</p>
                                <div className='flex'>
                                    <div>
                                        <img className='w-32 rounded mr-3' src={bookingDetails?.spaceId?.spaceImage} />
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <h6 className='font-bold'>{bookingDetails?.spaceId?.spaceTitle}</h6>
                                        <h6 className='text-sm text-slate-400 mb-4'>{bookingDetails?.spaceId?.noOfDesks} Desk Available</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    )
}

export default BookingDetails;