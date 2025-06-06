import { ExternalLink } from "lucide-react";
import React from "react";
import aboutIEEEimg from "../../public/img/about3.jpg";

const AboutIEEE = () => {
    return (
        <div className="w-full mx-auto bg-white">

            <header
                className="relative w-full h-[450px] bg-cover bg-center flex items-center justify-center text-white"
                style={{ backgroundImage: `url(${aboutIEEEimg})` }}
            >
                {/* Blurred Background Layer */}
                <div className="absolute inset-0 bg-cover bg-center filter blur-[6px]" style={{ backgroundImage: `url(${aboutIEEEimg})` }} />



                {/* Text Content */}
                <div className="relative z-2 text-center px-4">
                    <h2 className="text-2xl md:text-5xl text-white shadow-2xl font-bold">
                        IEEE
                    </h2>

                </div>
            </header>

            <div className=" w-[85%] mx-auto  pt-20 pb-10 px-6 md:px-20">
                <div className="flex flex-col md:flex-row items-center justify-center gap-42 ">

                    {/* Left side - IEEE Logo */}
                    <div className="flex justify-center w-full h-full">
                        <img
                            src="https://i.ibb.co.com/KxYhtFbD/IEEE-LOGO.gif" // <-- Update this path
                            alt="IEEE Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Right side - About Text */}
                    <div className=" lg:ml-[40px]">
                        <h2 className="text-3xl font-bold text-[#045C99]  mb-4">
                            About <span className="block w-26  h-1 bg-[#045C99]  mt-2"></span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            The IEEE (Institute of Electrical and Electronics Engineers) is one of the largest global professional organizations for engineers. Its corporate office is based in New York City, while its main headquarters is situated in Piscataway, New Jersey, USA. IEEE is dedicated to advancing fields such as electrical and electronic engineering, computer science and engineering, as well as telecommunications. Today, it stands as a leading international association for engineers across the world.

                        </p>

                        {/* Buttons */}
                        <div className="flex gap-4 mt-6">
                            <button className="bg-[#045C99]  hover:bg-[#045C99]   text-white font-semibold py-2 px-6 rounded">
                                Learn More
                            </button>
                            <button className="border-2 border-white hover:bg-white hover:text-black text-[#045C99]  font-semibold py-2 px-6 rounded">
                                Mission and Vision
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-[85%] mx-auto pt-20 pb-10 px-6 md:px-20">
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">

                    {/* Left side - Text content */}
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-bold text-[#045C99] mb-4">
                            Largest Community
                            <span className="block w-16 h-1 bg-[#045C99]  mt-2"></span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            The Institute of Electrical and Electronics Engineers (IEEE) is
                            the world’s largest professional organization dedicated to
                            engineering and technology. Originally formed with 150,000
                            members—93% of whom were from the United States—IEEE has grown
                            into a global network of over 400,000 members across 160 countries,
                            with U.S.-based members now comprising a minority. It hosts a vast
                            community of dedicated professionals and volunteers, supported by
                            numerous technical societies, councils, and committees. The IEEE community
                            is often regarded as a close-knit family, united by passion and commitment to
                            technological advancement. To learn more about IEEE and its impact, visit their
                            official website or explore their publications and events.
                        </p>

                        {/* Links */}
                        <div className="mt-6 flex flex-col gap-2 text-[#045C99]  ">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> Technical Society
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> Technical Councils
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> Technical Committees
                            </a>
                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="flex justify-center">
                        <img
                            src="https://i.ibb.co.com/HL4RQZTc/community.jpg" // <-- Update this path
                            alt="Community Network"
                            className="w-[300px] h-[300px] object-contain"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-[#045C99] w-[85%] mx-auto   py-16 px-6 md:px-20">
                <div className="w-[85%] mx-auto  grid md:grid-cols-2 gap-10 justify-between  ">

                    {/* Start with IEEE */}
                    <div className="border-r border-white pr-8">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Start with IEEE
                            <div className="w-16  h-1 bg-white mt-2"></div>
                        </h2>
                        <p className="text-white text-justify leading-relaxed">
                            Who wouldn’t want to expand their knowledge through new
                            and exciting experiences? If you're eager to explore life from
                            a fresh perspective, IEEE is the ideal platform for you.
                            It offers countless opportunities and developmental activities
                            that help shape your thinking and boost your confidence. For those
                            curious about the fascinating mysteries and groundbreaking innovations
                            in science and technology, IEEE is the perfect starting point. With its
                            wide range of extraordinary communities and initiatives, you can easily get
                            involved, grow personally and professionally, and discover your true potential.
                        </p>

                        {/* Links */}
                        <div className="mt-6 flex flex-col gap-2 text-white">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> IEEE Xplore
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> IEEE Spectrum
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> IEEE Standards
                            </a>
                        </div>
                    </div>

                    {/* Collaboration */}
                    <div className="pl-8">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Collaboration
                            <div className="w-16  h-1 bg-white  mt-2"></div>
                        </h2>
                        <p className="text-white text-justify leading-relaxed">
                            The Institute of Electrical and Electronics Engineers (IEEE) offers
                            limitless opportunities for personal and professional growth—but it's
                            important to identify your own area of interest to truly excel. By collaborating
                            with international technology professionals and certified IEEE members from around
                            the world, you can build a strong professional identity. IEEE stands at the forefront
                            when it comes to expanding professional networks, enabling seamless communication with
                            technical experts, and resolving queries related to technology, geographical regions, membership
                            levels, and more. Through its numerous global and local communities, meetings, and seminars, IEEE
                            fosters rich opportunities for connection and development.
                        </p>
                    </div>

                </div>
            </div>
            <div className="bg-[#045C99] w-[85%] mx-auto  py-16 px-6 md:px-20">
                <div className=" w-[85%] mx-auto grid md:grid-cols-2 gap-10 justify-between  ">

                    {/* Publications */}
                    <div className="border-r border-white pr-8">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Publications
                            <div className="w-16  h-1 bg-white  mt-2"></div>
                        </h2>
                        <p className="text-white text-justify leading-relaxed">
                            Who wouldn’t want to gain knowledge through exciting and
                            new experiences? If you're looking to explore life from a
                            different perspective, IEEE is the perfect organization for
                            you. It offers countless platforms and development opportunities
                            that help you grow intellectually and cultivate a confident, forward-thinking mindset.
                        </p>

                        {/* Links */}
                        <div className="mt-6 flex flex-col gap-2 text-white">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> IEEE Publications
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> List of IEEE publications
                            </a>

                        </div>
                    </div>

                    {/* Events and conferences */}
                    <div className="pl-8">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Events and Conferences
                            <div className="w-16  h-1 bg-white mt-2"></div>
                        </h2>
                        <p className="text-white text-justify leading-relaxed">
                            The Institute of Electrical and Electronics Engineers (IEEE)
                            offers endless opportunities for growth, but it's essential
                            to identify your own area of interest to truly excel. By collaborating
                            with international technology professionals and verified IEEE members
                            from around the world, anyone can build a strong and recognized professional identity.
                        </p>
                        {/* Links */}
                        <div className="mt-6 flex flex-col gap-2 text-white">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> IEEE Conference and Events
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> Conference and Event Search
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> Events and Conferences Calender
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
                    <div className="w-16  h-1 bg-[#045C99]  mb-6"></div>

                    {/* Description */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-10">
                        The Institute of Electrical and Electronics Engineers (IEEE) is
                        one of the world’s leading platforms for success and innovation.
                        Through its widely recognized publications, global conferences,
                        industry standards, and a broad range of professional and educational
                        activities, IEEE and its members continue to inspire the global engineering
                        community. The organization also offers numerous prestigious achievement awards
                        across various fields, recognizing outstanding contributions and excellence.
                        To learn more, pleaseplease visit-
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
                                    href="https://www.ieee.org/"
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
                                    href="https://www.ieee.org/"
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
                                    href="https://www.ieee.org/"
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
            <div className=" pt-20 pb-10 px-6 md:px-20">
                <div className="w-[85%] mx-auto flex flex-col md:flex-row items-center justify-center gap-10">

                    {/* Left side - Text content */}
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-bold text-[#045C99]  mb-4">
                            Innovations and Development
                            <span className="block w-16 h-1 bg-[#045C99]  mt-2"></span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            The development of the Institute of Electrical and Electronics
                            Engineers (IEEE) has been a gradual and thoughtful process,
                            grounded in principles such as consensus, due process, openness,
                            the right to appeal, and balanced participation. Growth within
                            IEEE involves careful contributions from all sides, ensuring fairness
                            and inclusivity. Today, IEEE continues to evolve with modern
                            technology—now offering a dedicated mobile app that provides
                            easy access to resources, events, publications, and networking
                            opportunities, making engagement more convenient than ever.
                        </p>

                        {/* Links */}
                        <div className="mt-6 flex flex-col gap-2 text-[#045C99]  ">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> Development and Innovations.
                            </a>

                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="flex justify-center">
                        <img
                            src="https://i.ibb.co.com/rGbLPMKM/innovation.jpg" // <-- Update this path
                            alt="Community Network"
                            className="w-[350px] h-[350px] object-contain"
                        />
                    </div>
                </div>
            </div>
            <div className=" pt-20 pb-10 px-6 md:px-20">
                <div className=" w-[85%] mx-auto  flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-10">

                    {/* Left side - Text content */}
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-bold text-[#045C99]  mb-4">
                            Student and Member Activities
                            <span className="block w-16 h-1 bg-[#045C99]  mt-2"></span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            The Student Activities Committee (SAC) is a key body within
                            the Institute of Electrical and Electronics Engineers (IEEE),
                            responsible for overseeing student programs, benefits, and initiatives.
                            It also advises the Member and Geographic Activities (MGA) Board. With
                            over 100,000 IEEE Student and Graduate Student members across the globe,
                            SAC plays a vital role in shaping the student experience. Its dedicated
                            volunteer members contribute valuable perspectives, helping to represent
                            and amplify the voices of students in the global IEEE community.
                        </p>

                        {/* Links */}
                        <div className="mt-6 flex flex-col gap-2 text-[#045C99]  ">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> IEEE Students.
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> IEEE Student branch programmer.
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> IEEE Membership.
                            </a>

                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="flex justify-center">
                        <img
                            src="https://i.ibb.co.com/DgjMBdZG/students.jpg" // <-- Update this path
                            alt="Community Network"
                            className="w-[350px] h-[350px] object-contain"
                        />
                    </div>
                </div>
            </div>
            <div className="pt-20 pb-10 px-6 md:px-20">
                <div className="w-[85%] mx-auto  flex flex-col md:flex-row items-center justify-center gap-10">

                    {/* Left side - Text content */}
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-bold text-[#045C99]  mb-4">
                            Quality
                            <span className="block w-16 h-1 bg-[#045C99]  mt-2"></span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            The Institute of Electrical and Electronics Engineers (IEEE)
                            is a globally recognized professional association for engineers,
                            bringing together experts from fields such as electrical engineering,
                            communications, computing, and emerging technologies. It also includes
                            students and members from around the world who contribute their diverse
                            talents and knowledge. With its international reach and multidisciplinary
                            focus, IEEE stands as a prestigious organization dedicated to advancing
                            scientific and technological innovation on a global scale.
                        </p>


                    </div>

                    {/* Right side - Image */}
                    <div className="flex justify-center">
                        <img
                            src="https://i.ibb.co.com/CsszgQjw/quality.jpg" // <-- Update this path
                            alt="Community Network"
                            className="w-[350px] h-[350px] object-contain"
                        />
                    </div>
                </div>
            </div>

            <div className=" w-[50%] pt-20  mx-auto flex flex-col  justify-center py-4">
                <h2 className="text-2xl font-bold text-[#045C99]  mb-2">
                    Contact Section
                </h2>
                <div className="w-16  h-1 bg-[#045C99]  mb-6"></div>
                <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-start">
                        <span className="font-semibold w-48">Asia Pacific:</span>
                        <a
                            href="https://site.ieee.org/ieeeap/contact-us/location/"
                            className="text-[#045C99]   hover:underline"
                        >
                            https://site.ieee.org/ieeeap/contact-us/location/
                        </a>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start">
                        <span className="font-semibold w-48">IEEE computer organization:</span>
                        <a
                            href="https://www.computer.org/about/contact"
                            className="text-[#045C99]   hover:underline"
                        >
                            https://www.computer.org/about/contact
                        </a>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start">
                        <span className="font-semibold w-48">Customer Service:</span>
                        <span>00 1 732-981-0060</span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start">
                        <span className="font-semibold w-48">Presidents:</span>
                        <span>Karen Bartleson (2017–2018), James A. Jefferies (Incumbent)</span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start">
                        <span className="font-semibold w-48">Founders:</span>
                        <span>American Institute of Electrical Engineers, Institute of Radio Engineers</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutIEEE;
