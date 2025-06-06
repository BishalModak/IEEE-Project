import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Footer = () => {

    return (
        <footer className="bg-gray-900 text-gray-400">
            {/* Footer Images */}
            <div className="flex justify-between items-center px-10 py-10 -mb-10">
                <img src="/img/ieee_footer.png" alt="IEEE Footer Logo" className="h-16" />
                <img src="/img/ieee-footer2.png" alt="IEEE Second Footer Logo" className="h-16" />
            </div>

            {/* Footer as */}
            <div className="flex flex-wrap justify-between gap-4 px-10 py-14">
                <div className="bg-white text-gray-700 rounded-xl shadow-lg p-6 w-full sm:w-[30%]">
                    <h2 className="text-xl font-semibold text-black mb-4">Quick as</h2>
                    <ul className="space-y-3">
                        <li><a href={"/"} className="hover:text-blue-600">Ask a Question</a></li>
                        <li><a href={"/"} className="hover:text-blue-600">About IEEE LU SB</a></li>
                        <li><a href={"/"} className="hover:text-blue-600">About IEEE LU SB IAS</a></li>
                        <li><a href={"/"} className="hover:text-blue-600">About IEEE LU SB PES</a></li>
                        <li><a href={"/"} className="hover:text-blue-600">About IEEE LU SB RAS</a></li>
                        <li><a href={"/"} className="hover:text-blue-600">About IEEE LU SB WE</a></li>
                    </ul>
                </div>

                <div className="bg-white text-gray-700 rounded-xl shadow-lg p-6 w-full sm:w-[30%]">
                    <h2 className="text-xl font-semibold text-black mb-4">Resources</h2>
                    <ul className="space-y-3">
                        <li><i className="fa-solid fa-newspaper mr-2"></i><a href={"/news"} className="hover:text-blue-600">News</a></li>
                        <li><i className="fa-solid fa-calendar-days mr-2"></i><a href={"/event"} className="hover:text-blue-600">Upcoming Events</a></li>
                        <li><i className="fa-solid fa-screwdriver-wrench mr-2"></i><a href={"/hrefolkit"} className="hover:text-blue-600">hrefolkit</a></li>
                        <li><i className="fa-solid fa-phohref-film mr-2"></i><a href={"/gallery"} className="hover:text-blue-600">Gallery</a></li>
                        <li><i className="fa-solid fa-book mr-2"></i><a href={"/megazine"} className="hover:text-blue-600">Magazines</a></li>
                        <li><i className="fa-solid fa-file-lines mr-2"></i><a href={"/researchPapers"} className="hover:text-blue-600">Research Papers</a></li>
                    </ul>
                </div>

                <div className="bg-white text-gray-700 rounded-xl shadow-lg p-6 w-full sm:w-[30%]">
                    <h2 className="text-xl font-semibold text-black mb-4">Member Area</h2>
                    <ul className="space-y-3">
                        <li><i className="fa-solid fa-user-plus mr-2"></i><a href={"/joinIEEE"} className="hover:text-blue-600">Join IEEE LU SB</a></li>
                        <li><i className="fa-solid fa-pen mr-2"></i><a href={"/blogWriting"} className="hover:text-blue-600">Write a Blog</a></li>
                        <li><i className="fa-solid fa-blog mr-2"></i><a href={"/blog"} className="hover:text-blue-600">Blogs</a></li>
                        <li><i className="fa-solid fa-trophy mr-2"></i><a href={"/achievement"} className="hover:text-blue-600">Achievements</a></li>
                        <li><i className="fa-solid fa-users-gear mr-2"></i><a href={"/"} className="hover:text-blue-600">Current Executive Body</a></li>
                        <li><i className="fa-solid fa-star mr-2"></i><a href={"/"} className="hover:text-blue-600">Exemplary Members</a></li>
                    </ul>
                </div>
            </div>

            {/* Footer Info Bothrefm Section */}
            <div className="flex flex-wrap justify-between items-start gap-6 px-10 py-12 border-t border-gray-700 mt-[-2rem]">
                <div>
                    <h2 className="text-white text-lg mb-2">Follow Us</h2>
                    <div className="flex gap-4 text-[#045C99] text-xl">
                        <a href="https://www.aedin.com/company/ieeecslu/posts/?feedView=all"><i className="fa-brands fa-aedin"></i></a>
                        <a href="https://www.facebook.com/ieeecslu"><i className="fa-brands fa-facebook"></i></a>
                    </div>
                </div>

                <div>
                    <h2 className="text-white text-lg mb-2">Contact</h2>
                    <p className="text-gray-400">info@ieeelusb.org</p>
                    <p className="text-gray-400">contact@ieeelusb.org</p>
                </div>

                <div>
                    <h2 className="text-white text-lg mb-2">Quick as</h2>
                    <ul className="space-y-2">
                        <li><a href={"/"} className="hover:text-blue-600">Home</a></li>
                        <li><a href={"/contact"} className="hover:text-blue-600">Contact</a></li>
                        <li><a href={"/faq"} className="hover:text-blue-600">FAQ</a></li>
                        <li><a href={"/achievement"} className="hover:text-blue-600">Privacy Policy</a></li>
                    </ul>
                </div>                <div className="text-sm">
                    <p className="text-gray-400">Last Update: 15 January, 2025</p>
                    <p className="text-gray-400">&copy; 2025 IEEE LU SB - All rights reserved</p>

                    <div className="mt-3 bg-gradient-to-r from-blue-800 to-blue-500 p-0.5 rounded-lg hover:from-blue-600 hover:to-blue-400 transition-all duration-300 group">
                        <div className="bg-gray-900 rounded-md px-3 py-2">
                            <span className="text-gray-300">Developed By</span>
                            <a href="developers" className="block font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 group-hover:from-blue-300 group-hover:to-cyan-200 transition-all duration-300">
                                IEEE LU SB Web Developer Team
                                <span className="ml-1 inline-block transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;