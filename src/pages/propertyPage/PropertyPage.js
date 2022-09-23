import React from 'react'
import './propertyPage.scss'
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'

const PropertyPage = () => {
    return (
        <div className="property-wrapper">
            <Link to="/search">
                <Button buttonType="primary-outline" className={'inline'}>Go Back</Button>
            </Link>
            <div className="property-image-map-section">
                <div className="property-image">
                    <img src="/assets/images/property-image.png" alt="" />
                </div>
                <div className="property-map">
                    <img src="/assets/images/map-image.png" alt="" />
                </div>
            </div>
            <div className="property-description">
                <p className="text-3xl font-bold">Regus Office Center</p>
                <p className="text-1xl text-gray-500">Home to downtown, New York</p>

                <h2 className="text-lg font-bold mt-10 mb-2">Description</h2>
                <p className="text-1xl text-gray-500">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>


                <h2 className="text-lg font-bold mt-10 mb-2">Amenities</h2>
                <div className="amenities-list">
                    <div className="amenities-item">
                        <p className="text-1xl text-gray-500">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>


                <h2 className="text-lg font-bold mt-10 mb-2">Owner Details</h2>
                <p className="text-1xl text-gray-500">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>


                <h2 className="text-lg font-bold mt-10 mb-3">Available Spaces</h2>
                <div className="space-list">
                    <Link to="/space/1/2" className="space-item">
                        <img src="/assets/images/space-one.png" alt="" />
                        <div className="space-details">
                            <p className="text-1xl font-bold">Space L101</p>
                            <p className="text-sm text-gray-500">Home to downtown, New York</p>
                        </div>
                    </Link>
                    <Link to="/space/1/2" className="space-item">
                        <img src="/assets/images/space-one.png" alt="" />
                        <div className="space-details">
                            <p className="text-1xl font-bold">Space L102</p>
                            <p className="text-sm text-gray-500">Home to downtown, New York</p>
                        </div>
                    </Link>
                    <Link to="/space/1/2" className="space-item">
                        <img src="/assets/images/space-one.png" alt="" />
                        <div className="space-details">
                            <p className="text-1xl font-bold">Space L103</p>
                            <p className="text-sm text-gray-500">Home to downtown, New York</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PropertyPage