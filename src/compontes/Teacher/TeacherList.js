import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { code } from '../../phoneCode'
import { teacherDetail, teacherList } from '../../store/action/getData'
import { updateTeacher, teacherSalary } from '../../store/action/addData'
import { FiEye } from 'react-icons/fi'
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { deleteTeacher } from '../../store/action/deleteData'
import Nav from '../nav/Nav'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 3,
    p: 4,
};

const updatestyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
};

const payment = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
}


const TeacherList = ({ dispatch, res, resdetail, resdetail2, resupdate, resdelete, respayment }) => {
    const [data, setData] = useState([]);
    const [teacherdata, setTeacherdata] = useState([]);
    const [filter, setFilter] = useState([]);
    const [search, setSearch] = useState([]);

    //payment teacher salary 
    const [salary, setSalary] = useState({
        username: "",
        email: "",
        description: "",
        amount: "",
        cardNumber: "",
        cvc: "",
        exMonth: "",
        exYear: "",
    })

    //update teahcer usestate
    const [updateData, setUpdateData] = useState([
        {
            first_name: "",
            last_name: "",
            email: "",
            phone_code: "",
            mobile: "",
            position: "",
            experience: "",
            status: ""
        }
    ])

    useEffect(() => {
        dispatch(teacherList())
    }, [])

    useEffect(() => {
        const dataa = res.data && res.data.data && res.data.data.data
        if (dataa) {
            if (res.data.data.code === 200) {
                setData(dataa)
                setFilter(dataa)
            }
        }
        console.log(dataa)
    }, [res])


    //pay salary 
    const [salaryopen, setsalaryOpen] = React.useState(false);
    const salaryhandleOpen = () => setsalaryOpen(true);
    const salaryhandleClose = () => setsalaryOpen(false);

    //payment handle change 

    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setSalary({ ...salary, [name]: value })
    }

    const paySalary = () => {
        const id = localStorage.getItem("teacherId");
        dispatch(teacherSalary(id, salary));
    }

    useEffect(() => {
        const salarydata = respayment.data && respayment.data.data;
        if (salarydata) {
            toast.success(salarydata.message, { position: toast.POSITION.TOP_CENTER })
        }
    }, [respayment])

    //view details teacher //
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const details = (id) => {
        handleOpen(true)
        dispatch(teacherDetail(id));
    }

    useEffect(() => {
        const dataa = resdetail.data && resdetail.data.data && resdetail.data.data.data
        if (dataa) {
            if (resdetail.data.data.code === 200) {
                setTeacherdata(dataa)
            }
        }
    }, [resdetail])

    //search data teacher name vise
    useEffect(() => {
        const result = data && data.filter(item => {
            return item.email.toLowerCase().match(search.toLowerCase());
        });
        setFilter(result);
    }, [search])
    //   

    //update teacherr//
    const [updateopen, setupdateOpen] = React.useState(false);
    const handleupdateOpen = () => setupdateOpen(true);
    const handleupdateClose = () => setupdateOpen(false);
