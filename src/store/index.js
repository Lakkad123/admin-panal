import { combineReducers } from "redux";
import {
    addQuestionReducer,
    teacherInsertReducer,
    updateFaqReducer,
    teacherUpdateReducer,
    adminLoginReducer,
    courseUpdateReducer,
    courseAddReducer,
    addTimeReducer,
    updateLectureTimeReducer,
    createCourseGroupReducer,
    teacherSalaryReducer
} from "./reducer/addReducer";
import {
    deleteLectureReducer,
    deleteCourseReducer,
    deleteTeacherReducer,
    deleteUserReducer,
    deleteCompanyReducer,
    deleteFaqReducer
} from "./reducer/deleteReducer";
import {
    faqListReducer,
    UserListReducer,
    teacherListReducer,
    answerViewReducer,
    teacherDetailReducer,
    UserAppliedForJobListReducer,
    UserAppliedForInternshipListReducer,
    ViewUserCareerDetailsReducer,
    ViewAllComapnyReducer,
    totalUsersReducer,
    courseDetailReducer,
    totalCourseReducer,
    totalCompanyReducer,
    courseListReducer,
    totalEnrollmentReducer,
    userListInCourseReducer,
    LectureTimeViewByIdReducer,
    CoursetimeListReducer,
    totalAppiedUserReducer,
    viewjobByCompanyReducer,
    viewinternshipByCompanyReducer,
    viewTrancationReducer
} from "./reducer/getReducer";


const rootReducer = combineReducers({
    teacherRegistration: teacherInsertReducer,
    teacherList: teacherListReducer,
    adminLogin: adminLoginReducer,
    teacherDetail: teacherDetailReducer,
    updateTeacher: teacherUpdateReducer,
    insertCourse: courseAddReducer,
    AllCourseList: courseListReducer,
    CourseDetails: courseDetailReducer,
    updateCourse: courseUpdateReducer,
    numberOfUsers: totalUsersReducer,
    numberOfCourse: totalCourseReducer,
    numberOfCompany: totalCompanyReducer,
    numofUserAppied: totalAppiedUserReducer,
    allfaqList: faqListReducer,
    addQuetionion: addQuestionReducer,
    viewAnswer: answerViewReducer,
    updateQuestion: updateFaqReducer,
    UserListByCourse: userListInCourseReducer,
    numberOfEnrollment: totalEnrollmentReducer,
    addCourseTime: addTimeReducer,
    courseTimeList: CoursetimeListReducer,
    updateCourseTime: updateLectureTimeReducer,
    lectureTimeById: LectureTimeViewByIdReducer,
    deleteLectureTime: deleteLectureReducer,
    userList: UserListReducer,
    userAppliedJobList: UserAppliedForJobListReducer,
    UserAppliedForIntershipList: UserAppliedForInternshipListReducer,
    ViewUserCareerDetails: ViewUserCareerDetailsReducer,

    //  TEACHER SALARY
    teacherSalary: teacherSalaryReducer,
    
    // CREATE GROP
    createCourseGroup: createCourseGroupReducer,

    // COMPANY
    ViewAllComapny: ViewAllComapnyReducer,
    viweAllJobByCompany: viewjobByCompanyReducer,
    viewInternshipByCompany: viewinternshipByCompanyReducer,

    //DELETE 

    deleteCourse: deleteCourseReducer,
    deleteTeacher: deleteTeacherReducer,
    deleteUser: deleteUserReducer,
    deleteCompany: deleteCompanyReducer,
    deleteFaq: deleteFaqReducer,

    //TRANCATION 
    viewTrancationData: viewTrancationReducer
})

export default rootReducer