


// import React from 'react';

// const RoomCard = ({ roomType = 'Unknown', roomName = 'No Name', roomPhotoUrl = 'default-image-url.jpg', roomDescription = 'No Description', price = 0 }) => {
//     // Ensure price is a number and format it properly
//     const formattedPrice = typeof price === 'number' ? price.toFixed(2) : 'N/A';

//     return (
//         <div className="">
            
//         </div>
//     );
// };

// export default RoomCard;

import React from 'react';

const RoomCard = () => {
    // Hardcoded room data
    const rooms = [
        {
            roomType: 'AC',
            roomName: 'Deluxe Suite',
            roomPhotoUrl: '<https://www.google.com/imgres?q=hotel%20rooms%20images%20in%20lakes%20ac%20non-ac%20and%20cottages&imgurl=https%3A%2F%2Fleestays.com%2Fwp-content%2Fuploads%2F2024%2F06%2Flakeview-ac-wooden-cottages-at-pawna-lake-11.webp&imgrefurl=https%3A%2F%2Fleestays.com%2Fbook%2Flakeview-ac-wooden-cottages-at-pawna-lake&docid=u01UVUsMG6m-vM&tbnid=wUC-hd5TETexoM&vet=12ahUKEwiDv5SipYOIAxW8zDgGHRITOtgQM3oECBcQAA..i&w=1024&h=683&hcb=2&ved=2ahUKEwiDv5SipYOIAxW8zDgGHRITOtgQM3oECBcQAA />',
            roomDescription: 'A luxurious room with AC and beautiful views.',
            price: 150
        },
        {
            roomType: 'Non-AC',
            roomName: 'Standard Room',
            roomPhotoUrl: 'https://via.placeholder.com/300',
            roomDescription: 'A comfortable room without AC.',
            price: 80
        },
        {
            roomType: 'Cottage',
            roomName: 'Cozy Cottage',
            roomPhotoUrl: 'https://via.placeholder.com/300',
            roomDescription: 'A charming cottage with a fireplace.',
            price: 120
        },
        {
            roomType: 'AC',
            roomName: 'Executive Room',
            roomPhotoUrl: 'https://via.placeholder.com/300',
            roomDescription: 'An elegant room with AC and modern amenities.',
            price: 180
        },
        {
            roomType: 'Non-AC',
            roomName: 'Economy Room',
            roomPhotoUrl: 'https://via.placeholder.com/300',
            roomDescription: 'An affordable room with basic amenities.',
            price: 60
        },
        {
            roomType: 'Cottage',
            roomName: 'Luxury Cottage',
            roomPhotoUrl: 'https://via.placeholder.com/300',
            roomDescription: 'A spacious cottage with premium features.',
            price: 200
        }
    ];

    return (
        <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {rooms.map((room, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                        <img src={room.roomPhotoUrl} alt={room.roomName} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{room.roomName} ({room.roomType})</h3>
                            <p className="text-gray-600 mb-2">{room.roomDescription}</p>
                            <p className="text-teal-600 font-bold mb-4">Price: ${room.price.toFixed(2)} per night</p>
                            <a href="Booking" className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">Book Now</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoomCard;
