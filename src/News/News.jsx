import React, { useEffect, useState } from 'react';
import { FaCalendarDays, FaUser } from "react-icons/fa6";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const News = () => {

    const [datas, setData] = useState([]);

    useEffect(() => {
        fetch('/News.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    return (
        <section className=''>
            {/* Hero Header */}
            <div className="relative w-full h-[60vh] overflow-hidden">
                <img src="/img/news.jpg" alt="News Banner" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-8 w-full">
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        IEEE LU SB Student Branch Inaugurates New Academic Session
                    </h2>
                    <p className="mt-2">
                        The IEEE LU SB Student Branch starts its journey with renewed enthusiasm and commitment to technological advancement
                    </p>
                </div>
            </div>

            {/* News Buttons */}
            <div className="flex flex-wrap gap-3 p-10">
                {["All News", "Technology", "Research", "Events", "Publications", "Standards"].map((item, i) => (
                    <button key={i} className="px-4 py-2 border border-[#045C99] text-black bg-white rounded-lg hover:bg-[#045C99] hover:text-white transition">
                        {item}
                    </button>
                ))}
            </div>

            {/* News Content */}
            <div className="grid lg:grid-cols-[70%_30%] gap-6 px-10">
                {/* Left News Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {datas.map((news, i) => (
                        <div key={i} className="shadow-md rounded-lg pb-4 overflow-hidden">
                            <img src={news.img} alt={news.title} className="h-40 w-full object-cover" />
                            <div className="flex gap-6 p-3 text-sm text-gray-500">
                                <p><FaCalendarDays className="inline mr-1" /> Date</p>
                                <p><FaUser className="inline mr-1" /> Full Name</p>
                            </div>
                            <h3 className="text-xl font-semibold px-4">{news.title}</h3>
                            <p className="px-4 py-2 text-gray-700">{news.desc}</p>
                            <Link to={`/news/${news.id}`} className="text-[#045C99] px-4 hover:underline">Read More</Link>
                        </div>
                    ))}
                </div>

                {/* Right Sidebar */}
                <div className="shadow-md rounded-lg p-4 space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Trending Topics</h3>
                        {[
                            { title: "Cybersecurity Best Practices", date: "March 05, 2024" },
                            { title: "The Future of 5G Technology", date: "March 10, 2024" }
                        ].map((topic, i) => (
                            <div key={i} className="flex justify-between items-center py-2 border-b">
                                <h2 className="text-[#045C99] text-xl">{`0${i + 1}`}</h2>
                                <div className="text-sm">
                                    <h5 className="font-semibold">{topic.title}</h5>
                                    <p className="text-gray-500">{topic.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Newsletter</h3>
                        <input
                            type="text"
                            placeholder="Enter Your Email"
                            className="w-full p-2 border rounded-lg mb-2"
                        />
                        <button className="w-full p-2 bg-[#045C99] text-white rounded-lg hover:bg-red-600 transition">
                            Subscribe for Updates
                        </button>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Follow IEEE</h3>
                        <div className="flex gap-4 text-2xl text-black">
                            <a href="https://www.facebook.com/ieeecslu" target="_blank" rel="noreferrer">
                                <FaFacebook className="hover:text-[#045C99]" />
                            </a>
                            <a href="https://www.linkedin.com/company/ieeecslu/" target="_blank" rel="noreferrer">
                                <FaLinkedin className="hover:text-[#045C99]" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;