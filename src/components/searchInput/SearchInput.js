import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../button/Button'
import './searchInput.scss'

export default function SearchInput({ value }) {
    const navigate = useNavigate()
    const [search, setSearch] = useState(value ? value : null)
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            navigate(`/search/${search}`)
        }}>
            <div className='search-input-wrapper shadow-new bg-white rounded flex justify-between'>
                <input type="text" placeholder='Start your search...' name="search" value={search} onChange={e => setSearch(e.target.value)} required />
                <Link to={search !== null ? `/search/${search}` : '/search'}>
                    <Button type={"submit"} buttonType="primary">Search</Button>
                </Link>
            </div >
        </form>
    )
}
