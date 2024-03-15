import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { adminLogin } from '../../store/action/addData';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../../validation';


const Login = ({ dispatch, res }) => {

    const [data, setData] = useState([
        {
            email: "",
            password: ""
        }
    ])

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;


    const onHandleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const onSubmit = () => {
        dispatch(adminLogin(data))
    }
    useEffect(() => {
        const dataa = res.data && res.data.data
        if (dataa) {
            if (dataa.code == 200) {
                toast.success(dataa.message, {
                    position: toast.POSITION.TOP_CENTER,

                });
                localStorage.setItem("token", dataa.token);
                setTimeout(() => {
                    window.location = "/home"
                }, 3000);
            }
            if (dataa.code == 401) {
                toast.warning(dataa.message, {
                    position: toast.POSITION.TOP_CENTER
                });

            }

        }

    }, [res])
    return (
        <>
            <div>
                <div className=' max-w-2xl mx-auto justify-between items-center px-10 xl:lg:md:sm:px-0 lg:justify-start lg:space-x-10 border-4 rounded my-[150px]'>
                    <div>
                        <div className=" flex flex-col justify-center sm:px-6 ">
                            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                                <h2 className=" text-center text-3xl font-extrabold text-gray-900  pt-[50px]">
                                    Admin login
                                </h2>
                            </div>

                            <div className="flex justify-center pt-2">
                            </div>
                            <div className="mt-8">
                                <div className="saleacSign bg-white   sm:rounded-lg sm:px-10">
                                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                                        <div className='flex flex-col'>
                                            <label className='mx-3 text-start text-[18px] font-semibold'>Email*</label>
                                            <input type="text" placeholder="Your Email Adress" {...register('email')} name='email' value={data.email} onChange={(e) => { onHandleChange(e) }} className={`form-control ${errors.email ? 'is-invalid' : ''} rounded-3xl bg-[#DBDBDB] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0`} autoComplete="off" autoCapitalize='no' />
                                            <div className="invalid-feedback  text-start ">{errors.email?.message}</div>
                                        </div>
                                        <div className='flex flex-col'>
                                            <label className='mx-3 text-start  text-[18px] font-semibold'>Password*</label>
                                            <input type="password" placeholder="Enter Password" {...register('password')} name='password' value={data.password} onChange={(e) => { onHandleChange(e) }} className={`form-control ${errors.password ? 'is-invalid' : ''} rounded-3xl bg-[#DBDBDB] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0`} autoComplete="off" autoCapitalize='no' />
                                            <div className="invalid-feedback text-start ">{errors.password?.message}</div>
                                        </div>

                                        <div className='text-center'>
                                            <button type='submit' className='btn bg-[#202040] text-[#fff] text-[18px] font-semibold py-1 uppercase px-[30px] border-4 border-[#202040] rounded-3xl hover:bg-[#fff] hover:text-[#202040] hover:border-4 hover:border-[#202040] mb-[50px]'>Log in</button>
                                            <ToastContainer />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    res: state.adminLogin
})

export default connect(mapStateToProps)(Login) 