import logo from './logo.svg';
import './App.css';
import Home from './compontes/Home/Home';
import { Route, Router, Routes } from 'react-router-dom';
import Teacher from './compontes/Teacher/Teacher';
import TeacherList from './compontes/Teacher/TeacherList';
import StudenList from './compontes/Students/StudenList';
import Login from './compontes/AdminLogin/Login';
import Course from './compontes/Course/Course';
import CourseList from './compontes/Course/CourseList';
import Faq from './compontes/FAQ/Faq';
import FaqList from './compontes/FAQ/FaqList';
import EnrollUser from './compontes/EnrollUser/EnrollUser';
import Addtime from './compontes/Course/Addtime';
import TimeList from './compontes/Timeing/TimeList';
import User from './compontes/user/User';
import JobUser from './compontes/user/JobUser';
import InternshipUser from './compontes/user/InternshipUser';
import Companyview from './compontes/Company/Companyview';
import JobCompany from './compontes/Company/JobCompany';
import InternShipCompany from './compontes/Company/InternShipCompany';
import FeesList from './compontes/FeesList/FeesList';
import PaidSalary from './compontes/Salary/PaidSalary';

function App() {
  const token = localStorage.getItem('token');

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/teacher'>
          <Route index element={token ? <TeacherList /> : <Login />}></Route>
          <Route path='add-teacher' element={token ? <Teacher /> : <Login />}></Route>
        </Route>
        <Route path='/view-salary' element={token ? <PaidSalary /> : <Login />} />
        <Route path='/student' element={token ? <StudenList /> : <Login />} />
        <Route path='/home' element={token ? <Home /> : <Login />} />
        <Route path="/course" element={token ? <Course /> : <Login />} />
        <Route path='/course'>
          <Route index element={token ? <CourseList /> : <Login />}></Route>
          <Route path="add-course" element={token ? <Course /> : <Login />} />
        </Route>
        <Route path='/faq'>
          <Route index element={token ? <FaqList /> : <Login />} />
          <Route path='add-question' element={token ? <Faq /> : <Login />} />
        </Route>
        <Route path='/course-user/:id' element={token ? <EnrollUser /> : <Login />}></Route>
        <Route path="/add-time/:id" element={token ? <Addtime /> : <Login />} />
        <Route path='/time-list' element={token ? <TimeList /> : <Login />}></Route>
        <Route path='/user' element={token ? <User /> : <Login />}></Route>
        <Route path='/view-transaction' element={token ? <FeesList /> : <Login />} />
        <Route path='/job/:id' element={token ? <JobUser /> : <Login />}></Route>
        <Route path='/internship/:id' element={token ? <InternshipUser /> : <Login />}></Route>
        <Route path='/job-company/:id' element={token ? <JobCompany /> : <Login />} />
        <Route path='/internship-company/:id' element={token ? <InternShipCompany /> : <Login />} />
        <Route path="/company" element={token ? <Companyview /> : <Login />}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
