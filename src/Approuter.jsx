import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Home from './Home';




import Register from "./Register";
import Login from "./Login";
import RoomCard from "./RoomCard";

import { FaHome, FaUser, FaSignInAlt } from 'react-icons/fa'; 
import BookingForm from "./Booking";
import Booking from "./Booking";

function Approuter() {
  return (
    
    <div class="nav111">
      <Router>
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav me-auto mb-2 mb-lg-0" />
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" ><Link class="text-light" to="#">Home</Link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" ><Link class="text-light" to="/addcustomer">Admin Login</Link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" ><Link class="text-light" to="/Register">User Login</Link></a>
                </li>
            
              </ul>
            </div>
          </div>
        </div>
      </nav> */}
      
      <nav className="bg-teal-600 shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo Section */}
                <div className="flex items-center">
                    {/* Uncomment and adjust logo as needed */}
                    {/* <img src={logos} alt="Logo" className="w-10 h-10 rounded-full" /> */}
                    <h1 className="text-white text-2xl font-bold ml-3">MyApp</h1>
                </div>

                {/* Navigation Links */}
                <div className="space-x-4 flex items-center">
                    <Link
                        to="/"
                        className="text-white hover:bg-teal-700 px-3 py-2 rounded-md flex items-center transition-colors duration-300"
                    >
                        <FaHome className="mr-2" /> Home
                    </Link>
                    <Link
                        to="/Employeelogin"
                        className="text-white hover:bg-teal-700 px-3 py-2 rounded-md flex items-center transition-colors duration-300"
                    >
                        <FaSignInAlt className="mr-2" /> Admin Login
                    </Link>
                    <Link
                        to="/Register"
                        className="text-white hover:bg-teal-700 px-3 py-2 rounded-md flex items-center transition-colors duration-300"
                    >
                        <FaUser className="mr-2" /> User Login
                    </Link>
                </div>
            </div>
        </nav>
      
      
        <Routes>

          <Route path="/" element={<Home />} />
          
          <Route path="/Register"  element={<Register />} />
          <Route path="/Login"  element={<Login />} />
          <Route path="/RoomCard"  element={<RoomCard />} />
          <Route path="/Booking"  element={<Booking />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Approuter
