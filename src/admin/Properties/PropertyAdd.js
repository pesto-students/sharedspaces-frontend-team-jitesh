import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import PropertyMap from '../../components/propertyMap/propertyMap'
import Textarea from '../../components/textarea/Textarea'
import { addProperty, getAllAmenity, updateProperty } from '../../store/actions/adminAction'
import {
    GoogleMap,
    LoadScript,
    StandaloneSearchBox,
} from "@react-google-maps/api";
import './propertyAdd.scss'
import ImageUpload from '../../components/imageUpload/ImageUpload'
import { getProperty } from '../../store/actions/siteAction'
import { SET_PROPERTY } from '../../store/types/siteTypes'

const PropertyAdd = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const [values, setValues] = useState({})
    const [addressValues, setAddressValues] = useState({})
    const [loading, setLoading] = useState(false)
    const [selectedAmenities, setSelectedAmenities] = useState([])
    const [isEditView, setIsEditView] = useState(false)

    const allAmenities = useSelector(state => state.admin.allAmenities)
    const property = useSelector(state => state.site.property)

    useEffect(() => {
        dispatch(getAllAmenity(null, (value) => setLoading(value)))
    }, [])

    useEffect(() => {
        if (allAmenities) {
            const amenities = allAmenities.map(a => ({ ...a, selected: false }))
            console.log('here', amenities)
            setSelectedAmenities(amenities)
        }


    }, [allAmenities])

    useEffect(() => {
        if (params.propertyId) {
            let data = {
                propertyId: params.propertyId
            }
            dispatch(getProperty(data, (value) => setLoading(value)))
        } else {
            dispatch({
                type: SET_PROPERTY,
                payload: {}
            })
        }
    }, [params])

    useEffect(() => {
        if (params.propertyId) {
            setIsEditView(true)
            setValues({
                propertyTitle: property.propertyTitle,
                propertyDescription: property.propertyDescription,
                propertyImage: property.propertyImage
            })
            setAddressValues({
                address: property.address,
                postcode: property.postcode,
                lat: property.lat,
                lng: property.lng
            })
            setLocation({ lat: parseFloat(property.lat), lng: parseFloat(property.lng) })

            const amenities = allAmenities?.map(a => ({ ...a, selected: property?.amenities?.some(amenity => amenity._id === a._id) }))
            setSelectedAmenities(
                amenities
            )
        } else {
            setIsEditView(false)
        }
    }, [property])


    const [searchBox, setSearchBox] = useState(null);
    const [location, setLocation] = useState({
        lat: 28.6139391,
        lng: 77.2090212,
    });

    const onInputChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const onAddressInputChange = e => {
        setAddressValues({
            ...addressValues,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault()

        const data = {
            ...values,
            ...addressValues,
            amenities: selectedAmenities.filter(a => a.selected && a._id).map(a => a._id)
        }

        if (isEditView) {
            dispatch(updateProperty(
                params.propertyId,
                data,
                (value) => setLoading(value),
                () => navigate("/admin/property")
            ))
        } else {
            dispatch(
                addProperty(
                    data,
                    (value) => setLoading(value),
                    () => navigate("/admin/property")
                )
            )
        }

    }


    const onSearchBoxLoad = React.useCallback((ref) => {
        setSearchBox(ref);
    }, []);

    const onPlacesChanged = React.useCallback(() => {
        const data = searchBox.getPlaces();
        let location = {
            lat: data[0].geometry.location.lat(),
            lng: data[0].geometry.location.lng(),
        };

        setLocation(location);

        setAddressValues({
            ...addressValues,
            address: data[0].formatted_address,
            lat: location.lat,
            lng: location.lng,
        });
    }, [searchBox]);

    const uploadPath = (imagePath) => {
        setValues({
            ...values,
            propertyImage: imagePath
        })
    }

    const onSelectAmenity = (id) => {
        let amenities = selectedAmenities
        amenities = amenities.map(a => a._id === id ? ({
            ...a,
            selected: !a.selected
        }) : a)
        setSelectedAmenities([...amenities])
    }

    return (
        <div className="admin-body mb-10">

            <div className="admin-breadcrums mb-3">
                <Link to="/admin/property" className="heading text-lg font-bold">Properties</Link>
                <img className='arrow mx-3' src="/assets/icons/chevron-right.png" alt="" />
                <div className="heading text-lg font-bold">{isEditView ? "Edit Property" : "Add Property"} </div>
            </div>

            <div class="body-section bg-white shadow-new p-5 rounded">
                <div className="admin-header">
                    <h1 className="heading text-lg font-bold mb-3">{isEditView ? "Edit" : "Add"} Property Details</h1>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="main-wrapper">
                        <div className='left-section'>
                            <Input
                                label={"Property Title"}
                                name={"propertyTitle"}
                                type="text"
                                value={values.propertyTitle}
                                placeholder='Enter Property Title'
                                onChange={onInputChange}
                                className="flex flex-col"
                                required
                            />
                            <Textarea
                                label={"Property Description"}
                                name={"propertyDescription"}
                                type="text"
                                value={values.propertyDescription}
                                placeholder='Enter Property Description'
                                onChange={onInputChange}
                                className="flex flex-col"
                                required
                                rows={"5"}
                            />
                        </div>
                        <div className="right-section">
                            <div className="property-image-wrapper">
                                <ImageUpload
                                    uploadPath={uploadPath}
                                    uploadType="property"
                                    uploadedImage={values.propertyImage}
                                // id=""
                                />
                            </div>
                        </div>

                    </div>


                    <div className="admin-header">
                        <h1 className="heading text-lg font-bold mt-5 mb-3">{isEditView ? "Edit" : "Add"} Address Details</h1>
                    </div>
                    <div className="main-wrapper">
                        <div className='left-section'>

                            <StandaloneSearchBox
                                onLoad={onSearchBoxLoad}
                                onPlacesChanged={onPlacesChanged}
                            >
                                <Input
                                    label={"Address"}
                                    name={"address"}
                                    type="text"
                                    value={addressValues.address}
                                    placeholder='Enter Address'
                                    onChange={onAddressInputChange}
                                    className="flex flex-col"
                                    required
                                />
                            </StandaloneSearchBox>


                            <Input
                                label={"Postcode"}
                                name={"postcode"}
                                type="text"
                                value={addressValues.postcode}
                                placeholder='Enter Postcode'
                                onChange={onAddressInputChange}
                                className="flex flex-col"
                                required
                            />
                            <Input
                                label={"Latitude"}
                                name={"lat"}
                                type="text"
                                value={addressValues.lat}
                                placeholder='Enter Latitude'
                                onChange={onAddressInputChange}
                                className="flex flex-col"
                                required
                            />
                            <Input
                                label={"Longitude"}
                                name={"lng"}
                                type="text"
                                value={addressValues.lng}
                                placeholder='Enter Longitude'
                                onChange={onAddressInputChange}
                                className="flex flex-col"
                                required
                            />
                        </div>
                        <div className="right-section">
                            <div className="property-map-wrapper">
                                <PropertyMap location={location} zoom={12} />
                            </div>
                        </div>

                    </div>

                    <div className="admin-header">
                        <h1 className="heading text-lg font-bold mt-5 mb-3">{isEditView ? "Edit" : "Add"} Amenities Details</h1>
                    </div>

                    <div className="amenity-wrapper flex shadow-new py-3 px-2 rounded mb-10">
                        {selectedAmenities?.length > 0 && selectedAmenities?.map((amenity, key) =>
                            <div
                                onClick={() => onSelectAmenity(amenity._id)}
                                id={amenity._id}
                                key={amenity._id}
                                className={`amenity-item flex items-center justify-center shadow-new px-4 mx-1.5 cursor-pointer py-1 rounded ${amenity.selected ? "bg-gray-400" : ""}`}
                            >
                                <img className='w-5 mr-1' src={amenity.amenityImage} alt={amenity.amenityTitle} />
                                {amenity.amenityTitle}
                            </div>
                        )}
                    </div>


                    <Button
                        type='submit'
                        buttonType={"dark"}
                        onSubmit={onSubmit}
                        className="min-w-30"
                        loading={loading}
                    >
                        {isEditView ? "Update" : "Submit"}
                    </Button>
                </form>
            </div>
        </div >
    )
}

export default PropertyAdd