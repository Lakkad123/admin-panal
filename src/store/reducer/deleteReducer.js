export const initialState = {
    data: {},
    loading: true
}

//LECTURE DELETE REDUCER
export function deleteLectureReducer(state = initialState, action) {
    switch (action.type) {
        case "DELETE_LECTURE":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

//delete course Reducer

export function deleteCourseReducer(state = initialState, action) {
    switch (action.type) {
        case "DELETE_COURSE":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

//DELETE TEACHER REDUCER

export function deleteTeacherReducer(state = initialState, action) {
    switch (action.type) {
        case "DELETE_TEACHER":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

//USER DELETE REDUCER

export function deleteUserReducer(state = initialState, action) {
    switch (action.type) {
        case "DELETE_USER":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

//COMPANY DELETE REDUCER

export function deleteCompanyReducer(state = initialState,action){
    switch(action.type){
        case "DELETE_COMPANY":
            return {data:action.payload,loading:false};
        default:    
            return state;
    }
}

//DELETE FAQS

export function deleteFaqReducer(state = initialState,action){
    switch(action.type){
        case "DELETE_FAQ":
            return{data:action.payload,loading:false};
        default:
            return state;
    }
}