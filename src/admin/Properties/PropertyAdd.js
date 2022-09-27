import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import Textarea from '../../components/textarea/Textarea'
import { addProperty } from '../../store/actions/adminAction'
import './propertyAdd.scss'

const PropertyAdd = () => {
    const dispatch = useDispatch()
    const [values, setValues] = useState({})
    const [loading, setLoading] = useState(false)

    const onInputChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault()

        const data = values
        dispatch(addProperty(data, (value) => setLoading(value)))
    }
    return (
        <div className="admin-body mb-10">
            <div className="admin-breadcrums mb-5">
                <Link to="/admin/" className="heading text-sm font-bold"> Add Property</Link>
                <img className='arrow' src="/assets/icons/chevron-right.png" alt="" />
                <Link to="/admin/" className="heading text-sm font-bold">Add Property</Link>
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
                        <div className="property-image-wrapper ml-20">
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


                    <div className="admin-header">
                        <h1 className="heading text-lg font-bold mt-5 mb-3">Add Address Details</h1>
                    </div>
                    <div className="main-wrapper">
                        <div className='left-section'>
                            <Input
                                label={"Address"}
                                name={"address"}
                                type="text"
                                value={values.address}
                                placeholder='Enter Address'
                                onChange={onInputChange}
                                className="flex flex-col"
                                required
                            />
                            <Input
                                label={"Postcode"}
                                name={"postcode"}
                                type="text"
                                value={values.postcode}
                                placeholder='Enter Postcode'
                                onChange={onInputChange}
                                className="flex flex-col"
                                required
                            />
                            <Input
                                label={"Latitude"}
                                name={"lat"}
                                type="text"
                                value={values.lat}
                                placeholder='Enter Latitude'
                                onChange={onInputChange}
                                className="flex flex-col"
                                required
                            />
                            <Input
                                label={"Longitude"}
                                name={"lng"}
                                type="text"
                                value={values.lng}
                                placeholder='Enter Longitude'
                                onChange={onInputChange}
                                className="flex flex-col"
                                required
                            />
                        </div>
                        <div className="property-image-wrapper ml-20">

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