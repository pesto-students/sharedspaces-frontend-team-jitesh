import React from 'react'
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';
import './profileDropdown.scss'
import { Link } from 'react-router-dom';


const dropdownList = [
    { name: "My Profile", link: "/profile" },
    { name: "My Bookings", link: "/bookings" },
    { name: "Logout", link: "/Logout" },
]

const ProfileDropdown = ({ userDetail }) => {
    function onSelect({ key }) {
        console.log(`${key} selected`);
    }

    function onVisibleChange(visible) {
        console.log(visible);
    }

    const menu = (
        <div class="fixed rounded shadow bg-white overflow-hidden peer-checked:flex flex-col mt-1 border border-gray-200">
            {dropdownList.map(d =>
                <div class="cursor-pointer group">
                    <Link to={d.link}
                        class="block text-sm py-2 pl-3 pr-5 border-transparent border-l-4 group-hover:border-red-500 group-hover:bg-gray-100"
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
            <button className='flex items-center h-10 bg-red-100 text-red-500 border-red-500 border-2 px-6 py-1.5 font-medium rounded shadow-md transition duration-150 ease-in-out  whitespace-nowrap cursor-pointer'  >
                {userDetail.name}
            </button>
        </Dropdown>
    )
}

export default ProfileDropdown

