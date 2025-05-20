import React, { useEffect, useState } from 'react';
import { FaCalendarDays, FaUser } from 'react-icons/fa6';

const Blog = () => {

    const [datas, setData] = useState([]);

    useEffect(() => {
        fetch('/News.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    return (
        <>
            {/* Blog Title */}
            <section className="text-center py-8">
                <h1 className="text-4xl text-[#045C99]  font-bold">IEEE LU SB Blogs</h1>
                <p className="text-gray-600 mt-2 mx-2">Stay updated with the latest news, events and technical articles from our student branch</p>
            </section>

            {/* Main Blog Section */}
            <section className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6 w-[90%] mx-auto">
                {/* Left: Blog List + Filters */}
                <div>
                    {/* Filter Options */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                        <div className="flex gap-4">
                            <select className="px-4 py-2 rounded-lg border border-gray-300">
                                <option>Select</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                                <option value="option4">Option 4</option>
                            </select>
                            <select className="px-4 py-2 rounded-lg border border-gray-300">
                                <option>Select</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                                <option value="option4">Option 4</option>
                            </select>
                        </div>
                        <input
                            type="text"
                            placeholder="Search"
                            className="px-4 py-2 rounded-lg border border-gray-300 w-full md:w-auto"
                        />
                    </div>

                    {/* Blog Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Blog  */}

                        
                            {datas.map((news, i) => (
                                <div key={i} className="shadow-md rounded-lg pb-4 overflow-hidden">
                                    <img src={news.img} alt={news.title} className="h-40 w-full object-cover" />
                                    <div className="flex gap-6 p-3 text-sm text-gray-500">
                                        <p><FaCalendarDays className="inline mr-1" /> Date</p>
                                        <p><FaUser className="inline mr-1" /> Full Name</p>
                                    </div>
                                    <h3 className="text-xl font-semibold px-4">{news.title}</h3>
                                    <p className="px-4 py-2 text-gray-700">{news.desc}</p>
                                    <a href={`/news/${news.id}`} className="text-[#045C99] px-4 hover:underline">Read More</a>
                                </div>
                            ))}
                        

                    </div>
                </div>

                {/* Right: Sidebar */}
                <div className="space-y-6">
                    {/* Popular Posts */}
                    <div className="shadow-md rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-4">Popular Post</h3>
                        <div className="flex items-center gap-4 mb-3">
                            <img src="img/post1.png" alt="Post 1" className="w-16 h-16 rounded object-cover" />
                            <div>
                                <h5 className="font-medium">Cybersecurity Best Practices</h5>
                                <p className="text-sm text-gray-600">March 05, 2024</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <img src="img/post2.png" alt="Post 2" className="w-16 h-16 rounded object-cover" />
                            <div>
                                <h5 className="font-medium">The Future of 5G Technology</h5>
                                <p className="text-sm text-gray-600">March 10, 2024</p>
                            </div>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="shadow-md rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-4">Categories</h3>
                        <div className="flex justify-between py-2">
                            <p>Technical Articles</p>
                            <h5>24</h5>
                        </div>
                        <div className="flex justify-between py-2">
                            <p>Events & Workshops</p>
                            <h5>18</h5>
                        </div>
                        <div className="flex justify-between py-2">
                            <p>News & Updates</p>
                            <h5>12</h5>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="shadow-md rounded-lg p-4 flex flex-wrap gap-3">
                        {["AI", "Robotics", "IoT", "Machine Learning", "Workshops"].map((tag, idx) => (
                            <span key={idx} className="hover:text-white text-black    px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-[#045C99]   ">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;