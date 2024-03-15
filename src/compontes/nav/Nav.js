import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiTeacher } from 'react-icons/gi'
import { FaDiscourse } from 'react-icons/fa';
import { GoHome } from 'react-icons/go';
import { FcFaq } from 'react-icons/fc';
import { BiTimer } from 'react-icons/bi';
import { FaUserFriends } from 'react-icons/fa';  


const Nav = (props) => {

    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }

    const logout = () => {
        localStorage.removeItem('token');
        window.location = "/"
    }
    return (
        <>
            <div className="container-fluid mt-3">
                <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
                    <div className="sd-header">
                        <img src='/images/logo.png' alt='not found' className='w-[80%]'></img>
                        <div className="btn bg-[#3DC0DF] text-[#fff]" onClick={ToggleSidebar}><i className="fa fa-times"></i></div>
                    </div>
                    <div className="sd-body">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm  hover:no-underline hover:bg-[#212A41] hover:text-[#fff] hover:font-bold">
                                <Link
                                    to="/home"
                                    className="flex items-center p-2 space-x-3 rounded-md hover:no-underline hover:text-white"
                                >
                                    <GoHome className="w-9 h-9 p-2 text-[#fff] bg-[#3DC0DF] rounded">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </GoHome>
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li className="rounded-sm  hover:no-underline hover:bg-[#212A41] hover:text-[#fff] hover:font-bold">
                                <Link
                                    to="/teacher"
                                    className="flex items-center p-2 space-x-3 rounded-md hover:no-underline hover:text-white"
                                >
                                    <GiTeacher className="w-9 h-9 p-2 text-[#fff] bg-[#3DC0DF] rounded">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </GiTeacher>
                                    <span>Teacher</span>
                                </Link>
                            </li>
                            <li className="rounded-sm hover:no-underline hover:bg-[#212A41] hover:text-[#fff] hover:font-bold ">
                                <Link
                                    to="/course"
                                    className="flex items-center p-2 space-x-3 rounded-md hover:no-underline hover:text-white"
                                >
                                    <FaDiscourse className="w-9 h-9 p-2 text-[#fff] bg-[#3DC0DF] rounded">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                        />
                                    </FaDiscourse>
                                    <span>Course</span>
                                </Link>
                            </li>
                            <li className="rounded-sm hover:no-underline hover:bg-[#212A41] hover:text-[#fff] hover:font-bold ">
                                <Link
                                    to="/faq"
                                    className="flex items-center p-2 space-x-3 rounded-md hover:no-underline hover:text-white"
                                >
                                    <FcFaq className="w-9 h-9 p-2 text-[#000] bg-[#3DC0DF] rounded">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                        />
                                    </FcFaq>
                                    <span>FAQ</span>
                                </Link>
                            </li>
                            <li className="rounded-sm hover:no-underline hover:bg-[#212A41] hover:text-[#fff] hover:font-bold">
                                <a
                                    href="/time-list"
                                    className="flex items-center p-2 space-x-3 rounded-md hover:no-underline hover:text-white"
                                >
                                    <BiTimer className="w-9 h-9 p-2 text-[#fff] bg-[#3DC0DF] rounded">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                        />
                                    </BiTimer>
                                    <span>Lecture Time</span>

                                </a>
                            </li>
                            <li className="rounded-sm hover:no-underline hover:bg-[#212A41] hover:text-[#fff] hover:font-bold ">
                                <Link
                                    to="/user"
                                    className="flex items-center p-2 space-x-3 rounded-md hover:no-underline hover:text-white"
                                >
                                    <FaUserFriends className="w-9 h-9 p-2 text-[#fff] bg-[#3DC0DF] rounded">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                        />
                                    </FaUserFriends>
                                    <span>User</span>
                                </Link>
                            </li>
                            <li className="rounded-sm hover:no-underline hover:bg-[#212A41] hover:text-[#fff] hover:font-bold ">
                                <Link
                                    to="/company"
                                    className="flex items-center p-2 space-x-3 rounded-md hover:no-underline hover:text-white"
                                >
                                    <FaUserFriends className="w-9 h-9 p-2 text-[#fff] bg-[#3DC0DF] rounded">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                        />
                                    </FaUserFriends>
                                    <span>Company</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
                <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
                    <div className="container-fluid p-2">
                        <div className="btn  bg-[#3DC0DF] text-[#fff]" onClick={ToggleSidebar} >
                            <div className='flex justify-center gap-3'>
                                <i className="fa fa-bars self-center"></i><p className='self-center m-0'>Open Menu</p>
                            </div>
                        </div>
                        <div className=''>
                            <p className='text-[25px] font-semibold ml-5 text-[#3DC0DF] uppercase'>{props.title}</p>
                        </div>
                        <div className="form-inline ml-auto">
                            <button className='bg-[#3DC0DF] text-[#fff] font-bold rounded px-3 py-1' onClick={() => { logout() }}>Logout</button>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default Nav