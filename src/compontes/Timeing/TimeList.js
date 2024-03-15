import React, { useEffect, useState } from 'react'
import Nav from '../nav/Nav'
import { FaEdit } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'
import { courseTimeList } from '../../store/action/getData'
import { connect } from 'react-redux'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import { updateCourseTime } from '../../store/action/addData'
import { ToastContainer, toast, success } from 'react-toastify';
import { lectureTimeById } from '../../store/action/getData'
import { deleteLectureTime } from '../../store/action/deleteData';
import 'react-toastify/dist/ReactToastify.css';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    borderRadius: 3,
    boxShadow: 24,
};

const TimeList = ({ res, dispatch, resupdate, resview, resdelete }) => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState([]);
    const [filter, setFilter] = useState([]);
    const [error, setError] = useState("");
    const [errorend, setErrorend] = useState("")


    const [updatedata, setUpdateData] = useState([{
        start_date: "",
        end_date: "",
        type: "",
        day: "",
        start_time: "",
        end_time: "",
        slot: "",
        timezone: ""
    }]);

    const [updateopen, setUpateOpen] = React.useState(false);
    const handleOpenupdate = () => setUpateOpen(true);
    const handleCloseupdate = () => setUpateOpen(false);


    useEffect(() => {
        dispatch(courseTimeList())
    }, [])

    useEffect(() => {
        const data = res.data && res.data.data && res.data.data.data
        if (data) {
            setData(data)
            setFilter(data);
        }
    }, [res])

    //lecture time by id 

    const viewLecturetime = (id) => {
        dispatch(lectureTimeById(id))
        data && handleOpenupdate(true)
    }

    useEffect(() => {
        const data = resview.data && resview.data.data && resview.data.data.data
        if (data) {
            setUpdateData(data[0]);
        }
    }, [resview])


    //update time


    const handleChange = (e) => {
        const { name, value } = e.target
        setUpdateData({ ...updatedata, [name]: value })
        if (name === "start_date") {
            var date = new Date().getDate();
            var month = new Date().getMonth()
            var year = new Date().getFullYear()
            var fulldate = year + "-" + month + "-" + date;
            const d1 = new Date(fulldate)
            const d2 = new Date(value)
            if (d2.getDate() >= d1.getDate()) {
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
            if (d2.getDate() >= d1.getDate()) {
                setData({ ...data, [name]: value })
                setErrorend("");
            }
            else {
                setErrorend("Date is invalid");
            }
        }
    }

    const updateTime = () => {
        const id = localStorage.getItem("lecture_id")
        dispatch(updateCourseTime(id, updatedata));
    }

    useEffect(() => {
        const dataa = resupdate.data && resupdate.data.data
        if (dataa) {
            if (dataa.code == 200) {
                toast.success(dataa.message, {
                    position: toast.POSITION_TOP_CENTER
                })
            }
            dispatch(courseTimeList())
        }
    }, [resupdate])

    //delete lecture

    const deleteLecture = (id) => {
        dispatch(deleteLectureTime(id));
    }

    useEffect(() => {
        const deleteData = resdelete.data && resdelete.data.data;

        console.log("delete data ", deleteData);

        if (deleteData) {
            if (deleteData.code == 200) {
                toast.success(deleteData.message, { position: toast.POSITION.TOP_CENTER })
            }
            dispatch(courseTimeList())
        }
    }, [resdelete])

    // search timeing by its course name 

    useEffect(() => {
        const result = data && data.filter(item => {
            return item.course_name.toLowerCase().match(search.toLowerCase());
        })
        setFilter(result)
    }, [search])

    return (
        <>
            <div className='bg-[#F8F8F8] h-[98vh]'>
                <Nav title="Time list" />
                <div>
                    <ToastContainer />
                    <div class="tea_list w-[100%] max-w-7xl mb-12 xl:mb-0 px-4 mx-auto mt-20">
                        <div class="teacher_list relative flex flex-col min-w-0 break-words bg-white w-[100%] mb-6 -lg rounded ">
                            <div class="rounded-t mb-0 px-4 py-3 border-0">
                                <div class="flex flex-wrap items-center">
                                    <div class="relative w-full max-w-full flex-grow flex-1 ">
                                        <div class='max-w-md mx-auto'>
                                            <div class="relative flex items-start w-[80%] h-10 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border">
                                                <div class="grid place-items-center h-full w-12 text-gray-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                    </svg>
                                                </div>

                                                <input
                                                    class="peer h-full w-full outline-none text-sm text-gray-700 pr-2 border-0 text-start"
                                                    type="text"
                                                    id="search"
                                                    value={search}
                                                    onChange={(e) => { setSearch(e.target.value) }}
                                                    placeholder="Search something.." />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                    </div>
                                </div>
                            </div>
                            <div class="block w-full h-[55vh] overflow-x-auto">
                                <table class="items-center bg-transparent w-full border-collapse ">
                                    <thead>
                                        <tr className='text-center'>
                                            <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Course Name
                                            </th>
                                            <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Date
                                            </th>
                                            <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                time
                                            </th>
                                            <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                slot
                                            </th>
                                            <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data[0] ? filter.map((val) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 uppercase">
                                                                {val.course_name}
                                                            </td>
                                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 capitalize">
                                                                {val.start_date} TO {val.end_date}
                                                            </td>
                                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 capitalize">
                                                                {val.start_time} TO {val.end_time}
                                                            </td>
                                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 capitalize">
                                                                {val.slot}
                                                            </td>
                                                            <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center capitalize">
                                                                <div className='flex justify-center gap-2 '>
                                                                    {/* <Link to=""><HiUserGroup className='text-[32px] bg-[#3DC0DF] p-2 rounded text-[#fff]' /></Link> */}
                                                                    <FaEdit className='text-[32px] bg-[#3DC0DF] p-2 rounded text-[#fff]' onClick={() => { viewLecturetime(val._id); localStorage.setItem("lecture_id", val._id) }} />
                                                                    <MdDeleteOutline className='text-[32px] bg-[#3DC0DF] p-2 rounded text-[#fff]' onClick={() => { deleteLecture(val._id) }} />

                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            }) :
                                                <tr className='my-3'>
                                                    <th colspan="5" ><h1 className='text-[24px] mt-5'>Data not found</h1></th>
                                                </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            open={updateopen}
                            onClose={handleCloseupdate}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                        >
                            <Fade in={updateopen}>
                                <Box sx={style}>
                                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                        <div className='px-10 rounded-2xl'>
                                            <h1 className='text-[35px] font-semibold text-center mt-[40px]'>Update Course Time</h1>
                                            <div className='py-3 w-[100%] fe flex flex-col'>
                                                <label className='float-start text-start  text-[18px] font-semibold '>CourseId</label>
                                                <input type="text" placeholder="" name='course_id' className='rounded-3xl bg-[#DBDBDB]  py-1 form-control w-[100%]' onChange={(e) => { handleChange(e) }} value={updatedata.course_id} />
                                            </div>
                                            <div className='newac1 grid grid-cols-2 gap-5'>
                                                <div className='feild1 py-1 flex flex-col'>
                                                    <label className='mx-2 text-[18px] font-semibold text-start'>Start Date</label>
                                                    <div>
                                                        <input type="date" name="start_date" value={updatedata.start_date} className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px]" onChange={(e) => { handleChange(e) }} />
                                                        <div className=" text-[red] capitalize">{error}</div>
                                                    </div>
                                                </div>
                                                <div className='feild1 py-1 flex flex-col'>
                                                    <label className='mx-2 text-[18px] font-semibold text-start'>End Date</label>
                                                    <div>
                                                        <input type="date" name='end_date' value={updatedata.end_date} className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px]" onChange={(e) => { handleChange(e) }} />
                                                        <div className=" text-[red] capitalize">{errorend}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='py-1 w-[100%] fe flex flex-col'>
                                                <label className='float-start text-start  text-[18px] font-semibold '>Days</label>
                                                <input type="text" placeholder="Monday,Tuesday,Wednesday" name='day' value={updatedata.day} onChange={(e) => { handleChange(e) }} className='rounded-3xl bg-[#DBDBDB]  py-1 form-control w-[100%]' />
                                            </div>
                                            <div className='newac1 grid grid-cols-2 gap-5'>
                                                <div className='feild1 py-1 flex flex-col'>
                                                    <label className='mx-2 text-[18px] font-semibold ml-4 text-start'>Start Time</label>
                                                    <input type="time" name='start_time' value={updatedata.start_time} onChange={(e) => { handleChange(e) }} className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px]" />
                                                </div>
                                                <div className='feild1 py-1 flex flex-col'>
                                                    <label className='mx-2 text-[18px] font-semibold ml-4 text-start'>End Time</label>
                                                    <input type="time" name='end_time' value={updatedata.end_time} onChange={(e) => { handleChange(e) }} className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px]" />
                                                </div>
                                            </div>
                                            <div className='py-1 w-[100%] fe flex flex-col'>
                                                <label className='float-start text-start  text-[18px] font-semibold '>Slot</label>
                                                <input type="text" placeholder="" name='slot' value={updatedata.slot} onChange={(e) => { handleChange(e) }} className='rounded-3xl bg-[#DBDBDB]  py-1 form-control w-[100%]' />
                                            </div>
                                            <div className='py-1 w-[100%] fe flex flex-col'>
                                                <label className='float-start text-start  text-[18px] font-semibold '>Time Zone</label>
                                                <input type="text" name="timezone" value={updatedata.timezone} onChange={(e) => { handleChange(e) }} placeholder="Enter Course Description" className='rounded-3xl bg-[#DBDBDB]  py-1 form-control w-[100%]' />
                                            </div>
                                            <div className='py-1 w-[100%] fe flex flex-col'>
                                                <div className='text-center'>
                                                    <button className='text-[18px]  font-semibold text-[#fff] bg-[#202040] rounded-3xl py-1 px-4 hover:bg-[#3DC0DF] hover:text-[#202040] mt-4 mb-4' onClick={() => { updateTime() }} >Save</button>

                                                </div>
                                            </div>
                                        </div>
                                    </Typography>
                                </Box>
                            </Fade>
                        </Modal>
                    </div>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => ({
    res: state.courseTimeList,
    resupdate: state.updateCourseTime,
    resview: state.lectureTimeById,
    resdelete: state.deleteLectureTime
})

export default connect(mapStateToProps)(TimeList) 