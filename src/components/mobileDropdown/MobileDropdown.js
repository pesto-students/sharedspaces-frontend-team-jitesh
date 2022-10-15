import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Dropdown from 'rc-dropdown';
import 'rc-dropdown/assets/index.css';
import './mobileDropdown.scss'
import { Link, useNavigate } from 'react-router-dom';



const MobileDropdown = () => {
    const navigate = useNavigate()
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
        <div class="mobile-dropdown-body rounded shadow bg-white overflow-hidden peer-checked:flex flex-col mt-1 border border-gray-200">
            <div class="cursor-pointer group">
                <Link to="/search"
                    class="block transition duration-150 ease-in-out text-sm py-2 pl-3 pr-5 border-transparent border-l-4 group-hover:border-red-500 group-hover:bg-gray-100"
                >
                    Explore
                </Link>
            </div>
            <div class="cursor-pointer group">
                <Link onClick={() => onListYourSpace()}
                    class="block transition duration-150 ease-in-out text-sm py-2 pl-3 pr-5 border-transparent border-l-4 group-hover:border-red-500 group-hover:bg-gray-100"
                >
                    List Your Space
                </Link>
            </div>
            <div class="cursor-pointer group">
                <Link to="/login"
                    class="block transition duration-150 ease-in-out text-sm py-2 pl-3 pr-5 border-transparent border-l-4 group-hover:border-red-500 group-hover:bg-gray-100"
                >
                    Login
                </Link>
            </div>
            <div class="cursor-pointer group">
                <Link to="/sign-up"
                    class="block transition duration-150 ease-in-out text-sm py-2 pl-3 pr-5 border-transparent border-l-4 group-hover:border-red-500 group-hover:bg-gray-100"
                >
                    Sign Up
                </Link>
            </div>
        </div >
    )



    const onListYourSpace = () => {
        if (isUserLoggedIn) {
            if (userDetail.role === "User") {
                navigate('/list-your-space')
            } else {
                navigate('/admin/property')
            }
        } else {
            navigate('/list-your-space')
        }
    }


    return (
        <Dropdown
            trigger={['click']}
            overlay={menu}
            onVisibleChange={onVisibleChange}
        >
            <button className='dropdown-wrapper text-3xl text-red-500 flex items-center h-15 px-2 py-1 transition duration-150 ease-in-out  whitespace-nowrap cursor-pointer'  >
                <i class="fa-solid fa-bars"></i>
            </button>
        </Dropdown>
    )
}

export default MobileDropdown;

