import React, { useState, useEffect } from 'react';

const Booking = () => {
    const [formData, setFormData] = useState({
        checkInDate: '',
        checkOutDate: '',
        numAdults: '',
        numChildren: '',
        totalGuests: '',
        roomType: '',
        price: '',
        aadharCard: null,
    });

    useEffect(() => {
        // Calculate total guests whenever numAdults or numChildren changes
        const totalGuests = parseInt(formData.numAdults || '0') + parseInt(formData.numChildren || '0');
        setFormData((prevData) => ({
            ...prevData,
            totalGuests,
        }));
    }, [formData.numAdults, formData.numChildren]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            aadharCard: e.target.files[0],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form Data:', formData);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Booking Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700">Check-In Date</label>
                        <input
                            type="date"
                            id="checkInDate"
                            name="checkInDate"
                            value={formData.checkInDate}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700">Check-Out Date</label>
                        <input
                            type="date"
                            id="checkOutDate"
                            name="checkOutDate"
                            value={formData.checkOutDate}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                            required
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="numAdults" className="block text-sm font-medium text-gray-700">Number of Adults</label>
                        <input
                            type="number"
                            id="numAdults"
                            name="numAdults"
                            value={formData.numAdults}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="numChildren" className="block text-sm font-medium text-gray-700">Number of Children</label>
                        <input
                            type="number"
                            id="numChildren"
                            name="numChildren"
                            value={formData.numChildren}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                            required
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="totalGuests" className="block text-sm font-medium text-gray-700">Total Number of Guests</label>
                    <input
                        type="number"
                        id="totalGuests"
                        name="totalGuests"
                        value={formData.totalGuests}
                        readOnly
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="roomType" className="block text-sm font-medium text-gray-700">Room Type</label>
                    <select
                        id="roomType"
                        name="roomType"
                        value={formData.roomType}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                    >
                        <option value="">Select a room type</option>
                        <option value="AC">AC</option>
                        <option value="Non-AC">Non-AC</option>
                        <option value="Cottage">Cottage</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="aadharCard" className="block text-sm font-medium text-gray-700">Upload Aadhar Card</label>
                    <input
                        type="file"
                        id="aadharCard"
                        name="aadharCard"
                        onChange={handleFileChange}
                        className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500"
                        accept="image/*"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Book Now
                </button>
            </form>
        </div>
    );
};

export default Booking;
