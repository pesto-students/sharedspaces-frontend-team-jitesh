import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './propertyAccordion.scss'

const PropertyAccordien = ({ property, spaces }) => {
    const [visible, setVisible] = useState(false)
    return (
        <div className={`my-4 rounded shadow-new fade-in-bottom ${visible && false}`} onClick={() => setVisible(!visible)}>
            < div className={`rounded p-3 flex flex-row justify-between transition duration-150 ease-in-out ${visible ? "bg-red-100" : ""}`}>
                <div className='flex self-center'>
                    <div >
                        <img className='w-32 rounded mr-3' src="/assets/images/property-two.png" />
                    </div>
                    <div className='text-left'>
                        <h6 className='font-bold text-base'>{property?.propertyTitle}</h6>
                        <h6 className='text-sm font-light text-slate-400 mb-3'>{property?.address}</h6>
                        <Link to={`/property/${property?._id}`} className='bg-gray-300 rounded px-2 py-1 text-xs hover:bg-gray-900 hover:text-white'>View in Site</Link>
                    </div>
                </div>
                <div className='flex justify-between self-center'>
                    <Link to={`/admin/space/add/${property?._id}`} className='bg-gray-300 rounded px-2 py-1 ml-3 text-xs hover:bg-gray-900 hover:text-white'>Add Space</Link>
                    <button className='bg-gray-300 rounded px-2 py-1 ml-3 text-xs hover:bg-gray-900 hover:text-white'>Edit Property</button>
                    <button className='bg-red-200 text-red-600 rounded px-2 py-1 ml-3 text-xs hover:bg-red-500 hover:text-white'>Delete Property</button>
                </div>
            </div>
            {
                visible &&
                <div className='rounded fade-in'>
                    {
                        spaces.length > 0 ? spaces.map(item => {
                            return (
                                <div className="py-3 px-3 flex justify-between">
                                    <div className='flex item-center'>
                                        <div >
                                            <img src="/assets/images/property-three.png" className='w-24 mr-5 rounded' />
                                        </div>
                                        <div className='self-center'>
                                            <h6 className='font-bold text-base'>{item.spaceTitle}</h6>
                                            <h6 className='text-sm font-light text-slate-400'>{item.noOfDesks} Desks Available</h6>
                                        </div>
                                    </div>
                                    <div className='flex justify-between self-center'>
                                        <button className='bg-gray-300 rounded px-2 py-1 ml-3 text-xs hover:bg-gray-900 hover:text-white'>Edit Space</button>
                                        <button className='bg-red-200 text-red-600 rounded px-2 py-1 ml-3 text-xs hover:bg-red-500 hover:text-white'>Delete Space</button>
                                    </div>
                                </div>
                            )
                        })
                            : <div className="flex p-5 justify-center items-center">
                                No Space Available
                            </div>
                    }

                </div>
            }

        </div >
    )
}

export default PropertyAccordien