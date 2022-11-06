import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Button from '../../components/button/Button'
import ImageUpload from '../../components/imageUpload/ImageUpload'
import Input from '../../components/input/Input'
import { addAmenity } from '../../store/actions/adminAction'
import './amenityAdd.scss'

const AmenityAdd = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
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

        const data = {
            ...values,
        }

        dispatch(
            addAmenity(
                data,
                (value) => setLoading(value),
                () => navigate("/admin/amenities")
            )
        )
    }

    const uploadPath = (imagePath) => {
        setValues({
            ...values,
            amenityImage: imagePath
        })
    }


    return (
        <div className="admin-body mb-10">

            <div className="admin-breadcrums mb-3">
                <Link to="/admin/amenities" className="heading text-lg font-bold">Amenities</Link>
                <img className='arrow mx-3' src="/assets/icons/chevron-right.png" alt="" />
                <div className="heading text-lg font-bold">Add Amenity</div>
            </div>

            <div class="body-section bg-white shadow-new p-5 rounded">
                <div className="admin-header">
                    <h1 className="heading text-lg font-bold mb-3">Add Amenity Details</h1>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="main-wrapper">
                        <div className='left-section'>
                            <Input
                                label={"Amenity Title"}
                                name={"amenityTitle"}
                                type="text"
                                value={values.amenityTitle}
                                placeholder='Enter Amenity Title'
                                onChange={onInputChange}
                                className="flex flex-col"
                                required
                            />
                        </div>
                        <div className="right-section">
                            <div className="property-image-wrapper">
                                <ImageUpload
                                    uploadPath={uploadPath}
                                    uploadType="amenity"
                                // id=""
                                />
                            </div>
                        </div>

                    </div>


                    <Button
                        type='submit'
                        buttonType={"dark"}
                        onSubmit={onSubmit}
                        className="min-w-30"
                        loading={loading}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </div >
    )
}

export default AmenityAdd