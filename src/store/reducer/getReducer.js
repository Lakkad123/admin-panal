export const initialState = {
    data: {},
    loading: true,
}

//Teacher List 

export function teacherListReducer(state = initialState, action) {
    switch (action.type) {
        case "TEACHER_LIST":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

//Teacher Details
export function teacherDetailReducer(state = initialState, action) {
    switch (action.type) {
        case "TEACHER_DETAILS":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

//Course List 
export function courseListReducer(state = initialState, action) {
    switch (action.type) {
        case "COURSE_LIST":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

//course Details
export function courseDetailReducer(state = initialState, action) {
    switch (action.type) {
        case "COURSE_DETAILS":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

//total Users 
export function totalUsersReducer(state = initialState, action) {
    switch (action.type) {
        case "TOTAL_USERS":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

//total Course
export function totalCourseReducer(state = initialState, action) {
    switch (action.type) {
        case "TOTAL_COURSE":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

//total Company 
export function totalCompanyReducer(state = initialState, action) {
    switch (action.type) {
        case "TOTAL_COMPANY":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

//total user Applied
export function totalAppiedUserReducer(state = initialState, action) {
    switch (action.type) {
        case "TOTAL_APPIED_USER":
            return { data: action.payload, loading: false }
        default:
            return state;
    }
}

//FAQ List 
export function faqListReducer(state = initialState, action) {
    switch (action.type) {
        case "FAQ_LIST":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

//FAQ answer view
export function answerViewReducer(state = initialState, action) {
    switch (action.type) {
        case "FAQ_ANSWER":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// users are in Course

export function userListInCourseReducer(state = initialState, action) {
    switch (action.type) {
        case "COURSE_USER_LIST":
            return { data: action.payload, loading: false }
        default:
            return state;
    }
}

//total enrollment 
export function totalEnrollmentReducer(state = initialState, action) {
    switch (action.type) {
        case "TOTAL_ENROLLMENT":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

//course timeing lisr 
export function CoursetimeListReducer(state = initialState, action) {
    switch (action.type) {
        case "COURSE_TIME_LIST":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// lecture time view by id

export function LectureTimeViewByIdReducer(state = initialState, action) {
    switch (action.type) {
        case "LECTURE_VIEW_ID":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

//user list 

export function UserListReducer(state = initialState, action) {
    switch (action.type) {
        case "USERS_LIST":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

//user appied job list 

export function UserAppliedForJobListReducer(state = initialState, action) {
    switch (action.type) {
        case "USER_JOB_LIST":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

//user appied internship list 

export function UserAppliedForInternshipListReducer(state = initialState, action) {
    switch (action.type) {
        case "USER_INTERNSHIP_LIST":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

//user career details 

export function ViewUserCareerDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case "USER_CAREER_DETAILS":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

//VIEW ALL COMPANY

export function ViewAllComapnyReducer(state = initialState, action) {
    switch (action.type) {
        case "VIEW_ALL_COMPANY":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

//VIEW COMPANYS JOBLIST REDUCER 

export function viewjobByCompanyReducer(state = initialState, action) {
    switch (action.type) {
        case "VIEW_ALL_JOB_BYCOMPANY":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

//VIEW COMPANYS INTERNSHIP LIST REDUCER

export function  viewinternshipByCompanyReducer(state = initialState,action){
    switch (action.type){
        case "VIEW_ALL_INTERNSHIP_BYCOMPANY":
            return {data:action.payload,loading:false};
        default:
            return state;
    }
}

//  TRANCATION LIST REDUCER

export function viewTrancationReducer(state = initialState,action){
    switch(action.type){
        case "VIEW_TRANCATION_LIST":
            return {data:action.payload,loading:false};
        default:
            return state;
    }
}