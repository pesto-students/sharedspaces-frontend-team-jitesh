import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Dropdown from 'rc-dropdown';
import 'rc-dropdown/assets/index.css';
import './profileDropdown.scss'
import { Link } from 'react-router-dom';


const dropdownList = [
    { name: "My Admin", link: "/admin/dashboard", role: ["Admin", "Landlord"] },
    { name: "My Profile", link: "/profile/my-profile", role: ["User", "Landlord"] },
    { name: "My Bookings", link: "/profile/my-bookings", role: ["User", "Landlord"] },
    { name: "My Liked Properties", link: "/profile/liked-properties", role: ["User", "Landlord"] },
    { name: "Logout", link: "/Logout", function: () => logout(), role: ["User", "Landlord", "Admin"] },
]

const logout = () => {
    localStorage.clear()
    window.location.href = "/"
}

const ProfileDropdown = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const userDetail = useSelector(state => state.site.userDetail)

    useEffect(() => {
        if (userDetail) {
            setIsUserLoggedIn(true)
        }
    }, [userDetail, userDetail?.token, userDetail?.role])

    function onVisibleChange(visible) {
        console.log(visible);
    }

    const menu = (
        <div class="dropdown-body rounded shadow bg-white overflow-hidden peer-checked:flex flex-col mt-1 border border-gray-200">
            {dropdownList.map((d, key) =>
                d?.role?.some(r => r === userDetail?.role) &&
                <div key={key} class="cursor-pointer group">
                    <Link to={d.link} onClick={d.function}
                        class="block transition duration-150 ease-in-out text-sm py-2 pl-3 pr-5 border-transparent border-l-4 group-hover:border-red-500 group-hover:bg-gray-100"
                    >
                        {d.name}
                    </Link>
                </div>
            )}
        </div>
    )

    return (
        <Dropdown
            trigger={['click']}
            overlay={menu}
            onVisibleChange={onVisibleChange}
        >
            <button className='dropdown-wrapper flex items-center h-15 bg-red-100 border-red-500 text-red-500 border-2 px-2 py-1 font-medium rounded shadow-md transition duration-150 ease-in-out  whitespace-nowrap cursor-pointer'  >
                <img className='user-image shadow-sm' src={userDetail?.profileImage ? userDetail?.profileImage : "/assets/images/blank-profile.png"} alt="" />
                {userDetail.name}
                <img className="logout" src="/assets/icons/logout.png" alt="" />
            </button>
        </Dropdown>
    )
}

export default ProfileDropdown

