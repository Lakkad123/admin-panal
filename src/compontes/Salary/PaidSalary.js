import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { connect } from 'react-redux';
import { viewTrancationData } from '../../store/action/getData'
import Nav from '../nav/Nav'

const PaidSalary = ({ dispatch, res }) => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        dispatch(viewTrancationData(1));
    }, [])

    useEffect(() => {
        const salaryData = res.data && res.data.data && res.data.data.data
        if (salaryData) {
            setData(salaryData)
            setFilter(salaryData)
        }
    }, [res])
    useEffect(() => {
        const result = data && data.filter(item => {
            return item.user_name.toLowerCase().match(search.toLowerCase());
        })
        setFilter(result)
    }, [search])
    return (
        <>
                <Nav title="Tansaction" />
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
                            <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"></div>
                        </div>
                    </div>
                    <div class="block w-[100%] h-[50vh] overflow-x-auto">
                        <table class="items-center w-[100%] bg-transparent border-collapse">
                            <thead className=''>
                                <tr className='text-center '>
                                    <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        User Name
                                    </th>
                                    <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Description
                                    </th>
                                    <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid  text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Phone no
                                    </th>
                                    <th class="px-6 bg-[#3DC0DF] text-[#fff] align-middle border border-solid  text-center border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Amout
                                    </th>
                                </tr>
                            </thead>
                            {
                                data[0] ? filter.map((val) => {
                                    return (
                                        <>
                                            <tbody >
                                                <tr className='capitalize'>
                                                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                                        {val.user_name}
                                                    </th>
                                                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                                        {val.description}
                                                    </th>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                        {val.mobile_no}
                                                    </td>
                                                    <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        {val.amount}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </>
                                    )
                                }) :
                                    <tr className='my-3'>
                                        <th colspan="8" ><h1 className='text-[24px] mt-5 capitalize'>Data not found</h1></th>
                                    </tr>
                            }
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => ({
    res: state.viewTrancationData
})
export default connect(mapStateToProps)(PaidSalary)