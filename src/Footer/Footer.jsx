import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const Footer = () => {
    
    return (
        <footer className="bg-gray-900 text-gray-400">
            {/* Footer Images */}
            <div className="flex justify-between items-center px-10 py-10 -mb-10">
                <img src="/img/ieee_footer.png" alt="IEEE Footer Logo" className="h-16" />
                <img src="/img/ieee-footer2.png" alt="IEEE Second Footer Logo" className="h-16" />
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap justify-between gap-4 px-10 py-14">
                <div className="bg-white text-gray-700 rounded-xl shadow-lg p-6 w-full sm:w-[30%]">
                    <h2 className="text-xl font-semibold text-black mb-4">Quick Links</h2>
                    <ul className="space-y-3">
                        <li><Link to={"/"}className="hover:text-blue-600">Ask a Question</Link></li>
                        <li><Link to={"/"}className="hover:text-blue-600">About IEEE LU SB</Link></li>
                        <li><Link to={"/"}className="hover:text-blue-600">About IEEE LU SB IAS</Link></li>
                        <li><Link to={"/"}className="hover:text-blue-600">About IEEE LU SB PES</Link></li>
                        <li><Link to={"/"}className="hover:text-blue-600">About IEEE LU SB RAS</Link></li>
                        <li><Link to={"/"}className="hover:text-blue-600">About IEEE LU SB WE</Link></li>
                    </ul>
                </div>

                <div className="bg-white text-gray-700 rounded-xl shadow-lg p-6 w-full sm:w-[30%]">
                    <h2 className="text-xl font-semibold text-black mb-4">Resources</h2>
                    <ul className="space-y-3">
                        <li><i className="fa-solid fa-newspaper mr-2"></i><Link to={"/news"}className="hover:text-blue-600">News</Link></li>
                        <li><i className="fa-solid fa-calendar-days mr-2"></i><Link to={"/event"}className="hover:text-blue-600">Upcoming Events</Link></li>
                        <li><i className="fa-solid fa-screwdriver-wrench mr-2"></i><Link to={"/toolkit"}className="hover:text-blue-600">Toolkit</Link></li>
                        <li><i className="fa-solid fa-photo-film mr-2"></i><Link to={"/gallery"}className="hover:text-blue-600">Gallery</Link></li>
                        <li><i className="fa-solid fa-book mr-2"></i><Link to={"/megazine"}className="hover:text-blue-600">Magazines</Link></li>
                        <li><i className="fa-solid fa-file-lines mr-2"></i><Link to={"/researchPapers"}className="hover:text-blue-600">Research Papers</Link></li>
                    </ul>
                </div>

                <div className="bg-white text-gray-700 rounded-xl shadow-lg p-6 w-full sm:w-[30%]">
                    <h2 className="text-xl font-semibold text-black mb-4">Member Area</h2>
                    <ul className="space-y-3">
                        <li><i className="fa-solid fa-user-plus mr-2"></i><Link to={"/joinIEEE"}className="hover:text-blue-600">Join IEEE LU SB</Link></li>
                        <li><i className="fa-solid fa-pen mr-2"></i><Link to={"/blogWriting"}className="hover:text-blue-600">Write a Blog</Link></li>
                        <li><i className="fa-solid fa-blog mr-2"></i><Link to={"/blog"}className="hover:text-blue-600">Blogs</Link></li>
                        <li><i className="fa-solid fa-trophy mr-2"></i><Link to={"/achievement"}className="hover:text-blue-600">Achievements</Link></li>
                        <li><i className="fa-solid fa-users-gear mr-2"></i><Link to={"/"}className="hover:text-blue-600">Current Executive Body</Link></li>
                        <li><i className="fa-solid fa-star mr-2"></i><Link to={"/"}className="hover:text-blue-600">Exemplary Members</Link></li>
                    </ul>
                </div>
            </div>

            {/* Footer Info Bottom Section */}
            <div className="flex flex-wrap justify-between items-start gap-6 px-10 py-12 border-t border-gray-700 mt-[-2rem]">
                <div>
                    <h2 className="text-white text-lg mb-2">Follow Us</h2>
                    <div className="flex gap-4 text-[#045C99] text-xl">
                        <a href="https://www.linkedin.com/company/ieeecslu/posts/?feedView=all"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="https://www.facebook.com/ieeecslu"><i className="fa-brands fa-facebook"></i></a>
                    </div>
                </div>

                <div>
                    <h2 className="text-white text-lg mb-2">Contact</h2>
                    <p className="text-gray-400">info@ieeelusb.org</p>
                    <p className="text-gray-400">contact@ieeelusb.org</p>
                </div>

                <div>
                    <h2 className="text-white text-lg mb-2">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><Link to={"/"} className="hover:text-blue-600">Home</Link></li>
                        <li><Link to={"/contact"} className="hover:text-blue-600">Contact</Link></li>
                        <li><Link to={"/faq"} className="hover:text-blue-600">FAQ</Link></li>
                        <li><Link to={"/achievement"}className="hover:text-blue-600">Privacy Policy</Link></li>
                    </ul>
                </div>

                <div className="text-sm text-gray-400">
                    <p>Last Update: 15 January, 2025</p>
                    <p>&copy; 2025 IEEE LU SB - All rights reserved</p>
                    <p>Developed By <Link to="/developers" className="text-[#0471be]">IEEE LU SB Web Developer Team</Link></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;