import React from 'react'
import './searchPage.scss'
import SearchInput from '../../components/searchInput/SearchInput'
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'

const SearchPage = () => {
    return (
        <div className='search-wrapper flex'>
            <div className="left-section hide-scrollbar">
                <SearchInput />
                <p className='gray-700 py-2'>0 Property Found</p>
                <div className="property-list hide-scrollbar">
                    <Link to="/property/1" className="property-item flex shadow-new cursor-pointer">
                        <div className="property-image">
                            <img src="/assets/images/search-property.png" alt="" />
                        </div>
                        <div className="property-description">
                            <p className="text-lg font-bold">Regus Office Center</p>
                            <p className="text-md text-gray-500">Home to downtown, New York</p>

                            <hr className="my-3" />
                            <div className="flex justify-between items-center">
                                <p className='text-sm text-gray-500'>4 Desk Available</p>  <Button buttonType={"primary"}>Book</Button>
                            </div>
                        </div>
                    </Link>
                    <Link to="/property/1" className="property-item flex shadow-new cursor-pointer">
                        <div className="property-image">
                            <img src="/assets/images/search-property.png" alt="" />
                        </div>
                        <div className="property-description">
                            <p className="text-lg font-bold">Regus Office Center</p>
                            <p className="text-md text-gray-500">Home to downtown, New York</p>

                            <hr className="my-3" />
                            <div className="flex justify-between items-center">
                                <p className='text-sm text-gray-500'>4 Desk Available</p>  <Button buttonType={"primary"}>Book</Button>
                            </div>
                        </div>
                    </Link>
                    <Link to="/property/1" className="property-item flex shadow-new cursor-pointer">
                        <div className="property-image">
                            <img src="/assets/images/search-property.png" alt="" />
                        </div>
                        <div className="property-description">
                            <p className="text-lg font-bold">Regus Office Center</p>
                            <p className="text-md text-gray-500">Home to downtown, New York</p>

                            <hr className="my-3" />
                            <div className="flex justify-between items-center">
                                <p className='text-sm text-gray-500'>4 Desk Available</p>  <Button buttonType={"primary"}>Book</Button>
                            </div>
                        </div>
                    </Link>
                    <Link to="/property/1" className="property-item flex shadow-new cursor-pointer">
                        <div className="property-image">
                            <img src="/assets/images/search-property.png" alt="" />
                        </div>
                        <div className="property-description">
                            <p className="text-lg font-bold">Regus Office Center</p>
                            <p className="text-md text-gray-500">Home to downtown, New York</p>

                            <hr className="my-3" />
                            <div className="flex justify-between items-center">
                                <p className='text-sm text-gray-500'>4 Desk Available</p>  <Button buttonType={"primary"}>Book</Button>
                            </div>
                        </div>
                    </Link>
                    <Link to="/property/1" className="property-item flex shadow-new cursor-pointer">
                        <div className="property-image">
                            <img src="/assets/images/search-property.png" alt="" />
                        </div>
                        <div className="property-description">
                            <p className="text-lg font-bold">Regus Office Center</p>
                            <p className="text-md text-gray-500">Home to downtown, New York</p>

                            <hr className="my-3" />
                            <div className="flex justify-between items-center">
                                <p className='text-sm text-gray-500'>4 Desk Available</p>  <Button buttonType={"primary"}>Book</Button>
                            </div>
                        </div>
                    </Link>
                    <Link to="/property/1" className="property-item flex shadow-new cursor-pointer">
                        <div className="property-image">
                            <img src="/assets/images/search-property.png" alt="" />
                        </div>
                        <div className="property-description">
                            <p className="text-lg font-bold">Regus Office Center</p>
                            <p className="text-md text-gray-500">Home to downtown, New York</p>

                            <hr className="my-3" />
                            <div className="flex justify-between items-center">
                                <p className='text-sm text-gray-500'>4 Desk Available</p>  <Button buttonType={"primary"}>Book</Button>
                            </div>
                        </div>
                    </Link>
                    <Link to="/property/1" className="property-item flex shadow-new cursor-pointer">
                        <div className="property-image">
                            <img src="/assets/images/search-property.png" alt="" />
                        </div>
                        <div className="property-description">
                            <p className="text-lg font-bold">Regus Office Center</p>
                            <p className="text-md text-gray-500">Home to downtown, New York</p>

                            <hr className="my-3" />
                            <div className="flex justify-between items-center">
                                <p className='text-sm text-gray-500'>4 Desk Available</p>  <Button buttonType={"primary"}>Book</Button>
                            </div>
                        </div>
                    </Link>
                </div >
            </div >
            <div className="right-section">
                <img src="/assets/images/map.png" alt="" />
            </div>
        </div >
    )
}

export default SearchPage