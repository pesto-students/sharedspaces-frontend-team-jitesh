import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import { setUserDetail } from "./store/actions/siteAction";

// Site Routes
import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import PropertyPage from "./pages/propertyPage/PropertyPage";
import SearchPage from "./pages/searchPage/SearchPage";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import SpacePage from "./pages/spacePage/SpacePage";

// Admin Routes
import Admin from "./admin/Admin/Admin";
import Dashboard from "./admin/Dashboard/Dashboard";
import Bookings from "./admin/Bookings/Bookings";
import Users from "./admin/Users/Users";
import PropertyAdd from "./admin/Properties/PropertyAdd";

function App() {
  const location = useLocation()
  const dispatch = useDispatch()

  let userDetail = null
  if (localStorage.getItem('ss_user')) {
    userDetail = JSON.parse(localStorage.getItem('ss_user'))
  }

  useEffect(() => {
    dispatch(setUserDetail(userDetail))
  }, [])
  return (
    <div className="App">

      <Navbar location={location} />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />


        {/* // Site Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/search/">
          <Route path=":searchKeyword" element={<SearchPage />} />
          <Route path="" element={<SearchPage />} />
        </Route>
        <Route path="/property/:propertyId" element={<PropertyPage />} />
        <Route path="/space/:propertyId/:spaceId" element={<SpacePage />} />

        {/* // Admin Routes */}
        <Route element={<Admin />} >
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/bookings" element={<Bookings />} />
          <Route path="/admin/property/add" element={<PropertyAdd />} />
        </Route>
      </Routes>

    </div >
  );
}

export default App;
