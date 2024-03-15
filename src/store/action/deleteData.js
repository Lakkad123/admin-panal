import { Baseurl } from "../../Baseurl";
import axios from "axios";
import { dispatch } from "d3";

// LECTURE DELETE 

const token = localStorage.getItem('token')

export function deleteLectureTime(id) {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/lecture/delete/${id}`, { "password": "admin@123" }, {
                headers: {
                    Authorization: token
                }
            });
            var return_response = {
                type: "DELETE_LECTURE",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {
            var return_response = {
                type: "DELETE_LECTURE",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

//DELETE COURSE DATA 
export function deleteCourse(id) {
    return async (dispatch) => {

        try {
            console.log("tt>>>", token);
            const response = await axios.post(`${Baseurl}/courses/delete/${id}`, { "password": 'admin@123' }, {
                headers: {
                    Authorization: token
                }
            });
            console.log("delete response:", response);

            var return_response = {
                type: "DELETE_COURSE",
                payload: response
            }
            dispatch(return_response);
        }
        catch (error) {
            console.log("error", error);

            var return_response = {
                type: "DELETE_COURSE",
                payload: error
            }
        }
    }
}

//DELETE TEACHER DATA 

export function deleteTeacher(id) {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/teacher/delete/${id}`, { "password": "admin@123" }, {
                headers: {
                    Authorization: token
                }
            })
            console.log("responseee", response);
            var return_response = {
                type: "DELETE_TEACHER",
                payload: response
            }
            dispatch(return_response)
        } catch (error) {
            console.log("error", error);

            var return_response = {
                type: 'DELETE_TEACHER',
                payload: error
            }
            dispatch(return_response)
        }
    }
}

//USER DELETE

export function deleteUser(id) {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/user/delete/${id}`, { "password": "admin@123" }, {
                headers: {
                    Authorization: token
                }
            })
            console.log("responseee", response);
            var return_response = {
                type: "DELETE_USER",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {
            console.log(error);

            var return_response = {
                type: "DELETE_USER",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

//DELETE COMPANY 

export function deleteCompany(id) {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/company/delete/${id}`, { "password": "admin@123" }, {
                headers: {
                    Authorization: token
                }
            })
            console.log("response", response);
            var return_response = {
                type: "DELETE_COMPANY",
                payload: response
            }
            dispatch(return_response)
        } catch (error) {
            console.log("error", error);

            var return_response = {
                type: "DELETE_COMPANY",
                payload: error
            }
        }
    }
}

//DELETE FAQ DATA

export function deleteFaq(id) {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`${Baseurl}/faq/delete/${id}`, {
                headers: {
                    Authorization: token
                }
            })
            console.log("responseee", response);
            var return_response = {
                type: "DELETE_FAQ",
                payload: response
            }
            dispatch(return_response)
        } catch (error) {
            console.log("error", error);
            var return_response = {
                type: "DELETE_FAQ",
                payload: error
            }
        }
    }
}