import React, { useEffect, useState } from 'react'
import Nav from '../nav/Nav'
import { Link } from 'react-router-dom'
import { FaEdit } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'
import { deleteFaq } from '../../store/action/deleteData'
import { connect } from 'react-redux'
import { allfaqList, viewAnswer } from '../../store/action/getData'
import { updateQuestion } from '../../store/action/addData'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { ToastContainer, toast, success } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Typography from '@mui/material/Typography'
import { Search } from '@mui/icons-material'

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

const styleupdate = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 3,
    p: 2
};

const FaqList = ({ dispatch, res, resanswer, resdetail, resupdate, resdelete }) => {

    const [faqlist, setFaqlist] = useState([]);
    const [answer, setAnswer] = useState([]);
    const [filter, setFilter] = useState([]);
    const [search, setSearch] = useState([]);

    //view all question 
    useEffect(() => {
        dispatch(allfaqList())
    }, [])

    useEffect(() => {
        const data = res.data && res.data.data && res.data.data.data
        if (data) {
            if (res.data.data.code === 200) {
                setFaqlist(data);
                setFilter(data);
            }
        }
        console.log("dataaaa??0", data);

        console.log("faqqqq", faqlist)
    }, [res])

    // search faq by its question

    useEffect(() => {
        const result = faqlist && faqlist.filter(item => {
            return item.question.toLowerCase().match(search.toLowerCase());
        })
        setFilter(result)
    }, [search])

    //view answer
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const viewans = (id) => {
        console.log("idd", id);
        dispatch(viewAnswer(id))
        handleOpen(true);
    }

    useEffect(() => {
        const data = resanswer.data && resanswer.data.data && resanswer.data.data.data
        if (data) {
            if (resanswer.data.data.code === 200) {
                setAnswer(data);
            }
        }
        console.log("dataaa", data);
    }, [resanswer])

    //update faq
    const [openupdate, setOpenupdate] = React.useState(false);
    const handleOpenUpdate = () => setOpenupdate(true);
    const handleCloseUpdate = () => setOpenupdate(false);

    const [updatedata, setUpdateData] = useState([
        {
            question: "",
            answer: "",
        }
    ])

    const handleChange = (e) => {
        const { name, value } = e.target
        setUpdateData({ ...updatedata, [name]: value })
    }

    const viewfaq = (id) => {
        console.log("id:", id);
        dispatch(viewAnswer(id));
        handleOpenUpdate();
    }

    useEffect(() => {
        const dataa = resdetail.data && resanswer.data.data && resanswer.data.data.data;
        dataa && setUpdateData(dataa)
        console.log("datata", dataa);
    }, [resdetail])

    const updateFaq = () => {
        const id = localStorage.getItem("que_id");
        console.log("iddddd", id);
        dispatch(updateQuestion(id, updatedata))
    }

    useEffect(() => {
        const data = resupdate.data && resupdate.data.data;

        if (data) {
            if (data.code === 200) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER
                })
                window.location = '/faq'
            }
        }
        console.log("data", data);
    }, [resupdate])

    //delete faq
    const DeleteFAQ = (id) => {
        console.log("helloo>>>>o", id);
        dispatch(deleteFaq(id))
    }

    useEffect(() => {
        const data = resdelete.data && resdelete.data.data
        console.log("dataaa", data);
        if (data) {
            toast.success(data.message, {
                position: toast.POSITION.TOP_CENTER
            })
        }
        dispatch(allfaqList())
    }, [resdelete])
    return (
        <>
            <div className='bg-[#F8F8F8] h-[98vh]'>
                <ToastContainer />
                <Nav title="Frequently Asked Questions" />
                <div className=''>
                    <div class="tea_list w-[100%] xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24 ">
                        <div class="teacher_list relative flex flex-col min-w-0 break-words bg-white w-[100%] mb-6 rounded ">
                            <div class="rounded-t mb-0 px-4 py-3 border-0 flex w-[100%]">
                                <div class="flex flex-wrap items-center w-[50%]">
                                    <div class="relative w-full px-4 max-w-full flex-grow  flex-1">
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
                                                    id="search"
                                                    value={search}
                                                    onChange={(e) => { setSearch(e.target.value) }}
                                                    placeholder="Search something.." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                    <Link to="add-question"><button class="bg-[#3DC0DF] text-white hover:bg-[#212A41] text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Add New</button></Link>
                                </div>
                            </div>
                        </div>

                        <div class="block w-[100%] h-[100%] overflow-x-auto">
                            <table class="items-center w-[100%] bg-transparent border-collapse">
                                <thead>
                                    <tr className='text-center w-[100%]'>
                                        <th class="px-6 w-[50%] bg-[#3DC0DF] text-[#fff] align-middle border border-solid text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Question
                                        </th>
                                        <th class="px-6 w-[100%] bg-[#3DC0DF] text-[#fff] align-middle border border-solid text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        filter.map((val) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 text-left text-blueGray-700 ">
                                                            {val.question}
                                                        </th>
                                                        <th class="border-t-0  px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 text-left text-blueGray-700 ">
                                                            <div className='flex justify-center gap-4 '>
                                                                <FaEdit className='text-[32px] bg-[#3DC0DF] p-2 rounded text-[#fff]' onClick={() => { viewfaq(val._id); localStorage.setItem("que_id", val._id) }} />
                                                                <MdDeleteOutline className='text-[32px] bg-[#3DC0DF] p-2 rounded text-[#fff]' onClick={() => DeleteFAQ(val._id)} />
                                                                <button className='bg-[#3DC0DF] px-2 rounded text-[#fff]' onClick={() => { viewans(val._id) }}>View Answer</button>
                                                            </div>
                                                        </th>

                                                    </tr>
                                                </>
                                            )
                                        })
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
                            <Typography id="transition-modal-description" sx={{ mt: 1 }}>
                                <h1 className='text-center font-semibold text-[35px] text-[#3DC0DF] mb-2'>Answer</h1>
                               <p className='font-semibold'>{answer.answer}</p>
                            </Typography>
                        </Box>
                    </Fade>
                </Modal>
                <div>
                    <Modal
                        aria-labelledby="transition-modal-  title"
                        aria-describedby="transition-modal-description"
                        open={openupdate}
                        onClose={handleCloseUpdate}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={openupdate}>
                            <Box sx={styleupdate}>
                                <Typography id="transition-modal-description" sx={{  }}>
                                    <div className='mainpr max-w-3xl mx-auto justify-between items-center px-0 py-5 sm:px-6 sm:py-4 lg:px-8 lg:justify-start lg:space-x-10'>
                                        <div className='xl:lg:px-[30px] md:px-[20px] md:px-[20px] px-[20px]'>
                                            <h1 className='text-center text-[35px] font-semibold'>Personal Details</h1>
                                            <div className='newac1 grid grid-cols-1 cols-span-2 mt-3'>
                                                <div className='feild1 py-1 flex flex-col'>
                                                    <label className='mx-2 text-[18px] font-semibold ml-4 text-start'>Question : </label>
                                                    <input type="text" placeholder='Enter Your Question' name='question' onChange={(e) => { handleChange(e) }} value={updatedata.question} className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] " />
                                                </div>
                                            </div>
                                            <div className='newac1 grid grid-cols-1 cols-span-2 mt-1'>
                                                <div className='feild1 py-1 flex flex-col'>
                                                    <label className='mx-2 text-[18px] font-semibold ml-4 text-start '>Answer : </label>
                                                    <input type="text" name='answer' value={updatedata.answer} onChange={(e) => { handleChange(e) }} className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] " placeholder='Enter Answer' />
                                                </div>
                                            </div>
                                            <div className='text-center mt-[0px]'>
                                                <button  className='text-[18px]  font-semibold text-[#fff] bg-[#202040] rounded-3xl py-1 px-4 hover:bg-[#3DC0DF] hover:text-[#202040] mt-4' onClick={updateFaq}>Save</button>

                                            </div>
                                        </div>
                                    </div>
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
    res: state.allfaqList,
    resanswer: state.viewAnswer,
    resdetail: state.viewAnswer,
    resupdate: state.updateQuestion,
    resdelete: state.deleteFaq
})

export default connect(mapStateToProps)(FaqList) 