import React, { useEffect, useState } from 'react'
import { PieChart } from "react-minimal-pie-chart";
import { connect } from 'react-redux';
import { numberOfCourse } from '../../store/action/getData';
import { numberOfEnrollment } from '../../store/action/getData';


const CoursePie = ({ res, dispatch, rescourse, resenroll }) => {

  
    const [totalcourse, setTotalCourse] = useState([]);
    const [toatlenroll, setTotalenroll] = useState([]);

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
    const course = totalcourse.data

    //total view enrolll
    useEffect(() => {
        dispatch(numberOfEnrollment())
    }, []);

    useEffect(() => {
        const data = resenroll.data && resenroll.data.data
        if (data) {
            setTotalenroll(data)
        }
    }, [resenroll])

    const enroll = toatlenroll.data

    return (
        <>
            <PieChart
                className='w-[100%]'
                data={[

                    { title: 'Two', value: course, color: '#195875' },
                    { title: 'three', value: enroll, color: '#e8f7fb' },
                ]}
            />
            <div className='flex flex-col mt-2'>
                <div className='usermain flex gap-5 justify-center'>
                    <div className='flex gap-2'>
                        <p className='m-0 text-[12px] self-center font-bold'>Course :</p>
                        <div className='w-[10px] h-[10px] bg-[#195875] self-center'></div>
                    </div>
                    <div className='flex gap-2'>
                        <p className='m-0 text-[12px] self-center font-bold'>Enroll :</p>
                        <div className='w-[10px] h-[10px] bg-[#e8f7fb] self-center'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    rescourse: state.numberOfCourse,
    resenroll: state.numberOfEnrollment
})
export default connect(mapStateToProps)(CoursePie) 