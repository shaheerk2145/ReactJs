import React, { useState } from 'react';
import { Logo, Input, Button } from './index';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import authService from '../Appwrite/auth';
import { logIn as authLogin } from '../store/authSlice';


function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('');

    const login = async (formData) => {
        setError('');
        try {
            const session = await authService.login(formData);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(authLogin(userData));
                navigate('/');
            }

        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <>
            <div>
                <div>
                    <div className='mb-3 flex justify-center'>
                        <span className='w-full inline-block max-w-[100px] '>
                            <Logo width='100%' />
                        </span>
                    </div>
                    <h2 className=' text-center text-2xl font-bold leading-tight'>
                        Sign In to your Account
                    </h2>
                    <p className='text-center mt-3 text-base text-black/55'>
                        Dont have any Account
                        <Link to='/signup'
                            className='font-medium text-blue transition-all duration-300 hover:underline'
                        >
                            Sign Up
                        </Link>
                    </p>
                    {error && <p className='text-red-600 text-center mt-8'>{error}</p>}
                    <form onSubmit={handleSubmit(login)} className='mt-9'>
                        <div className='space-y-5'>
                            <Input
                                label="Email"
                                placeholder="Please Enter your Email"
                                type="Email"
                                {...register("Email", {
                                    required: true,
                                    validate: {
                                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                            "Email address must be a valid address",
                                    }
                                })}
                            />
                            <Input
                                label="Password"
                                type="Password"
                                placeholder="Enter your Password"
                                {...register("password", {
                                    required: true
                                })}
                            />
                            <Button
                                type="submit"
                                className="w-full"
                            >
                                Sign In
                            </Button>
                        </div>
                    </form>

                </div>
            </div>
        </>

    )
}

export default Login