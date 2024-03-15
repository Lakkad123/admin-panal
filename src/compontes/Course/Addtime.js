import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addCourseTime } from '../../store/action/addData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from '../nav/Nav'

const Addtime = ({ dispatch, res }) => {
    const params = useParams();

    const [error, setError] = useState("");
    const [errorend,setErrorend] = useState("");
    const [data, setData] = useState([
        {
            start_date: "",
            end_date: "",
            type: "",
            day: "",
            start_time: "",
            end_time: "",
            slot: "",
            timezone: ""
        }
    ])


    const onHandleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
        if (name === "start_date") {
            var date = new Date().getDate();
            var month = new Date().getMonth()
            var year = new Date().getFullYear()
            var fulldate = year + "-" + month + "-" + date;
            const d1 = new Date(fulldate)
            const d2 = new Date(value)
            if (d2.getMonth() > d1.getMonth()) {
                setData({ ...data, [name]: value })
                setError("");
            }
            else {
                setError("Date is invalid");
            }
        }

        if (name === "end_date") {
            const d1 = new Date(data.start_date)
            const d2 = new Date(value)
            if (d2.getMonth() > d1.getMonth()) {
                setData({ ...data, [name]: value })
                setErrorend("");
            }
            else {
                setErrorend("Date is invalid");
            }
        }
    }


    const addTimeData = () => {
        dispatch(addCourseTime({ "course_id": params.id, ...data }))
    }

    useEffect(() => {
        const dataa = res.data && res.data.data && res.data.data.data
        if (dataa) {
            if (res.data.data.code === 201) {
                toast.success(res.data.data.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            }
            setTimeout(() => {
                window.location = '/time-list'
            }, 3000);
        }
    }, [res])

    console.log("error", error)
    return (
        <>
            <div className=''>
                <Nav />
                <div className='max-w-2xl mx-auto justify-between  px-0 py-5 sm:px-6 sm:py-4 lg:px-8 lg:justify-start  my-[20px]'>
                    <div className='border-2 px-10 rounded-2xl'>
                        <h1 className='text-[35px] font-semibold text-center mt-[40px]'>Add Course Time</h1>
                        <div className='py-1 w-[100%] fe flex flex-col'>
                            <label className='float-start text-start  text-[18px] font-semibold '>CourseId</label>
                            <input type="text" placeholder="" name='course_id' value={`${params.id}`} className='rounded-3xl bg-[#DBDBDB]  py-1 form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' />
                        </div>
                        <div className='newac1 grid grid-cols-2 gap-5'>
                            <div className='feild1 py-1 flex flex-col'>
                                <label className='mx-2 text-[18px] font-semibold  text-start'>Start Date</label>
                                <div>
                                    <input type="date" name="start_date" value={data.start_date} onChange={(e) => { onHandleChange(e) }} className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" />
                                    <div className=" text-[red] capitalize">{error}</div>
                                </div>
                            </div>
                            <div className='feild1 py-1 flex flex-col'>
                                <label className='mx-2 text-[18px] font-semibold  text-start'>End Date</label>
                               <div>
                               <input type="date" name='end_date' value={data.end_date} onChange={(e) => { onHandleChange(e) }} className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" />
                               <div className=" text-[red] capitalize">{errorend}</div>
                               </div>
                            </div>
                        </div>
                        <div className='py-1 w-[100%] fe flex flex-col'>
                            <label className='float-start text-start  text-[18px] font-semibold '>Days</label>
                            <input type="text" placeholder="Monday,Tuesday,Wednesday" name='day' value={data.day} onChange={(e) => { onHandleChange(e) }} className='rounded-3xl bg-[#DBDBDB]  py-1 form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' />
                        </div>
                        <div className='newac1 grid grid-cols-2 gap-5'>
                            <div className='feild1 py-1 flex flex-col'>
                                <label className=' text-[18px] font-semibold  text-start'>Start Time</label>
                                <input type="time" name='start_time' value={data.start_time} onChange={(e) => { onHandleChange(e) }} className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" />
                            </div>

                            <div className='feild1 py-1 flex flex-col'>
                                <label className=' text-[18px] font-semibold  text-start'>End Time</label>
                                <input type="time" name='end_time' value={data.end_time} onChange={(e) => { onHandleChange(e) }} className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" />
                            </div>
                        </div>
                        <div className='py-1 w-[100%] fe flex flex-col'>
                            <label className='float-start text-start  text-[18px] font-semibold '>Slot</label>
                            <input type="text" placeholder="" name='slot' value={data.slot} onChange={(e) => { onHandleChange(e) }} className='rounded-3xl bg-[#DBDBDB]  py-1 form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' />
                        </div>
                        <div className='py-1 w-[100%] fe flex flex-col'>
                            <label className='float-start text-start  text-[18px] font-semibold '>Time Zone</label>
                            <input type="text" name="timezone" value={data.timezone} onChange={(e) => { onHandleChange(e) }} placeholder="Enter Course Description" className='rounded-3xl bg-[#DBDBDB]  py-1 form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' />
                        </div>
                        <div className='py-1 w-[100%] fe flex flex-col'>
                            <div className='text-center 4'>
                                <button className='text-[18px] font-semibold text-[#fff] bg-[#202040] rounded-3xl py-1 px-3 hover:bg-[#3DC0DF] hover:text-[#202040]' onClick={() => { addTimeData() }}>Save</button>
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
    res: state.addCourseTime
})
export default connect(mapStateToProps)(Addtime) 