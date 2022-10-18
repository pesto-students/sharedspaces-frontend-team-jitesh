import React from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'

export default function Footer() {
    return (
        <div data-testid="footer" className='footer text-center'>
            <div className='footer-with-menu border-t-2 border-gray-700 py-10'>
                <div className="left">
                    <img className='logo' src="/assets/images/logo.png" alt="" />
                </div>
                <div className="right">
                    <nav className="right-menu">
                        {[
                            ['Home', '/'],
                            ['Explore', '/search'],
                            ['About', '/'],
                            ['Contact', '/'],
                        ].map(([title, url], key) => (
                            <Link key={key} to={url} className="rounded-lg pl-10 py-2 text-slate-700 font-medium hover:text-slate-100 transition duration-150 ease-in-out ">{title}</Link>
                        ))}
                    </nav>
                </div>
            </div>
            <p className="text-gray-700">
                SharedSpace | copyright &#169; 2022
            </p>
        </div>
    )
}
