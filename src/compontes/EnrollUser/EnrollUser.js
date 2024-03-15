import React, { useEffect, useState } from 'react'
import Nav from '../nav/Nav'
import { FaEdit } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'
import { FiEye } from 'react-icons/fi'
import { Link, useParams } from 'react-router-dom'
import { UserListByCourse } from '../../store/action/getData'
import { connect } from 'react-redux'



const EnrollUser = ({ dispatch, res }) => {

    const [userdata, setUserData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [search, setSearch] = useState([]);

    const { id } = useParams();
    const _id = id;

    useEffect(() => {
        dispatch(UserListByCourse(_id))
    }, [])

    useEffect(() => {
        const data = res.data && res.data.data && res.data.data.data

        if (data) {
            setUserData(data);
            setFilter(data);
        }
        console.log("data:::", data);
    }, [res])

    useEffect(() => {
        const result = userdata && userdata.filter(item => {
            return item.email.toLowerCase().match(search.toLowerCase());
        })
        setFilter(result);
    }, [search])

    return (
        <>
            <div className='bg-[#F8F8F8] h-[98vh]'>
                <Nav title="Course User"></Nav>
                <div>
                    <div class="tea_list w-[100%] max-w-7xl mb-12 xl:mb-0 px-4 mx-auto mt-24">
                        <div class="teacher_list relative flex flex-col min-w-0 break-words bg-white w-[100%] mb-6 rounded ">
                            <div class="rounded-t mb-0 px-4 py-3 border-0">
                                <div class="flex flex-wrap items-center">
                                    <div class="relative w-full px-4 max-w-full flex-grow flex-1">
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
                            </div>
                            <div class="block w-[100%] h-[550px] overflow-x-auto">
                                <table class="items-center w-[100%] bg-transparent border-collapse">
                                    <thead className=''>
                                        <tr className='text-center '>
                                            <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                course_title
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
                                                linkedin_profile
                                            </th>
                                            <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                city
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
                                            userdata[0] ? filter.map((val) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                                                {val.course_title}
                                                            </th>
                                                            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                                                {val.user.first_name}   {val.user.last_name}
                                                            </th>
                                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                                {val.user.email}
                                                            </td>
                                                            <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                                {val.user.phone_code}  {val.user.mobile}
                                                            </td>
                                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                                {val.user.linkedin_profile}
                                                            </td>
                                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                                {val.user.city}
                                                            </td>
                                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                                {val.status == 1 ? <button className='bg-[#0080FE] font-bold text-[#fff] px-2 py-1 rounded'>Active</button> : <button className='bg-[#DC143C] font-bold text-[#fff] px-2 py-1 rounded'>InActive</button>}
                                                            </td>
                                                            <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                                                <div className='flex justify-center gap-2 '>
                                                                    <FaEdit className='text-[32px] bg-[#3DC0DF] p-2 rounded text-[#fff]' />
                                                                    <MdDeleteOutline className='text-[32px] bg-[#3DC0DF] p-2 rounded text-[#fff]' />
                                                                    <FiEye className='text-[32px] bg-[#3DC0DF] p-2 rounded text-[#fff]' />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            }) :
                                                <tr className='my-3'>
                                                    <th colspan="5" ><h1 className='text-[24px] mt-5 text-center'>Data not found</h1></th>
                                                </tr>
                                        }



                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    res: state.UserListByCourse
})

export default connect(mapStateToProps)(EnrollUser) 