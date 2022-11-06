import React from 'react'
import Button from '../button/Button'
import { Link } from 'react-router-dom'
import './adminNavbar.scss'

export default function AdminNavbar(props) {
    const { location } = props;
    if (location?.pathname?.match(/login/) ||
        location?.pathname?.match(/sign-up/)
    ) {
        document.querySelector('body').style.margin = 0
        return null;
    }

    document.querySelector('body').style.marginTop = "80px"
    return (
        <nav className="admin-navbar text-gray-800 fixed top-0 left-0 right-0 w-full flex flex-wrap items-center justify-between font-bold shadow-new navbar navbar-expand-lg navbar-light">
            <div className="left-section flex items-center">
                <Link to="/">
                    <img className='logo' src="/assets/images/logo-black.png" alt="" />
                </Link>

            </div>
            <div className="right-section">
                <Link to="/">
                    <Button buttonType="primary-outline">Go to Site</Button>
                </Link>
            </div>

        </nav>
    )
}
