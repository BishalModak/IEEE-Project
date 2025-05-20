import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper React components



// Custom styles for Swiper

import 'swiper/css';
import './swiper.css'

import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// Import Swiper styles


import { FaCalendar, FaLocationDot, FaVideo, FaNewspaper, FaCalendarDays, FaScrewdriverWrench, FaPhotoFilm, FaBook, FaFileLines, FaUserPlus, FaPen, FaBlog, FaTrophy, FaUsersGear, FaStar, FaLinkedin, FaFacebook } from "react-icons/fa6";



const Event = () => {
    return (
        <div className="font-roboto bg-white text-[#141d28] w-[90%] mx-auto">
            
            {/* Hero Section */}
            <section className="bg-[#141d28] text-white h-[400px]  flex flex-col justify-center mt-4 px-5 py-12 lg:px-45 lg:text-3xl sm:p-8 md:p-4 rounded-xl">
                <div className="">
                    <h1 className="text-4xl font-semibold">IEEE Tech Summit 2025</h1>
                    <h2 className="text-2xl text-[#045C99] mt-2">Coming Soon</h2>
                    <p className="max-w-xl  mt-4 text-base">
                        Join us for the biggest tech conference of the year. Experience cutting-edge technology,
                        network with industry leaders, and shape the future of innovation.
                    </p>

                    <div className="flex flex-wrap  gap-4 mt-8">
                        {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
                            <div key={index} className="bg-[#2c3240] text-white px-4 py-3 rounded-xl ">
                                <span className="text-2xl font-bold">-330</span>
                                <p className="text-sm">{label}</p>
                            </div>
                        ))}
                        <button className="ml-6 p-2 bg-[#045C99] text-white font-semibold rounded-xl">Register Now</button>
                    </div>
                </div>
            </section>

            {/* Events Tabs */}
            <section className="py-12">
                <div className="container mx-auto">
                    <div className="flex flex-wrap gap-4 justify-center mb-8">
                        {['All Events', 'Technical', 'Workshop', 'Social'].map((item, i) => (
                            <button key={i} className={`px-4 py-2 rounded-lg ${i === 0 ? 'bg-[#045C99] text-white' : 'bg-gray-700 text-white'}`}>{item}</button>
                        ))}
                        <input type="date" className="px-4 py-2 rounded-lg bg-white text-black border" />
                        <button className="px-4 py-2 bg-[#045C99] text-white rounded-lg flex items-center gap-2">
                            <FaCalendar /> Calendar View
                        </button>
                    </div>


                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {[1, 2, 3].map((_, i) => (

                            <div key={i} className="bg-white p-4 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 max-w-[480px]">
                                <img
                                    src="/img/rn1.jpg"
                                    alt="Event"
                                    className="rounded-xl mb-4 w-full object-cover"
                                />
                                <span className="text-xs uppercase px-2 py-1 bg-[#045C99] text-white font-semibold rounded-md mb-2 inline-block">Technical</span>
                                <div className="text-sm text-gray-600 flex items-center gap-2 mb-2">
                                    <FaCalendar /> Mar 15
                                </div>
                                <h3 className="text-lg font-semibold mb-1">A Roadmap for Software Engineers</h3>
                                <p className="text-sm mb-2">
                                    Learn the fundamentals of AI development and machine learning
                                    algorithms in this hands-on workshop.
                                </p>
                                <div className="text-sm flex items-center gap-2 mb-4">
                                    <FaLocationDot /> Gallery
                                </div>
                                <button className="px-2 py-2 bg-[#045C99] text-white rounded-lg">Register Now</button>
                            </div>

                        ))}

                    </div>




                </div>




            </section>

            {/* Featured Section */}
            <section className="py-12">
                <div className="text-center">
                    <h1 className="text-3xl mb-4 font-extrabold">Featured Events</h1>
                    <img src="https://i.ibb.co.com/Kp3Zngty/489878324-1075341461278990-2793363852307258575-n.jpg" alt="Featured Banner" className="mx-auto rounded-xl" />
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="bg-white text-black  py-12 px-4">
                <div className="max-w-full mx-auto border border-gray-200 shadow-xl rounded-2xl p-8">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold mb-2">Stay Updated</h1>
                        <p className="font-semibold">Subscribe to our newsletter and never miss an event update.</p>
                        <div className="flex justify-center mt-4 flex-wrap gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 border border-gray-300 rounded-l-md w-64"
                            />
                            <button className="bg-[#045C99] px-4 py-2 rounded-r-md text-white font-semibold">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}

        </div>
    );
};

export default Event;