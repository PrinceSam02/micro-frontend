// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './LoginForm.css'; // Import the custom CSS file

// const Login = () => {
//     const [formData, setFormData] = useState({
//         userEmail: '',
//         userPassword: ''
//     });

//     const [errors, setErrors] = useState({});
//     const [successMessage, setSuccessMessage] = useState('');
//     const [errorMessage, setErrorMessage] = useState(''); // For displaying error messages

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const validateForm = () => {
//         const { userEmail, userPassword } = formData;
//         const newErrors = {};

//         // Email validation
//         if (!userEmail || !userEmail.endsWith('@gmail.com')) {
//             newErrors.userEmail = 'Email must be a valid Gmail address';
//         }

//         // Password validation
//         if (!userPassword || userPassword.length < 6) {
//             newErrors.userPassword = 'Password must be at least 6 characters long';
//         }

//         setErrors(newErrors);

//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (validateForm()) {
//             // Logic for login, e.g., API call
//             setSuccessMessage('Login successful!');
//             // Clear form fields
//             setFormData({
//                 userEmail: '',
//                 userPassword: ''
//             });
//             setTimeout(() => setSuccessMessage(''), 5000);
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <div className="row justify-content-center">
//                 <div className="col-md-6">
//                     <div className="cardlogin">
//                         <div className="card-body">
//                             <h2 className="text-center mb-4">Login</h2>
//                             {successMessage && <div className="alert alert-success">{successMessage}</div>}
//                             {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
//                             <form onSubmit={handleSubmit}>
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
//                                 <button type="submit" className="btn btn-primary btn-block">Login</button>
//                             </form>
//                             <p className="mt-3 text-center">
//                                 Don't have an account? <a href="/register">Register</a>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import axios from 'axios'; // Import axios for API requests
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css'; // Import the custom CSS file

const Login = () => {
    const [formData, setFormData] = useState({
        userEmail: '',
        userPassword: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // For displaying error messages

    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const { userEmail, userPassword } = formData;
        const newErrors = {};

        // Email validation
        if (!userEmail || !userEmail.endsWith('@gmail.com')) {
            newErrors.userEmail = 'Email must be a valid Gmail address';
        }

        // Password validation
        if (!userPassword || userPassword.length < 6) {
            newErrors.userPassword = 'Password must be at least 6 characters long';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                // Make a POST request to the backend API for authentication
                const response = await axios.get('http://localhost:3031/user/loginUser/' + formData.userEmail +"/"+formData.userPassword );

                if (response.status === 200) {
                    setSuccessMessage('Login successful!');
                    // Redirect to dashboard on successful login
                    navigate('/booking');
                }
            } catch (error) {
                // Handle errors from the backend
                setErrorMessage(error.response?.data?.message || 'Invalid email or password');
            }
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="cardlogin">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Login</h2>
                            {successMessage && <div className="alert alert-success">{successMessage}</div>}
                            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                            <form onSubmit={handleSubmit}>
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
                                <button type="submit" className="btn btn-primary btn-block">Login</button>
                            </form>
                            <p className="mt-3 text-center">
                                Don't have an account? <a href="/register">Register</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
