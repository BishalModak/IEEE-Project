import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaLink, FaImage } from 'react-icons/fa';

const UpdateEvent = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [eventType, setEventType] = useState('Technical');
    const [featured, setFeatured] = useState(false);
    const [eventStatus, setEventStatus] = useState('Upcoming');

    const eventTypes = ['Technical', 'Workshop', 'Social', 'Conference', 'Webinar', 'Meeting'];
    const eventStatuses = ['Upcoming', 'Ongoing', 'Completed', 'Cancelled'];

    const handleSubmit = (e) => {
        e.preventDefault();

        // Get form data
        const form = e.target;
        const name = form.name.value;
        const description = form.description.value;
        const image = form.image.files[0];
        const startDate = form.startDate.value;
        const startTime = form.startTime.value;
        const location = form.location.value;
        const registrationLink = form.registrationLink.value;

        // Create event object based on the JSON structure
        const eventData = {
            name,
            description,
            image: image ? URL.createObjectURL(image) : null, // In a real app, you'd upload to server
            startDate,
            startTime,
            location,
            featured,
            status: eventStatus,
            type: eventType,
            registrationLink
        };

        // Here you would normally send this data to a server
        console.log("Event to be added:", eventData);

        // Show success toast
        toast.success("Event has been created successfully!");

        // Reset form
        form.reset();
        setImagePreview(null);
        setEventType('Technical');
        setFeatured(false);
        setEventStatus('Upcoming');
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl md:text-4xl font-bold text-center text-[#045C99] mb-2">Update Event</h1>
                <p className="text-center text-gray-600 mb-10">Update an event for IEEE members and participants. Please fill in all required information.</p>

                <div className="bg-white rounded-xl shadow-md p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8">Event Information</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Event Name */}
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Event Name*</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter event name"
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Event Description */}
                        <div>
                            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Event Description*</label>
                            <textarea
                                id="description"
                                name="description"
                                rows="6"
                                placeholder="Enter a detailed description of the event..."
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            ></textarea>
                        </div>

                        {/* Event Image */}
                        <div>
                            <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
                                <div className="flex items-center gap-2">
                                    <FaImage /> Event Banner Image*
                                </div>
                            </label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                className="block w-full text-sm text-gray-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-md file:border-0
                                file:text-sm file:font-semibold
                                file:bg-blue-50 file:text-[#045C99]
                                hover:file:bg-blue-100"
                                onChange={handleImageChange}
                                required
                            />

                            {/* Image Preview */}
                            {imagePreview && (
                                <div className="mt-4">
                                    <p className="text-sm text-gray-600 mb-2">Image Preview:</p>
                                    <img
                                        src={imagePreview}
                                        alt="Event Preview"
                                        className="w-full max-h-64 object-contain border rounded-md"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Event Date and Time */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="startDate" className="block text-gray-700 font-medium mb-2">
                                    <div className="flex items-center gap-2">
                                        <FaCalendarAlt /> Start Date*
                                    </div>
                                </label>
                                <input
                                    type="date"
                                    id="startDate"
                                    name="startDate"
                                    className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="startTime" className="block text-gray-700 font-medium mb-2">
                                    <div className="flex items-center gap-2">
                                        <FaClock /> Start Time*
                                    </div>
                                </label>
                                <input
                                    type="time"
                                    id="startTime"
                                    name="startTime"
                                    className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* Event Location */}
                        <div>
                            <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
                                <div className="flex items-center gap-2">
                                    <FaMapMarkerAlt /> Location*
                                </div>
                            </label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                placeholder="Enter event location (e.g., Auditorium, Online, etc.)"
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Event Type */}
                        <div>
                            <label htmlFor="eventType" className="block text-gray-700 font-medium mb-2">Event Type*</label>
                            <select
                                id="eventType"
                                name="eventType"
                                value={eventType}
                                onChange={(e) => setEventType(e.target.value)}
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                {eventTypes.map((type) => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>

                        {/* Event Status */}
                        <div>
                            <label htmlFor="eventStatus" className="block text-gray-700 font-medium mb-2">Event Status*</label>
                            <select
                                id="eventStatus"
                                name="eventStatus"
                                value={eventStatus}
                                onChange={(e) => setEventStatus(e.target.value)}
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                {eventStatuses.map((status) => (
                                    <option key={status} value={status}>{status}</option>
                                ))}
                            </select>
                        </div>

                        {/* Featured Event */}
                        <div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="featured"
                                    name="featured"
                                    checked={featured}
                                    onChange={() => setFeatured(!featured)}
                                    className="w-5 h-5 text-[#045C99] focus:ring-blue-500"
                                />
                                <label htmlFor="featured" className="ml-2 block text-gray-700 font-medium">
                                    Featured Event (Will be displayed prominently)
                                </label>
                            </div>
                        </div>

                        {/* Registration Link */}
                        <div>
                            <label htmlFor="registrationLink" className="block text-gray-700 font-medium mb-2">
                                <div className="flex items-center gap-2">
                                    <FaLink /> Registration Link
                                </div>
                            </label>
                            <input
                                type="url"
                                id="registrationLink"
                                name="registrationLink"
                                placeholder="https://registration-link.com"
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <p className="text-sm text-gray-500 mt-1">Leave empty if registration is not required</p>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full bg-[#045C99] text-white py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300"
                            >
                                Update Event
                            </button>
                        </div>
                    </form>
                </div>

                {/* Event Guidelines */}
                <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
                    <h3 className="text-lg font-semibold text-[#045C99] mb-2">Event Creation Guidelines</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Provide a clear and descriptive name for your event</li>
                        <li>Include all relevant details in the description (agenda, speakers, etc.)</li>
                        <li>Upload a high-quality banner image (recommended size: 1200×628 pixels)</li>
                        <li>Double-check the event date, time, and location</li>
                        <li>Mark as "Featured" only for major IEEE events</li>
                        <li>Add a registration link if attendance tracking is required</li>
                        <li>All events must adhere to IEEE standards and policies</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UpdateEvent;