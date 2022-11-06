import React from 'react'
import './button.scss'
import Loader from '../loader/Loader'

export default function Button({ loading, children, type, buttonType, className, onSubmit, onClick }) {
    return (
        <button
            data-testid="button"
            type={type}
            onSubmit={onSubmit}
            onClick={onClick}
            className={`
            btn-wrapper
        ${buttonType === "primary" && "bg-red-500 text-white border-2 border-red-500 hover:bg-red-500 hover:shadow-sm active:bg-red-800 active:shadow-sm active:text-white"}
        ${buttonType === "primary-outline" && "bg-white text-red-500 border-red-500 border-2 hover:bg-red-500 hover:text-white hover:shadow-sm active:bg-red-800 active:shadow-sm active:text-white"}
        ${buttonType === "dark" && "bg-gray-800 text-white border-2 border-gray-800 hover:bg-gray-800 hover:shadow-sm active:bg-gray-800 active:shadow-sm active:text-white"}
        ${buttonType === "dark-outline" && "bg-white text-gray-800 border-gray-800 border-2 hover:bg-gray-800 hover:text-white hover:shadow-sm active:bg-red-800 active:shadow-sm active:text-white"}
        ${className}
        px-6 py-1.5 font-medium rounded shadow-md transition duration-150 ease-in-out  whitespace-nowrap cursor-pointer`}>
            {loading ? <Loader width={"w-5"} /> : children}
        </button>
    )
}
