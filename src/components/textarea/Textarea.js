import React from 'react'
import './textarea.scss'

const Textarea = ({ name, value, type, id, placeholder, label, onChange, required, className }) => {
    return (
        <div className={`textarea-group mb-4 ${className}`}>
            <label htmlFor={name}>{label}</label>
            <textarea
                onChange={(e) => onChange(e)}
                name={name}
                value={value}
                type={type}
                id={id}
                placeholder={placeholder}
                className='border-2 px-2 py-1.5 rounded transition duration-150 ease-in-out focus:border-gray-500'
                required
            />
        </div>
    )
}

export default Textarea