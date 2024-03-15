import { Baseurl } from "../../Baseurl";
import axios from "axios";
import { dispatch } from "d3";

const token = localStorage.getItem("token");

//teacher register
export function teacherRegistration(data) {
    console.log("data", data)
    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/teacher/insert`, data, {
                headers: {
                    Authorization: token
                }
            });

            console.log("res:::", response)
            var return_response = {
                type: "TEACHER_INSERT",
                payload: response
            };
            dispatch(return_response);
        }
        catch (error) {
            console.log("res::", error)
            var return_response = {
                type: "TEACHER_INSERT",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

//update Teacher
export function updateTeacher(data, id) {
    return async (dispatch) => {
        try {
            const response = await axios.put(`${Baseurl}/teacher/update/${id}`, data, {
                headers: {
                    Authorization: token
                }
            });
            console.log("response::", response);
            var return_response = {
                type: "TEACHER_UPDATE",
                payload: response
            }
            dispatch(return_response)
        } catch (error) {
            console.log("eroorrr", error);

            var return_response = {
                type: "TEACHER_UPDATE",
                payload: error
            }
            dispatch(return_response)
        }
    }
}

//Course Add 

export function insertCourse(data) {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/courses/insert`, data, {
                headers: {
                    Authorization: token
                }
            });
            console.log("response::", response);
            var return_response = {
                type: "COURSE_ADD",
                payload: response
            }
            dispatch(return_response)
        } catch (error) {
            console.log("errorr::", error);
            var return_response = {
                type: "COURSE_ADD",
                payload: error
            }
            dispatch(return_response)
        }
    }
}

//Course Update 

export function updateCourse(id, data) {
    return async (dispatch) => {
        try {
            const response = await axios.put(`${Baseurl}/courses/update/${id}`, data, {
                headers: {
                    Authorization: token
                }
            });
            console.log("response", response);
            var return_response = {
                type: "COURSE_UPDATE",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {
            console.log("errorr::", error);
            var return_response = {
                type: "COURSE_UPDATE",
                payload: error
            }
            dispatch(return_response)
        }
    }
}

//admin login

export function adminLogin(data) {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/admin/login`, data);
            var return_response = {
                type: "ADMIN_LOGIN",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {
            console.log("aaaaaaaa")
            console.log("error", error);

            var return_response = {
                type: "ADMIN_LOGIN",
                payload: error
            }
            dispatch(return_response);
        }
    }

}

//add quetionsd 

export function addQuetionion(data) {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/faq/insert`, data, {
                headers: {
                    Authorization: token
                }
            })
            console.log("response: " + response);
            var return_response = {
                type: "ADD_QUESTION",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {
            console.log("error::", error);

            var return_response = {
                type: "ADD_QUESTION",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

//update question

export function updateQuestion(id, data) {
    return async (dispatch) => {
        try {
            const response = await axios.put(`${Baseurl}/faq/update/${id}`, data, {
                headers: {
                    Authorization: token
                }
            })
            console.log("responsee", response);
            var return_response = {
                type: "UPDATE_QUESTION",
                payload: response
            }
            dispatch(return_response)
        } catch (error) {
            console.log("errorr", error);

            var return_response = {
                type: "UPDATE_QUESTION",
                payload: error
            }
            dispatch(return_response)
        }
    }
}

//add course time
export function addCourseTime(data) {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/lecture/insert`, data);
            var return_response = {
                type: "ADD_TIME",
                payload: response
            }
            dispatch(return_response)
        } catch (error) {
            var return_response = {
                type: "ADD_TIME",
                payload: error
            }
            dispatch(return_response)
        }
    }
}

//update lecture time
export function updateCourseTime(id, data) {
    return async (dispatch) => {
        try {
            const response = await axios.put(`${Baseurl}/lecture/update/${id}`, data, {
                headers: {
                    Authorization: token
                }
            })
            var return_response = {
                type: "UPDATE_LECTURE_TIME",
                payload: response
            }
            dispatch(return_response)
        } catch (error) {
            var return_response = {
                type: "UPDATE_LECTURE_TIME",
                payload: error
            }
        }
    }
}


// CREATE A COURSE GRUOP

export function createCourseGroup(id, data) {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/group/create/${id}`, data);
            console.log("response", response);
            var return_response = {
                type: "CREATE_GROUP",
                payload: response
            }
            dispatch(return_response)
        } catch (error) {
            var return_response = {
                type: "CREATE_GROUP",
                payload: error
            }
        }
    }
}

export function teacherSalary(teacher_id, data) {
    console.log("teacher_id",teacher_id,"data",data)
    return async (dispatch) => {
        try {
            console.log("helll[o")
            const response = await axios.post(`${Baseurl}/payment/pay-salary/${teacher_id}`, data);
            console.log("respomsee", response);
            var return_response = {
                type: "TEACHER_SALARY",
                payload: response
            }
            dispatch(return_response)
        } catch (error) {
            console.log("error", error);
            var return_response = {
                type: "TEACHER_SALARY",
                payload: error
            }
            dispatch(return_response)
        }
    }
}