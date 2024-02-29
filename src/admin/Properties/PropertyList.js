import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropertyAccordion from '../../components/propertyAccordion/PropertyAccordion'
import { deleteProperty, deleteSpace, getAllProperty } from '../../store/actions/adminAction'
import { Link, useParams } from 'react-router-dom'
import Loader from '../../components/loader/Loader'
import Button from '../../components/button/Button'

const PropertyList = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const allProperties = useSelector(state => state.admin.allProperties)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let data = {}
        dispatch(getAllProperty(data, (value) => setLoading(value)))
    }, [params])

    const onDeleteProperty = (propertyId) => {
        let data = {}
        dispatch(
            deleteProperty(
                propertyId,
                (value) => setLoading(value),
                () => dispatch(getAllProperty(data, (value) => setLoading(value)))
            )
        )
    }
    const onDeleteSpace = (spaceId) => {
        let data = {}
        dispatch(
            deleteSpace(
                spaceId,
                (value) => setLoading(value),
                () => dispatch(getAllProperty(data, (value) => setLoading(value)))
            )
        )
    }

    return (
        <div>
            <div className="admin-header">
                <div className="flex justify-between">
                    <h1 className="heading text-lg font-bold mb-3">Properties</h1>
                    <Link to="/admin/property/add">
                        <div className='bg-gray-300 rounded padding px-4 py-1 text-sm cursor-pointer hover:bg-gray-900 hover:text-white'>Add Property</div>
                    </Link>
                </div>

            </div>
            <div className='flex justify-between items-center h-10 bg-gray-200 text-gray-600 uppercase text-sm leading-normal shadow-new'>
                <h6 className='ml-8 font-bold'>Property</h6>
                <h6 className='mr-8 font-bold'>Actions</h6>
            </div>
            {
                loading ?
                    <div className="flex w-100 justify-center py-40">
                        <Loader width={"w-10"} className={"text-gray-200"} />
                    </div>
                    :
                    allProperties?.map(property => {
                        return (
                            <PropertyAccordion
                                key={property._id}
                                property={property}
                                spaces={property.spaces}
                                onDeleteProperty={onDeleteProperty}
                                onDeleteSpace={onDeleteSpace}
                            />
                        )

                    })
            }
        </div >
    )
}

export default PropertyList;












