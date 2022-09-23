import React from 'react'
import "./dashboard.scss"

const Dashboard = (props) => {
    const bookings = [
        {
            name: 'Pradeep Malviya',
            property: "Regus Office Center",
            space: "Space L102",
            date: "12-08-2022",
            status: "booked"
        },
        {
            name: 'Shubham Sharma',
            property: "Locus Business Hub",
            space: "F152",
            date: "05-08-2022",
            status: "pending"
        },
        {
            name: 'Rahul Kumar',
            property: "Infoplus Complex",
            space: "S1011",
            date: "11-08-2022",
            status: "cancel"
        }
    ]
    return (
        <div className="admin-body">{/* <div className="admin-header">
                <h1 className="heading text-lg font-bold mb-3">Dashboard</h1>
            </div> */}
            <div className="dashboard-list">
                <div className="dashboard-item shadow-new rounded font-bold">
                    <img className='icon' src="/assets/icons/users-black.png" alt="" />
                    Total Users
                    <img className='arrow' src="/assets/icons/chevron-right.png" alt="" />
                </div>
                <div className="dashboard-item shadow-new rounded font-bold">
                    <img className='icon' src="/assets/icons/landlords-black.png" alt="" />
                    Total Landlords
                    <img className='arrow' src="/assets/icons/chevron-right.png" alt="" />
                </div>
                <div className="dashboard-item shadow-new rounded font-bold">
                    <img className='icon' src="/assets/icons/bookings-black.png" alt="" />
                    Total Bookings
                    <img className='arrow' src="/assets/icons/chevron-right.png" alt="" />
                </div>
                <div className="dashboard-item shadow-new rounded font-bold">
                    <img className='icon' src="/assets/icons/properties-black.png" alt="" />
                    Total Properties
                    <img className='arrow' src="/assets/icons/chevron-right.png" alt="" />
                </div>
            </div>


            <div className="admin-header mt-10">
                <h1 className="heading text-lg font-bold mb-3">Latest Bookings</h1>
            </div>


            <div class="bg-white shadow-md rounded">
                <table class="min-w-max w-full table-auto">
                    <thead>
                        <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th class="py-3 px-6 text-left">User</th>
                            <th class="py-3 px-6 text-left">Property</th>
                            <th class="py-3 px-6 text-left">Space</th>
                            <th class="py-3 px-6 text-left">Booking Date</th>
                            <th class="py-3 px-6 text-center">Status</th>
                            <th class="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-600 text-sm font-light">
                        {bookings.map(b =>
                            <tr class="border-b border-gray-200 hover:bg-gray-100">

                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <span>{b.name}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <span>{b.property}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <span> {b.space}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <span>{b.date}</span>
                                    </div>
                                </td>

                                <td class="py-3 px-6 text-center">
                                    {b.status === "booked" && <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Booked</span>}
                                    {b.status === "pending" && <span class="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">Pending</span>}
                                    {b.status === "cancel" && <span class="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">Cancelled</span>}
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )}



                    </tbody>
                </table>
            </div>
        </div>


    )
}

export default Dashboard