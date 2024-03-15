import { data } from "autoprefixer";

    export const initialState = {
        data: {},
        loading: true,
    }

//Teacher Insert

export function teacherInsertReducer(state = initialState, action) {
    switch (action.type) {
        case "TEACHER_INSERT":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

//Teacher Update

export function teacherUpdateReducer(state = initialState, action) {
    switch (action.type) {
        case "TEACHER_UPDATE":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}
//TEACHER SALARY 
export function teacherSalaryReducer(state=initialState,action){
    switch(action.type){
        case "TEACHER_SALARY":
            return  {data:action.payload,loading:false};
        default:
            return state;
    }
}
//Course Add

export function courseAddReducer(state = initialState, action) {
    switch (action.type) {
        case "COURSE_ADD":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

//Update Course

export function courseUpdateReducer(state = initialState, action) {
    switch (action.type) {
        case "COURSE_UPDATE":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

//Admin Login

export function adminLoginReducer(state = initialState, action) {
    switch (action.type) {
        case "ADMIN_LOGIN":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

//add questions

export function addQuestionReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_QUESTION":
            return { data: action.payload, loading: false }
        default:
            return state;
    }
}

//update faq

export function updateFaqReducer(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_QUESTION":
            return { data: action.payload, loading: false }
        default:
            return state;
    }
}

// add-time reducer 
export function addTimeReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TIME":
            return { data: action.payload, loading: false }
        default:
            return state;
    }
}

//update lecture time
export function updateLectureTimeReducer(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_LECTURE_TIME":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// CREATE A COURSE GRUOP

export function createCourseGroupReducer(state = initialState, action) {
    switch (action.type) {
        case "CREATE_GROUP":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}