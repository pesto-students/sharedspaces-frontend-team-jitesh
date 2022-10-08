import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUser } from '../../store/actions/adminAction'
import { Link } from 'react-router-dom'
import Loader from '../../components/loader/Loader'
import moment from 'moment'

const Users = () => {
    const dispatch = useDispatch()
    const allUsers = useSelector(state => state.admin.allUsers)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let data = {}
        dispatch(getAllUser(data, (value) => setLoading(value)))
    }, [])

    return (
        <div className="admin-body">
            <div className="admin-header">
                <h1 className="heading text-lg font-bold mb-3">Users</h1>
            </div>

            {
                loading ?
                    <div className="flex w-100 justify-center py-40">
                        <Loader width={"w-10"} className={"text-gray-200"} />
                    </div>
                    :
                    <div class="bg-white shadow-md rounded fade-in-bottom">
                        <table class="min-w-max w-full table-auto">
                            <thead>
                                <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th class="py-3 px-4 text-left">Full Name</th>
                                    <th class="py-3 px-4 text-left">Email ID</th>
                                    <th class="py-3 px-4 text-left">Phone Number</th>
                                    <th class="py-3 px-4 text-left">Register Date</th>
                                    <th class="py-3 px-4 text-center">Role</th>
                                    <th class="py-3 px-4 text-center">Status</th>
                                    {/* <th class="py-3 px-4 text-center">Actions</th> */}
                                </tr>
                            </thead>
                            <tbody class="text-gray-600 text-sm">
                                {allUsers?.map((user, key) =>
                                    <tr key={key} class="border-b border-gray-200 hover:bg-gray-100">

                                        <td class="py-3 px-4 text-left">
                                            <div class="flex items-center">
                                                <span>{user.name}</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-4 text-left">
                                            <div class="flex items-center">
                                                <span>{user.email}</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-4 text-left">
                                            <div class="flex items-center">
                                                <span> {user.phoneNumber}</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-4 text-left">
                                            <div class="flex items-center">
                                                <span>{moment(user.createdAt).format("DD-MM-YYYY")}</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-4 text-center">
                                            <span class="bg-gray-200 text-gray-600 py-1 px-3 rounded-full text-xs">{user.role}</span>

                                        </td>
                                        <td class="py-3 px-4 text-center">
                                            {user ? <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Active</span> : <span class="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">Deactive</span>}
                                        </td>
                                        {/* <td class="py-3 px-4 text-center">
                                    <div class="flex item-center justify-center">
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                    </div>
                                </td> */}
                                    </tr>
                                )}



                            </tbody>
                        </table>
                    </div>}
        </div>


    )
}

export default Users