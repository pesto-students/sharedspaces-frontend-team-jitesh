import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropertyAccordion from '../../components/propertyAccordion/PropertyAccordion'
import { getAllProperty } from '../../store/actions/adminAction'
import { Link, useParams } from 'react-router-dom'
import Loader from '../../components/loader/Loader'
import Button from '../../components/button/Button'

const PropertyList = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const allProperties = useSelector(state => state.admin.allProperties)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let data = {
            search: params.searchKeyword
        }
        dispatch(getAllProperty(data, (value) => setLoading(value)))
    }, [params])

    return (
        <div>
            <div className="admin-header">
                <div className="flex justify-between">
                    <h1 className="heading text-lg font-bold mb-3">Properties</h1>
                    <Link to="/admin/property/add">
                        <div className='bg-gray-900 text-white rounded padding px-4 py-1 text-sm cursor-pointer'>Add Property</div>
                    </Link>
                </div>

            </div>
            <div className='flex h-10 container bg-gray-100 justify-between items-center mb-3 rounded shadow-new'>
                <h6 className='ml-8 font-bold text-base'>Property</h6>
                <h6 className='mr-8 font-bold text-base'>Action</h6>
            </div>
            {
                loading ?
                    <div className="flex w-100 justify-center py-40">
                        <Loader width={"w-10"} className={"text-gray-200"} />
                    </div>
                    :
                    allProperties?.map(property => {
                        return <PropertyAccordion key={property._id} property={property} spaces={property.spaces} />
                    })
            }
        </div >
    )
}

export default PropertyList;












