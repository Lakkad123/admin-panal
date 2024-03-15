import React, { useEffect, useState } from 'react'
import { insertCourse } from '../../store/action/addData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux'
import Nav from '../nav/Nav'
import { teacherList } from '../../store/action/getData';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CourseAddvalidationSchema } from '../../validation';

const Course = ({ dispatch, res, resunicode }) => {
    const [unique_code, setUnique_code] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [skill, setSkill] = useState();
    const [term, setTerm] = useState();
    const [qualification, setQualification] = useState();
    const [id_proof, setId_proof] = useState();
    const [age, setAge] = useState();
    const [fees, setFees] = useState();
    const [communication, setCommunication] = useState();
    const [hardware, setHardware] = useState();
    const [candidate, setCandidate] = useState();
    const [unicode, setUnicode] = useState([]);

    const formData = new FormData();
    formData.append("unique_code", unique_code);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("skill", skill);
    formData.append("term", term);
    formData.append("qualification", qualification);
    formData.append("id_proof", id_proof);
    formData.append("age", age);
    formData.append("fees", fees)
    formData.append("communication", communication);
    formData.append("hardware", hardware);
    formData.append("candidate", candidate);

    const formOptions = { resolver: yupResolver(CourseAddvalidationSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    const onSubmit = () => {
        dispatch(insertCourse(formData));
    }

    useEffect(() => {
        const data = res.data && res.data.data
        console.log("dataa", data)
        if (data) {
            if (data.code === 201) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER
                })
                setTimeout(() => {
                    window.location = "/course"
                }, 3000);
            }
        }
    }, [res])

    // all unicode 
    useEffect(() => {
        dispatch(teacherList())
    }, [])

    useEffect(() => {
        const dataa = resunicode.data && resunicode.data.data && resunicode.data.data.data
        if (dataa) {
            if (resunicode.data.data.code === 200) {
                setUnicode(dataa)
            }
        }
    }, [resunicode])

  

    return (
        <>
            <div className=''>

                <Nav title="add course" />
                <div>
                    <div className='max-w-2xl mx-auto justify-between  px-0 py-5 sm:px-6 sm:py-4 lg:px-8 lg:justify-start  my-[20px]'>
                        <div className='border-2 px-10 rounded-2xl'>
                            <form className="space-y-6 capitalize" onSubmit={handleSubmit(onSubmit)}>
                                <h1 className='text-[35px] font-semibold text-center mt-[40px]'>Course Details</h1>
                                <div className='grid grid-cols-2 gap-5'>
                                    <div className=' w-[100%]  flex flex-col'>
                                        <label className='float-start text-start  text-[18px] font-semibold '>Teacher Name</label>
                                        <select id="unique_code" {...register('unique_code')} className={`w-[100%]  ${errors.unique_code ? 'is-invalid' : ''}   rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-0`} name="unique_code" value={unique_code} onChange={(e) => { setUnique_code(e.target.value) }}>
                                            <option className='pl-2' value="" >Choose</option>
                                            {
                                                unicode.map((val) => {
                                                    return <>
                                                        <option value={val.unique_code}>{val.first_name} {val.last_name}</option>
                                                    </>
                                                })
                                            }

                                        </select>
                                        <div className="invalid-feedback text-[red] text-start capitalize ">{errors.unique_code?.message}</div>
                                    </div>
                                    <div className=' w-[100%]  flex flex-col'>
                                        <label className='float-start text-start  text-[18px] font-semibold  '>course Title</label>
                                        <input type="text" {...register('title')} placeholder="Enter Course Title" name='title' value={title} onChange={(e) => { setTitle(e.target.value) }} className={`rounded-3xl ${errors.title ? 'is-invalid' : ''} bg-[#DBDBDB]   form-control w-[100%] border-0`} autoComplete="off" />
                                        <div className="invalid-feedback text-[red] text-start capitalize ">{errors.title?.message}</div>
                                    </div>
                                </div>

                                <div className=' w-[100%]  flex flex-col'>
                                    <label className='float-start text-start  text-[18px] font-semibold '>Description</label>
                                    <textarea type="text" {...register('description')}  name='description' value={description} onChange={(e) => { setDescription(e.target.value) }} className={`rounded-3xl ${errors.description ? 'is-invalid' : ''} bg-[#DBDBDB]   form-control w-[100%] border-0`} autoComplete="off" />
                                    <div className="invalid-feedback text-[red] text-start capitalize ">{errors.description?.message}</div>
                                </div>

                                <div className=' w-[100%]  flex flex-col'>
                                    <label className='float-start text-start  text-[18px] font-semibold '>Skill</label>
                                    <input type="text"  {...register('skill')} placeholder="Enter  Skill" name='skill' value={skill} onChange={(e) => { setSkill(e.target.value) }} className={`rounded-3xl bg-[#DBDBDB] ${errors.skill ? 'is-invalid' : ''}   form-control w-[100%] border-0`} autoComplete="off" />
                                    <div className="invalid-feedback text-[red] text-start capitalize ">{errors.skill?.message}</div>
                                </div>
                                <div>
                                    <p className='float-start text-[18px]  text-start font-semibold mx-2 '>Term</p>
                                    <div className='flex gap-8'>
                                        <div className='w-[25%]'>
                                            <input type="radio" {...register('term')} name='term' onChange={(e) => { setTerm(e.target.value) }} className={`rounded bg-[#DBDBDB] form-control  ${errors.term ? 'is-invalid' : ''} w-[20px] h-[20px]  ml-0 border-0`} value="1" autoComplete="off" /><span className='ml-3'>Short Term</span>
                                            <div className="invalid-feedback text-[red] text-start capitalize ">{errors.term?.message}</div>
                                        </div>
                                        <div className='w-[30%]'>
                                            <input type="radio" {...register('term')} name='term' onChange={(e) => { setTerm(e.target.value) }} className={`rounded bg-[#DBDBDB]  ${errors.term ? 'is-invalid' : ''} form-control w-[20px] h-[20px] ml-[10px] border-0`} value="2" autoComplete="off" /><span className='ml-3'>Long Term</span>
                                        </div>

                                    </div>
                                </div>

                                <div className=' grid grid-cols-2 gap-5'>
                                    <div className='  flex flex-col'>
                                        <label className='text-[18px] font-semibold text-start '>Qualification</label>
                                        <input type="text" {...register('qualification')} placeholder="Enter Qualification" name='qualification' value={qualification} onChange={(e) => { setQualification(e.target.value) }} className={`rounded-3xl bg-[#DBDBDB] ${errors.qualification ? 'is-invalid' : ''}   form-control w-[100%] border-0`} autoComplete="off" />
                                        <div className="invalid-feedback text-[red] text-start capitalize ">{errors.qualification?.message}</div>
                                    </div>
                                    <div className='  flex flex-col'>
                                        <label className='  text-[18px] font-semibold text-start '>Id proof</label>
                                        <input type="text" {...register('id_proof')} placeholder="Adhar Card like" name='id_proof' value={id_proof} onChange={(e) => { setId_proof(e.target.value) }} className={`rounded-3xl bg-[#DBDBDB] ${errors.id_proof ? 'is-invalid' : ''}   form-control w-[100%] border-0`} autoComplete="off" />
                                        <div className="invalid-feedback text-[red] text-start capitalize ">{errors.id_proof?.message}</div>
                                    </div>
                                </div>
                                <div className=' grid grid-cols-2 gap-5'>
                                    <div className='  flex flex-col'>
                                        <label className='float-start text-start  text-[18px] font-semibold '>Age</label>
                                        <input type="text" {...register('age')} placeholder="Enter Age" name='age' value={age} onChange={(e) => { setAge(e.target.value) }} className={`rounded-3xl ${errors.age ? 'is-invalid' : ''} bg-[#DBDBDB]   form-control w-[100%] border-0`} autoComplete="off" />
                                        <div className="invalid-feedback text-[red] text-start capitalize ">{errors.age?.message}</div>
                                    </div>
                                    <div className='  flex flex-col'>
                                        <label className='float-start text-start  text-[18px] font-semibold '>fees</label>
                                        <input type="text" {...register('fees')} placeholder="Enter fees" name='fees' value={fees} onChange={(e) => { setFees(e.target.value) }} className={`rounded-3xl ${errors.fees ? 'is-invalid' : ''} bg-[#DBDBDB]   form-control w-[100%] border-0`} autoComplete="off" />
                                        <div className="invalid-feedback text-[red] text-start capitalize ">{errors.fees?.message}</div>
                                    </div>
                                </div>

                                <div className='grid grid-cols-2 gap-4'>
                                    <div className=' w-[100%]  flex flex-col'>
                                        <label className='float-start text-start  text-[18px] font-semibold '>Communication</label>
                                        <input type="text" {...register('communication')} placeholder="Enter Communication Skill" name='communication' value={communication} onChange={(e) => { setCommunication(e.target.value) }} className={`rounded-3xl ${errors.communication ? 'is-invalid' : ''} bg-[#DBDBDB]   form-control w-[100%] border-0`} autoComplete="off" />
                                        <div className="invalid-feedback text-[red] text-start capitalize ">{errors.communication?.message}</div>
                                    </div>
                                    <div className=' w-[100%]  flex flex-col'>
                                        <label className='float-start text-start  text-[18px] font-semibold '>Hardware</label>
                                        <input type="text" {...register('hardware')} placeholder="Enter Avaible Device" name='hardware' value={hardware} onChange={(e) => { setHardware(e.target.value) }} className={`rounded-3xl ${errors.hardware ? 'is-invalid' : ''} bg-[#DBDBDB]   form-control w-[100%] border-0`} autoComplete="off" />
                                        <div className="invalid-feedback text-[red] text-start capitalize ">{errors.hardware?.message}</div>
                                    </div>
                                </div>
                                <div className=' w-[100%]  flex flex-col'>
                                    <label className='float-start text-start  text-[18px] font-semibold '>Candidate</label>
                                    <input type="text" {...register('candidate')} placeholder="Candidate For" name='candidate' value={candidate} onChange={(e) => { setCandidate(e.target.value) }} className={`rounded-3xl bg-[#DBDBDB] ${errors.candidate ? 'is-invalid' : ''}   form-control w-[100%] border-0`} autoComplete="off" />
                                    <div className="invalid-feedback text-[red] text-start capitalize ">{errors.candidate?.message}</div>
                                </div>
                                <div className=' w-[100%]  flex flex-col'>
                                    <div className='text-center my-4'>
                                        <button type='submit' className='text-[18px] font-semibold text-[#fff] bg-[#202040] rounded-3xl  px-3 hover:bg-[#3DC0DF] hover:text-[#202040]'>Save</button>
                                        <ToastContainer />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    res: state.insertCourse,
    resunicode: state.teacherList,
})

export default connect(mapStateToProps)(Course) 