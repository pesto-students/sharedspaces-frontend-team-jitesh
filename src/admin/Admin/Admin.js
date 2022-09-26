import React from 'react'
import './admin.scss'
import AdminSidebar from '../../components/adminSidebar/AdminSidebar'
import { Outlet } from 'react-router-dom'

const Admin = () => {
    return (
        <div className="admin-wrapper">
            <AdminSidebar />
            <div className='admin-section px-1 hide-scrollbar'>{<Outlet />}</div>
        </div>
    )
}

export default Admin