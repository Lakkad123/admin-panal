import React, { useEffect, useState } from 'react'
import { PieChart } from "react-minimal-pie-chart";
import { connect } from 'react-redux';
import { numberOfUsers } from '../../store/action/getData';
import { numberOfCourse } from '../../store/action/getData';
import { numberOfCompany } from '../../store/action/getData';
import { numofUserAppied } from '../../store/action/getData';
import { numberOfEnrollment } from '../../store/action/getData';
const Pie = ({ dispatch, res, rescompany, resappied }) => {

    const [totaluser, setTotalUser] = useState([]);
    const [totalcompany, setTotalcompany] = useState([]);
    const [totalappied, setTotalappied] = useState([]);

    //total Users 
    useEffect(() => {
        dispatch(numberOfUsers());
    }, [])

    useEffect(() => {
        const dataa = res.data && res.data.data
        if (dataa) {
            if (dataa.code === 200) {
                setTotalUser(dataa)
            }
        }
    }, [res])
    const user = totaluser.data



    //total Conmpany
    useEffect(() => {
        dispatch(numberOfCompany())
    }, [])

    useEffect(() => {
        const companyData = rescompany.data && rescompany.data.data
        if (companyData) {
            if (companyData.code === 200) {
                setTotalcompany(companyData)
            }
        }
       
    }, [rescompany])
    const company = totalcompany.data

    //total Appied usser 
    useEffect(() => {
        dispatch(numofUserAppied())
    }, [])

    useEffect(() => {
        const appiedData = resappied.data && resappied.data.data

        if (appiedData) {
            if (appiedData.code === 200) {
                setTotalappied(appiedData);
            }
        }
       
    }, [resappied])

    const appied = totalappied.data


    return (
        <>
            <div className=''>
                <PieChart
                    className='w-[100%]'
                    data={[
                        { title: 'One', value: user, color: '#3DC0DF' },
                        { title: 'Three', value: company, color: '#bce7f3' },
                        { title: 'four', value: appied, color: '#e8f7fb' }
                    ]}
                />

                <div className='flex flex-col mt-2 justify-center'>
                    <div className='usermain flex gap-5 justify-center'>
                        <div className='flex gap-2'>
                            <p className='m-0 text-[12px] self-center font-bold'>User :</p>
                            <div className='w-[10px] h-[10px] bg-[#3DC0DF] self-center'></div>
                        </div>
                        <div className='flex gap-2'>
                            <p className='m-0 text-[12px] self-center font-bold'>Company :</p>
                            <div className='w-[10px] h-[10px] bg-[#bce7f3] self-center'></div>
                        </div>
                        <div className='flex gap-2'>
                            <p className='m-0 text-[12px] self-center font-bold'>Appied :</p>
                            <div className='w-[10px] h-[10px] bg-[#e8f7fb] self-center'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    res: state.numberOfUsers,
    rescourse: state.numberOfCourse,
    rescompany: state.numberOfCompany,
    resappied: state.numofUserAppied,
    resenroll: state.numberOfEnrollment
})

export default connect(mapStateToProps)(Pie) 