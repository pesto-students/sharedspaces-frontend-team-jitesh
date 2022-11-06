import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './myBookings.scss'
import { getMyBookings } from '../../store/actions/siteAction';
import moment from 'moment'
import Loader from '../../components/loader/Loader';



const MyBookings = () => {
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false)
    const [loading, setLoading] = useState(false)

    const myBookings = useSelector(state => state.site.myBookings)


    useEffect(() => {
        dispatch(
            getMyBookings({},
                (value) => setLoading(value),
            )
        )
    }, [])


    return (
        <div>
            <div className="flex items-center justify-between">
                <text className="text-2xl font-bold">My Bookings</text>
            </div>
            <div className="my-booking-wrapper flex flex-col items-center mt-5 rounded">
                {loading ?
                    <div className="pt-20">
                        <Loader width={"w-10"} className={"text-gray-200"} />
                    </div>
                    :
                    myBookings?.length > 0 ? myBookings?.map((b, key) =>
                        <div key={key} className={`booking-item flex justify-between p-5 my-4 w-full rounded shadow-new fade-in-bottom`} onClick={() => setVisible(!visible)}>
                            <div className="left-section">
                                <div className="flex">
                                    <p className="text-red-500 font-bold mb-4">Booking Details</p>
                                    <div className='ml-5'>
                                        {b.status === "Booked" ? <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Booked</span> : <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Booked</span>}
                                        {/* {b.status === "pending" && <span class="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">Pending</span>} */}
                                        {b.status === "Canceled" && <span class="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">Cancelled</span>}
                                    </div>
                                </div>

                                <div class="flex flex-col mb-4">
                                    <p className='font-bold'> Booking Id</p>
                                    <span>{b?._id}</span>
                                </div>

                                <div class="flex flex-col mb-4">
                                    <p className='font-bold'> Booked Date</p>
                                    <span>{moment(b?.createdAt).format("DD-MM-YYYY")}</span>
                                </div>


                                <div class="flex flex-col mb-4">
                                    <p className='font-bold'> Start Date</p>
                                    <span>{moment(b?.startDate).format("DD-MM-YYYY")}</span>
                                </div>

                                <div class="flex flex-col mb-4">
                                    <p className='font-bold'> End Date</p>
                                    <span>{moment(b?.endDate).format("DD-MM-YYYY")}</span>
                                </div>

                                {/* <p className="text-red-500 font-bold mb-4">Landlord Details</p>
                            <div class="flex flex-col mb-4">
                                <p className='font-bold'>Full Name</p>
                                <span>{b?.propertyId?.userId?.name || "John Doe"}</span>
                            </div>
                            <div class="flex flex-col mb-4">
                                <p className='font-bold'>Email</p>
                                <span>{b?.propertyId?.userId?.name || "p.malviyaaa@gmail.com"}</span>
                            </div> */}
                            </div>

                            <div className='right-section flex flex-col'>
                                <p className="text-red-500 font-bold mb-4">Property Details</p>
                                <div className='flex'>

                                    <img className='w-32 rounded mr-3' src={b?.propertyId?.propertyImage || "/assets/images/image-upload.png"} />

                                    <div className='flex flex-col justify-center'>
                                        <h6 className='font-bold'>{b?.propertyId?.propertyTitle}</h6>
                                        <h6 className='text-sm text-slate-400 mb-4'>{b?.propertyId?.address}</h6>
                                    </div>
                                </div>
                                <p className="text-red-500 font-bold mb-4 mt-10">Space Details</p>
                                <div className='flex'>

                                    <img className='w-32 rounded mr-3' src={b?.spaceId?.spaceImage || "/assets/images/image-upload.png"} />

                                    <div className='flex flex-col justify-center'>
                                        <h6 className='font-bold'>{b?.spaceId?.spaceTitle}</h6>
                                        <h6 className='text-sm text-slate-400 mb-4'>{b?.spaceId?.noOfDesks} Desk Available</h6>
                                    </div>
                                </div>
                            </div>
                        </div>)
                        :
                        <div className="pt-20">
                            No Data Found!
                        </div>
                }


            </div>
        </div>

    )
}
export default MyBookings