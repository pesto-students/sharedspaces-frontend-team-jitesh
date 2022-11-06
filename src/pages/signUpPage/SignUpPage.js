import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './signUpPage.scss'
import Input from '../../components/input/Input'

import { Link, useNavigate } from 'react-router-dom'
import { onRegister, onSocialLogin } from '../../store/actions/siteAction'
import { toast } from 'react-toastify';
import Button from '../../components/button/Button'

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase.config"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Loader from '../../components/loader/Loader'


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();




const SignUpPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [values, setValues] = useState({});
    const [loading, setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);

    const userDetail = useSelector(state => state.site.userDetail)



    useEffect(() => {
        if (userDetail?.token) {
            navigate("/")
        }
    }, [userDetail])

    const onInputChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };
    const onSubmit = e => {
        e.preventDefault();

        const { name, email, phoneNumber, password, cpassword } = values;

        if (password.length <= 5) {
            toast.error("Password must be at least 6 characters.");
            return false;
        }

        if (password !== cpassword) {
            toast.error("Password should be same!");
            return false;
        }

        const data = {
            name,
            email,
            phoneNumber,
            password
        };

        dispatch(
            onRegister(data,
                (value) => setLoading(value),
                () => navigate("/")

            )
        )

    };

    const signInWithGoogle = () => {
        setGoogleLoading(true)
        signInWithPopup(auth, provider)
            .then((result) => {
                let data = {
                    name: result.user.displayName,
                    email: result.user.email,
                    phoneNumber: result.user.phoneNumber,
                    loginType: "sso",
                    profileImage: result.user.photoURL
                }


                dispatch(
                    onSocialLogin(
                        data,
                        (value) => setGoogleLoading(value),
                        () => navigate("/")
                    )
                )
            })
            .catch((error) => {
                console.log(error);
            });
    };



    return (
        <div className='signup-wrapper flex'>
            <div className="left-section">
                <img src="/assets/images/login-bg.png" alt="" />
            </div>
            <div className="right-section">
                <Link to="/">
                    <img className='logo' src="/assets/images/logo-black.png" alt="" />
                </Link>
                <p className='text-gray-600 my-5'>Join the SharedSpace Community</p>

                <div className="form-wrapper">
                    <form onSubmit={onSubmit}>
                        <Input
                            type="text"
                            label={"Name"}
                            name="name"
                            value={values.name}
                            placeholder='Enter Name'
                            onChange={onInputChange}
                            required
                        />
                        <Input
                            type="email"
                            label={"Email"}
                            name={"email"}
                            value={values.email}
                            placeholder='Enter Email'
                            onChange={onInputChange}
                            required
                        />
                        <Input
                            type="number"
                            label={"Phone Number"}
                            name={"phoneNumber"}
                            value={values.phoneNumber}
                            placeholder='Enter Phone Number'
                            onChange={onInputChange}
                            required
                        />
                        <Input
                            type="password"
                            label={"Password"}
                            name={"password"}
                            value={values.password}
                            placeholder='Enter Password'
                            onChange={onInputChange}
                            required
                        />
                        <Input
                            type="password"
                            label={"Confirm Password"}
                            name={"cpassword"}
                            value={values.cpassword}
                            placeholder='Enter Confirm Password'
                            onChange={onInputChange}
                            required
                        />

                        <Button
                            type='submit'
                            buttonType={"dark"}
                            onSubmit={onSubmit}
                            loading={loading}
                            className={`w-full`}
                        >
                            Sign Up
                        </Button>


                    </form>

                    <button onClick={signInWithGoogle}
                        className={`
                               social-google-btn w-full my-5 text-black border-2 border-gray-200 hover:bg-gray-200 hover:shadow-sm active:bg-gray-200 active:shadow-sm active:text-white px-6 py-1.5 font-medium rounded shadow-md transition duration-150 cursor-pointer block`
                        }>
                        {
                            googleLoading ?
                                <Loader width={"w-5"} className="text-gray-300" />
                                :
                                <>
                                    <img className='google-icon mr-3' src="/assets/images/google-icon.png" alt="Sign Up with Google" />
                                    Sign Up with Google
                                </>
                        }
                    </button>

                    <p className='text-center'>Already have an account ? <Link to="/login" className="text-red-500 cursor-pointer">Login</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage