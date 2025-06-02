import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaNewspaper, FaBook, FaCalendarAlt, FaBlog, FaImages, FaUsers, FaSignOutAlt, FaBars, FaTimes, FaMapMarkerAlt } from 'react-icons/fa';

const Dashboard = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [activeSection, setActiveSection] = useState('home');

    // Mock stats for dashboard overview
    const stats = [
        { id: 1, title: 'Total Research Papers', count: 124, icon: <FaBook /> },
        { id: 2, title: 'Published Magazines', count: 18, icon: <FaNewspaper /> },
        { id: 3, title: 'Upcoming Events', count: 7, icon: <FaCalendarAlt /> },
        { id: 4, title: 'New Blog Posts', count: 32, icon: <FaBlog /> },
    ];



    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-[#045C99] text-white transition-all duration-300 ease-in-out`}>
                {/* Logo and Brand */}
                <div className="flex items-center justify-center py-6 ">
                    <img
                        src="/img/ieee_logo.png"
                        alt="IEEE Logo"
                        className={`${isSidebarOpen ? 'w-32' : 'w-12'} transition-all duration-300`}
                    />
                </div>

                {/* Navigation Links */}
                <nav className="mt-8 px-4">
                    <ul className="space-y-2">
                        <li>
                            <button
                                onClick={() => setActiveSection('home')}
                                className={`flex items-center w-full p-3 rounded-lg hover:bg-blue-700 transition duration-200 ${activeSection === 'home' ? 'bg-blue-700' : ''}`}
                            >
                                <FaHome className="text-xl" />
                                {isSidebarOpen && <span className="ml-4">Dashboard Home</span>}
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setActiveSection('research')}
                                className={`flex items-center w-full p-3 rounded-lg hover:bg-blue-700 transition duration-200 ${activeSection === 'research' ? 'bg-blue-700' : ''}`}
                            >
                                <FaBook className="text-xl" />
                                {isSidebarOpen && <span className="ml-4">Research Papers</span>}
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setActiveSection('magazine')}
                                className={`flex items-center w-full p-3 rounded-lg hover:bg-blue-700 transition duration-200 ${activeSection === 'magazine' ? 'bg-blue-700' : ''}`}
                            >
                                <FaNewspaper className="text-xl" />
                                {isSidebarOpen && <span className="ml-4">Magazines</span>}
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setActiveSection('event')}
                                className={`flex items-center w-full p-3 rounded-lg hover:bg-blue-700 transition duration-200 ${activeSection === 'event' ? 'bg-blue-700' : ''}`}
                            >
                                <FaCalendarAlt className="text-xl" />
                                {isSidebarOpen && <span className="ml-4">Events</span>}
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setActiveSection('blog')}
                                className={`flex items-center w-full p-3 rounded-lg hover:bg-blue-700 transition duration-200 ${activeSection === 'blog' ? 'bg-blue-700' : ''}`}
                            >
                                <FaBlog className="text-xl" />
                                {isSidebarOpen && <span className="ml-4">Blogs</span>}
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setActiveSection('news')}
                                className={`flex items-center w-full p-3 rounded-lg hover:bg-blue-700 transition duration-200 ${activeSection === 'news' ? 'bg-blue-700' : ''}`}
                            >
                                <FaNewspaper className="text-xl" />
                                {isSidebarOpen && <span className="ml-4">News</span>}
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setActiveSection('gallery')}
                                className={`flex items-center w-full p-3 rounded-lg hover:bg-blue-700 transition duration-200 ${activeSection === 'gallery' ? 'bg-blue-700' : ''}`}
                            >
                                <FaImages className="text-xl" />
                                {isSidebarOpen && <span className="ml-4">Gallery</span>}
                            </button>
                        </li>

                    </ul>

                    <div className="absolute bottom-0 left-0   p-4">
                        <button className="flex items-center w-full p-3 rounded-lg hover:bg-red-700 transition duration-200">
                            <FaSignOutAlt className="text-xl" />
                            {isSidebarOpen && <span className="ml-3">Logout</span>}
                        </button>
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Header */}
                <header className="bg-white shadow-sm">
                    <div className="flex items-center justify-between p-4">
                        <button onClick={toggleSidebar} className="text-gray-600 focus:outline-none">
                            {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>

                        <div className="flex items-center space-x-4">


                            <div className="flex items-center">
                                <img
                                    src="/img/user.png"
                                    alt="Admin User"
                                    className="h-8 w-8 rounded-full object-cover"
                                />
                                <span className="ml-2 font-medium text-gray-700">Admin User</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-6">
                    {activeSection === 'home' && (
                        <>
                            <h1 className="text-2xl font-semibold text-gray-800">Dashboard Overview</h1>
                            <p className="text-gray-600 mt-1">Welcome to your IEEE admin dashboard</p>

                            {/* Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                                {stats.map(stat => (
                                    <div key={stat.id} className="bg-white rounded-lg shadow-md p-6 flex items-center">
                                        <div className="p-3 rounded-full bg-blue-100 text-[#045C99]">
                                            {stat.icon}
                                        </div>
                                        <div className="ml-4">
                                            <h2 className="text-gray-600 text-sm">{stat.title}</h2>
                                            <p className="text-2xl font-semibold text-gray-800">{stat.count}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Quick Actions */}
                            <div className="mt-8">
                                <h2 className="text-lg font-medium text-gray-800">Quick Actions</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                    <Link to="/event/addEvent" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200">
                                        <div className="flex items-center text-[#045C99]">
                                            <FaCalendarAlt className="text-xl" />
                                            <span className="ml-2 font-medium">Add New Event</span>
                                        </div>
                                    </Link>
                                    <Link to="/news/addNews" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200">
                                        <div className="flex items-center text-[#045C99]">
                                            <FaNewspaper className="text-xl" />
                                            <span className="ml-2 font-medium">Add News Article</span>
                                        </div>
                                    </Link>
                                    <Link to="/megazine/addMegazine" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200">
                                        <div className="flex items-center text-[#045C99]">
                                            <FaBook className="text-xl" />
                                            <span className="ml-2 font-medium">Upload Magazine</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            {/* Recent Activities */}

                        </>
                    )}

                    {activeSection === 'research' && (
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h1 className="text-2xl font-semibold text-gray-800">Research Papers Management</h1>
                            <p className="text-gray-600 mt-1 mb-6">Manage all IEEE research papers here</p>

                            <div className="flex justify-between items-center mb-6">

                                <Link to="/addResearch" className="bg-[#045C99] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                                    Add New Paper
                                </Link>
                            </div>                            {/* Research Papers Items */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Sample Research Paper Card 1 */}
                                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">Advances in Deep Learning Applications</h3>
                                        <div className="flex items-center text-sm text-gray-600 mb-3">
                                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Journal</span>
                                            <span className="mx-2">•</span>
                                            <span>May 15, 2025</span>
                                        </div>
                                        <div className="text-sm text-gray-600 mb-3 line-clamp-3">
                                            <p>This paper explores recent advances in deep learning applications for signal processing and image recognition...</p>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500 mb-4">
                                            <FaBook className="mr-1" /> <span className="mr-3">Citations: 23</span>
                                            <span className="mr-3">|</span>
                                            <span>Authors: 3</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <Link to="/updateResearch" className="bg-blue-50 text-[#045C99] px-3 py-1 rounded border border-blue-200 hover:bg-blue-100 transition">
                                                Update
                                            </Link>
                                            <button className="bg-red-50 text-red-600 px-3 py-1 rounded border border-red-200 hover:bg-red-100 transition">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Sample Research Paper Card 2 */}
                                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">Quantum Computing: A New Paradigm</h3>
                                        <div className="flex items-center text-sm text-gray-600 mb-3">
                                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Conference</span>
                                            <span className="mx-2">•</span>
                                            <span>April 28, 2025</span>
                                        </div>
                                        <div className="text-sm text-gray-600 mb-3 line-clamp-3">
                                            <p>This research presents novel approaches to quantum computing algorithms that enhance processing capabilities...</p>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500 mb-4">
                                            <FaBook className="mr-1" /> <span className="mr-3">Citations: 17</span>
                                            <span className="mr-3">|</span>
                                            <span>Authors: 5</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <Link to="/updateResearch" className="bg-blue-50 text-[#045C99] px-3 py-1 rounded border border-blue-200 hover:bg-blue-100 transition">
                                                Update
                                            </Link>
                                            <button className="bg-red-50 text-red-600 px-3 py-1 rounded border border-red-200 hover:bg-red-100 transition">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    )}

                    {activeSection === 'magazine' && (
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h1 className="text-2xl font-semibold text-gray-800">Magazine Management</h1>
                            <p className="text-gray-600 mt-1 mb-6">Manage IEEE magazines here</p>

                            <div className="flex justify-between items-center mb-6">

                                <Link to="/addMegazine" className="bg-[#045C99] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                                    Add New Magazine
                                </Link>
                            </div>                            {/* Magazines Items */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Sample Magazine Card 1 */}
                                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                                    <img
                                        src="/img/megazin1.png"
                                        alt="IEEE Magazine Cover"
                                        className="h-40 w-full object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">IEEE Spectrum - June 2025</h3>
                                        <div className="flex items-center text-sm text-gray-600 mb-3">
                                            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Latest Issue</span>
                                            <span className="mx-2">•</span>
                                            <span>Vol. 62, Issue 6</span>
                                        </div>
                                        <div className="text-sm text-gray-600 mb-3">
                                            <p className="line-clamp-2">Special focus on sustainable technologies and renewable energy innovations.</p>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500 mb-4">
                                            <span>PDF Size: 8.2MB</span>
                                            <span className="mx-2">•</span>
                                            <span>Pages: 64</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <Link to="/updateMegazine" className="bg-blue-50 text-[#045C99] px-3 py-1 rounded border border-blue-200 hover:bg-blue-100 transition">
                                                Update
                                            </Link>
                                            <button className="bg-red-50 text-red-600 px-3 py-1 rounded border border-red-200 hover:bg-red-100 transition">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Sample Magazine Card 2 */}
                                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                                    <img
                                        src="/img/megazin2.png"
                                        alt="IEEE Magazine Cover"
                                        className="h-40 w-full object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">IEEE Robotics & Automation</h3>
                                        <div className="flex items-center text-sm text-gray-600 mb-3">
                                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Regular Issue</span>
                                            <span className="mx-2">•</span>
                                            <span>Vol. 30, Issue 2</span>
                                        </div>
                                        <div className="text-sm text-gray-600 mb-3">
                                            <p className="line-clamp-2">Exploring advancements in robotics research and autonomous systems.</p>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500 mb-4">
                                            <span>PDF Size: 12.7MB</span>
                                            <span className="mx-2">•</span>
                                            <span>Pages: 86</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <Link to="/updateMegazine" className="bg-blue-50 text-[#045C99] px-3 py-1 rounded border border-blue-200 hover:bg-blue-100 transition">
                                                Update
                                            </Link>
                                            <button className="bg-red-50 text-red-600 px-3 py-1 rounded border border-red-200 hover:bg-red-100 transition">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                          
                        </div>
                    )}

                    {activeSection === 'event' && (
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h1 className="text-2xl font-semibold text-gray-800">Event Management</h1>
                            <p className="text-gray-600 mt-1 mb-6">Manage IEEE events here</p>

                            <div className="flex justify-between items-center mb-6">

                                <Link to="/addEvent" className="bg-[#045C99] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                                    Add New Event
                                </Link>
                            </div>                            {/* Events Items */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Upcoming Event Card */}
                                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                                    <div className="h-32 bg-gradient-to-r from-blue-500 to-cyan-500 relative">
                                        <div className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                                            FEATURED
                                        </div>
                                        <div className="absolute bottom-2 left-2 bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">
                                            UPCOMING
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">IEEE Technical Workshop 2025</h3>
                                        <div className="flex items-center text-sm text-gray-600 mb-3">
                                            <FaCalendarAlt className="mr-1" />
                                            <span>June 15, 2025 • 10:00 AM</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600 mb-3">
                                            <FaMapMarkerAlt className="mr-1" />
                                            <span className="line-clamp-1">IEEE Conference Center, Building B</span>
                                        </div>
                                        <div className="text-sm text-gray-600 mb-3 line-clamp-2">
                                            <p>A comprehensive workshop on the latest technologies in electrical engineering.</p>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500 mb-4">
                                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Technical</span>
                                            <span className="mx-2">•</span>
                                            <span>Registration: 45/100</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <Link to="/updateEvent" className="bg-blue-50 text-[#045C99] px-3 py-1 rounded border border-blue-200 hover:bg-blue-100 transition">
                                                Update
                                            </Link>
                                            <button className="bg-red-50 text-red-600 px-3 py-1 rounded border border-red-200 hover:bg-red-100 transition">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Ongoing Event Card */}
                                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                                    <div className="h-32 bg-gradient-to-r from-purple-500 to-pink-500 relative">
                                        <div className="absolute bottom-2 left-2 bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">
                                            ONGOING
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Machine Learning Symposium</h3>
                                        <div className="flex items-center text-sm text-gray-600 mb-3">
                                            <FaCalendarAlt className="mr-1" />
                                            <span>June 1-3, 2025 • All Day</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600 mb-3">
                                            <FaMapMarkerAlt className="mr-1" />
                                            <span className="line-clamp-1">Virtual Event (Zoom)</span>
                                        </div>
                                        <div className="text-sm text-gray-600 mb-3 line-clamp-2">
                                            <p>Three days of intensive learning about ML applications in engineering.</p>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500 mb-4">
                                            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Conference</span>
                                            <span className="mx-2">•</span>
                                            <span>Attendance: 213</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <Link to="/updateEvent" className="bg-blue-50 text-[#045C99] px-3 py-1 rounded border border-blue-200 hover:bg-blue-100 transition">
                                                Update
                                            </Link>
                                            <button className="bg-red-50 text-red-600 px-3 py-1 rounded border border-red-200 hover:bg-red-100 transition">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    )}

                    {activeSection === 'blog' && (
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h1 className="text-2xl font-semibold text-gray-800">Blog Management</h1>
                            <p className="text-gray-600 mt-1 mb-6">Manage IEEE blog posts here</p>

                            <div className="flex justify-between items-center mb-6">

                                <Link to="/write" className="bg-[#045C99] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                                    Add New Blog Post
                                </Link>
                            </div>                            {/* Blog Items */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Blog Post Card 1 */}
                                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                                    <img
                                        src="/img/blog1.png"
                                        alt="Blog post thumbnail"
                                        className="h-40 w-full object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">The Future of AI in Smart Grids</h3>
                                        <div className="flex items-center text-sm text-gray-600 mb-3">
                                            <span>By Dr. Sarah Matthews</span>
                                            <span className="mx-2">•</span>
                                            <span>May 25, 2025</span>
                                        </div>
                                        <div className="text-sm text-gray-600 mb-3 line-clamp-2">
                                            <p>Exploring how artificial intelligence is transforming power distribution systems and enabling smarter energy management.</p>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500 mb-4">
                                            <span>Views: 1,245</span>
                                            <span className="mx-2">•</span>
                                            <span>Comments: 32</span>
                                            <span className="mx-2">•</span>
                                            <span>Likes: 187</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <Link to="/updateBlog" className="bg-blue-50 text-[#045C99] px-3 py-1 rounded border border-blue-200 hover:bg-blue-100 transition">
                                                Update
                                            </Link>
                                            <button className="bg-red-50 text-red-600 px-3 py-1 rounded border border-red-200 hover:bg-red-100 transition">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Blog Post Card 2 */}
                                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                                    <img
                                        src="/img/blog2.png"
                                        alt="Blog post thumbnail"
                                        className="h-40 w-full object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Cybersecurity Best Practices for Engineers</h3>
                                        <div className="flex items-center text-sm text-gray-600 mb-3">
                                            <span>By John Carter</span>
                                            <span className="mx-2">•</span>
                                            <span>May 18, 2025</span>
                                        </div>
                                        <div className="text-sm text-gray-600 mb-3 line-clamp-2">
                                            <p>Essential security protocols every electrical engineer should implement to protect critical infrastructure.</p>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500 mb-4">
                                            <span>Views: 876</span>
                                            <span className="mx-2">•</span>
                                            <span>Comments: 15</span>
                                            <span className="mx-2">•</span>
                                            <span>Likes: 93</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <Link to="/updateBlog" className="bg-blue-50 text-[#045C99] px-3 py-1 rounded border border-blue-200 hover:bg-blue-100 transition">
                                                Update
                                            </Link>
                                            <button className="bg-red-50 text-red-600 px-3 py-1 rounded border border-red-200 hover:bg-red-100 transition">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    )}

                    {activeSection === 'news' && (
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h1 className="text-2xl font-semibold text-gray-800">News Management</h1>
                            <p className="text-gray-600 mt-1 mb-6">Manage IEEE news articles here</p>

                            <div className="flex justify-between items-center mb-6">

                                <Link to="/addNews" className="bg-[#045C99] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                                    Add New News Article
                                </Link>
                            </div>                            {/* News Items */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* News Article Card 1 */}
                                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                                    <img
                                        src="/img/news.jpg"
                                        alt="News article thumbnail"
                                        className="h-40 w-full object-cover"
                                    />
                                    <div className="p-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">BREAKING</span>
                                            <span className="text-xs text-gray-500">Published 3 hours ago</span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">IEEE Announces New Industry Standards</h3>
                                        <div className="text-sm text-gray-600 mb-3 line-clamp-2">
                                            <p>The IEEE has released new standards for renewable energy integration with existing power infrastructures, effective immediately.</p>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500 mb-4">
                                            <span>By IEEE Standards Association</span>
                                            <span className="mx-2">•</span>
                                            <span>Views: 1,823</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <Link to="/updateNews" className="bg-blue-50 text-[#045C99] px-3 py-1 rounded border border-blue-200 hover:bg-blue-100 transition">
                                                Update
                                            </Link>
                                            <button className="bg-red-50 text-red-600 px-3 py-1 rounded border border-red-200 hover:bg-red-100 transition">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* News Article Card 2 */}
                                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                                    <img
                                        src="/img/R10_Meeting_11-250x188.jpg"
                                        alt="News article thumbnail"
                                        className="h-40 w-full object-cover"
                                    />
                                    <div className="p-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">ANNOUNCEMENT</span>
                                            <span className="text-xs text-gray-500">Yesterday</span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">IEEE Region 10 Meeting Concludes with New Initiatives</h3>
                                        <div className="text-sm text-gray-600 mb-3 line-clamp-2">
                                            <p>The annual IEEE Region 10 meeting concluded with announcements of several new educational initiatives for members.</p>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500 mb-4">
                                            <span>By IEEE Region 10 Committee</span>
                                            <span className="mx-2">•</span>
                                            <span>Views: 945</span>
                                        </div>
                                        <div className="flex justify-between">
                                             <Link to="/updateNews" className="bg-blue-50 text-[#045C99] px-3 py-1 rounded border border-blue-200 hover:bg-blue-100 transition">
                                                Update
                                            </Link>
                                            <button className="bg-red-50 text-red-600 px-3 py-1 rounded border border-red-200 hover:bg-red-100 transition">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                           
                        </div>
                    )}

                    {activeSection === 'gallery' && (
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h1 className="text-2xl font-semibold text-gray-800">Gallery Management</h1>
                            <p className="text-gray-600 mt-1 mb-6">Manage IEEE image gallery here</p>

                            <div className="flex justify-between items-center mb-6">

                                <Link to="/addGallery" className="bg-[#045C99] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                                    Upload Images
                                </Link>
                            </div>                            {/* Gallery Items */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {/* Gallery Image 1 */}
                                <div className="relative group">
                                    <img
                                        src="/img/gellary1.jpg"
                                        alt="IEEE Conference"
                                        className="h-48 w-full object-cover rounded-lg"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-sm font-medium line-clamp-2">IEEE Annual Conference 2025 Opening Ceremony</p>
                                        <div className="flex justify-between items-center mt-2">
                                             <Link to="/updateGallery" className="bg-blue-50 text-[#045C99] px-3 py-1 rounded border border-blue-200 hover:bg-blue-100 transition">
                                                Update
                                            </Link>
                                            <button className="bg-red-500/80 hover:bg-red-600/80 text-xs text-white px-2 py-1 rounded">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Gallery Image 2 */}
                                <div className="relative group">
                                    <img
                                        src="/img/gellary2.jpg"
                                        alt="IEEE Workshop"
                                        className="h-48 w-full object-cover rounded-lg"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-sm font-medium line-clamp-2">Technical Workshop on Emerging Technologies</p>
                                        <div className="flex justify-between items-center mt-2">
                                            <Link to="/updateGallery" className="bg-blue-50 text-[#045C99] px-3 py-1 rounded border border-blue-200 hover:bg-blue-100 transition">
                                                Update
                                            </Link>
                                            <button className="bg-red-500/80 hover:bg-red-600/80 text-xs text-white px-2 py-1 rounded">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Gallery Image 3 */}
                                <div className="relative group">
                                    <img
                                        src="/img/gellary3.jpg"
                                        alt="IEEE Award Ceremony"
                                        className="h-48 w-full object-cover rounded-lg"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-sm font-medium line-clamp-2">Annual Student Award Ceremony</p>
                                        <div className="flex justify-between items-center mt-2">
                                            <Link to="/updateGallery" className="bg-blue-50 text-[#045C99] px-3 py-1 rounded border border-blue-200 hover:bg-blue-100 transition">
                                                Update
                                            </Link>
                                            <button className="bg-red-500/80 hover:bg-red-600/80 text-xs text-white px-2 py-1 rounded">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Gallery Image 4 */}
                                <div className="relative group">
                                    <img
                                        src="/img/gellary4.jpg"
                                        alt="IEEE Panel Discussion"
                                        className="h-48 w-full object-cover rounded-lg"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-sm font-medium line-clamp-2">Expert Panel on Renewable Energy</p>
                                        <div className="flex justify-between items-center mt-2">
                                            <Link to="/updateGallery" className="bg-blue-50 text-[#045C99] px-3 py-1 rounded border border-blue-200 hover:bg-blue-100 transition">
                                                Update
                                            </Link>
                                            <button className="bg-red-500/80 hover:bg-red-600/80 text-xs text-white px-2 py-1 rounded">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Gallery Image 5 */}
                                <div className="relative group">
                                    <img
                                        src="/img/gellary5.jpg"
                                        alt="IEEE Networking Event"
                                        className="h-48 w-full object-cover rounded-lg"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-sm font-medium line-clamp-2">Industry Networking Reception</p>
                                        <div className="flex justify-between items-center mt-2">
                                           <Link to="/updateGallery" className="bg-blue-50 text-[#045C99] px-3 py-1 rounded border border-blue-200 hover:bg-blue-100 transition">
                                                Update
                                            </Link>
                                            <button className="bg-red-500/80 hover:bg-red-600/80 text-xs text-white px-2 py-1 rounded">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Gallery Image 6 */}
                                <div className="relative group">
                                    <img
                                        src="/img/gellary6.jpg"
                                        alt="IEEE Lab Tour"
                                        className="h-48 w-full object-cover rounded-lg"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-sm font-medium line-clamp-2">Research Laboratory Tour</p>
                                        <div className="flex justify-between items-center mt-2">
                                            <Link to="/updateGallery" className="bg-blue-50 text-[#045C99] px-3 py-1 rounded border border-blue-200 hover:bg-blue-100 transition">
                                                Update
                                            </Link>
                                            <button className="bg-red-500/80 hover:bg-red-600/80 text-xs text-white px-2 py-1 rounded">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}


                </main>
            </div>
        </div>
    );
};

export default Dashboard;