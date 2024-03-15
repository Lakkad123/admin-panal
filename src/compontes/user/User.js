import React, { useState, useEffect } from 'react'
import Nav from '../nav/Nav'
import { Link } from 'react-router-dom'
import { userList } from '../../store/action/getData'
import { connect } from 'react-redux'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { ViewUserCareerDetails } from '../../store/action/getData'
import { deleteUser } from '../../store/action/deleteData'
import { MdDeleteOutline } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const User = ({ dispatch, res, rescareer, resdelete }) => {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    dispatch(userList());
  }, []);

  useEffect(() => {
    const dataa = res.data && res.data.data && res.data.data.data
    if (dataa) {
      setData(dataa);
      setFilter(dataa);
    }
  }, [res]);

  //search user by its email 

  useEffect(() => {
    const result = data && data.filter(item => {
      return item.email.toLowerCase().match(search.toLowerCase());
    })
    setFilter(result)
  }, [search])

  //career detailsss

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  //USER DELETE

  const deleteUserData = (id) => {
    dispatch(deleteUser(id))
  }

  useEffect(() => {
    const deleteData = resdelete.data && resdelete.data.data;

    console.log("delere Data ", deleteData);
    if (deleteData) {
      if (deleteData.code == 200) {
        toast.success(deleteData.message, { position: toast.POSITION.TOP_CENTER })
      }
      dispatch(userList());
    }
  }, [resdelete])
  return (
    <>
      <div className=''>
        <Nav title="User List" />
        <ToastContainer />
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
                        id="search"
                        value={search}
                        onChange={(e) => { setSearch(e.target.value) }}
                        placeholder="Search something.." />
                    </div>
                  </div>
                </div>
                <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <Link to="/view-transaction"><button class="bg-[#3DC0DF] text-white hover:bg-[#212A41] text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Transaction</button></Link>
                </div>
              </div>
            </div>
            <div class="block w-[100%] h-[50vh] overflow-x-auto">
              <table class="items-center w-[100%] bg-transparent border-collapse">
                <thead className=''>
                  <tr className='text-center '>
                    <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Name
                    </th>
                    <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      email
                    </th>
                    <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid  text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      phone no
                    </th>
                    <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid  text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      city
                    </th>
                    <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      wallet
                    </th>
                    <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      mother_tongue
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
                        <tr className='capitalize'>
                          <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                            {val.first_name}  {val.last_name}
                          </th>
                          <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                            {val.email}
                          </th>
                          <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                            {val.phone_code}  {val.mobile}
                          </td>
                          <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {val.city}
                          </td>
                          <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {val.wallet}
                          </td>
                          <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {val.mother_tongue ? val.mother_tongue : "null"}
                          </td>
                          <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                            <div className='flex justify-center gap-2 '>
                              <Link to={`/job/${val._id}`}><button className='bg-[#3DC0DF] text-[#fff] font-semibold text-[12px] py-2 px-3 py-1 rounded uppercase'>job</button></Link>
                              <Link to={`/internship/${val._id}`}><button className='bg-[#3DC0DF] text-[#fff] font-semibold text-[12px] px-3 py-1 rounded uppercase py-2'>internship</button></Link>
                              <MdDeleteOutline className='text-[32px] bg-[#3DC0DF] p-2 rounded text-[#fff]' onClick={() => { deleteUserData(val._id) }} />
                            </div>
                          </td>
                        </tr>
                      )
                    }) :
                      <tr className='my-3'>
                        <th colspan="7" ><h1 className='text-[24px] mt-5'>Data not found</h1></th>
                      </tr>
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
       
      </div>
    </>
  )
}


const mapStateToProps = (state) => ({
  res: state.userList,
  resdelete: state.deleteUser
})
export default connect(mapStateToProps)(User) 