import React from 'react'
import './spacePage.scss'
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'

const SpacePage = () => {
    return (
        <div className="space-wrapper">
            <Link to="/property/1">
                <Button buttonType="primary-outline" className={'inline'}>Go Back</Button>
            </Link>
            <div className="space-image-map-section">
                <div className="space-description">
                    <p className="text-3xl font-bold mt-3">Regus Office Center</p>
                    <p className="text-1xl text-gray-500">Home to downtown, New York</p>

                    <p className="text-3xl font-bold mt-10">Space L102</p>
                    <p className="text-1xl text-gray-500">Home to downtown, New York</p>

                    <Button buttonType={"primary"} className="mt-10" >Start Booking</Button>

                    <h2 className="text-lg font-bold mt-10 mb-2">Description</h2>
                    <p className="text-1xl text-gray-500">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    <h2 className="text-lg font-bold mt-10 mb-2">Owner Details</h2>
                    <p className="text-1xl text-gray-500">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>


                    <h2 className="text-lg font-bold mt-10 mb-3">Other Spaces</h2>
                    <div className="space-list">
                        <Link to="/space/2/1" className="space-item">
                            <img src="/assets/images/space-one.png" alt="" />
                            <div className="space-details">
                                <p className="text-1xl font-bold">Space L102</p>
                                <p className="text-sm text-gray-500">Home to downtown, New York</p>
                            </div>
                        </Link>
                        <Link to="/space/2/3" className="space-item">
                            <img src="/assets/images/space-one.png" alt="" />
                            <div className="space-details">
                                <p className="text-1xl font-bold">Space L103</p>
                                <p className="text-sm text-gray-500">Home to downtown, New York</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="space-map">
                    <img src="/assets/images/property-image.png" alt="" />
                </div>
            </div>

        </div>
    )
}

export default SpacePage