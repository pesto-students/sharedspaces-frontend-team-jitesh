import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './loginPage.scss'
import Input from '../../components/input/Input'
import { Link, useNavigate } from 'react-router-dom'
import { onLogin, onSocialLogin } from '../../store/actions/siteAction'
import Button from '../../components/button/Button'
import Loader from '../../components/loader/Loader'

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase.config"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const LoginPage = () => {
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

        const data = {
            email: values.email,
            password: values.password
        };

        dispatch(
            onLogin(data,
                (value) => setLoading(value),
                () => navigate("/"))
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
        <div className='login-wrapper flex'>
            {/* <ToastContainer /> */}
            <div className="left-section">
                <img src="/assets/images/login-bg.png" alt="" />
            </div>
            <div className="right-section">
                <Link to="/">
                    <img className='logo' src="/assets/images/logo-black.png" alt="" />
                </Link>
                <p className='text-gray-600 my-5'>Login and explore SharedSpace </p>

                <div className="form-wrapper">
                    <form onSubmit={onSubmit}>
                        <Input
                            label={"Email"}
                            name={"email"}
                            type="email"
                            value={values.email}
                            placeholder='Enter Email'
                            onChange={onInputChange}
                            required
                        />
                        <Input
                            label={"Password"}
                            name={"password"}
                            type="password"
                            value={values.password}
                            placeholder='Enter Password'
                            onChange={onInputChange}
                            required
                        />

                        <Button
                            type='submit'
                            buttonType={"dark"}
                            onSubmit={onSubmit}
                            // onClick={() => setLoading(!loading)}
                            loading={loading}
                            className={`w-full`}
                        >
                            Login
                        </Button>

                        <button onClick={signInWithGoogle}
                            className={`
                               social-google-btn w-full my-5 text-black border-2 border-gray-200 hover:bg-gray-200 hover:shadow-sm active:bg-gray-200 active:shadow-sm active:text-white px-6 py-1.5 font-medium rounded shadow-md transition duration-150 cursor-pointer block`
                            }>
                            {googleLoading ? <Loader width={"w-5 text-grey-200"}></Loader> : <><img className='google-icon mr-3' src="/assets/images/google-icon.png" alt="" />
                                Login with Google</>}
                        </button>


                        <p className='text-center'>Don’t have account ?  <Link to="/sign-up" className="text-red-500 cursor-pointer">Sign up</Link> </p>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default LoginPage