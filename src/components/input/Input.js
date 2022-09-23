import React from 'react'

const Input = ({ name, value, type, id, placeholder, label, onChange, required }) => {
    return (
        <div className="input-group mb-4">
            <label htmlFor={name}>{label}</label>
            <input
                onChange={(e) => onChange(e)}
                name={name}
                value={value}
                type={type}
                id={id}
                placeholder={placeholder}
                className='border-2 px-2 py-1.5 rounded transition duration-150 ease-in-out focus:border-red-500'
                required
            />
        </div>
    )
}

export default Input