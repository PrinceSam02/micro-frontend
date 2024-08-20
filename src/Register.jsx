

// // export default Register;
// import React, { useState } from 'react';
// import axios from 'axios'; // Import axios
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './RegisterForm.css'; // Import the custom CSS file

// const Register = () => {
//     const [formData, setFormData] = useState({
//         userName: '',
//         userEmail: '',
//         userPhoneNumber: '',
//         userPassword: ''
//     });

//     const [errors, setErrors] = useState({});
//     const [successMessage, setSuccessMessage] = useState('');
//     const [errorMessage, setErrorMessage] = useState(''); // For displaying error messages

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const validateForm = () => {
//         const { userName, userEmail, userPhoneNumber, userPassword } = formData;
//         const newErrors = {};

//         // Name validation
//         if (!userName) {
//             newErrors.userName = 'Name is required';
//         }

//         // Email validation
//         if (!userEmail || !userEmail.endsWith('@gmail.com')) {
//             newErrors.userEmail = 'Email must be a valid Gmail address';
//         }

//         // Phone number validation
//         if (!userPhoneNumber || !/^\d{10}$/.test(userPhoneNumber)) {
//             newErrors.userPhoneNumber = 'Phone number must be 10 digits';
//         }

//         // Password validation
//         if (!userPassword || userPassword.length < 8 || !/[!@#$%^&*]/.test(userPassword)) {
//             newErrors.userPassword = 'Password must be at least 8 characters long and include a symbol';
//         }

//         setErrors(newErrors);

//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (validateForm()) {
//             try {
//                 // Make a POST request to the backend API
//                 const response = await axios.post('http://localhost:3031/user/doUserInsert', formData);

//                 if (response.status === 200) {
//                     setSuccessMessage('Registration successful!');
//                     // Clear form fields
//                     setFormData({
//                         userName: '',
//                         userEmail: '',
//                         userPhoneNumber: '',
//                         userPassword: ''
//                     });
//                     setTimeout(() => setSuccessMessage(''), 5000);
//                 }
//             } catch (error) {
//                 // Handle errors from the backend
//                 setErrorMessage(error.response?.data?.message || 'An error occurred');
//                 setTimeout(() => setErrorMessage(''), 5000);
//             }
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <div className="row justify-content-center">
//                 <div className="col-md-6">
//                     <div className="cardreg">
//                         <div className="card-body">
//                             <h2 className="text-center mb-4">Register</h2>
//                             {successMessage && <div className="alert alert-success">{successMessage}</div>}
//                             {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
//                             <form onSubmit={handleSubmit}>
//                                 <div className="form-group">
//                                     <label htmlFor="userName">Name</label>
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         id="userName"
//                                         name="userName"
//                                         value={formData.userName}
//                                         onChange={handleChange}
//                                     />
//                                     {errors.userName && <div className="text-danger">{errors.userName}</div>}
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="userEmail">Email</label>
//                                     <input
//                                         type="email"
//                                         className="form-control"
//                                         id="userEmail"
//                                         name="userEmail"
//                                         value={formData.userEmail}
//                                         onChange={handleChange}
//                                     />
//                                     {errors.userEmail && <div className="text-danger">{errors.userEmail}</div>}
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="userPhoneNumber">Phone Number</label>
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         id="userPhoneNumber"
//                                         name="userPhoneNumber"
//                                         value={formData.userPhoneNumber}
//                                         onChange={handleChange}
//                                     />
//                                     {errors.userPhoneNumber && <div className="text-danger">{errors.userPhoneNumber}</div>}
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="userPassword">Password</label>
//                                     <input
//                                         type="password"
//                                         className="form-control"
//                                         id="userPassword"
//                                         name="userPassword"
//                                         value={formData.userPassword}
//                                         onChange={handleChange}
//                                     />
//                                     {errors.userPassword && <div className="text-danger">{errors.userPassword}</div>}
//                                 </div>
//                                 <button type="submit" className="btn btn-primary btn-block">Register</button>
//                             </form>
//                             <p className="mt-3 text-center">
//                                 Already have an account? <a href="/login">Login</a>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Register;
import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterForm.css'; // Import the custom CSS file
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Register = () => {
    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        userPhoneNumber: '',
        userPassword: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // For displaying error messages

    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const { userName, userEmail, userPhoneNumber, userPassword } = formData;
        const newErrors = {};

        // Name validation
        if (!userName) {
            newErrors.userName = 'Name is required';
        }

        // Email validation
        if (!userEmail || !userEmail.endsWith('@gmail.com')) {
            newErrors.userEmail = 'Email must be a valid Gmail address';
        }

        // Phone number validation
        if (!userPhoneNumber || !/^\d{10}$/.test(userPhoneNumber)) {
            newErrors.userPhoneNumber = 'Phone number must be 10 digits';
        }

        // Password validation
        if (!userPassword || userPassword.length < 8 || !/[!@#$%^&*]/.test(userPassword)) {
            newErrors.userPassword = 'Password must be at least 8 characters long and include a symbol';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                // Make a POST request to the backend API
                const response = await axios.post('http://localhost:3031/user/doUserInsert', formData);

                if (response.status === 200) {
                    setSuccessMessage('Registration successful!');
                    // Clear form fields
                    setFormData({
                        userName: '',
                        userEmail: '',
                        userPhoneNumber: '',
                        userPassword: ''
                    });
                    setTimeout(() => setSuccessMessage(''), 5000);
                    // Redirect to login page
                    navigate('/login');
                }
            } catch (error) {
                // Handle errors from the backend
                setErrorMessage(error.response?.data?.message || 'An error occurred');
                setTimeout(() => setErrorMessage(''), 5000);
            }
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="cardreg">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Register</h2>
                            {successMessage && <div className="alert alert-success">{successMessage}</div>}
                            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="userName">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="userName"
                                        name="userName"
                                        value={formData.userName}
                                        onChange={handleChange}
                                    />
                                    {errors.userName && <div className="text-danger">{errors.userName}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userEmail">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="userEmail"
                                        name="userEmail"
                                        value={formData.userEmail}
                                        onChange={handleChange}
                                    />
                                    {errors.userEmail && <div className="text-danger">{errors.userEmail}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userPhoneNumber">Phone Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="userPhoneNumber"
                                        name="userPhoneNumber"
                                        value={formData.userPhoneNumber}
                                        onChange={handleChange}
                                    />
                                    {errors.userPhoneNumber && <div className="text-danger">{errors.userPhoneNumber}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userPassword">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="userPassword"
                                        name="userPassword"
                                        value={formData.userPassword}
                                        onChange={handleChange}
                                    />
                                    {errors.userPassword && <div className="text-danger">{errors.userPassword}</div>}
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Register</button>
                            </form>
                            <p className="mt-3 text-center">
                                Already have an account? <a href="/login">Login</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
