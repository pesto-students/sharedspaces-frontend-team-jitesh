import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './homePage.scss'
import SearchInput from "../../components/searchInput/SearchInput";
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { getAllProperty } from '../../store/actions/siteAction'
import Loader from '../../components/loader/Loader'

const HomePage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  const allProperties = useSelector(state => state.site.allProperties)
  const userDetail = useSelector(state => state.site.userDetail)


  useEffect(() => {
    let data = {}
    dispatch(getAllProperty(data, (value) => setLoading(value)))
  }, [])

  useEffect(() => {
    if (userDetail) {
      setIsUserLoggedIn(true)
    }
  }, [userDetail, userDetail?.token, userDetail?.role])


  const onListYourSpace = () => {
    if (isUserLoggedIn) {
      if (userDetail.role === "User") {
        navigate('/list-your-space')
      } else {
        navigate('/admin/property')
      }
    } else {
      navigate('/list-your-space')
    }
  }


  return (
    <>
      <div className="homepage-wrapper">
        <div className="search-wrapper">
          <div className="search-bg flex">
            <div className="left-bg bg-black">
            </div>
            <div className="right-bg bg-red-500">
            </div>
          </div>
          <div className="container-wrapper">
            <div className="section fade-in-bottom">
              <div className="left-section">
                <div className="search-with-heading">
                  <h1 className="text-white text-5xl font-bold py-10 leading-tight">
                    The  Best Place <br />
                    To Find Your<br />
                    Office Space
                  </h1>
                  <SearchInput />
                </div>
              </div>
              <div className="right-section">
                <img src="/assets/images/search-section.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="black-background">
          <div className="property-list-wrapper">
            <div className="popular-properties-section">
              <h1 className="text-black text-2xl font-bold py-10 leading-tight  ">
                Popular Properties
              </h1>

              {loading ?
                <div className="flex w-100 justify-center mt-10">
                  <Loader width={"w-10"} className={"text-gray-200"} />
                </div> :

                <div className="property-list">
                  {allProperties?.slice(0, 3)?.map(property =>
                    <Link to={`/property/${property._id}`} className="property-item bg-white shadow-new fade-in-bottom">
                      <div className="property-image">
                        <img src={property.propertyImage} alt={property.propertyTitle} />
                      </div>
                      <div className="property-description">
                        <p className="text-lg font-bold">{property.propertyTitle}</p>
                        <p className="text-sm text-gray-500">{property.address}</p>
                        <hr className="my-3" />
                        <Link to={`/property/${property._id}`} className="flex justify-end">
                          <Button buttonType={"primary"}>Book</Button>
                        </Link>
                      </div>
                    </Link>
                  )}
                </div>
              }
            </div>
          </div>

        </div>

        <div className="add-your-space-section flex flex-col items-center text-center">
          <h1 className="text-white text-3xl font-bold leading-tight mb-5">
            List Your Own Space
          </h1>
          <p className="text-gray-300 mb-10">
            More people use sharedspace.com to discover coworking spaces than <br />
            all the other platforms combined.
          </p>

          <Button buttonType={"primary"} onClick={onListYourSpace}>Start Now</Button>

        </div>

        <Footer />
      </div>
    </>
  );
}

export default HomePage