import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../button/Button'
import { Link } from 'react-router-dom'
import './navbar.scss'
import AdminNavbar from '../adminNavbar/AdminNavbar';
import ProfileDropdown from '../profileDropdown/ProfileDropdown'

export default function Navbar(props) {
    const userDetail = useSelector(state => state.site.userDetail)

    const { location } = props;
    if (location?.pathname?.match(/login/) ||
        location?.pathname?.match(/sign-up/)
    ) {
        document.querySelector('body').style.margin = 0
        return null;
    } else if (location?.pathname?.match(/admin/)) {
        return <AdminNavbar />
    }

    document.querySelector('body').style.marginTop = "80px"
    return (
        <nav className="navbar text-gray-800 fixed top-0 left-0 right-0 w-full flex flex-wrap items-center justify-between font-bold shadow-new navbar navbar-expand-lg navbar-light">
            <div className="left-section flex items-center">
                <Link to="/">
                    <img className='logo' src="/assets/images/logo-black.png" alt="" />
                </Link>

                <nav className="flex sm:justify-center space-x-4 ml-10">
                    {[
                        ['Explore', '/search'],
                        // ['Liked Locations', '/liked-locations'],
                    ].map(([title, url]) => (
                        <Link to={url} className="rounded px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
                    ))}
                </nav>
            </div>
            {userDetail === null
                ? <div className="right-section flex items-center">
                    <Link to="/login">
                        <Button buttonType="primary" className="mx-2">Login</Button>
                    </Link>
                    <Link to="/sign-up">
                        <Button buttonType="primary-outline" className="ml-2">Sign Up</Button>
                    </Link>
                </div>
                : <div className="right-section flex items-center">
                    <ProfileDropdown userDetail={userDetail} />
                </div>}

        </nav>
    )
}
