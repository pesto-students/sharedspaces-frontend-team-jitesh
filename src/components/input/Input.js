import React from 'react'
import './input.scss'

const Input = ({ name, value, type, id, placeholder, label, onChange, required, className, disabled }) => {
    return (
        <div className={`input-group mb-4 ${className}`}>
            <label htmlFor={name}>{label}</label>
            <input
                onChange={(e) => onChange(e)}
                name={name}
                value={value}
                type={type}
                id={id}
                placeholder={placeholder}
                className='border-2 px-2 py-1.5 rounded transition duration-150 ease-in-out focus:border-gray-500'
                required
                disabled={disabled ? disabled : false}
            />
        </div>
    )
}

export default Input