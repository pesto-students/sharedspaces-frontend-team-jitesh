import React from 'react'
import './footer.scss'

export default function Footer() {
    return (
        <div className='footer text-center'>
            <div className='border-t-2 border-gray-700 flex justify-between py-10'>
                <div className="left">
                    <img className='logo' src="/assets/images/logo.png" alt="" />
                </div>
                <div className="right">
                    <nav className="flex sm:justify-center space-x-4 ml-10">
                        {[
                            ['Home', '/'],
                            ['Explore', '/search'],
                            ['About', '/'],
                            ['Contact', '/'],
                        ].map(([title, url]) => (
                            <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:text-slate-100 transition duration-150 ease-in-out ">{title}</a>
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
