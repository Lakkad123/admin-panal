import { Baseurl } from "../../Baseurl";
import axios from "axios";
import { dispatch } from "d3";


const token = localStorage.getItem("token");

//all teacher list
export function teacherList() {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/teacher/view-all`, {
                headers: {
                    Authorization: token
                }
            });
            console.log("response::>>>", response);

            var return_response = {
                type: "TEACHER_LIST",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {
            console.log("error: ", error);

            var return_response = {
                type: "TEACHER_LIST",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

//view teacher details
export function teacherDetail(id) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/teacher/view-profile/${id}`, {
                headers: {
                    Authorization: token
                }
            });
            console.log("response:::>>mmmm>", response);


            var return_response = {
                type: "TEACHER_DETAILS",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {
            console.log("error: ", error);

            var return_response = {
                type: "TEACHER_DETAILS",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

//all cousre list 
export function AllCourseList() {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/courses/view-all`);
            var return_response = {
                type: "COURSE_LIST",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {
            console.log("error:: ", error);

            var return_response = {
                type: "COURSE_LIST",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

//course Details
export function CourseDetails(id) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/courses/view-by-id/${id}`, {
                headers: {
                    Authorization: token
                }
            })
            var return_response = {
                type: "COURSE_DETAILS",
                payload: response
            }
            dispatch(return_response)
        } catch (error) {
            console.log("error::", error);

            var return_response = {
                type: "COURSE_DETAILS",
                payload: error
            }
            dispatch(return_response)
        }
    }
}

//total users 

export function numberOfUsers() {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/admin/count-user`, {
                headers: {
                    Authorization: token
                }
            });


            var return_response = {
                type: "TOTAL_USERS",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {


            var return_response = {
                type: "TOTAL_USERS",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

//Total Couress
export function numberOfCourse() {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/admin/count-courses`, {
                headers: {
                    Authorization: token
                }
            })


            var return_response = {
                type: "TOTAL_COURSE",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {


            var return_response = {
                type: "TOTAL_COURSE",
                payload: error
            }
        }
    }
}

//total Company 
export function numberOfCompany() {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/admin/count-company`, {
                headers: {
                    Authorization: token
                }
            });

            var return_response = {
                type: "TOTAL_COMPANY",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {

            var return_response = {
                type: "TOTAL_COMPANY",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

//total appied user 
export function numofUserAppied() {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/admin/user-apply-count`, {
                headers: {
                    Authorization: token
                }
            });

            var return_response = {
                type: "TOTAL_APPIED_USER",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {


            var return_response = {
                type: "TOTAL_APPIED_USER",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

//FaQ List 
export function allfaqList() {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/faq/view`, {
                headers: {
                    Authorization: token
                }
            });

            var return_response = {
                type: "FAQ_LIST",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {


            var return_response = {
                type: "FAQ_LIST",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

//faq view answer
export function viewAnswer(id) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/faq/view-by-id/${id}`, {
                headers: {
                    Authorization: token
                }
            })
            console.log("response", response)
            var return_response = {
                type: "FAQ_ANSWER",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {
            console.log("error", error);

            var return_response = {
                type: "FAQ_ANSWER",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

//course wise users list

export function UserListByCourse(id) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/enrolled/view-by-course/${id}`)
            console.log("responsee", response);
            var return_response = {
                type: "COURSE_USER_LIST",
                payload: response
            }
            dispatch(return_response)
        } catch (error) {
            console.log("error", error);
            var return_response = {
                type: "COURSE_USER_LIST",
                payload: error
            }
        }
    }
}

//total enroll ment 

export function numberOfEnrollment() {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/enrolled/enrolled-count`);
            var return_response = {
                type: "TOTAL_ENROLLMENT",
                payload: response
            }
            dispatch(return_response)
        } catch (error) {
            var return_response = {
                type: "TOTAL_ENROLLMENT",
                payload: error
            }
            dispatch(return_response)
        }
    }
}

//total course time list

export function courseTimeList() {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/lecture/view-all`)

            var return_response = {
                type: "COURSE_TIME_LIST",
                payload: response
            }
            dispatch(return_response)
        } catch (error) {
            console.log("error", error);

            var return_response = {
                type: "COURSE_TIME_LIST",
                payload: error
            }
            dispatch(return_response)
        }
    }
}

//lecture view by id 
export function lectureTimeById(id) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/lecture/view-by-id/${id}`);
            console.log("responsee", response);

            var return_response = {
                type: "LECTURE_VIEW_ID",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {
            console.log("errorr", error);
            var return_response = {
                type: "LECTURE_VIEW_ID",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

//user list 

export function userList() {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/user/view-all`);

            var return_response = {
                type: "USERS_LIST",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {
            console.log("errorr", error);

            var return_response = {
                type: "USERS_LIST",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

//user appied for job list 

export function userAppliedJobList(id) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/applies/get-job/${id}`);

            const return_response = {
                type: "USER_JOB_LIST",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {
            console.log("error", error);

            const return_response = {
                type: "USER_JOB_LIST",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

// user applied for a internship list 

export function UserAppliedForIntershipList(id) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/applies/get-internship/${id}`);
            console.log("respinsweee", response);

            var return_response = {
                type: "USER_INTERNSHIP_LIST",
                payload: response
            }
            dispatch(return_response)
        } catch (error) {
            console.log("error", error);

            var return_response = {
                type: "USER_INTERNSHIP_LIST",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

//user carre details 

export function ViewUserCareerDetails(id) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/career/view-by-user-id/${id}`);


            var return_response = {
                type: "USER_CAREER_DETAILS",
                payload: response
            }
            dispatch(return_response);
        }
        catch (error) {
            console.log("error", error);

            var return_response = {
                type: "USER_CAREER_DETAILS",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

//VIEW ALL COMPANY

export function ViewAllComapny() {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/company/view-all`, {
                headers: {
                    Authorization: token
                }
            });
            console.log("data::", response);
            var return_response = {
                type: "VIEW_ALL_COMPANY",
                payload: response
            }
            dispatch(return_response);
        }
        catch (error) {
            console.log("error", error);

            var return_response = {
                type: "VIEW_ALL_COMPANY",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

//VIEW COMPANYS JOB LIST

export function viweAllJobByCompany(id) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/jobs/list-job-by-company/${id}`, {
                headers: {
                    Authorization: token
                }
            });
            console.log("responseee", response);

            var return_response = {
                type: "VIEW_ALL_JOB_BYCOMPANY",
                payload: response
            }
            dispatch(return_response);
        }
        catch (error) {
            console.log("errorr", error);
            var return_response = {
                type: "VIEW_ALL_JOB_BYCOMPANY",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

//VIEW COMPANYS INTERSHIP LIST 

export function viewInternshipByCompany(id) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/internship/list-intern-by-company/${id}`, {
                headers: {
                    Authorization: token
                }
            });
            console.log("responseee", response);
            var return_response = {
                type: "VIEW_ALL_INTERNSHIP_BYCOMPANY",
                payload: response
            }
            dispatch(return_response)
        } catch (error) {
            console.log("error", error);
            var return_response = {
                type: "VIEW_ALL_INTERNSHIP_BYCOMPANY",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

//VIEW ALL TRANCATION LIST 

export function viewTrancationData(type) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/payment/view-by-type/${type}`, {
                headers: {
                    Authorization: token
                }
            })
            console.log("responseee", response);
            var return_response = {
                type: "VIEW_TRANCATION_LIST",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {
            console.log("errorrr", error);
            var return_response = {
                type: "VIEW_TRANCATION_LIST",
                payload: error
            }
        }
    }
}