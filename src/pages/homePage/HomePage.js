import React, { useEffect, useState } from "react";
import './homePage.scss'
import SearchInput from "../../components/searchInput/SearchInput";
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

const HomePage = () => {
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
            <div className="section">
              <div className="left-section">
                <div className="search-with-heading">
                  <h1 className="text-white text-5xl font-bold py-10 leading-tight  ">
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

              <div className="property-list">
                <div className="property-item bg-white shadow-new">
                  <div className="property-image">
                    <img src="/assets/images/property-one.png" alt="" />
                  </div>
                  <div className="property-description">
                    <p className="text-lg font-bold">Regus Office Center</p>
                    <p className="text-md text-gray-500">Home to downtown, New York</p>
                    <hr className="my-3" />
                    <div className="flex justify-end">
                      <Button buttonType={"primary"}>Book</Button>
                    </div>
                  </div>
                </div>
                <div className="property-item bg-white shadow-new">
                  <div className="property-image">
                    <img src="/assets/images/property-two.png" alt="" />
                  </div>
                  <div className="property-description">
                    <p className="text-lg font-bold">Regus Office Center</p>
                    <p className="text-md text-gray-500">Home to downtown, New York</p>
                    <hr className="my-3" />
                    <div className="flex justify-end">
                      <Button buttonType={"primary"}>Book</Button>
                    </div>
                  </div>
                </div>
                <div className="property-item bg-white shadow-new">
                  <div className="property-image">
                    <img src="/assets/images/property-three.png" alt="" />
                  </div>
                  <div className="property-description">
                    <p className="text-lg font-bold">Regus Office Center</p>
                    <p className="text-md text-gray-500">Home to downtown, New York</p>
                    <hr className="my-3" />
                    <div className="flex justify-end">
                      <Button buttonType={"primary"}>Book</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="add-your-space-section flex flex-col items-center text-center">
          <h1 className="text-white text-3xl font-bold leading-tight mb-5">
            Add Your Own Space
          </h1>
          <p className="text-gray-300 mb-10">
            More people use sharedspace.com to discover coworking spaces than <br />
            all the other platforms combined.
          </p>
          <Link to="/admin/dashboard">
            <Button buttonType={"primary"} className="uppercase">Start Now</Button>
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default HomePage