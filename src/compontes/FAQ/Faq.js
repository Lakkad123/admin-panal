import { dispatch } from 'd3'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Nav from '../nav/Nav'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addQuetionion } from '../../store/action/addData'

const Faq = ({ dispatch, res }) => {

    const [data, setData] = useState([
        {
            question: "",
            answer: ""
        }
    ])

    const onHandelChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    const addData = () => {
        dispatch(addQuetionion(data))
    }

    useEffect(() => {
        const data = res.data && res.data.data

        if (data) {
            if (data.code === 201) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER
                })
                setTimeout(() => {
                    window.location = "/faq";
                }, 2000);

            }
        }
        console.log("dataaaa???", data);
    }, [res])
    return (
        <>
            <div className=''>
                <Nav title="Frequently Asked Questions" />
                <div className=''>
                    <div className='mainpr max-w-2xl mx-auto justify-between items-center px-0 py-5 sm:px-6 sm:py-4 lg:px-8 lg:justify-start lg:space-x-10 mt-[100px] mb-[50px] border-1'>
                        <div className='border xl:lg:px-[30px] md:px-[20px] md:px-[20px] px-[20px] py-10'>
                            <h1 className='text-center text-[35px] font-semibold'>FAQ</h1>
                            <div className='newac1 grid grid-cols-1 cols-span-2 mt-5'>
                                <div className='feild1 py-1 flex flex-col'>
                                    <label className=' text-[18px] font-semibold ml-4 text-start'>Question </label>
                                    <input type="text" placeholder='Enter Your Question' name='question' onChange={(e) => { onHandelChange(e) }} value={data.question} className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" />
                                </div>
                            </div>
                            <div className='newac1 grid grid-cols-1 cols-span-2 mt-3'>
                                <div className='feild1 py-1 flex flex-col'>
                                    <label className=' text-[18px] font-semibold ml-4 text-start '>Answer </label>
                                    <input type="text" name='answer' value={data.answer} onChange={(e) => { onHandelChange(e) }} className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" placeholder='Enter Answer' />
                                </div>
                            </div>
                            <div className='text-center mt-[0px]'>
                                <button className='bg-[#202040] text-[#fff] px-4 mt-5 rounded-full uppercase font-semibold hover:bg-[#3DC0DF] hover:text-[#202040] py-1' onClick={() => { addData() }}>Save</button>
                                <ToastContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    res: state.addQuetionion
})

export default connect(mapStateToProps)(Faq) 