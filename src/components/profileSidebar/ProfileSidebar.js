import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './profileSidebar.scss'

const ProfileSidebar = ({ userDetail }) => {
    const [selected, setSelected] = useState('My Profile')
    const data = [
        {
            name: "My Profile",
            icon: (className) =>
            (
                <svg
                    className={`w-7 stroke-red-500 group-hover:stroke-white pr-2 ${className}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            link: "/profile/my-profile",
        },
        {
            name: "My Bookings",
            icon: (className) =>
            (
                <svg
                    className={`w-7 stroke-red-500 group-hover:stroke-white pr-2 ${className}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            link: "/profile/my-bookings",
        },
        {
            name: "Liked Locations",
            icon: (className) =>
            (
                <svg
                    className={`w-7 stroke-red-500 group-hover:stroke-white pr-2 ${className}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            link: "/profile/liked-locations",
        },
        {
            name: "Change Password",
            icon: (className) =>
            (
                <svg
                    className={`w-7 stroke-red-500 group-hover:stroke-white pr-2 ${className}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg >
            ),
            link: "/profile/change-password",
        },
        {
            name: "Settings",
            icon: (className) =>
            (
                <svg
                    className={`w-7 stroke-red-500 group-hover:stroke-white pr-2 ${className}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg >
            ),
            link: "/profile/settings",
        },
    ]


    return (
        <div className="flex flex-wrap border-2 border-red-500 rounded">
            <div className="w-full flex flex-wrap border-b-2 border-red-500 justify-center">
                <div className="flex items-center justify-center w-full m-4 p-2 border bg-red-200 border-red-500/100 rounded justify-center content-center space-between space-x-2">
                    <img
                        className="profile-small-image"
                        src={userDetail?.profileImage ? userDetail?.profileImage : "/assets/images/blank-profile.png"}
                        alt={userDetail?.name}>
                    </img>
                    <p className="font-bold">{userDetail?.name}</p>
                </div>
            </div>

            {
                data.map((tab, key) =>
                    <Link
                        to={tab.link}
                        key={key}
                        onClick={() => setSelected(tab.name)}
                        className={`${selected === tab.name ? "bg-red-500 text-white" : ""} flex group items-center px-4 py-2.5 text-red-500 w-full border-b-2 border-red-500 hover:text-white hover:bg-red-500 transition duration-150 ease-in-out cursor-pointer`}
                    >
                        {tab.icon(selected === tab.name ? "stroke-white" : "")}
                        <p className={selected === tab.name ? "bg-red-500 text-white" : ""}> {tab.name}</p>
                    </Link>
                )
            }

            <div className="bg-red-500 text-white mt-20 flex group items-center justify-center px-4 py-2.5 w-full border-b-2 border-red-500 hover:text-white hover:bg-red-500 transition duration-150 ease-in-out cursor-pointer">
                <svg className="w-7 group-hover:stroke-white pr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                <p>Logout</p>
            </div>
        </div >
    )
}

export default ProfileSidebar