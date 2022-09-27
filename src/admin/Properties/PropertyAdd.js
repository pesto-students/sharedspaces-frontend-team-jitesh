import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import PropertyMap from '../../components/propertyMap/propertyMap'
import Textarea from '../../components/textarea/Textarea'
import { addProperty } from '../../store/actions/adminAction'
import {
    GoogleMap,
    LoadScript,
    StandaloneSearchBox,
} from "@react-google-maps/api";
import './propertyAdd.scss'

const PropertyAdd = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [values, setValues] = useState({})
    const [addressValues, setAddressValues] = useState({})
    const [loading, setLoading] = useState(false)

    const [searchBox, setSearchBox] = React.useState(null);
    const [location, setLocation] = React.useState({
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
            ...values, ...addressValues
        }
        dispatch(
            addProperty(
                data,
                (value) => setLoading(value),
                () => navigate("/admin/property")
            )
        )
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


    return (
        <div className="admin-body mb-10">

            <div className="admin-breadcrums mb-3">
                <Link to="/admin/property" className="heading text-lg font-bold">Properties</Link>
                <img className='arrow' src="/assets/icons/chevron-right.png" alt="" />
                <div className="heading text-lg font-bold">Add Property</div>
            </div>

            <div class="body-section bg-white shadow-new p-5 rounded">
                <div className="admin-header">
                    <h1 className="heading text-lg font-bold mb-3">Add Property Details</h1>
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
                            <Input
                                label={"Property Description"}
                                name={"propertyDescription"}
                                type="text"
                                value={values.propertyDescription}
                                placeholder='Enter Property Description'
                                onChange={onInputChange}
                                className="flex flex-col"
                                required
                            />
                            <Textarea
                                label={"Owner Details"}
                                name={"ownerDetails"}
                                type="text"
                                value={values.ownerDetails}
                                placeholder='Enter Owner Details'
                                onChange={onInputChange}
                                className="flex flex-col"
                                required
                            />
                        </div>
                        <div className="right-section">
                            <div className="property-image-wrapper">
                                <Input
                                    label={"Property Image"}
                                    name={"propertyImage"}
                                    type="file"
                                    value={values.propertyImage}
                                    placeholder='Enter Property Image'
                                    onChange={onInputChange}
                                    className="flex flex-col"
                                    required
                                />
                            </div>
                        </div>

                    </div>


                    <div className="admin-header">
                        <h1 className="heading text-lg font-bold mt-5 mb-3">Add Address Details</h1>
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
                        <h1 className="heading text-lg font-bold mt-5 mb-3">Add Amenities Details</h1>
                    </div>

                    <Button
                        type='submit'
                        buttonType={"dark"}
                        onSubmit={onSubmit}
                        // onClick={() => setLoading(!loading)}
                        loading={loading}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </div >
    )
}

export default PropertyAdd