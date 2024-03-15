import React, { useEffect, useState } from 'react'
import { FaHospitalUser } from 'react-icons/fa'
import { GiTeacher } from 'react-icons/gi'
import { FaIndustry } from 'react-icons/fa'
import Chart from './Chart'
import { connect } from 'react-redux'
import { FaDiscourse } from 'react-icons/fa'
import { CgAssign } from 'react-icons/cg'
import Nav from '../nav/Nav'
import { numberOfCourse, numberOfUsers, numberOfCompany, numofUserAppied } from '../../store/action/getData'
import Pie from './Pie'
import CoursePie from './CoursePie'

const Home = ({ dispatch, res, rescourse, rescompany, resappied }) => {
    const [totaluser, setTotalUser] = useState([]);
    const [totalcourse, setTotalCourse] = useState([]);
    const [totalcompany, setTotalcompany] = useState([]);
    const [totalappied, setTotalappied] = useState([]);

    //total Users 
    useEffect(() => {
        dispatch(numberOfUsers());
    }, [])

    useEffect(() => {
        const dataa = res.data && res.data.data
        if (dataa) {
            if (dataa.code === 200) {
                setTotalUser(dataa)
            }
        }
    }, [res])

    //total Courses
    useEffect(() => {
        dispatch(numberOfCourse())
    }, [])

    useEffect(() => {
        const coursenum = rescourse.data && rescourse.data.data
        if (coursenum) {
            if (coursenum.code === 200) {
                setTotalCourse(coursenum);
            }
        }
    }, [rescourse])

    //total Conmpany
    useEffect(() => {
        dispatch(numberOfCompany())
    }, [])

    useEffect(() => {
        const companyData = rescompany.data && rescompany.data.data
        if (companyData) {
            if (companyData.code === 200) {
                setTotalcompany(companyData)
            }
        }
    }, [rescompany])

    //total Appied usser 
    useEffect(() => {
        dispatch(numofUserAppied())
    }, [])

    useEffect(() => {
        const appiedData = resappied.data && resappied.data.data
        if (appiedData) {
            if (appiedData.code === 200) {
                setTotalappied(appiedData);
            }
        }
    }, [resappied])


    return (
        <div className='bg-[#F8F8F8] h-[100%] pb-10'>
            <Nav title="dashboard" />
            <div className=' max-w-8xl mx-auto'>
                <div className="container mx-auto mt-2 p-3">
                    <div className="grid grid-cols-1 gap-6 my-5 mb-6 lg:grid-cols-4 md:grid-cols-2">
                        <div className="w-full flex justify-between px-4 py-10 bg-white rounded-lg shadow items-center">
                            <div className="font-medium text-gray-500 truncate">
                                <p className='text-start text-[25px] font-bold text-[#212A41] capitalize'>Total users</p>
                                <p className='text-start text-[20px]'>{totaluser.data}</p>
                            </div>
                            <div className="mt-1 text-3xl font-semibold text-gray-900">
                                <FaHospitalUser className='bg-[#3DC0DF] text-[#fff] text-[45px] p-2 rounded ' />
                            </div>
                        </div>
                        <div className="w-full flex justify-between px-2 py-3 bg-white rounded-lg shadow items-center">
                            <div className="font-medium text-gray-500 truncate">
                                <p className='text-start text-[25px] font-bold text-[#212A41] capitalize'>Total Course</p>
                                <p className='text-start text-[20px]'>{totalcourse.data}</p>
                            </div>
                            <div className="mt-1 text-3xl font-semibold text-gray-900">
                                <FaDiscourse className='bg-[#3DC0DF] text-[#fff] text-[45px] p-2 rounded ' />
                            </div>
                        </div>
                        <div className="w-full flex justify-between px-2 py-3 bg-white rounded-lg shadow items-center">
                            <div className="font-medium text-gray-500 truncate">
                                <p className='text-start text-[25px] font-bold text-[#212A41] capitalize'>Total Company</p>
                                <p className='text-start text-[20px]'>{totalcompany.data}</p>
                            </div>
                            <div className="mt-1 text-3xl font-semibold text-gray-900">
                                <FaIndustry className='bg-[#3DC0DF] text-[#fff] text-[45px] p-2 rounded ' />
                            </div>
                        </div>
                        <div className="w-full flex justify-between px-2 py-3 bg-white rounded-lg shadow items-center">
                            <div className="font-medium text-gray-500 truncate">
                                <p className='text-start text-[25px] font-bold text-[#212A41] capitalize'>Total Appied User</p>
                                <p className='text-start text-[20px]'>{totalappied.data}</p>
                            </div>
                            <div className="mt-1 text-3xl font-semibold text-gray-900">
                                <CgAssign className='bg-[#3DC0DF] text-[#fff] text-[45px] p-2 rounded ' />
                            </div>
                        </div>

                    </div>
                    {/* <Chart /> */}
                    <div className='grid md:grid-cols-2 sm:grid-cols-1 '>
                        <div className='justify-center  place-self-center bg-white px-[10%] py-3 mt-5 rounded drop-shadow-md'>
                            <div className=''>
                                <Pie />
                            </div>
                        </div>
                        <div className='justify-center  place-self-center bg-white px-[10%] py-3 mt-5 rounded drop-shadow-md'>
                            <div className=''>
                                <CoursePie />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    res: state.numberOfUsers,
    rescourse: state.numberOfCourse,
    rescompany: state.numberOfCompany,
    resappied: state.numofUserAppied
})

export default connect(mapStateToProps)(Home)