import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Button from '../../components/button/Button'
import ImageUpload from '../../components/imageUpload/ImageUpload'
import Input from '../../components/input/Input'
import Textarea from '../../components/textarea/Textarea'
import { addSpace, updateSpace } from '../../store/actions/adminAction'
import { getSpace } from '../../store/actions/siteAction'
import { SET_SPACE } from '../../store/types/siteTypes'
import './spaceAdd.scss'

const SpaceAdd = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const { propertyId, spaceId } = params
    const [values, setValues] = useState({})
    const [loading, setLoading] = useState(false)
    const [isEditView, setIsEditView] = useState(false)

    const space = useSelector(state => state.site.space.space)

    useEffect(() => {
        if (spaceId) { 
            dispatch(getSpace(spaceId, (value) => setLoading(value)))
        } else {
            dispatch({
                type: SET_SPACE,
                payload: {}
            })
        }
    }, [params])


    useEffect(() => {
        if (params.spaceId) {
            setIsEditView(true)
            setValues({
                spaceTitle: space?.spaceTitle,
                spaceDescription: space?.spaceDescription,
                noOfDesks: space?.noOfDesks,
                spaceImage: space?.spaceImage
            }) 
        } else {
            setIsEditView(false)
        }
    }, [space])

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
            spaceId
        }

        if (isEditView) {
            dispatch(
                updateSpace(
                    params.spaceId,
                    data,
                    (value) => setLoading(value),
                () => navigate("/admin/property")
            ))
        } else {
            dispatch(
                addSpace(
                    data,
                    (value) => setLoading(value),
                    () => navigate("/admin/property")
                )
            )
        }
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
                <Link to="/admin/property" className="heading text-lg font-bold">Spaces</Link>
                <img className='arrow mx-3' src="/assets/icons/chevron-right.png" alt="" />
                <div className="heading text-lg font-bold">{isEditView ? "Edit Space" : "Add Space"} </div>
            </div>

            <div class="body-section bg-white shadow-new p-5 rounded">
                <div className="admin-header">
                    <h1 className="heading text-lg font-bold mb-3">{isEditView ? "Edit" : "Add"} Space Details</h1>
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
                                    uploadedImage={values.spaceImage}
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
                        {isEditView ? "Update" : "Submit"} 
                    </Button>
                </form>
            </div>
        </div >
    )
}

export default SpaceAdd