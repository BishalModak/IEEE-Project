import React from 'react';
import { ExternalLink } from 'lucide-react';
import aboutBDImg from '../../public/img/R10_Meeting_11-250x188.jpg'; // Update the path to your image

const IEEEBangladesh = () => {
    return (
        <div className='w-full '>

            <header
                className="relative w-full h-[450px] bg-cover bg-center flex items-center justify-center text-white"
                style={{ backgroundImage: `url(${aboutBDImg})` }}
            >
                {/* Blurred Background Layer */}
                <div className="absolute inset-0 bg-cover bg-center filter blur-[6px]" style={{ backgroundImage: `url(${aboutBDImg})` }} />



                {/* Text Content */}
                <div className="relative z-2 text-center px-4">
                    <h2 className="text-2xl md:text-5xl text-white shadow-2xl font-bold">
                        IEEE Bangladesh Section
                    </h2>

                </div>
            </header>
            <div className=" w-[85%] mx-auto  pt-20 pb-10 px-6 md:px-20">
                <div className="flex flex-col md:flex-row items-center justify-center gap-42 ">

                    {/* Left side - IEEE Logo */}
                    <div className="flex justify-center">
                        <img
                            src="https://i.ibb.co.com/KxYhtFbD/IEEE-LOGO.gif" // <-- Update this path
                            alt="IEEE Logo"
                            className="w-60 h-60 object-contain"
                        />
                    </div>

                    {/* Right side - About Text */}
                    <div className=" lg:ml-[40px]">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            ABOUT <span className="block w-16 h-1 bg-[#045C99]  mt-2"></span>
                        </h2>
                        <p className="text-gray-700 max-w-xl leading-relaxed text-justify">
                            The IEEE Bangladesh Section was established in November 1993 with just 54 members. Since then, it has grown significantly, evolving into a large and dynamic community with members from various countries. Today, the IEEE Bangladesh Section ranks fifth globally, following India, the USA, China, and Canada, out of 342 sections across 160 countries. This remarkable growth underscores the section's impact and influence in the global IEEE community.

                        </p>
                        <div className="flex gap-4 mt-6">

                            <button className="border-2 border- [#045C99]  hover:bg-[#045C99]  hover:text-white text-[#045C99]  font-semibold py-2 px-6 rounded">
                                IEEEBD.net
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className=" w-[85%] mx-auto pt-20 pb-10 px-6 md:px-20">
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">

                    {/* Left side - Text content */}
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-bold text-black mb-4">
                            Members and volunteers
                            <span className="block w-16 h-1 bg-[#045C99]  mt-2"></span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Members of the IEEE Bangladesh Section are highly engaged, continuously enhancing their initiatives and establishing connections with the global electrical engineering community. Prof. Celia Shahnaz, Chair of the IEEE Bangladesh Section, plays a pivotal role in organizing a variety of impactful student events throughout the year, celebrating the participation and achievements of students. The IEEE Bangladesh Section has received an overwhelming response from IEEE members and volunteers worldwide, reflecting its growing influence and dedication to fostering collaboration and innovation.
                        </p>

                        {/* Links */}
                        <div className="mt-6 flex flex-col gap-2 text-[#045C99]  ">
                            <p className="text-gray-700 leading-relaxed text-justify">Please go through this links: </p>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} />WEB TEAM
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} />Vice Chair Technical
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} />Secretary Candidates
                            </a>

                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="flex justify-center">
                        <img
                            src="https://i.ibb.co.com/pvFcYFSS/celia-shanaz.jpg" // <-- Update this path
                            alt="Community Network"
                            className="w-[400px] h-100 object-contain"
                        />
                    </div>
                </div>
            </div>


            <div className="bg-[#045C99]  w-[85%] mx-auto py-16 px-6 md:px-20">
                <div className="w-[85%] mx-auto  grid md:grid-cols-2 gap-10 justify-between  ">


                    <div className="border-r border-white pr-8">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Benefits
                            <div className="w-16 h-1 bg-white mt-2"></div>
                        </h2>
                        <p className="text-white text-justify leading-relaxed">
                            The IEEE Bangladesh Section is expanding rapidly, keeping pace with the ever-evolving world of technology and science by actively engaging with IEEE’s global technical societies. The section provides access to a wealth of resources, including IEEE books and eBooks, journals and papers, conferences and proceedings, among many other valuable materials. With a strong focus on student engagement, the IEEE Bangladesh Section is committed to ensuring that students fully benefit from these resources and opportunities, helping them thrive in their academic and professional pursuits.
                        </p>


                    </div>

                    {/* Collaboration */}
                    <div className="pl-8">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Student Branches
                            <div className="w-16 h-1 bg-white mt-2"></div>
                        </h2>
                        <p className="text-white text-justify leading-relaxed">
                            IEEE Bangladesh Student Branches are making remarkable strides, creating a significant impact on a global scale. With over 1,500 students, including both graduate and non-graduate members, the branches are growing rapidly and contributing to the advancement of technology and innovation. Below is the list of student branches along with their details and links.
                        </p>
                        <div className="mt-6 flex flex-col gap-2 text-white ">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> IEEE BDS
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> IEEE BDS list
                            </a>

                        </div>
                    </div>

                </div>
            </div>
            <div className="bg-[#045C99]  w-[85%] mx-auto py-16 px-6 md:px-20">
                <div className=" w-[85%] mx-auto grid md:grid-cols-2 gap-10 justify-between  ">




                    <div className="border-r border-white pr-8">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Affinity Groups
                            <div className="w-16 h-1 bg-white mt-2"></div>
                        </h2>
                        <p className="text-white text-justify leading-relaxed">
                            The IEEE Bangladesh Section is actively engaged in various industrial sectors, working to develop the skills of its members in the Bangladesh Section (BDS). The frequency of seminars, tours, and conferences is steadily increasing, with a growing focus on professionalism and industry-relevant approaches. These events are designed to provide members with valuable insights into current industry trends and help bridge the gap between academic knowledge and practical application.

                        </p>

                        <div className="mt-6 flex flex-col gap-2 text-white ">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> Visit Now
                            </a>


                        </div>
                    </div>

                    <div className=" pl-8">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Community and Society
                            <div className="w-16 h-1 bg-white mt-2"></div>
                        </h2>
                        <p className="text-white text-justify leading-relaxed">
                            The Institute of Electrical and Electronics Engineers (IEEE) boasts a vast and diverse community, encompassing numerous specialized associations. Some of the prominent groups within IEEE include Women in Engineering (WIE), Industry Applications Society (IAS), Power and Energy Society (PES), and Young Professionals (YP), among others. These communities provide valuable opportunities for members to network, grow professionally, and contribute to advancements across various engineering disciplines.
                        </p>

                        {/* Links */}
                        <div className="mt-6 flex flex-col gap-2 text-white ">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> Community and society
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> Other Sites
                            </a>

                        </div>
                    </div>


                </div>
            </div>

            {/* The achivements section */}
            <section className=" pt-20 pb-10 px-6 md:px-20">
                <div className="w-[85%] mx-auto  ">
                    {/* Title */}
                    <h2 className="text-3xl font-bold text-[#045C99]  mb-4">
                        Achievements
                    </h2>
                    <div className="block w-16 h-1 bg-[#045C99]    mb-6"></div>

                    {/* Description */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-10">
                        The visionary founders, dedicated student members, and hardworking volunteers of the IEEE Bangladesh Section continue to achieve remarkable milestones. Over the years, the section has garnered numerous accomplishments, contributing significantly to the global IEEE community. Below is a list of some of the most notable achievements of the IEEE Bangladesh Section. To know more about it please visit-
                    </p>                    {/* Images */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Image 1 */}
                        <div className="bg-gray-200 h-64 rounded-md overflow-hidden relative group">
                            <img
                                src="https://i.ibb.co.com/TqWqd8T1/trophy.jpg"
                                alt="Achievement 1"
                                className="object-cover w-full h-full filter blur-sm group-hover:blur-none transition-all duration-300"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a 
                                    href="https://ieeecsbdc.org/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="bg-[#045C99] hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>

                        {/* Image 2 */}
                        <div className="bg-gray-200 h-64 rounded-md overflow-hidden relative group">
                            <img
                                src="https://i.ibb.co.com/TqWqd8T1/trophy.jpg"
                                alt="Achievement 2"
                                className="object-cover w-full h-full filter blur-sm group-hover:blur-none transition-all duration-300"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a 
                                    href="https://ieeecsbdc.org/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="bg-[#045C99] hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>

                        {/* Image 3 */}
                        <div className="bg-gray-200 h-64 rounded-md overflow-hidden relative group">
                            <img
                                src="https://i.ibb.co.com/TqWqd8T1/trophy.jpg"
                                alt="Achievement 3"
                                className="object-cover w-full h-full filter blur-sm group-hover:blur-none transition-all duration-300"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a 
                                    href="https://ieeecsbdc.org/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="bg-[#045C99] hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className=" w-[80%]  pt-20 mx-auto  flex flex-col items-center justify-center">
                <div className=''>
                    <h2 className="text-2xl   font-bold text-[#045C99]  mb-2">
                        Contact Bangladesh Section
                    </h2>
                    <div className="block w-16 h-1 bg-[#045C99]    mb-6"></div>
                    <div className="space-y-4 ">
                        <div className="flex flex-col md:flex-row md:items-start">
                            <span className="font-semibold w-48">Chair:</span>
                            <p

                                className="text-[#045C99]   hover:underline"
                            >
                                Prof. Dr. Celia Shahnaz
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-start">
                            <span className="font-semibold w-48">Email:</span>
                            <p

                                className="text-[#045C99]   hover:underline"
                            >
                                celia.shahnaz@ieee.org
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-start">
                            <span className="font-semibold w-48">Secretary:</span>
                            <span>Raihan Razeen</span>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-start">
                            <span className="font-semibold w-48">Email:</span>
                            <span>raihan.razeen@gmail.com</span>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-start">
                            <span className="font-semibold w-48">Ms. Salma [Office Secretary]:</span>
                            <span>+88-01992-30 06 79</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default IEEEBangladesh;