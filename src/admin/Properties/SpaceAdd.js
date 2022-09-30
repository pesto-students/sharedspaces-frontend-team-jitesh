import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Button from '../../components/button/Button'
import ImageUpload from '../../components/imageUpload/ImageUpload'
import Input from '../../components/input/Input'
import Textarea from '../../components/textarea/Textarea'
import { addSpace } from '../../store/actions/adminAction'
import './spaceAdd.scss'

const SpaceAdd = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { propertyId } = useParams()
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

    const uploadPath = (imagePath) => {
        setValues({
            ...values,
            spaceImage: imagePath
        })
    }


    return (
        <div className="admin-body mb-10">

            <div className="admin-breadcrums mb-3">
                <Link to="/admin/property" className="heading text-lg font-bold">Properties</Link>
                <img className='arrow mx-3' src="/assets/icons/chevron-right.png" alt="" />
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
                            <Textarea
                                label={"Space Description"}
                                name={"spaceDescription"}
                                type="text"
                                value={values.spaceDescription}
                                placeholder='Enter Space Description'
                                onChange={onInputChange}
                                className="flex flex-col"
                                required
                            />
                            <Input
                                label={"Number of Desks Available"}
                                name={"noOfDesks"}
                                type="number"
                                value={values.noOfDesks}
                                placeholder='Enter Number of Desks Available'
                                onChange={onInputChange}
                                className="flex flex-col"
                                required
                            />
                        </div>
                        <div className="right-section">
                            <div className="property-image-wrapper">
                                <ImageUpload
                                    uploadPath={uploadPath}
                                    uploadType="space"
                                // id=""
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