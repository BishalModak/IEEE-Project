import { ExternalLink } from 'lucide-react';
import React from 'react';
import aboutRegionImg from '../../public/img/about2.jpg';

const IEERegion10 = () => {
    return (
        <div className="w-full mx-auto  ">
            <header
                className="relative w-full h-[450px] bg-cover bg-center flex items-center justify-center text-white"
                style={{ backgroundImage: `url(${aboutRegionImg})` }}
            >
                {/* Blurred Background Layer */}
                <div className="absolute inset-0 bg-cover bg-center filter blur-[6px]" style={{ backgroundImage: `url(${aboutRegionImg})` }} />



                {/* Text Content */}
                <div className="relative z-2 text-center px-4">
                    <h2 className="text-2xl md:text-5xl text-white shadow-2xl font-bold">
                        IEEE REGION 10
                    </h2>

                </div>
            </header>
            <div className=" w-[85%] mx-auto  pt-20 pb-10 px-6 md:px-20">
                <div className="flex flex-col md:flex-row items-center justify-center gap-42 ">

                    {/* Left side - IEEE Logo */}
                    <div className="flex justify-center">
                        <img
                            src="https://i.ibb.co.com/Xxfp5Vv7/R10-Logo.png" // <-- Update this path
                            alt="IEEE Logo"
                            className="w-[240px] h-auto object-contain"
                        />
                    </div>

                    {/* Right side - About Text */}
                    <div className=" lg:ml-[40px]">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            IEEE REGION 10 <span className="block w-26 h-1 bg-[#045C99]  mt-2"></span>
                        </h2>
                        <p className="text-gray-700 max-w-xl leading-relaxed text-justify">
                            The Institute of Electrical and Electronics Engineers (IEEE) has
                            a global membership of approximately 422,000 individuals across 160
                            countries. The Asia-Pacific region, known as IEEE Region 10, is the
                            largest, boasting over 130,000 members. This region represents one of
                            the most cohesive and active communities within IEEE, fostering a strong
                            sense of unity and collaboration. It serves as the foundation for all IEEE
                            organizational units across the Asia-Pacific area, driving innovation and
                            engagement throughout the region.

                        </p>

                        {/* Buttons */}
                        <div className="flex gap-4 mt-6">

                            <button className="border-2 border-[#045C99]  hover:bg-[#045C99]  hover:text-white text-[#045C99]  font-semibold py-2 px-6 rounded">
                                Region 10 History
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
                            Young Professionals
                            <span className="block w-16 h-1 bg-[#045C99]  mt-2"></span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            IEEE Region 10 Young Professionals (YP)
                            is a dynamic community of innovative and passionate
                            members and volunteers from across the Asia-Pacific
                            region. This initiative by the Institute of Electrical
                            and Electronics Engineers (IEEE) is designed to support
                            young professionals in reaching their career aspirations,
                            enhancing their professional presence, and building strong
                            reputations across diverse fields. Through networking, mentorship,
                            and leadership opportunities, IEEE YP empowers emerging engineers and
                            technologists to thrive in their respective industries.
                        </p>

                        {/* Links */}
                        <div className="mt-6 flex flex-col gap-2 text-[#045C99] ">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} />IEEE R10 YP
                            </a>

                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="flex justify-center">
                        <img
                            src="https://i.ibb.co.com/zVTVDRP5/SC-2023-R10-Meeting-Group-Photo-1.jpg" // <-- Update this path
                            alt="Community Network"
                            className="w-[400px] h-auto object-contain"
                        />
                    </div>
                </div>
            </div>


            <div className="bg-[#045C99] w-[85%] mx-auto py-16 px-6 md:px-20">
                <div className="w-[85%] mx-auto  grid md:grid-cols-2 gap-10 justify-between  ">

                    {/* Women in Engineering
 */}
                    <div className="border-r border-white pr-8">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Women in Engineering

                            <div className="w-16 h-1 bg-white mt-2"></div>
                        </h2>
                        <p className="text-white text-justify leading-relaxed">
                            IEEE Region 10 Women in Engineering (WIE) is one of the largest international technical communities focused on supporting women engineers and scientists, while also inspiring young girls worldwide to pursue careers in engineering and technology. With a strong network of over 20,000 members from diverse countries, WIE is committed to empowering women, promoting diversity, and showcasing the strength and brilliance of women in STEM fields.
                        </p>

                        {/* Links */}
                        <div className="mt-6 flex flex-col gap-2 text-[#045C99] ">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} />  IEEE R10 WIE
                            </a>

                        </div>

                    </div>

                    {/* Students and Member Activities */}
                    <div className="pl-8">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Students and Member Activities
                            <div className="w-16 h-1 bg-white mt-2"></div>
                        </h2>
                        <p className="text-white text-justify leading-relaxed">
                            The IEEE Region 10 Student Activities Committee plays a vital role in addressing the needs of students across various student branches throughout the Asia-Pacific region. Known for their active involvement and dedication, the committee is highly responsive to IEEE-related inquiries and committed to supporting student initiatives. They foster an inclusive environment, warmly welcoming newcomers and volunteers, while efficiently guiding them toward available opportunities for engagement and growth within the IEEE community.
                        </p>
                        <div className="mt-6 flex flex-col gap-2 text-[#045C99] ">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} />   IEEE R10 SAC
                            </a>

                        </div>
                    </div>

                </div>
            </div>
            <div className="bg-[#045C99] w-[85%] mx-auto  py-16 px-6 md:px-20">
                <div className=" w-[85%] mx-auto grid md:grid-cols-2 gap-10 justify-between  ">

                    {/* Educational Activities and Involvements */}
                    <div className="border-r border-white pr-8">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Educational Activities and Involvements
                            <div className="w-16 h-1 bg-white mt-2"></div>
                        </h2>
                        <p className="text-white text-justify leading-relaxed">
                            IEEE Region 10 places a strong emphasis on educational initiatives and platforms. A significant portion of its events and activities are centered around learning, development, and intellectual growth. The region is dedicated to addressing every facet of educational advancement, with the goal of equipping student participants with the skills, knowledge, and confidence needed to thrive as future professionals in their respective fields.
                        </p>

                        {/* Links */}
                        <div className="mt-6 flex flex-col gap-2 text-[#045C99] ">

                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> Region 10 Educational Involvements
                            </a>

                        </div>
                    </div>

                    {/* Industry Relations */}
                    <div className="pl-8">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Events and Conferences
                            <div className="w-16 h-1 bg-white mt-2"></div>
                        </h2>
                        <p className="text-white text-justify leading-relaxed">
                            The IEEE Region 10 Industry Relations Committee (IRC) is a vital and impactful part of the Region 10 community. It plays a key role in bridging the gap between academia and industry, fostering stronger collaboration and engagement with industry professionals. One of its notable initiatives, the Students and Early Researchers Conference Fund (SERCF), offers financial support to IEEE Student Members and other eligible members, helping them gain valuable exposure and experience through conference participation. The committee is actively working to strengthen ties with industry partners and enhance opportunities for young professionals and researchers across the region.

                        </p>
                        {/* Links */}
                        <div className="mt-6 flex flex-col gap-2 text-[#045C99] ">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> R10 Industry Relations
                            </a>


                        </div>
                    </div>

                </div>
            </div>


            <div className=" pt-20 pb-10 px-6 md:px-20">
                <div className=" w-[85%] mx-auto  flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-10">

                    {/* Left side - Text content */}
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-bold text-[#045C99] mb-4">
                            Membership Development
                            <span className="block w-16 h-1 bg-[#045C99]  mt-2"></span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            The Membership Development and Leadership Training (MDLT) Fund, established by the IEEE Region 10 Student Activities Committee (SAC), was designed to encourage sections and student divisions to organize events that promote professional development and leadership growth. This initiative aims to provide students with the tools and experiences needed to develop their leadership skills and enhance their professional capabilities.
                        </p>

                        {/* Links */}
                        <div className="mt-6 flex flex-col gap-2 text-[#045C99] ">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> Membership Development
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> Membership Activities
                            </a>



                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="flex justify-center">
                        <img
                            src="https://i.ibb.co.com/cSR2wZRn/membership-growth.png" // <-- Update this path
                            alt="Community Network"
                            className="w-[400px] h-auto object-contain"
                        />
                    </div>
                </div>
            </div>

            <section className=" pt-20 pb-10 px-6 md:px-20">
                <div className="w-[85%] mx-auto  ">
                    {/* Title */}
                    <h2 className="text-3xl font-bold text-[#045C99]  mb-4">
                        Events and Conference
                    </h2>
                    <div className="w-16 h-1 bg-[#045C99]  mb-6"></div>

                    {/* Description */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-5">
                        TENCON is the flagship international technical conference of IEEE Region 10, serving as a premier event for the region's technical community. IEEE sponsors over 1,900 conferences and events annually across the globe, offering cutting-edge content across a wide range of technical fields within IEEE. These conferences provide opportunities for networking, knowledge sharing, and innovation within the global engineering and technology community.
                    </p>
                    <a href="#" className="flex text-[#045C99]  items-center gap-2 hover:underline">
                        <ExternalLink size={18} />  Events List


                    </a>



                </div>
            </section>

            <div className=" w-[85%] pt-20 pb-10 px-6 md:px-20  mx-auto flex flex-col   justify-center">
                <h2 className="text-3xl font-bold text-[#045C99]  mb-2">
                    Contact IEEE R10
                    <div className="w-16 h-1 bg-[#045C99]  mb-6"></div>
                </h2>
                <p className='text-gray-700 text-lg leading-relaxed mb-5'>For getting touched with us please go through this side and join IEEE R10 community as soon as possible.</p>
                <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-start">
                        <span className="font-semibold w-48">Home page:</span>
                        <a
                            href="http://www.ieeer10.org/"
                            className="text-[#045C99]  hover:underline"
                        >
                            http://www.ieeer10.org/
                        </a>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start">
                        <span className="font-semibold w-48">Website:</span>
                        <a href='#'

                            className="text-[#045C99]  hover:underline"
                        >
                            IEEE Asia Pacific Region 10
                        </a>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start">
                        <span className="font-semibold w-48">For membership enquiry:</span>
                        <span><a href="#" className='text-[#045C99]  hover:underline'>IEEE Support Center</a></span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start">
                        <span className="font-semibold w-48">For Volunteers::</span>
                        <span>Ewell Tan</span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start">
                        <span className="font-semibold w-48">Contact number:</span>
                        <span>+65 6778 2873, +65 6778 9723</span>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default IEERegion10;