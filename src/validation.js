import * as Yup from 'yup';


//  SIGN IN VALIDATION
export const validationSchema = Yup.object().shape({

    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),

});



//  TEACHER ADD

export const teacherAddvalidationSchema = Yup.object().shape({
    first_name: Yup.string()
        .required(' name is required')
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .min(2),
    last_name: Yup.string()
        .required('last name is required')
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .min(2),
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    mobile: Yup.string()
        .required('Mobile number is required')
        .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, 'Password must be 10 digit'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    position: Yup.string()
        .required('Position is required'),
    experience: Yup.string()
        .required("experience is required"),
        status: Yup.string()
        .required().oneOf(["1", "2"], 'Selecting the status is required'),

});


//  course ADD

export const CourseAddvalidationSchema = Yup.object().shape({
    unique_code: Yup.string()
        .required(' uniqu code is required'),
    title: Yup.string()
        .required('title is required')
        .matches(/^[A-Za-z ]*$/, 'Please enter valid title'),
    description: Yup.string()
        .required("description is required"),
    skill: Yup.string()
        .required("skills is required"),
    term: Yup.string()
        .required().oneOf(["1", "2"], 'Selecting the term is required'),
    qualification: Yup.string()
        .required('qualification is required'),
    id_proof: Yup.string()
        .required('proof is required'),
    age: Yup.string()
        .required().matches(/^[0-9]*$/, "Only digit are allowed"),
    fees: Yup.string()
        .required().matches(/^[0-9]*$/, "Only digit are allowed"),
    communication: Yup.string()
        .required("communication is required"),
    hardware: Yup.string()
        .required("hardware is required"),
    candidate: Yup.string()
        .required("candidate is required"),


});

