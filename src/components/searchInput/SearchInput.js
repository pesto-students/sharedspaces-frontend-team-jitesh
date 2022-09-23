import React from 'react'
import Button from '../button/Button'
import './searchInput.scss'

export default function SearchInput() {
    return (
        <div className='search-input-wrapper shadow-new bg-white rounded flex justify-between'>
            <input type="text" placeholder='Start your search...' />
            <Button buttonType="primary">Search</Button>
        </div>
    )
}
