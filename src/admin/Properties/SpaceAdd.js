import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import Textarea from '../../components/textarea/Textarea'
import { addSpace } from '../../store/actions/adminAction'
import './spaceAdd.scss'

const SpaceAdd = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { propertyId } = useParams()
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
            ...values,
            propertyId
        }
        dispatch(
            addSpace(
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
                <div className="heading text-lg font-bold">Add Space</div>
            </div>

            <div class="body-section bg-white shadow-new p-5 rounded">
                <div className="admin-header">
                    <h1 className="heading text-lg font-bold mb-3">Add Space Details</h1>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="main-wrapper">
                        <div className='left-section'>
                            <Input
                                label={"Space Title"}
                                name={"spaceTitle"}
                                type="text"
                                value={values.spaceTitle}
                                placeholder='Enter Space Title'
                                onChange={onInputChange}
                                className="flex flex-col"
                                required
                            />
                            <Input
                                label={"Space Description"}
                                name={"spaceDescription"}
                                type="text"
                                value={values.spaceDescription}
                                placeholder='Enter Space Description'
                                onChange={onInputChange}
                                className="flex flex-col"
                                required
                            />
                            <Textarea
                                label={"Number of Desks Available"}
                                name={"noOfDesks"}
                                type="text"
                                value={values.noOfDesks}
                                placeholder='Enter Number of Desks Available'
                                onChange={onInputChange}
                                className="flex flex-col"
                                required
                            />
                        </div>
                        <div className="right-section">
                            <div className="property-image-wrapper">
                                <Input
                                    label={"Space Image"}
                                    name={"spaceImage"}
                                    type="file"
                                    value={values.spaceImage}
                                    placeholder='Enter Space Image'
                                    onChange={onInputChange}
                                    className="flex flex-col"
                                    required
                                />
                            </div>
                        </div>

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

export default SpaceAdd