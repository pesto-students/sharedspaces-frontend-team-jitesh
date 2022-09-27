import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './propertyPage.scss'
import Button from '../../components/button/Button'
import { Link, useParams } from 'react-router-dom'
import { getProperty } from '../../store/actions/siteAction'
import Loader from '../../components/loader/Loader'
import PropertyMap from '../../components/propertyMap/propertyMap'


const PropertyPage = () => {
    const dispatch = useDispatch()
    const { propertyId } = useParams();
    const property = useSelector(state => state.site.property)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        dispatch(getProperty(propertyId, (value) => setLoading(value)))
    }, [])
    return (
        <>
            {loading ?
                (
                    <div className="flex w-100 justify-center py-40">
                        <Loader width={"w-10"} className={"text-gray-200"} />
                    </div>
                ) :
                (
                    <div className="property-wrapper fade-in-bottom">
                        <Link to="/search">
                            <Button buttonType="primary-outline" className={'inline'}>Go Back</Button>
                        </Link>
                        <div className="property-image-map-section">
                            <div className="property-image">
                                <img src="/assets/images/property-image.png" alt="" />
                            </div>
                            <div className="property-map">
                                <PropertyMap
                                    location={{ lat: parseFloat(property?.lat), lng: parseFloat(property?.lng) }}
                                    zoom={5}
                                />
                            </div>
                        </div>
                        <div className="property-description">
                            <p className="text-3xl font-bold">{property?.propertyTitle}</p>
                            <p className="text-1xl text-gray-500">{property?.address}</p>

                            <h2 className="text-lg font-bold mt-10 mb-2">Description</h2>
                            <p className="text-1xl text-gray-500">{property?.propertyDescription}</p>


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


                                {property?.spaces?.length > 0 ? property?.spaces?.map(space =>
                                    <Link to={`/space/${propertyId}/${space._id}`} className="space-item">
                                        <img src="/assets/images/space-one.png" alt="" />
                                        <div className="space-details">
                                            <p className="text-1xl font-bold">{space.spaceTitle}</p>
                                            <p className="text-sm text-gray-500">{space.noOfDesks} Desks Available</p>
                                        </div>
                                    </Link>
                                ) : <div className="flex items-center py-5">No space available</div>}
                            </div>
                        </div>
                    </div>
                )
            }
        </>

    )
}

export default PropertyPage