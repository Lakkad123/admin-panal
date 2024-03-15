import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'
import { FiEye } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaDotCircle } from 'react-icons/fa'
import { HiUserGroup } from 'react-icons/hi'
import { AllCourseList, CourseDetails } from '../../store/action/getData'
import { updateCourse, createCourseGroup } from '../../store/action/addData'
import { deleteCourse } from '../../store/action/deleteData';
import Nav from '../nav/Nav'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    borderRadius: 3,
    boxShadow: 24,
    p: 3,
};

const CourseList = ({ dispatch, res, resdetail, resdetail2, resupdate, resdelete,group }) => {

    const [data, setData] = useState([]);
    const [viewData, setViewData] = useState();
    const [search, setSearch] = useState([]);
    const [filter, setFilter] = useState([]);

    const [updateData, setUpdateData] = useState([
        {
            title: "",
            description: "",
            skill: "",
            term: "",
            candidate: "",
            fees: ""
        }
    ]);
    const [criteria, setCriteria] = useState([
        {
            qualification: "",
            age: '',
            communication: "",
            hardware: "",
            id_proof: ""
        }
    ]);

    const skill = viewData && viewData.skill

    //all courses
    useEffect(() => {
        dispatch(AllCourseList());
    }, [])
    useEffect(() => {
        const dataa = res.data && res.data.data && res.data.data.data
        if (dataa) {
            setData(dataa)
            setFilter(dataa)
        }
    }, [res])

    //course Detailsss
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const viewcourse = (id) => {
        handleOpen(true)
        dispatch(CourseDetails(id))
    }
    
    useEffect(() => {
        const data2 = resdetail.data && resdetail.data.data && resdetail.data.data.data
        if (data2) {
            if (resdetail.data.data.code === 200) {
                setViewData(data2)
            }
        }
    }, [resdetail])

    //serach course by course name 
    useEffect(() => {
        const result = data && data.filter(item => {
            return item.title.toLowerCase().match(search.toLowerCase());
        })
        setFilter(result);
    }, [search])

    //update course

    const [updateopen, setUpateOpen] = React.useState(false);
    const handleCloseupdate = () => setUpateOpen(false);
console.log(updateopen)
    const onHandelChange = (e) => {
        const { name, value } = e.target;
        setUpdateData({ ...updateData, [name]: value })
        setCriteria({ ...criteria, [name]: value })
    }

    const updateCoursee = (id) => {
        console.log("helloooo")
        setUpateOpen(true);
        dispatch(CourseDetails(id))

    }

    const updatecourseData = () => {
        const id = localStorage.getItem("CourseId");
        const data = { ...updateData, ...criteria }
        dispatch(updateCourse(id, data))

    }

    useEffect(() => {
        const data = resdetail2.data && resdetail2.data.data && resdetail2.data.data.data
        const criteriadata2 = resdetail2.data && resdetail2.data.data && resdetail2.data.data.data && resdetail2.data.data.data.criteria[0]
        data && setUpdateData(data);
        criteriadata2 && setCriteria(criteriadata2)
    }, [resdetail2])

    useEffect(() => {
        const dataupdate = resupdate.data && resupdate.data.data
        if (dataupdate) {
            if (dataupdate.code === 200) {
                toast("COURSES DETAILS UPDATED SUCCESSFULLY !")
            }
        }
        dispatch(AllCourseList());
    }, [resupdate])

    // delete course data 

    const DeleteCourseData = (id) => {
        dispatch(deleteCourse(id))
    }

    useEffect(() => {
        const deleteData = resdelete.data && resdelete.data.data
        if (deleteData) {
            if (deleteData.code == 200) {
                toast.success(deleteData.message,
                    { position: toast.POSITION.TOP_CENTER })
            }
            dispatch(AllCourseList());
        }
    }, [resdelete])


    // group create 

    const [groupopen, setGroupopen] = React.useState(false);
    const [group_img,setGroup_img] = useState("");
    const [group_name,setGroup_name] = useState("");
    const [group_desc,setGroup_desc] = useState("");
    const [courseId,setCourseId] = useState("");
    const [teacherId,setTeacherId]= useState("")
   console.log("groupopen::",groupopen)
    const groupHandleClose = () => setGroupopen(false);

    const formdata = new FormData();
    formdata.append("group_img", group_img);
    formdata.append("group_name", group_name);
    formdata.append("group_desc", group_desc);
    formdata.append("course_id",courseId);
   
    const CreateGroup = (e)=>{
        e.preventDefault()
        dispatch(createCourseGroup(teacherId,formdata))
    }

    useEffect(()=>{
     const data = group.data && group.data.data && group.data.data
     if (data) {
        if (data.code === 201) {
            toast.success(data.message, {
                position: toast.POSITION.TOP_CENTER
            })
            setTimeout(() => {
                window.location = '/course';
            }, 3000);
        }
        if (data.code === 406) {
            toast.warning(data.message, {
                position: toast.POSITION.TOP_CENTER
            })
            setTimeout(() => {
                window.location = '/course';
            }, 3000);
        }

    }
    },[group])

    const CreateGrouppopup=(id,teacherid)=>{
        setGroupopen(true)
        setCourseId(id);
        setTeacherId(teacherid);
      
    }
    return (
        <>
            <div className='bg-[#F8F8F8] h-[98vh]'>
                <ToastContainer />
                <Nav title="course" />
                <div className=''>
                    <div class="tea_list w-[100%] max-w-7xl mb-12 xl:mb-0 px-4 mx-auto mt-24">
                        <div class="teacher_list relative flex flex-col min-w-0 break-words bg-wh   ite w-[100%] mb-6 -lg rounded ">
                            <div class="rounded-t mb-0 px-4 py-3 border-0">
                                <div class="flex flex-wrap items-center">
                                    <div class="relative w-full px-4 max-w-full flex-grow flex-1">

                                        <div class='max-w-md'>
                                            <div class="relative flex items-start w-[80%] h-10 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border">
                                                <div class="grid place-items-center h-full w-12 text-gray-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                    </svg>
                                                </div>

                                                <input
                                                    class="peer h-full w-full outline-none text-sm text-gray-700 pr-2 border-0"
                                                    type="text"
                                                    id="search"
                                                    value={search}
                                                    onChange={(e) => { setSearch(e.target.value) }}
                                                    placeholder="Search something.." />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                    <Link to="add-course"><button class="bg-[#3DC0DF] text-white hover:bg-[#212A41] text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Add New</button></Link>
                                </div>
                            </div>
                            <div class="block w-full h-[55vh] overflow-x-auto">
                                <table class="items-center bg-transparent w-full border-collapse ">
                                    <thead>
                                        <tr className='text-center'>
                                            <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                title
                                            </th>
                                            <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                teacher
                                            </th>
                                            <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid  text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                term
                                            </th>
                                            <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                qualification
                                            </th>

                                            <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                id_proof
                                            </th>

                                            <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Action
                                            </th>
                                            <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Add Time
                                            </th>
                                            <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Group
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data[0] ? filter.map((val) => {
                                                return (
                                                    <tr>
                                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 capitalize">
                                                            {val.title ? val.title : ""}
                                                        </td>
                                                        <td class="border-t-0 px-6 align-middle truncate border-l-0 border-r-0 text-xs whitespace-nowrap p-4 capitalize">
                                                            {val.teacher_name ? val.teacher_name : ""}
                                                        </td>
                                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 capitalize">
                                                            {val.term == 1 ? <button className='bg-[#7A2048] font-bold text-[#fff] px-2 py-1 rounded'>Short Term</button> : <button className='bg-[#1E2761] font-bold text-[#fff] px-2 py-1 rounded'>Long Term</button>}
                                                        </td>
                                                        <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 uppercase">
                                                            {val.criteria[0].qualification}
                                                        </td>
                                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 capitalize">
                                                            {val.criteria[0].id_proof}
                                                        </td>

                                                        <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center capitalize">
                                                            <div className='flex justify-center gap-2 '>
                                                                <Link to={`/course-user/${val._id}`}><HiUserGroup className='text-[32px] bg-[#3DC0DF] p-2 rounded text-[#fff]' /></Link>
                                                                <FaEdit className='text-[32px] bg-[#3DC0DF] p-2 rounded text-[#fff]'
                                                                    onClick={() => { updateCoursee(val._id); localStorage.setItem("CourseId", val._id) }}
                                                                />
                                                                <MdDeleteOutline className='text-[32px] bg-[#3DC0DF] p-2 rounded text-[#fff]' onClick={() => { DeleteCourseData(val._id) }} />
                                                                <FiEye className='text-[32px] bg-[#3DC0DF] p-2 rounded text-[#fff]' onClick={() => { viewcourse(val._id) }} />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Link to={`/add-time/${val._id}`}><button className='bg-[#3DC0DF] text-[#fff] uppercase text-[12px] px-2 py-2 font-bold rounded'>timeing</button></Link>
                                                        </td>
                                                        <td class="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap capitalize">
                                                            <button className='bg-[#7A2048] font-bold text-[#fff] px-2 py-2 rounded' 
                                                            onClick={()=>CreateGrouppopup(val._id,val.teacher_id)}>Create Group</button>
                                                        </td>
                                                    </tr>
                                                )
                                            }) :
                                                <tr className='my-3'>
                                                    <th colspan="8" ><h1 className='text-[24px] mt-5 capitalize'>Data not found</h1></th>
                                                </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {
                        viewData ? <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                        >
                        
                            <Fade in={open}>
                                <Box sx={style}>
                                    <Typography id="transition-modal-title" variant="h6" component="h2">
                                        <p className='text-center font-bold text-[30px] capitalize'> {viewData && viewData.title}</p>
                                    </Typography>
                                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                        <div className='flex flex-col gap-3'>
                                            <p className='font-bold text-[20px]'>Skill : </p>

                                            <div className='flex flex-row'>
                                            {skill.map((val) => {
                                                return (<>
                                                    <div className='flex gap-2 ml-4'>
                                                        <FaDotCircle className='self-center text-[12px]' />
                                                        <p className='self-center mt-0 mb-0 capitalize '>{val}</p><br></br>
                                                    </div>

                                                </>)
                                            })}
                                            </div>
                                        </div>
                                        <p className='font-bold text-[18px] py-1'>Fees :<span className='text-[16px] font-normal capitalize'> {viewData.fees}</span></p>
                                        <p className='font-bold text-[18px] py-1'>Qualification :<span className='text-[16px] font-normal uppercase'> {viewData.criteria[0].qualification}</span></p>
                                        <p className='font-bold text-[18px] py-1'>Communication : <span className='text-[16px] font-normal capitalize'> {viewData.criteria[0].communication}</span></p>
                                        <p className='font-bold text-[18px] py-1'>Device :<span className='text-[16px] font-normal capitalize'> {viewData.criteria[0].hardware}</span></p>
                                        <p className='font-bold text-[18px] py-1'>Id_Proof :<span className='text-[16px] font-normal capitalize'> {viewData.criteria[0].id_proof}</span></p>
                                        <p className='font-bold text-[18px] py-1'>Candidate :<span className='text-[16px] font-normal capitalize'> {viewData.candidate}</span></p>
                                        <p className='font-bold text-[18px] py-1'>
                                            Description :
                                            <span className='text-[16px] font-normal capitalize'> {viewData && viewData.description}</span></p>
                                            {viewData.term == 1 ? <button className='bg-[#7A2048] font-bold text-[#fff] px-2 py-1 rounded capitalize'> Short Term</button> : <button className='bg-[#1E2761] font-bold text-[#fff] px-2 py-1 rounded'> Long Term</button>}
                                    </Typography>
                                </Box>
                            </Fade>
                        </Modal> : ""
                    }
                    {
                        updateData ? <Modal
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
                                    <Typography id="transition-modal-title" variant="h6" component="h2">
                                        <p className='text-center font-bold text-[25px] capitalize'>update course</p>
                                    </Typography>
                                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                        <div className=''>
                                            <div className='pt-1 w-[100%] fe flex flex-col'>
                                                <label className='float-start text-start  text-[18px] font-semibold '>Title</label>
                                                <input type="text" placeholder="Enter Course Title" name='title' value={updateData.title} onChange={(e) => { onHandelChange(e) }} className='rounded-3xl bg-[#DBDBDB]  py-1 form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' />
                                            </div>
                                            <div className='pt-1 w-[100%] fe flex flex-col'>
                                                <label className='float-start text-start  text-[18px] font-semibold '>Description</label>
                                                <input type="text" placeholder="Enter Course Description" name='description' value={updateData.description} onChange={(e) => { onHandelChange(e) }} className='rounded-3xl bg-[#DBDBDB]  py-1 form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' />
                                            </div>

                                            <div className='pt-1 w-[100%] fe flex flex-col'>
                                                <label className='float-start text-start  text-[18px] font-semibold '>Skill</label>
                                                <input type="text" placeholder="Enter Teacher Skill" name='skill' value={updateData.skill} onChange={(e) => { onHandelChange(e) }} className='rounded-3xl bg-[#DBDBDB]  py-1 form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' />
                                            </div>
                                            <p className='float-start text-[18px]  text-start font-semibold mt-1 mb-1'>Term</p>
                                            <div className='flex'>
                                                <div className='flex gap-3'>
                                                    {
                                                        updateData.term == '1' ? <input type="radio" name='term' onChange={(e) => { onHandelChange(e) }} checked className="rounded bg-[#DBDBDB] form-control w-[20px] h-[20px] ml-[10px] border-t-0 border-l-0 border-r-0 border-b-0" value="1" /> : <input type="radio" name='term' onChange={(e) => { onHandelChange(e) }} className="rounded bg-[#DBDBDB] form-control w-[20px] h-[20px] ml-[10px] border-t-0 border-l-0 border-r-0 border-b-0" value="1" />
                                                    }<p>Short Term</p>
                                                </div>
                                                <div className='flex gap-3 ml-3'>
                                                    {
                                                        updateData.term == '2' ? <input type="radio" name='term' onChange={(e) => { onHandelChange(e) }} checked className="rounded bg-[#DBDBDB] form-control w-[20px] h-[20px] ml-[10px] border-t-0 border-l-0 border-r-0 border-b-0" value="2" /> : <input type="radio" name='term' onChange={(e) => { onHandelChange(e) }} className="rounded bg-[#DBDBDB] form-control w-[20px] h-[20px] ml-[10px] border-t-0 border-l-0 border-r-0 border-b-0" value="2" />
                                                    }
                                                    <p>Long Term</p>
                                                </div>
                                            </div>
                                            <div className='grid grid-cols-2 gap-4'>
                                                <div className='pt-1 w-[100%] fe flex flex-col'>
                                                    <label className='float-start text-start  text-[18px] font-semibold '>Qualification</label>
                                                    <input type="text" placeholder="Enter Teacher Qualification" name='qualification' value={criteria.qualification} onChange={(e) => { onHandelChange(e) }} className='rounded-3xl bg-[#DBDBDB]  py-1 form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' />
                                                </div>
                                                <div className='pt-1 w-[100%] fe flex flex-col'>
                                                    <label className='float-start text-start  text-[18px] font-semibold '>id_proof</label>
                                                    <input type="text" placeholder="Enter Teacher Qualification" name='id_proof' value={criteria.id_proof} onChange={(e) => { onHandelChange(e) }} className='rounded-3xl bg-[#DBDBDB]  py-1 form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' />
                                                </div>
                                            </div>
                                            <div className='grid grid-cols-2 gap-4'>
                                                <div className='pt-1 w-[100%] fe flex flex-col'>
                                                    <label className='float-start text-start  text-[18px] font-semibold '>Fees</label>
                                                    <input type="text" placeholder="Enter Course Fees" name='fees' value={updateData.fees} onChange={(e) => { onHandelChange(e) }} className='rounded-3xl bg-[#DBDBDB]  py-1 form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' />
                                                </div>
                                                <div className='pt-1 w-[100%] fe flex flex-col'>
                                                    <label className='float-start text-start  text-[18px] font-semibold '>Age</label>
                                                    <input type="text" placeholder="Enter Age" name='age' value={criteria.age} onChange={(e) => { onHandelChange(e) }} className='rounded-3xl bg-[#DBDBDB]  py-1 form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' />
                                                </div>
                                            </div>
                                            <div className='grid grid-cols-2 gap-2'>
                                                <div className='pt-1 w-[100%] fe flex flex-col'>
                                                    <label className='float-start text-start  text-[18px] font-semibold '>Communication</label>
                                                    <input type="text" placeholder="Enter Communication Skill" name='communication' value={criteria.communication} onChange={(e) => { onHandelChange(e) }} className='rounded-3xl bg-[#DBDBDB]  py-1 form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' />
                                                </div>
                                                <div className='pt-1 w-[100%] fe flex flex-col'>
                                                    <label className='float-start text-start  text-[18px] font-semibold '>Hardware</label>
                                                    <input type="text" placeholder="Enter Avaible Device" name='hardware' value={criteria.hardware} onChange={(e) => { onHandelChange(e) }} className='rounded-3xl bg-[#DBDBDB]  py-1 form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' />
                                                </div>
                                            </div>
                                            <div className='pt-1 w-[100%] fe flex flex-col'>
                                                <label className='float-start text-start  text-[18px] font-semibold '>Candidate</label>
                                                <input type="text" placeholder="Candidate For" name='candidate' value={updateData.candidate} onChange={(e) => { onHandelChange(e) }} className='rounded-3xl bg-[#DBDBDB]  py-1 form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' />
                                            </div>
                                            <div className='pt-1 w-[100%] fe flex flex-col'>
                                                <div className='text-center mt-3 '>
                                                    <button className='text-[18px]  font-semibold text-[#fff] bg-[#202040] rounded-3xl py-1 px-4 hover:bg-[#3DC0DF] hover:text-[#202040]' onClick={() => { updatecourseData() }}>Save</button>

                                                </div>
                                            </div>
                                        </div>
                                    </Typography>
                                </Box>
                            </Fade>
                        </Modal>
                            : ""
                    }
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={groupopen}
                        onClose={groupHandleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={groupopen}>
                            <Box sx={style}>
                                <Typography id="transition-modal-title" variant="h6" component="h2">
                                    <h1 className='text-center text-[28px] capitalizr '>Create Group</h1>

                                    <form onSubmit={(e)=>CreateGroup(e)}>
                                        <div className='py-3'>
                                            <label>Group Icon</label>
                                            <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-full cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" name='group_img'
                                            onChange={(e)=>setGroup_img(e.target.files[0])} type="file" />
                                        </div>
                                        <div className='py-3'>
                                            <label className='float-start text-start  text-[18px] font-semibold '>Group Title</label>
                                            <input type="text" placeholder="Enter Gruop Title" name='group_name' onChange={(e)=>setGroup_name(e.target.value)} className=' bg-[#DBDBDB] py-1 form-control p-2 w-[100%] border-0 rounded-full' autoComplete="off" />
                                        </div>
                                        <div className='py-3'>
                                            <label className='float-start text-start  text-[18px] font-semibold '>Group Discription</label>
                                            <input type="text" placeholder="Enter Gruop Discription" name='group_desc' 
                                            onChange={(e)=>setGroup_desc(e.target.value)} className=' bg-[#DBDBDB] py-1 form-control p-2 w-[100%] border-0 rounded-full' autoComplete="off" />
                                        </div>
                                       <div className='flex justify-center my-5'>
                                       <button type="submit" className='text-[18px]  font-semibold text-[#fff] bg-[#202040] rounded-3xl py-1 px-4 hover:bg-[#3DC0DF] hover:text-[#202040]' >Create Group</button>
                                       </div>
                                    </form>
                                </Typography>
                            </Box>
                        </Fade>
                    </Modal>

                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    res: state.AllCourseList,
    resdetail: state.CourseDetails,
    resdetail2: state.CourseDetails,
    resupdate: state.updateCourse,
    resdelete: state.deleteCourse,
    group: state.createCourseGroup
})
export default connect(mapStateToProps)(CourseList) 