import React, { useEffect, useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';

import {
    FaCaretRight,
    FaFacebookF,
    FaXTwitter,
    FaLinkedinIn,
    FaInstagram,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Navbar2 = () => {

    const [activeDropdown, setActiveDropdown] = useState(null);
    const [teamOpen, setTeamOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileSubMenu, setMobileSubMenu] = useState(null);
    const [mobileTeamOpen, setMobileTeamOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setActiveDropdown(null);
                setTeamOpen(false);
                setIsMobileMenuOpen(false);
                setMobileSubMenu(null);
                setMobileTeamOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleDropdown = (menu) => {
        setActiveDropdown((prev) => (prev === menu ? null : menu));
        setTeamOpen(false);
    };

    const handleTeamToggle = () => {
        setTeamOpen((prev) => !prev);
    };

    return (
        <nav className="bg-[#045C99] shadow-md  w-full  font-['Roboto']" ref={navRef}>
            {/* Top Section */}



            {/* Marquee */}
            {/* <div className="text-white py-2">
                <Marquee pauseOnHover={true} gradient={false} speed={65}>
                    <span className='text-white font-bold'>Leading University IEEE Club</span>
                </Marquee>
            </div> */}

            {/* Navigation for pc */}
            <div className="md:flex p-2  hidden  justify-between w-full mx-auto ">
                <ul className="flex flex-wrap  w-[95%] mx-auto justify-between items-center  text-white font-semibold  relative">
                    <div className="flex items-center gap-4">
                        <img src="../../public/img/ieee_logo.png" alt="IEEE Logo" className="w-60" />
                    </div>
                    <li><a href="/" className='text-2xl'>Home</a></li>

                    <li className="relative">
                        <button className='text-2xl' onClick={() => handleDropdown('activities')}>Activities</button>
                        {activeDropdown === 'activities' && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-black text-white rounded shadow-lg z-20">
                                <ul>
                                    <li><Link to={"/event"} className="block px-4 py-2 hover:bg-[#045C99]">Events</Link></li>
                                    <li><Link to={"/news"} className="block px-4 py-2 hover:bg-[#045C99]">News</Link></li>
                                    <li><Link to={"/achievement"} className="block px-4 py-2 hover:bg-[#045C99]">Achievements</Link></li>
                                </ul>
                            </div>
                        )}
                    </li>

                    <li className="relative">
                        <button className='text-2xl' onClick={() => handleDropdown('members')}>Members</button>
                        {activeDropdown === 'members' && (
                            <div className="absolute top-full left-0 mt-2 w-64 bg-black text-white rounded shadow-lg z-20">
                                <ul>
                                    <li><Link to={"/panel"} className="block px-4 py-2 hover:bg-[#045C99]">Panels</Link></li>
                                    <li><Link to={"/volunteers"} className="block px-4 py-2 hover:bg-[#045C99]">Volunteers</Link></li>
                                    <li className="relative">
                                        <div
                                            className="flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-[#045C99]"
                                            onClick={handleTeamToggle}
                                        >
                                            <span>Team</span>
                                            <FaCaretRight className={`ml - 2 transform ${teamOpen ? 'rotate-90' : ''}`} />
                                        </div>
                                        {teamOpen && (
                                            <div className="absolute left-full top-0 ml-2 w-64 max-h-64 overflow-y-auto bg-black rounded shadow-lg z-30">
                                                <ul>
                                                    {[
                                                        "Program Coordinator",
                                                        "Publication & Newsletter Coordinator",
                                                        "Publicity Coordinator",
                                                        "Chief Reporting Executive",
                                                        "Photography Executive",
                                                        "Logistic Executive",
                                                        "ACM Coordinator",
                                                        "Membership Development Coordinator",
                                                        "Webmaster",
                                                        "Graphics Design Executive",
                                                        "Video Content Executive",
                                                    ].map((item) => (
                                                        <li key={item}>
                                                            <a href="#" className="block px-4 py-2 hover:bg-[#045C99]">
                                                                {item}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>

                    <li className="relative">
                        <button className='text-2xl' onClick={() => handleDropdown('about')}>About</button>
                        {activeDropdown === 'about' && (
                            <div className="absolute top-full left-0 mt-2 w-64 bg-black text-white rounded shadow-lg z-20">
                                <ul>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-[#045C99]">IEEE</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-[#045C99]">IEEE Region 10</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-[#045C99]">IEEE Bangladesh Section</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-[#045C99]">IEEE LU Student Branch</a></li>
                                    <li><Link to={"/faq"} className="block px-4 py-2 hover:bg-[#045C99]">FAQ</Link></li>
                                </ul>
                            </div>
                        )}
                    </li>

                    <li className="relative">
                        <button className='text-2xl' onClick={() => handleDropdown('publications')}>Publications</button>
                        {activeDropdown === 'publications' && (
                            <div className="absolute top-full left-0 mt-2 w-64 bg-black text-white rounded shadow-lg z-20">
                                <ul>
                                    <li><Link to={"/blog"} className="block px-4 py-2 hover:bg-[#045C99]">Blogs</Link></li>
                                    <li><Link to={"/researchPapers"} className="block px-4 py-2 hover:bg-[#045C99]">Research Papers</Link></li>
                                    <li><Link to={"/megazine"} className="block px-4 py-2 hover:bg-[#045C99]">Magazines</Link></li>
                                    <li><Link to={"/gallery"} className="block px-4 py-2 hover:bg-[#045C99]">Gallery</Link></li>
                                    <li><Link to={"/toolkit"} className="block px-4 py-2 hover:bg-[#045C99]">Toolkit</Link></li>
                                </ul>
                            </div>
                        )}
                    </li>

                    <li><Link to={"/contact"} className='text-2xl' >Contact</Link></li>

                    <li className="relative">
                        <button className='text-2xl' onClick={() => handleDropdown('getinvolved')}>Get Involved</button>
                        {activeDropdown === 'getinvolved' && (
                            <div className="absolute top-full left-0 mt-2 w-64 bg-black text-white rounded shadow-lg z-20">
                                <ul>
                                    <li><Link to={"/joinIEEE"} className="block px-4 py-2 hover:bg-[#045C99]">Join IEEE LU SB</Link></li>
                                    <li><Link to={"/blogWriting"} className="block px-4 py-2 hover:bg-[#045C99]">Write A Blog</Link></li>
                                    <li><Link to={"/addResearch"} className="block px-4 py-2 hover:bg-[#045C99]">Add Research Paper</Link></li>
                                </ul>
                            </div>
                        )}
                    </li>

                    {/* user icon */}
                    {/* <div>
                        <img
                            src="../../public/img/user.png"
                            alt="User"
                            className="w-14 h-14 rounded-full border-2 border-[#00457C]"
                        />


                    </div> */}
                    <li>
                        <Link
                            to={"/signin"}
                            className="block bg-white text-black text-xl px-4 py-1.5 rounded hover:bg-yellow-400"
                        >
                            <span className='text-xl'>Join Now</span>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Mobile navigation */}
            <div className="md:hidden flex justify-between px-6 py-4 bg-[#045C99]">
                <div className="flex items-center gap-4">
                    <img src="../../public/img/ieee_logo.png" alt="IEEE Logo" className="w-32" />
                </div>
                <button
                    className="text-white text-2xl focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-black text-white px-6 py-4 space-y-3">
                    <ul className="space-y-3 text-base font-semibold">

                        <li><a href="#">Home</a></li>

                        <li>
                            <button onClick={() => setMobileSubMenu(mobileSubMenu === 'activities' ? null : 'activities')} className="w-full text-left">Activities</button>
                            {mobileSubMenu === 'activities' && (
                                <ul className="pl-4 mt-2 space-y-1 text-sm">

                                    <li><Link to={"/event"}>Events</Link></li>
                                    <li><Link to={"/news"}>News</Link></li>
                                    <li><Link to={"/achievement"}>Achievements</Link></li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <button onClick={() => setMobileSubMenu(mobileSubMenu === 'members' ? null : 'members')} className="w-full text-left">Members</button>
                            {mobileSubMenu === 'members' && (
                                <ul className="pl-4 mt-2 space-y-1 text-sm">
                                    <li><Link to={"/panel"}>Panels</Link></li>
                                    <li><Link to={"/volunteers"}>Volunteers</Link></li>
                                    <li>
                                        <button onClick={() => setMobileTeamOpen(!mobileTeamOpen)} className="w-full text-left">Team</button>
                                        {mobileTeamOpen && (
                                            <div className="max-h-48 overflow-y-auto pl-4 mt-2 space-y-1 text-xs">
                                                {[
                                                    "Program Coordinator",
                                                    "Publication & Newsletter Coordinator",
                                                    "Publicity Coordinator",
                                                    "Chief Reporting Executive",
                                                    "Photography Executive",
                                                    "Logistic Executive",
                                                    "ACM Coordinator",
                                                    "Membership Development Coordinator",
                                                    "Webmaster",
                                                    "Graphics Design Executive",
                                                    "Video Content Executive",
                                                ].map((item) => (
                                                    <li key={item}><a href="#">{item}</a></li>
                                                ))}
                                            </div>
                                        )}
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <button onClick={() => setMobileSubMenu(mobileSubMenu === 'about' ? null : 'about')} className="w-full text-left">About</button>
                            {mobileSubMenu === 'about' && (
                                <ul className="pl-4 mt-2 space-y-1 text-sm">
                                    <li><a href="#">IEEE</a></li>
                                    <li><a href="#">IEEE Region 10</a></li>
                                    <li><a href="#">IEEE Bangladesh Section</a></li>
                                    <li><a href="#">IEEE LU Student Branch</a></li>
                                    <li><Link to={"/faq"}>FAQ</Link></li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <button onClick={() => setMobileSubMenu(mobileSubMenu === 'publications' ? null : 'publications')} className="w-full text-left">Publications</button>
                            {mobileSubMenu === 'publications' && (
                                <ul className="pl-4 mt-2 space-y-1 text-sm">
                                    <li><Link to={"/blog"}>Blogs</Link></li>
                                    <li><Link to={"/researchPapers"}>Research Papers</Link></li>
                                    <li><Link to={"/megazine"}>Magazines</Link></li>
                                    <li><Link to={"/gallery"}>Gallery</Link></li>
                                    <li><Link to={"/toolkit"}>Toolkit</Link></li>
                                </ul>
                            )}
                        </li>

                        <li><Link to={"/contact"}>Contact</Link></li>

                        <li>
                            <button onClick={() => setMobileSubMenu(mobileSubMenu === 'getinvolved' ? null : 'getinvolved')} className="w-full text-left">Get Involved</button>
                            {mobileSubMenu === 'getinvolved' && (
                                <ul className="pl-4 mt-2 space-y-1 text-sm">
                                    <li><Link to={"/joinIEEE"}>Join IEEE LU SB</Link></li>
                                    <li><Link to={"/blogWriting"}>Write A Blog</Link></li>
                                    <li><Link to={"/addResearch"}>Add Research Paper</Link></li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <Link
                                to={"/signin"}
                                className="block bg-white text-black text-xl px-4 py-1.5 rounded hover:bg-yellow-400"
                            >
                                <span className='text-xl'>Join Now</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar2;