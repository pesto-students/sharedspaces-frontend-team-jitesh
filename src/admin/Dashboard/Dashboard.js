import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDashboardTotals } from '../../store/actions/adminAction'
import Bookings from '../Bookings/Bookings'
import Loader from '../../components/loader/Loader'
import "./dashboard.scss"

const Dashboard = () => {
    const dispatch = useDispatch()
    const dashboardTotals = useSelector(state => state.admin.dashboardTotals)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        dispatch(getDashboardTotals((value) => setLoading(value)))
    }, [])

    return (
        <div className="admin-body">
            {
                loading ?
                    <Loader width={"w-10"} className={"text-gray-200"} />
                    :
                    <div className="dashboard-list fade-in-bottom">
                        {dashboardTotals?.totalUser && <div className="dashboard-item shadow-new rounded font-bold">
                            <div className="flex flex-col w-40">
                                <div className='flex items-center'>
                                    {/* <img className='icon' src="/assets/icons/users-black.png" alt="" /> */}
                                    <p className='text-2xl text-red-500'>{dashboardTotals?.totalUser}</p>
                                </div>
                                Total Users
                            </div>
                            <img className='arrow' src="/assets/icons/chevron-right.png" alt="" />
                        </div>}

                        {dashboardTotals?.totalLandlord && <div className="dashboard-item shadow-new rounded font-bold">
                            <div className="flex flex-col w-40">
                                <div className='flex items-center'>
                                    {/* <img className='icon' src="/assets/icons/landlords-black.png" alt="" /> */}
                                    <p className='text-2xl text-red-500'>{dashboardTotals?.totalLandlord}</p>
                                </div>
                                Total Landlords
                            </div>
                            <img className='arrow' src="/assets/icons/chevron-right.png" alt="" />
                        </div>}


                        <div className="dashboard-item shadow-new rounded font-bold">
                            <div className="flex flex-col w-40">
                                <div className='flex items-center'>
                                    {/* <img className='icon' src="/assets/icons/bookings-black.png" alt="" /> */}
                                    <p className='text-2xl text-red-500'>{dashboardTotals?.totalBooking}</p>
                                </div>
                                Total Bookings
                            </div>
                            <img className='arrow' src="/assets/icons/chevron-right.png" alt="" />
                        </div>

                        <div className="dashboard-item shadow-new rounded font-bold">
                            <div className="flex flex-col w-40">
                                <div className='flex items-center'>
                                    {/* <img className='icon' src="/assets/icons/properties-black.png" alt="" /> */}
                                    <p className='text-2xl text-red-500'>{dashboardTotals?.totalProperties}</p>
                                </div>
                                Total Properties
                            </div>
                            <img className='arrow' src="/assets/icons/chevron-right.png" alt="" />
                        </div>
                    </div>
            }

            <div className="py-10">
                <Bookings bookingName="Latest Bookings"></Bookings>
            </div>
        </div>


    )
}

export default Dashboard