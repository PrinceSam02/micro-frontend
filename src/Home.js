// import React from 'react'
// import "./App.css"


// function Home() {
//   return (
//     <div>
      

//       <img src='https://th.bing.com/th/id/OIP.FfGxFtzmMf3lrewruD6kqQHaE7?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'></img>
//       {/* <h1 class="h1">Taj Hotels</h1> */}
//       {/* <div class="text-block card">
//         <h4 style={{ fontSize: "20px", textDecoration: "none" }}>Taj Hotels </h4>
//         <p style={{ fontSize: "20px", textDecoration: "none", color: "gray" }}>View our Rooms here</p>
//         <button><a class="but" href="/viewproduct" >Book</a>
//         </button>
//       </div> */}

//     </div>

//   )
// }

// export default Home

import React from 'react';
import { FaHotel } from 'react-icons/fa'; // Font Awesome hotel icon
import './App.css'; // Ensure Tailwind CSS is imported

function Home() {
    return (
        <div className="relative h-screen overflow-hidden">
            {/* Full-screen background image */}
            <img
                src='https://pix10.agoda.net/hotelImages/109034/-1/ae45c7fccd7d3a200a2a5dc6a507dc7c.jpg?s=1024x768'
                alt='Taj Hotels'
                className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Overlay content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                <FaHotel className="text-white text-6xl mb-4 animate-bounce" />
                <h1 className="text-white text-5xl font-bold mb-4 animate-fadeIn">Taj Hotels</h1>
                <p className="text-white text-lg mb-6 animate-fadeIn">Experience luxury like never before</p>
                <a
                    href="/viewproduct"
                    className="bg-teal-500 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold hover:bg-teal-600 transition duration-300 ease-in-out animate-fadeIn"
                >
                    Book Now
                </a>
            </div>
        </div>
    );
}

export default Home;
