import React from 'react'
import { Link } from 'react-router-dom'
import './adminSidebar.scss'

const AdminSidebar = () => {
    return (
        <div className='admin-sidebar bg-gray-800 text-white'>
            <div className="nav-list">
                <Link to="/admin/dashboard" className="nav-item hover:bg-gray-700 font-medium shadow-md transition duration-150 ease-in-out  whitespace-nowrap cursor-pointer">
                    <img src="/assets/icons/dashboard.png" alt="" /> Dashboard
                </Link>
                <Link to="/admin/users" className="nav-item hover:bg-gray-700 font-medium shadow-md transition duration-150 ease-in-out  whitespace-nowrap cursor-pointer">
                    <img src="/assets/icons/users.png" alt="" />  Users
                </Link>
                <Link to="/admin/bookings" className="nav-item hover:bg-gray-700 font-medium shadow-md transition duration-150 ease-in-out  whitespace-nowrap cursor-pointer">
                    <img src="/assets/icons/bookings.png" alt="" /> Bookings
                </Link>
                <Link to="/admin/dashboard" className="nav-item hover:bg-gray-700 font-medium shadow-md transition duration-150 ease-in-out  whitespace-nowrap cursor-pointer">
                    <img src="/assets/icons/properties.png" alt="" />   Properties
                </Link>
                <Link to="/admin/dashboard" className="nav-item hover:bg-gray-700 font-medium shadow-md transition duration-150 ease-in-out  whitespace-nowrap cursor-pointer">
                    <img src="/assets/icons/amenities.png" alt="" />    Amenities
                </Link>
                <Link to="/admin/dashboard" className="nav-item hover:bg-gray-700 font-medium shadow-md transition duration-150 ease-in-out  whitespace-nowrap cursor-pointer">
                    <img src="/assets/icons/settings.png" alt="" /> Settings
                </Link>
            </div>
        </div >
    )
}

export default AdminSidebar