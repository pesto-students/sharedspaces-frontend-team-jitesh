import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './adminSidebar.scss'

const AdminSidebar = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const [selectTab, setSelectTab] = useState('null')
    const userDetail = useSelector(state => state.site.userDetail)

    useEffect(() => {
        if (userDetail) {
            setIsUserLoggedIn(true)
        }
    }, [userDetail, userDetail?.token, userDetail?.role])

    const data = [
        {
            name: "Dashboard",
            icon: "/assets/icons/dashboard.png",
            link: "/admin/dashboard",
            role: ["Admin", "Landlord"]
        },
        {
            name: "Users",
            icon: "/assets/icons/users.png",
            link: "/admin/users",
            role: ["Admin"]
        },
        {
            name: "Bookings",
            icon: "/assets/icons/bookings.png",
            link: "/admin/bookings",
            role: ["Admin", "Landlord"]
        },
        {
            name: "Properties",
            icon: "/assets/icons/properties.png",
            link: "/admin/property",
            role: ["Admin", "Landlord"]
        },
        {
            name: "Amenities",
            icon: "/assets/icons/amenities.png",
            link: "/admin/amenities",
            role: ["Admin"]
        },
        {
            name: "Settings",
            icon: "/assets/icons/settings.png",
            link: "/admin/settings",
            role: ["Admin"]
        }
    ]

    return (
        <div className='admin-sidebar bg-gray-800 text-white'>
            <div className="nav-list">
                {data?.map((tab, key) =>
                    tab.role.some(r => r === userDetail?.role) &&
                    <Link
                        key={key}
                        to={tab.link}
                        className={`nav-item hover:bg-gray-700 font-medium shadow-md transition duration-150 ease-in-out  whitespace-nowrap cursor-pointer ${selectTab == tab.name ? "bg-gray-700" : ""} `}
                        onClick={() => setSelectTab(tab.name)}
                    >
                        <img src={tab.icon} alt={tab.name} /> {tab.name}
                    </Link>)
                }
            </div>
        </div >
    )
}

export default AdminSidebar