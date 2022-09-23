import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './loginPage.scss'
import Input from '../../components/input/Input'
import { Link, useNavigate } from 'react-router-dom'
import { onLogin } from '../../store/actions/siteAction'
import Button from '../../components/button/Button'

const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [values, setValues] = useState({});
    const [loading, setLoading] = useState(false);

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

                        <button
                            className={`
                               social-google-btn w-full my-5 text-black border-2 border-gray-200 hover:bg-gray-200 hover:shadow-sm active:bg-gray-200 active:shadow-sm active:text-white px-6 py-1.5 font-medium rounded shadow-md transition duration-150 cursor-pointer block`
                            }>
                            <img className='google-icon mr-3' src="/assets/images/google-icon.png" alt="" />

                            Login with Google
                        </button>


                        <p className='text-center'>Don’t have account ?  <Link to="/sign-up" className="text-red-500 cursor-pointer">Sign up</Link> </p>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default LoginPage