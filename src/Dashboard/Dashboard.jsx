import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaNewspaper, FaBook, FaCalendarAlt, FaBlog, FaImages, FaUsers, FaSignOutAlt, FaBars, FaTimes, FaMapMarkerAlt, FaEnvelope, FaIdCard, FaAddressBook, FaComment, FaUserTie, FaFacebook, FaLinkedin, FaTrophy, FaChartBar, FaUserFriends, FaAward, FaIndustry, FaProjectDiagram, FaTools } from 'react-icons/fa';

const Dashboard = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [activeSection, setActiveSection] = useState('home');

    // Mock users data
    const users = [
        {
            id: 1,
            name: "Dr. Ahmed Khan",
            email: "ahmed.khan@ieee.org",
            ieeeId: "95782364",
            image: "/img/Lukman Hossain.jpg",
            role: "Senior Member",
            department: "Electrical Engineering",
            joinDate: "June 15, 2022"
        },
        {
            id: 2,
            name: "Sarah Thompson",
            email: "sarah.t@ieee.org",
            ieeeId: "86451279",
            image: "/img/sourav.jpg",
            role: "Member",
            department: "Computer Science",
            joinDate: "August 3, 2023"
        },
        {
            id: 3,
            name: "Rahul Mehta",
            email: "r.mehta@ieee.org",
            ieeeId: "78945612",
            image: "/img/pulok.jpg",
            role: "Student Member",
            department: "Electronics",
            joinDate: "January 22, 2024"
        },
        {
            id: 4,
            name: "Jessica Chen",
            email: "j.chen@ieee.org",
            ieeeId: "36974125",
            image: "/img/Tahsin.jpg",
            role: "Graduate Student",
            department: "Telecommunications",
            joinDate: "March 8, 2024"
        },
        {
            id: 5,
            name: "Michael Lee",
            email: "m.lee@ieee.org",
            ieeeId: "45612378",
            image: "/img/tahmid.jpg",
            role: "Associate Member",
            department: "Robotics",
            joinDate: "November 14, 2023"
        },
        {
            id: 6,
            name: "Badar Hossain",
            email: "p.sharma@ieee.org",
            ieeeId: "12789456",
            image: "/img/Badar.jpg",
            role: "Student Member",
            department: "Mechanical Engineering",
            joinDate: "February 19, 2024"
        }
    ];    // Mock contacts data
    const contacts = [
        {
            id: 1,
            name: "Dr. Ahmed Khan",
            email: "ahmed.khan@ieee.org",
            position: "Branch Chair",
            image: "/img/Lukman Hossain.jpg",
            department: "Electrical Engineering"
        },
        {
            id: 2,
            name: "Sarah Thompson",
            email: "sarah.t@ieee.org",
            position: "Vice Chair",
            image: "/img/sourav.jpg",
            department: "Computer Science"
        },
        {
            id: 3,
            name: "Rahul Mehta",
            email: "r.mehta@ieee.org",
            position: "Secretary",
            image: "/img/pulok.jpg",
            department: "Electronics"
        },
        {
            id: 4,
            name: "Jessica Chen",
            email: "j.chen@ieee.org",
            position: "Treasurer",
            image: "/img/Tahsin.jpg",
            department: "Telecommunications"
        },
        {
            id: 5,
            name: "Michael Lee",
            email: "m.lee@ieee.org",
            position: "Event Coordinator",
            image: "/img/tahmid.jpg",
            department: "Robotics"
        },
        {
            id: 6,
            name: "Badar Hossain",
            email: "b.hossain@ieee.org",
            position: "Membership Lead",
            image: "/img/Badar.jpg",
            department: "Mechanical Engineering"
        }
    ];    // Mock stats for dashboard overview
    const stats = [
        { id: 1, title: 'Total Research Papers', count: 124, icon: <FaBook /> },
        { id: 2, title: 'Published Magazines', count: 18, icon: <FaNewspaper /> },
        { id: 3, title: 'Upcoming Events', count: 7, icon: <FaCalendarAlt /> },
        { id: 4, title: 'New Blog Posts', count: 32, icon: <FaBlog /> },
    ];

    // Mock achievements data
    const achievements = [
        {
            id: 1,
            title: "IEEE Outstanding Branch Counselor Award",
            description: "Recognizes IEEE Student Branch Counselors who have demonstrated exemplary involvement with their Student Branch.",
            category: "Branch Awards",
            year: 2023
        },
        {
            id: 2,
            title: "IEEE Regional Exemplary Student Branch Award",
            description: "Recognizes Student Branches for their outstanding activities, membership growth, and technical programs.",
            category: "Branch Awards",
            year: 2023
        },
        {
            id: 3,
            title: "IEEE WIE Student Branch Affinity Group of the Year",
            description: "Honors exceptional Women in Engineering Student Branch Affinity Groups for their contributions.",
            category: "Special Recognition",
            year: 2023
        },
        {
            id: 4,
            title: "IEEE Student Paper Contest Winner",
            description: "Awarded to students with exceptional research papers presented at IEEE conferences.",
            category: "Individual Awards",
            year: 2023
        },
        {
            id: 5,
            title: "IEEE Richard E. Merwin Student Scholarship",
            description: "Recognizes student leaders who show promise in their academic careers.",
            category: "Scholarships",
            year: 2022
        },
        {
            id: 6,
            title: "IEEE Computer Society Upsilon Pi Epsilon Award",
            description: "Honors academic excellence for students in computer science related fields.",
            category: "Academic Excellence",
            year: 2022
        }
    ];



    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen bg-gray-100">            {/* Sidebar */}
            <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-[#045C99] text-white transition-all duration-300 ease-in-out flex flex-col h-screen`}>
                {/* Logo and Brand */}
                <div className="flex items-center justify-center py-4 border-b border-blue-700/50">
                    <img
                        src="/img/ieee_logo.png"
                        alt="IEEE Logo"
                        className={`${isSidebarOpen ? 'w-32' : 'w-12'} transition-all duration-300`}
                    />
                </div>

                {/* Navigation Links - Made Scrollable */}
                <nav className="flex-1 overflow-y-auto py-4 px-3">
                    <ul className="space-y-1.5">
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
                        </li>                        <li>
                            <button
                                onClick={() => setActiveSection('gallery')}
                                className={`flex items-center w-full p-3 rounded-lg hover:bg-blue-700 transition duration-200 ${activeSection === 'gallery' ? 'bg-blue-700' : ''}`}
                            >
                                <FaImages className="text-xl" />
                                {isSidebarOpen && <span className="ml-4">Gallery</span>}
                            </button>
                        </li>                        <li>
                            <button
                                onClick={() => setActiveSection('users')}
                                className={`flex items-center w-full p-3 rounded-lg hover:bg-blue-700 transition duration-200 ${activeSection === 'users' ? 'bg-blue-700' : ''}`}
                            >
                                <FaUsers className="text-xl" />
                                {isSidebarOpen && <span className="ml-4">Users</span>}
                            </button>
                        </li>                        <li>
                            <button
                                onClick={() => setActiveSection('contacts')}
                                className={`flex items-center w-full p-3 rounded-lg hover:bg-blue-700 transition duration-200 ${activeSection === 'contacts' ? 'bg-blue-700' : ''}`}
                            >
                                <FaAddressBook className="text-xl" />
                                {isSidebarOpen && <span className="ml-4">Contacts</span>}
                            </button>
                        </li>                        <li>
                            <button
                                onClick={() => setActiveSection('committee')}
                                className={`flex items-center w-full p-3 rounded-lg hover:bg-blue-700 transition duration-200 ${activeSection === 'committee' ? 'bg-blue-700' : ''}`}
                            >
                                <FaUserTie className="text-xl" />
                                {isSidebarOpen && <span className="ml-4">Committee</span>}
                            </button>
                        </li>                        <li>
                            <button
                                onClick={() => setActiveSection('achievements')}
                                className={`flex items-center w-full p-3 rounded-lg hover:bg-blue-700 transition duration-200 ${activeSection === 'achievements' ? 'bg-blue-700' : ''}`}
                            >
                                <FaTrophy className="text-xl" />
                                {isSidebarOpen && <span className="ml-4">Achievements</span>}
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setActiveSection('statistics')}
                                className={`flex items-center w-full p-3 rounded-lg hover:bg-blue-700 transition duration-200 ${activeSection === 'statistics' ? 'bg-blue-700' : ''}`}
                            >
                                <FaChartBar className="text-xl" />
                                {isSidebarOpen && <span className="ml-4">Statistics</span>}
                            </button>
                        </li>
                    </ul>
                </nav>

                {/* Fixed Logout Button */}
                <div className="py-2 px-3 border-t border-blue-700/50">
                    <button className="flex items-center w-full p-3 rounded-lg hover:bg-red-700 transition duration-200">
                        <FaSignOutAlt className="text-xl" />
                        {isSidebarOpen && <span className="ml-3">Logout</span>}
                    </button>
                </div>
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
                                        className="w-full "
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
                                    {/* <div className="h-32 bg-gradient-to-r from-blue-500 to-cyan-500 relative">
                                        <div className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                                            FEATURED
                                        </div>
                                        <div className="absolute bottom-2 left-2 bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">
                                            UPCOMING
                                        </div>
                                    </div> */}

                                    <div className="">

                                        <img src="../../public/img/ResearchBootcamp.jpg" alt="Event" className="w-full object-cover" />

                                    </div>
                                    <div className="p-4 ">
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
                                    {/* <div className="h-32 bg-gradient-to-r from-purple-500 to-pink-500 relative">
                                        <div className="absolute bottom-2 left-2 bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">
                                            ONGOING
                                        </div>
                                    </div> */}

                                    <div className="relative">

                                        <img src="../../public/img/LandscapeImg.jpg" alt="Event" className="w-full h-auto object-cover" />

                                    </div>
                                    <div className="p-4 ">
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

                        </div>)}

                    {activeSection === 'users' && (
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h1 className="text-2xl font-semibold text-gray-800">Users Management</h1>
                            <p className="text-gray-600 mt-1 mb-6">Manage IEEE members and users here</p>

                            <div className="flex justify-between items-center mb-6">
                                <div className="relative">

                                </div>
                                <button className="bg-[#045C99] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                                    Add New User
                                </button>
                            </div>                            {/* Users Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {users.map(user => (
                                    <div key={user.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                                        <div className="p-6 flex flex-col items-center">
                                            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-blue-100">
                                                <img
                                                    src={user.image}
                                                    alt={`${user.name}'s profile`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">{user.name}</h3>

                                            <div className="w-full space-y-3 mb-4">
                                                <div className="flex items-center text-sm text-gray-600">
                                                    <FaEnvelope className="mr-2 text-gray-400" />
                                                    <span className="truncate">{user.email}</span>
                                                </div>
                                                <div className="flex items-center text-sm text-gray-600">
                                                    <FaIdCard className="mr-2 text-gray-400" />
                                                    <span>IEEE ID: {user.ieeeId}</span>
                                                </div>
                                            </div>                                            <div className="flex justify-between w-full mt-4">
                                                <Link
                                                    to={`/addExperience?id=${user.ieeeId}`}
                                                    className="bg-blue-50 text-[#045C99] px-4 py-2 rounded border border-blue-200 hover:bg-blue-100 transition flex-1 mr-2 text-center"
                                                >
                                                    Experience
                                                </Link>
                                                <button className="bg-red-50 text-red-600 px-3 py-2 rounded border border-red-200 hover:bg-red-100 transition">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>                        </div>
                    )}

                    {activeSection === 'contacts' && (
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h1 className="text-2xl font-semibold text-gray-800">Contacts Management</h1>
                            <p className="text-gray-600 mt-1 mb-6">Manage IEEE contact persons here</p>

                            {/* Contacts Grid - Simplified to show only name and email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {contacts.map(contact => (
                                    <div key={contact.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                                        <div className="p-5 flex flex-col">
                                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{contact.name}</h3>

                                            <div className="flex items-center text-sm text-gray-600 mb-4">
                                                <FaEnvelope className="mr-2 text-gray-400" />
                                                <span className="truncate">{contact.email}</span>
                                            </div>                                            <Link
                                                to={`/messages?email=${encodeURIComponent(contact.email)}`}
                                                className="w-full flex items-center justify-center bg-[#045C99] hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition mt-2"
                                            >
                                                <FaComment className="mr-2" />
                                                Message
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeSection === 'committee' && (
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h1 className="text-2xl font-semibold text-gray-800">Committee Management</h1>
                            <p className="text-gray-600 mt-1 mb-6">Add or update IEEE committee members information</p>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name Input */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name*
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md py-2 px-3"
                                            placeholder="Enter committee member's full name"
                                            required
                                        />
                                    </div>

                                    {/* Designation Input */}
                                    <div>
                                        <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-1">
                                            Designation*
                                        </label>
                                        <input
                                            type="text"
                                            id="designation"
                                            name="designation"
                                            className="block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md py-2 px-3"
                                            placeholder="Enter position or designation"
                                            required
                                        />
                                    </div>

                                    {/* IEEE ID Input */}
                                    <div>
                                        <label htmlFor="ieeeId" className="block text-sm font-medium text-gray-700 mb-1">
                                            IEEE ID*
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaIdCard className="h-4 w-4 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                id="ieeeId"
                                                name="ieeeId"
                                                className="pl-10 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md py-2 px-3"
                                                placeholder="Enter 8-digit IEEE ID"
                                                pattern="[0-9]{8}"
                                                title="IEEE ID should be an 8-digit number"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Committee Type Select */}
                                    <div>
                                        <label htmlFor="committeeType" className="block text-sm font-medium text-gray-700 mb-1">
                                            Committee Type*
                                        </label>
                                        <select
                                            id="committeeType"
                                            name="committeeType"
                                            className="block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md py-2 px-3"
                                            required
                                        >
                                            <option value="">Select committee type</option>
                                            <option value="ExCom">ExCom</option>
                                            <option value="Ex ExCom">Ex ExCom</option>
                                            <option value="AdvisorPanel">Advisor Panel</option>
                                            <option value="Volunteer">Volunteer</option>
                                        </select>
                                    </div>

                                    {/* Facebook Link Input */}
                                    <div>
                                        <label htmlFor="facebookLink" className="block text-sm font-medium text-gray-700 mb-1">
                                            Facebook Profile
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaFacebook className="h-4 w-4 text-blue-600" />
                                            </div>
                                            <input
                                                type="url"
                                                id="facebookLink"
                                                name="facebookLink"
                                                className="pl-10 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md py-2 px-3"
                                                placeholder="https://facebook.com/username"
                                            />
                                        </div>
                                    </div>

                                    {/* LinkedIn Link Input */}
                                    <div>
                                        <label htmlFor="linkedinLink" className="block text-sm font-medium text-gray-700 mb-1">
                                            LinkedIn Profile
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaLinkedin className="h-4 w-4 text-blue-800" />
                                            </div>
                                            <input
                                                type="url"
                                                id="linkedinLink"
                                                name="linkedinLink"
                                                className="pl-10 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md py-2 px-3"
                                                placeholder="https://linkedin.com/in/username"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Image Upload */}
                                <div>
                                    <label htmlFor="profileImage" className="block text-sm font-medium text-gray-700 mb-1">
                                        Profile Image*
                                    </label>
                                    <div className="mt-1 flex items-center">
                                        <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100 mr-4">
                                            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                        </span>
                                        <input
                                            type="file"
                                            id="profileImage"
                                            name="profileImage"
                                            accept="image/*"
                                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                            required
                                        />
                                    </div>
                                    <p className="mt-1 text-xs text-gray-500">
                                        Recommended: Square image, at least 300x300 pixels
                                    </p>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="w-full md:w-auto bg-[#045C99] text-white py-2 px-6 rounded-md font-medium hover:bg-blue-700 transition duration-300 flex justify-center items-center"
                                    >
                                        Add Committee Member
                                    </button>
                                </div>                            </form>
                        </div>
                    )}

                    {/* Achievements Section */}
                    {activeSection === 'achievements' && (
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h1 className="text-2xl font-semibold text-gray-800">Achievements Management</h1>
                            <p className="text-gray-600 mt-1 mb-6">IEEE achievements that can be assigned to members</p>

                            <div className="space-y-4">
                                {achievements.map(achievement => (
                                    <div key={achievement.id} className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex justify-between items-center hover:shadow-md transition-shadow">
                                        <div className="flex-1">
                                            <div className="flex items-center">
                                                <div className="mr-4 text-amber-500">
                                                    <FaTrophy className="text-2xl" />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium text-lg text-gray-800">{achievement.title}</h3>
                                                    <div className="flex items-center mt-1 gap-2">
                                                        <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded-full">
                                                            {achievement.category}
                                                        </span>
                                                        <span className="text-gray-500 text-sm">
                                                            Year: {achievement.year}
                                                        </span>
                                                    </div>
                                                    <p className="text-gray-600 mt-2 text-sm">
                                                        {achievement.description}
                                                    </p>                                                </div>
                                            </div>
                                        </div>
                                        <Link to={`/assign?achievement=${achievement.id}`} className="bg-[#045C99] text-white py-2 px-4 rounded hover:bg-blue-700 transition whitespace-nowrap ml-4 inline-block">
                                            Assign
                                        </Link>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6">
                                <Link to='/addAcheivement' className="flex items-center bg-[#045C99] text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                                    <span className="mr-2">Add New Achievement</span> +
                                </Link>                            </div>
                        </div>
                    )}

                    {/* Statistics Section */}
                    {activeSection === 'statistics' && (
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h1 className="text-2xl font-semibold text-gray-800">IEEE Branch Statistics</h1>
                            <p className="text-gray-600 mt-1 mb-6">Update IEEE branch statistics and metrics</p>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Active Members Input */}
                                    <div>
                                        <label htmlFor="activeMembers" className="block text-sm font-medium text-gray-700 mb-1">
                                            Active Members
                                        </label>
                                        <div className="relative mt-1">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaUserFriends className="h-4 w-4 text-gray-400" />
                                            </div>
                                            <input
                                                type="number"
                                                id="activeMembers"
                                                name="activeMembers"
                                                min="0"
                                                className="pl-10 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md py-2 px-3"
                                                placeholder="Enter count"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Annual Events Input */}
                                    <div>
                                        <label htmlFor="annualEvents" className="block text-sm font-medium text-gray-700 mb-1">
                                            Annual Events Count
                                        </label>
                                        <div className="relative mt-1">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaCalendarAlt className="h-4 w-4 text-gray-400" />
                                            </div>
                                            <input
                                                type="number"
                                                id="annualEvents"
                                                name="annualEvents"
                                                min="0"
                                                className="pl-10 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md py-2 px-3"
                                                placeholder="Enter count"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Technical Workshops Input */}
                                    <div>
                                        <label htmlFor="technicalWorkshops" className="block text-sm font-medium text-gray-700 mb-1">
                                            Technical Workshop Count
                                        </label>
                                        <div className="relative mt-1">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaTools className="h-4 w-4 text-gray-400" />
                                            </div>
                                            <input
                                                type="number"
                                                id="technicalWorkshops"
                                                name="technicalWorkshops"
                                                min="0"
                                                className="pl-10 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md py-2 px-3"
                                                placeholder="Enter count"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Industry Partners Input */}
                                    <div>
                                        <label htmlFor="industryPartners" className="block text-sm font-medium text-gray-700 mb-1">
                                            Industry Partners Count
                                        </label>
                                        <div className="relative mt-1">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaIndustry className="h-4 w-4 text-gray-400" />
                                            </div>
                                            <input
                                                type="number"
                                                id="industryPartners"
                                                name="industryPartners"
                                                min="0"
                                                className="pl-10 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md py-2 px-3"
                                                placeholder="Enter count"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Awards Won Input */}
                                    <div>
                                        <label htmlFor="awardsWon" className="block text-sm font-medium text-gray-700 mb-1">
                                            Awards Won Count
                                        </label>
                                        <div className="relative mt-1">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaAward className="h-4 w-4 text-gray-400" />
                                            </div>
                                            <input
                                                type="number"
                                                id="awardsWon"
                                                name="awardsWon"
                                                min="0"
                                                className="pl-10 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md py-2 px-3"
                                                placeholder="Enter count"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Events Organized Input */}
                                    <div>
                                        <label htmlFor="eventsOrganized" className="block text-sm font-medium text-gray-700 mb-1">
                                            Events Organized Count
                                        </label>
                                        <div className="relative mt-1">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaCalendarAlt className="h-4 w-4 text-gray-400" />
                                            </div>
                                            <input
                                                type="number"
                                                id="eventsOrganized"
                                                name="eventsOrganized"
                                                min="0"
                                                className="pl-10 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md py-2 px-3"
                                                placeholder="Enter count"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Projects Completed Input */}
                                    <div>
                                        <label htmlFor="projectsCompleted" className="block text-sm font-medium text-gray-700 mb-1">
                                            Projects Completed Count
                                        </label>
                                        <div className="relative mt-1">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaProjectDiagram className="h-4 w-4 text-gray-400" />
                                            </div>
                                            <input
                                                type="number"
                                                id="projectsCompleted"
                                                name="projectsCompleted"
                                                min="0"
                                                className="pl-10 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md py-2 px-3"
                                                placeholder="Enter count"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="w-full md:w-auto bg-[#045C99] text-white py-2 px-6 rounded-md font-medium hover:bg-blue-700 transition duration-300 flex justify-center items-center"
                                    >
                                        Update Statistics
                                    </button>
                                </div>
                            </form>

                            {/* Current Statistics */}
                            {/* <div className="mt-10">
                                <h2 className="text-lg font-medium text-gray-800 mb-4">Current Statistics</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                                        <div className="flex justify-between items-center">
                                            <div className="text-sm font-medium text-gray-500">Active Members</div>
                                            <FaUserFriends className="text-blue-500" />
                                        </div>
                                        <div className="text-2xl font-bold text-gray-800 mt-2">147</div>
                                    </div>
                                    <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                                        <div className="flex justify-between items-center">
                                            <div className="text-sm font-medium text-gray-500">Events This Year</div>
                                            <FaCalendarAlt className="text-green-500" />
                                        </div>
                                        <div className="text-2xl font-bold text-gray-800 mt-2">23</div>
                                    </div>
                                    <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                                        <div className="flex justify-between items-center">
                                            <div className="text-sm font-medium text-gray-500">Awards Won</div>
                                            <FaAward className="text-amber-500" />
                                        </div>
                                        <div className="text-2xl font-bold text-gray-800 mt-2">12</div>
                                    </div>
                                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                                        <div className="flex justify-between items-center">
                                            <div className="text-sm font-medium text-gray-500">Industry Partners</div>
                                            <FaIndustry className="text-purple-500" />
                                        </div>
                                        <div className="text-2xl font-bold text-gray-800 mt-2">8</div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    )}

                </main>
            </div>
        </div>
    );
};

export default Dashboard;