import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { teacherRegistration } from '../../store/action/addData'
import { code } from '../../phoneCode'
import Nav from '../nav/Nav';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { teacherAddvalidationSchema } from '../../validation';

const Teacher = ({ dispatch, res }) => {

    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();
    const [email, setEmail] = useState();
    const [phone_code, setPhoneCode] = useState();
    const [mobile, setMobile] = useState();
    const [profile, setProfile] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [position, setPosition] = useState();
    const [experience, setExperience] = useState();
    const [status, setStatus] = useState();

    const formdata = new FormData();
    formdata.append("first_name", first_name);
    formdata.append("last_name", last_name);
    formdata.append("email", email);
    formdata.append("phone_code", phone_code);
    formdata.append("mobile", mobile);
    formdata.append("profile", profile);
    formdata.append("position", position);
    formdata.append("experience", experience);
    formdata.append("status", status);
    formdata.append("password", password);
    formdata.append("confirmPassword", confirmPassword);


    const imgHandler = (e) => {
        setProfile(e.target.files[0]);
    };

    const formOptions = { resolver: yupResolver(teacherAddvalidationSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    const onSubmit = () => {
        dispatch(teacherRegistration(formdata))
    }

    useEffect((e) => {
        const data = res.data && res.data.data

        if (data) {
            if (data.code === 201) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER
                })
                setTimeout(() => {
                    window.location = '/teacher';
                }, 3000);
            }
            if (data.code === 409) {
                toast.warning(data.message, {
                    position: toast.POSITION.TOP_CENTER
                })
                setTimeout(() => {
                    window.location = '/teacher';
                }, 3000);
            }

        }

    }, [res]);



    return (
        <>
            <div className=''>


                <Nav title="add teacher" />
                <div className='max-w-2xl mx-auto justify-between  px-0 py-5 sm:px-6 sm:py-6 lg:px-8 lg:justify-start  my-[30px]'>
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div className='border-2 px-10 rounded-2xl'>
                            <h1 className='text-[35px] font-semibold text-center mt-[10px]'>Teacher Details</h1>

                            <div className='flex flex-col gap-2 xl:flex-row lg:flex-row md:flex-row sm:flex-row'>
                                <div className='py-3 w-[100%] fe flex flex-col'>
                                    <label className='float-start text-start  text-[18px] font-semibold '>First Name</label>
                                    <input type="text" placeholder="Enter First Name" {...register('first_name')} name='first_name' onChange={(e) => { setFirstName(e.target.value) }} value={first_name} className={`form-control ${errors.first_name ? 'is-invalid' : ''} rounded-3xl bg-[#DBDBDB] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0`} autoComplete='off' autoCapitalize='on'/>
                                    <div className="invalid-feedback text-[red] text-start capitalize ">{errors.first_name?.message}</div>
                                </div>
                                <div className='py-3 w-[100%] fe flex flex-col'>
                                    <label className='float-start text-start  text-[18px] font-semibold '>Last Name</label>
                                    <input type="text" placeholder="Enter Last Name" {...register('last_name')} name='last_name' onChange={(e) => { setLastName(e.target.value) }} value={last_name} className={`form-control ${errors.last_name ? 'is-invalid' : ''} rounded-3xl bg-[#DBDBDB] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0`} autoComplete='off' />
                                    <div className="invalid-feedback text-[red] text-start capitalize ">{errors.last_name?.message}</div>
                                </div>
                            </div>

                            <div className='py-3 w-[100%] fe flex flex-col'>
                                <label className='float-start text-start  text-[18px] font-semibold '>Email</label>

                                <input type="text" placeholder="Enter Email" {...register('email')} name='email' onChange={(e) => { setEmail(e.target.value) }} value={email} className={`form-control ${errors.email ? 'is-invalid' : ''} rounded-3xl bg-[#DBDBDB] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0`} autoComplete='off' />
                                <div className="invalid-feedback text-[red] text-start capitalize ">{errors.email?.message}</div>
                            </div>
                            <div className='flex flex-col gap-2 xl:flex-row lg:flex-row md:flex-row sm:flex-row'>
                                <div className='py-3 w-[100%] fe flex flex-col'>
                                    <label className='float-start text-start  text-[18px] font-semibold '>Password</label>
                                    <input type="text" placeholder="Enter Passwrod" name='password' {...register('password')} onChange={(e) => setPassword(e.target.value)} value={password}  className={`form-control ${errors.password ? 'is-invalid' : ''} rounded-3xl bg-[#DBDBDB] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0`} autoComplete='off' />
                                    <div className="invalid-feedback text-[red] text-start capitalize ">{errors.password?.message}</div>
                                </div>
                                <div className='py-3 w-[100%] fe flex flex-col'>
                                    <label className='float-start text-start  text-[18px] font-semibold '>confirmPassword</label>
                                    <input type="text" placeholder="Enter ConfirmPassword" name='confirmPassword' {...register('confirmPassword')}  onChange={(e) =>setConfirmPassword(e.target.value)} value={confirmPassword}  className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''} rounded-3xl bg-[#DBDBDB] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0`} autoComplete='off' />
                                    <div className="invalid-feedback text-[red] text-start capitalize ">{errors.confirmPassword?.message}</div>

                                </div>
                            </div>


                            <div className='py-3 w-[100%] fe flex flex-col'>
                                <label className=' text-[18px] text-start font-semibold text-start'>Mobile Number</label>
                                <div className='flex gap-3'>
                                    <select id="countries" className="w-[20%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" name="phone_code" value={phone_code} onChange={(e) => { setPhoneCode(e.target.value) }}>
                                        <option className='pl-2' >Code</option>
                                        {
                                            code.map((val) => {
                                                return <>
                                                    <option value={val.code}>{val.iso}+{val.code}</option>
                                                </>
                                            })
                                        }

                                    </select>
                                    <div className='w-[100%] pt-2'>
                                        <input type="text" className={`form-control ${errors.mobile ? 'is-invalid' : ''} rounded-3xl bg-[#DBDBDB] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0`} placeholder='Your 10 Digit Mobile Number'  {...register('mobile')} name='mobile' value={mobile} onChange={(e) => { setMobile(e.target.value) }} autoComplete='off' />
                                        <div className="invalid-feedback text-[red] text-start capitalize ">{errors.mobile?.message}</div>
                                    </div>
                                </div>

                            </div>

                            <div className='py-3 w-[100%] fe flex flex-col'>
                                <label className='float-start text-start  text-[18px] font-semibold '>Profile</label>
                                <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-full cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" name='profile' type="file" onChange={imgHandler} />
                            </div>
                            <div className='py-3 w-[100%] fe flex flex-col'>
                                <label className='float-start text-start  text-[18px] font-semibold '>Position</label>
                                <input type="text" placeholder="Enter Position" name='position' {...register('position')} className={`form-control ${errors.position ? 'is-invalid' : ''} rounded-3xl bg-[#DBDBDB] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0`} onChange={(e) => { setPosition(e.target.value) }} value={position} autoComplete='off'  />
                                <div className="invalid-feedback text-[red] text-start capitalize ">{errors.position?.message}</div>
                            </div>
                            <div className='py-3 w-[100%] fe flex flex-col'>
                                <label className='float-start text-start  text-[18px] font-semibold '>Experience</label>
                                <input type="text" placeholder="Enter Position" name='experience' {...register('experience')} className={`form-control ${errors.experience ? 'is-invalid' : ''} rounded-3xl bg-[#DBDBDB] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0`} onChange={(e) => { setExperience(e.target.value) }} value={experience} autoComplete='off' />
                                <div className="invalid-feedback text-[red] text-start capitalize ">{errors.experience?.message}</div>
                            </div>
                            <div>
                           <p className='float-start text-[18px]  text-start font-semibold mx-2 '>Term</p>
                                <div className='flex gap-8'>
                                    <div className='w-[25%]'>
                                    <input type="radio" {...register('status')} name='status'  onChange={(e) => { setStatus(e.target.value) }} className={`rounded bg-[#DBDBDB] form-control  ${errors.status ? 'is-invalid' : ''} w-[20px] h-[20px]  ml-0 border-0`} value="1" /><span className='ml-3'>active</span>
                                    <div className="invalid-feedback text-[red] text-start capitalize ">{errors.status?.message}</div>
                                    </div>
                                    <div className='w-[30%]'>
                                    <input type="radio" {...register('status')} name='status' onChange={(e) => { setStatus(e.target.value) }} className={`rounded bg-[#DBDBDB]  ${errors.status ? 'is-invalid' : ''} form-control w-[20px] h-[20px] ml-[10px] border-0`} value="2" /><span className='ml-3'>non active</span>
                                    </div>
                                    
                                </div>
                           </div>
                                
                            <div className='text-center my-10'>
                                <button type='submit' className='text-[18px] font-semibold text-[#fff] bg-[#202040] rounded-3xl py-1 px-3 hover:bg-[#3DC0DF] hover:text-[#202040] uppercase' >Submit</button>
                                <ToastContainer />
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    res: state.teacherRegistration
})

export default connect(mapStateToProps)(Teacher)