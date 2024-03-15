import React from 'react'
import { MdDashboard } from 'react-icons/md'

const TopHeader = () => {

    const logout = () => {
        localStorage.removeItem('token');
        window.location = "/"
    }
    return (
        <>
            <div className='w-[100%] h-[6vh]  flex justify-between items-center'>
                <div className='flex gap-2'>
                    <MdDashboard className='self-center text-[30px] text-[#3DC0DF]' />
                    <p className='self-center text-[20px]' >Dashboard</p>
                </div>
                <div>
                    <button className='bg-[#3DC0DF] text-[#fff] font-bold rounded px-3 py-1' onClick={() => { logout() }}>Logout</button>
                </div>
            </div>
            <hr />
        </>
    )
}

export default TopHeader