console.log(updateopen)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdateData({ ...updateData, [name]: value })
    }

    const updateteacher = (id) => {
        dispatch(teacherDetail(id));
        data && handleupdateOpen(true)
    }

    const updateteacherdata = () => {
        const id = localStorage.getItem("teacherId");
        dispatch(updateTeacher(updateData, id))
    }

    useEffect(() => {
        const data = resdetail2.data && resdetail2.data.data && resdetail2.data.data.data
        data && setUpdateData(data)

    }, [resdetail2])

    useEffect(() => {
        const update = resupdate.data && resupdate.data.data
        if (update) {
            if (update.code === 200) {
                toast.success(update.message, {
                    position: toast.POSITION.TOP_CENTER,

                });

                window.location = "/teacher"
            }
        }
    }, [resupdate])

    //delete teacher data 

    const deleteTeacherData = (id) => {
        dispatch(deleteTeacher(id))
    }

    useEffect(() => {
        const deleteData = resdelete.data && resdelete.data.data
        if (deleteData) {
            if (deleteData.code == 200) {
                toast.success(deleteData.message, { position: toast.POSITION.TOP_CENTER })
            }
            dispatch(teacherList())
        }
    }, [resdelete])


    return (
        <>
            <div className='tea  bg-[#F8F8F8] h-[98vh]'>
                <ToastContainer />
                <Nav title="teacher" />

                <div class="tea_list w-[100%] max-w-7xl mb-12 xl:mb-0 px-4 mx-auto mt-24 ">
                    <div class="teacher_list relative flex flex-col min-w-0 break-words bg-white w-[100%] mb-6  rounded ">
                        <div class="rounded-t mb-0 px-4 py-3 border-0">
                            <div class="flex flex-wrap items-start">
                                <div class="relative w-full px-0 max-w-full flex-grow flex-1">
                                    <div class='max-w-md mx-auto'>
                                        <div class="relative flex items-start w-[80%] h-10 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border">
                                            <div class="grid place-items-center h-full w-12 text-gray-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            </div>

                                            <input
                                                class="peer h-full w-full outline-none text-sm text-gray-700 pr-2 border-0"
                                                type="text"
                                                placeholder="Search something.."
                                                value={search}
                                                onChange={(e) => { setSearch(e.target.value) }} />
                                        </div>
                                    </div>
                                </div>
                                <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                    <Link to="add-teacher"><button class="bg-[#3DC0DF] text-white hover:bg-[#212A41] text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Add New</button></Link>
                                    <Link to="/view-salary"><button class="bg-[#3DC0DF] text-white hover:bg-[#212A41] text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Transaction</button></Link>
                                </div>
                            </div>
                        </div>

                        <div class="block w-[100%] h-[50vh] overflow-x-auto">
                            <table class="items-center w-[100%] bg-transparent border-collapse">
                                <thead className=''>
                                    <tr className='text-center '>
                                        <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            ID
                                        </th>
                                        <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Name
                                        </th>
                                        <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid  text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Email
                                        </th>
                                        <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid  text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Mobile No
                                        </th>
                                        <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Experience
                                        </th>
                                        <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Position
                                        </th>
                                        <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Status
                                        </th>
                                        <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {
                                        data[0] ? filter.map((val) => {
                                            return (
                                                <tr>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                                        {val.unique_code}
                                                    </td>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 capitalize text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                                        {val.first_name} {val.last_name}
                                                    </td>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                        {val.email}
                                                    </td>
                                                    <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        +{val.phone_code} {val.mobile}
                                                    </td>
                                                    <td class="border-t-0 px-6 align-middle  capitalize  border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        {val.experience}
                                                    </td>
                                                    <td class="border-t-0 px-6 align-mid   capitalize   dle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        {val.position}
                                                    </td>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        {val.status == 1 ? <button className='bg-[#0080FE] font-bold text-[#fff] px-2 py-1 rounded'>Active</button> : <button className='bg-[#DC143C] font-bold text-[#fff] px-2 py-1 rounded'>InActive</button>}
                                                    </td>
                                                    <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                                        <div className='flex justify-center gap-2 '>
                                                            <FaEdit className='text-[32px] bg-[#3DC0DF] p-2 rounded text-[#fff]' onClick={() => { updateteacher(val._id); localStorage.setItem("teacherId", val._id) }} />
                                                            <MdDeleteOutline className='text-[32px] bg-[#3DC0DF] p-2 rounded text-[#fff]' onClick={() => { deleteTeacherData(val._id) }} />
                                                            <FiEye className='text-[32px] bg-[#3DC0DF] p-2 rounded text-[#fff]' onClick={() => details(val._id)} />
                                                            <button class="bg-[#3DC0DF] text-white hover:bg-[#212A41] text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 pt-1 pb-1 ease-linear transition-all duration-150" type="button" onClick={() => { salaryhandleOpen(); localStorage.setItem("teacherId", val._id) }}>Salary</button>
                                                        </div>
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
                <Modal
                    aria-labelledby="transition-modal-  title"
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
                                <p className='text-center font-bold text-[30px] uppercase'> {teacherdata.first_name}   {teacherdata.last_name}</p>
                            </Typography>
                            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                <div className='flex justify-center flex-col'>
                             <img src={teacherdata.profile} className="rounded-full mx-auto w-[50%] h-[50%]" alt="not found" />
                                </div>
                                <p className='font-bold text-[20px] mt-[20px]'>Email  : <span className='font-normal text-[18px]'>{teacherdata.email}</span></p>
                                <p className='font-bold text-[20px]'>Mobile No  : <span className='font-normal text-[18px]'>{teacherdata.mobile}</span></p>
                                <p className='font-bold text-[20px]'>Position  :  <span className='font-normal text-[18px]'>{teacherdata.position}</span></p>
                                <p className='font-bold text-[20px]'>Experience :<span className='font-normal text-[18px]'> {teacherdata.experience}</span></p>
                                {teacherdata.status == 1 ? <button className='bg-[#0080FE] font-bold text-[#fff] px-2 py-1 rounded mt-[20px]'>Active</button> : <button className='bg-[#DC143C] font-bold text-[#fff] px-2 py-1 rounded'>InActive</button>}
                            </Typography>
                        </Box>
                    </Fade>
                </Modal>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={updateopen}
                    onClose={handleupdateClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={updateopen}>
                        <Box sx={updatestyle}>
                            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                <div className='px-10 rounded-2xl'>
                                    <h1 className='text-[35px] font-semibold text-center'>Teacher Details</h1>

                                    <div className='flex flex-col gap-2 xl:flex-row lg:flex-row md:flex-row sm:flex-row mt-[30px]'>
                                        <div className='py-3 w-[100%] fe flex flex-col'>
                                            <label className='float-start text-start  text-[18px] font-semibold '>First Name</label>
                                            <input type="text" placeholder="Enter First Name" name='first_name' onChange={(e) => { handleChange(e) }} value={updateData.first_name} className='rounded-3xl bg-[#DBDBDB]  py-1 form-control w-[100%] ' />
                                        </div>
                                        <div className='py-3 w-[100%] fe flex flex-col'>
                                            <label className='float-start text-start  text-[18px] font-semibold '>Last Name</label>
                                            <input type="text" placeholder="Enter Last Name" name='last_name' onChange={(e) => { handleChange(e) }} value={updateData.last_name} className='rounded-3xl bg-[#DBDBDB]  py-1 form-control w-[100%] ' />
                                        </div>
                                    </div>
                                    {/* <div className='py-3 w-[100%] flex flex-col'>
                                        <label className='float-start text-start  text-[18px] font-semibold '>Email</label>
                                        <input type="text" placeholder="Enter Email" name='email' onChange={(e) => { handleChange(e) }} value={updateData.email} className='rounded-3xl bg-[#DBDBDB]  py-1 form-control w-[100%] ' />
                                    </div> */}
                                    <div className='feild1 '>
                                        <label className='mx-2 text-[18px] text-start font-semibold text-start'>Mobile Number</label><br></br>
                                        <div className='flex gap-3'>
                                            <select id="countries" className="w-[20%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] " name="phone_code" value={updateData.phone_code} onChange={(e) => { handleChange(e) }}>
                                                <option className='pl-2' >Code</option>
                                                {
                                                    code.map((val) => {
                                                        return <>
                                                            <option value={val.code}>{val.iso}+{val.code}</option>
                                                        </>
                                                    })
                                                }

                                            </select>
                                            <input type="text" className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] " placeholder='Your 10 Digit Mobile Number' name='mobile' value={updateData.mobile} onChange={(e) => { handleChange(e) }} />
                                        </div>
                                    </div>
                                    <div className='py-3 w-[100%] fe flex flex-col'>
                                        <label className='float-start text-start  text-[18px] font-semibold '>Position</label>
                                        <input type="text" placeholder="Enter Position" name='position' className='rounded-3xl bg-[#DBDBDB]  py-1 form-control w-[100%] ' onChange={(e) => { handleChange(e) }} value={updateData.position} />
                                    </div>
                                    <div className='py-3 w-[100%] fe flex flex-col'>
                                        <label className='float-start text-start  text-[18px] font-semibold '>Experience</label>
                                        <input type="text" placeholder="Enter Position" name='experience' className='rounded-3xl bg-[#DBDBDB]  py-1 form-control w-[100%] ' onChange={(e) => { handleChange(e) }} value={updateData.experience} />
                                    </div>
                                    <div className='py-3 w-[100%] fe flex flex-col'>
                                        <p className='float-start text-[18px]  text-start font-semibold mx-2 ml-4'>status</p>
                                        <div className='flex'>
                                            <div className='flex gap-3 ml-3'>
                                                {updateData.status == '1' ? <input id="link-radio" type="radio" placeholder='Mobile' name='status' className="rounded bg-[#DBDBDB] form-control w-[20px] h-[20px] ml-[10px] " value="1" checked onChange={handleChange} /> : <input type="radio" placeholder='Mobile' name='status' className="rounded bg-[#DBDBDB] form-control w-[20px] h-[20px] ml-[10px] " value="1" onChange={handleChange} />}  <p>Active</p>
                                            </div>
                                            <div className='flex gap-3 ml-3'>
                                                {updateData.status == '2' ? <input id="link-radio" type="radio" placeholder='Mobile' name='status' className="rounded bg-[#DBDBDB] form-control w-[20px] h-[20px] ml-[10px] " value="2" checked onChange={handleChange} /> : <input type="radio" placeholder='Mobile' name='status' className="rounded bg-[#DBDBDB] form-control w-[20px] h-[20px] ml-[10px] " value="2" onChange={handleChange} />}<p>inActive</p>
                                            </div>
                                        </div>
                                        <div className='text-center mt-[10px]'>
                                            <button className='text-[18px] font-semibold text-[#fff] bg-[#202040] rounded-3xl py-1 px-3 hover:bg-[#3DC0DF] hover:text-[#202040]' onClick={() => { updateteacherdata() }}>UPDATE</button>
                                        </div>
                                    </div>
                                </div>
                            </Typography>
                        </Box>
                    </Fade>
                </Modal>

                <Modal
                    aria-labelledby="transition-modal-  title"
                    aria-describedby="transition-modal-description"
                    open={salaryopen}
                    onClose={salaryhandleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={salaryopen}>
                        <Box sx={payment}>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                <p class="text-xl font-semibold text-center uppercase">Payment Details</p>
                            </Typography>
                            <Typography id="transition-modal-description">
                                <div class="flex justify-center items-center rounded-3xl mt-[10px]">
                                    <div class="h-auto w-full bg-white p-3 rounded-lg space-y-2">
                                        <div class="input_text flex flex-col">
                                            <lable className=" text-[#212a41] text-sm  font-semibold mb-1">Cardholder Name</lable>
                                            <input type="text" class="rounded" name='username' placeholder="username" onChange={(e) => { onHandleChange(e) }} value={salary.username} />
                                        </div>
                                        <div class="input_text flex flex-col">
                                            <label className=" text-[#212a41] text-sm  font-semibold">Cardholder Email</label>
                                            <input type="text" class="rounded" placeholder="Enter Email" name='email' onChange={(e) => { onHandleChange(e) }} value={salary.email} />
                                        </div>
                                        <div class="input_text flex flex-col">
                                            <label className='text-[#212a41] text-sm  font-semibold'>Description</label>
                                            <input type="text" class="rounded" placeholder="description" name='description' onChange={(e) => { onHandleChange(e) }} value={salary.description} />
                                        </div>
                                        <div class="input_text flex flex-col">
                                            <label className='text-[#212a41] text-sm  font-semibold'>Card Number</label>
                                            <input type="text" class="rounded" placeholder="0000 0000 0000 0000" name='cardNumber' data-slots="0" data-accept="\d" size="19" onChange={(e) => { onHandleChange(e) }} value={salary.cardNumber} />
                                        </div>
                                        <div class="input_text flex flex-col">
                                            <label className='text-[#212a41] text-sm  font-semibold'>Amount</label>
                                            <input type="text" class="rounded" placeholder="12000" name='amount' data-slots="0" data-accept="\d" size="19" onChange={(e) => { onHandleChange(e) }} value={salary.amount} />
                                        </div>
                                        <div class="mt-8 flex gap-2 ">
                                            <div class="input_text flex flex-col">
                                                <label className='text-[#212a41] text-sm  font-semibold'>Expiry month</label>
                                                <input type="text" class="rounded outline-none px-2 focus:border-[#212a41] transition-all w-full border-b" placeholder="mm" name='exMonth' data-slots="my" onChange={(e) => { onHandleChange(e) }} value={salary.exMonth} />
                                            </div>
                                            <div class="input_text flex flex-col">
                                                <label className='text-[#212a41] text-sm  font-semibold'>Expiry year</label>
                                                <input type="text" class="rounded outline-none px-2 focus:border-[#212a41] transition-all w-full border-b" placeholder="yy" name='exYear' data-slots="my" onChange={(e) => { onHandleChange(e) }} value={salary.exYear} />
                                            </div>
                                            <div class="input_text flex flex-col">
                                                <label className='text-[#212a41] text-sm  font-semibold'>CVV</label>
                                                <input type="text" class="rounded outline-none px-2 focus:border-[#212a41] transition-all w-full border-b" placeholder="000" name='cvc' data-slots="0" data-accept="\d" size="3" onChange={(e) => { onHandleChange(e) }} value={salary.cvc} />
                                            </div>
                                        </div>
                                        <div class="flex justify-center mt-4"> <button class="outline-none pay h-12 bg-[#3dc0df] text-white hover:bg-[#212A41] rounded-lg w-1/2 cursor-pointer transition-all" onClick={paySalary}>Pay</button> </div>
                                    </div>
                                </div>
                            </Typography>
                        </Box>
                    </Fade>
                </Modal>
            </div>

        </>
    )
}

const mapStateToProps = (state) => ({
    res: state.teacherList,
    resdetail: state.teacherDetail,
    resdetail2: state.teacherDetail,
    resupdate: state.updateTeacher,
    resdelete: state.deleteTeacher,
    respayment: state.teacherSalary
})

export default connect(mapStateToProps)(TeacherList) 