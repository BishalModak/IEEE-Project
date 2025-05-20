import React from 'react';
import aboutImg from  '../../public/img/LUBRANCH.jpg'
import {
    FileText,
    Code2,
    Film,
    Pencil,
    Users,
    DollarSign,
    Megaphone,
    Calendar,
    Truck
} from 'lucide-react';
import { ArrowRight } from "lucide-react";

const IEEELU = () => {
    const creativeTeamItems = [
        { icon: <FileText size={40} />, title: 'Content Writing and Publications' },
        { icon: <Code2 size={40} />, title: 'Website Development' },
        { icon: <Film size={40} />, title: 'Media' },
        { icon: <Pencil size={40} />, title: 'Graphics' },
        { icon: <Users size={40} />, title: 'Membership Development' },
        { icon: <DollarSign size={40} />, title: 'Finance and Corporate' },
        { icon: <Megaphone size={40} />, title: 'Public Relations and Promotions' },
        { icon: <Calendar size={40} />, title: 'Events and Management' },
        { icon: <Truck size={40} />, title: 'Logistics and Operations' },
    ];

    return (
        <div className='w-full mx-auto'>
            
            <header
                className="relative w-full h-[450px] bg-cover bg-center flex items-center justify-center text-white"
                style={{ backgroundImage: `url(${aboutImg})` }}
            >
                {/* Blurred Background Layer */}
                <div className="absolute inset-0 bg-cover bg-center filter blur-[6px]" style={{ backgroundImage: `url(${aboutImg})` }} />



                {/* Text Content */}
                <div className="relative z-2 text-center px-4">
                    <h2 className="text-2xl md:text-5xl text-white shadow-2xl font-bold">
                    IEEE LU Student Branch
                    </h2>
                   
                </div>
            </header>
            <div className=" w-[85%] mx-auto  pt-20 pb-10 px-6 md:px-20">
                <div className="flex flex-col md:flex-row items-center justify-center gap-42 ">

                    {/* Left side - IEEE Logo */}
                    <div className="flex justify-center">
                        <img
                            src="https://i.ibb.co.com/NgPmc6qw/FOR-Light.png" // <-- Update this path
                            alt="IEEE Logo"
                            className="w-100 h-100 object-contain"
                        />
                    </div>

                    {/* Right side - About Text */}
                    <div className=" lg:ml-[40px]">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            ABOUT <span className="block w-26 h-1 bg-blue-600 mt-2"></span>
                        </h2>
                        <p className="text-gray-700 max-w-xl leading-relaxed text-justify">
                            IEEE LU Student Branch is a prominent subunit of the Institute of Electrical and Electronics Engineers (IEEE), dedicated to fostering a collaborative environment among students in all fields of engineering and science. Established to promote the development of knowledge, skills, and professional growth, IEEE LU SB ensures that its members have access to all the valuable resources, benefits, and opportunities offered by IEEE. As the first internationally recognized student organization at Leading University, IEEE LU SB has been instrumental in guiding students towards successful careers, advocating for technological innovation, and expanding professional networks. Beyond academic success, the branch provides a platform for developing essential communication, management, and leadership skills through active participation in volunteer-driven activities. Members also gain hands-on experience in content writing, social media management, graphic design, user interface design, and web development, empowering them to grow both personally and professionally at IEEE LU SB.

                        </p>

                    </div>
                </div>
            </div>


            <div className="w-[85%] mx-auto pt-20 pb-10 px-6 md:px-20">
                <h2 className="text-3xl font-bold mb-4">
                    Creative Team
                </h2>
                <div className="h-1 w-12 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 mb-10 leading-relaxed">
                    The governing body of IEEE LU Student Branch, comprised of seasoned and dedicated experts, plays a pivotal role in guiding this flourishing student organization. The team includes the Branch Counselor, Branch Mentor, Chair, Vice Chair, Secretary, Treasurer, as well as the Chairs of various student chapters and affinity groups. Together, they oversee all activities and operations of IEEE LU SB, collaborating with in-charges and core volunteers to ensure the smooth execution of events and initiatives. These leaders exemplify hard work and expertise, directing and organizing events, handling administrative tasks, liaising with IEEE, managing recruitment drives, and ensuring that members fully benefit from their involvement. Through their leadership, the mission of IEEE LU SB is successfully carried out, with members actively participating in national and international competitions, proudly representing LU. Beyond their guidance in IEEE-related matters, the senior members also offer support in various aspects of student life at the university, further enhancing the value of joining IEEE LU SB.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center text-gray-700">
                    {creativeTeamItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="text-gray-700 mb-3">{item.icon}</div>
                            <p className="font-semibold">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>


            <div className="w-[85%] mx-auto pt-20  px-6 md:px-20">
                <div className="bg-[#045C99] flex flex-col md:flex-row items-center gap-10">
                    {/* Text Section */}
                    <div className="md:w-1/2  text-white  p-8">
                        <h2 className="text-3xl font-bold mb-2 text-white">Mission</h2>
                        <div className="w-20 h-1 bg-white mb-6"></div>
                        <p className="text-sm leading-relaxed">
                            Our goal is to build a strong community of future engineers by offering diverse opportunities for growth, both personally and professionally. Through innovative projects and teamwork, we strive to inspire curiosity, nurture creativity, and pursue excellence. By fostering an environment of continuous learning and support, we aim to help students unlock their full potential and make a meaningful impact on the world. Together, we are shaping an ecosystem that drives innovation, builds valuable connections, and empowers our members, guiding them toward success in engineering and beyond.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="md:w-1/2">
                        <img
                            src="https://i.ibb.co.com/VcvcfyXK/486651258-1065765888903214-8836680229870630363-n.jpg"
                            alt="Mission visual"
                            className="shadow-lg h-[350px]"
                        />
                    </div>
                </div>
            </div>
            <div className="w-[85%] mx-auto pt-5 pb-10 px-6 md:px-20">
                <div className="bg-[#045C99] flex flex-col-reverse md:flex-row-reverse items-center gap-10">
                    {/* Text Section */}
                    <div className="md:w-1/2  text-white  p-8">
                        <h2 className="text-3xl font-bold mb-2 text-white">Vision</h2>
                        <div className="w-20 h-1 bg-white mb-6"></div>
                        <p className="text-sm leading-relaxed">
                            Our vision is to be a LU Student Branch focused on the ongoing growth and enhancement of engineering knowledge and skills among students. We aim to foster a dynamic environment where members can refine their technical abilities, expand their professional networks, and progress in their careers. With a strong commitment to excellence, we seek to shape the future of engineering to benefit humanity by cultivating a culture of continuous learning and empowering the next generation of leaders. Through teamwork and unwavering dedication, we strive to be at the forefront of engineering education and practice, making a meaningful impact on society and inspiring future generations.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="md:w-1/2 ">
                        <img
                            src="https://i.ibb.co.com/ycX3j7Wn/IMG-1045.jpg"
                            alt="Mission visual"
                            className="shadow-lg"
                        />
                    </div>
                </div>
            </div>

            <div className="w-[85%] mx-auto pt-20 pb-10 px-6 md:px-20">
                <div className="flex flex-col md:flex-row items-start gap-10">
                    {/* Text Section */}
                    <div className="md:w-2/3">
                        <h2 className="text-4xl font-bold text-black mb-2">Events</h2>
                        <div className="w-20 h-1 bg-blue-600 mb-6"></div>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            IEEE LU Student Branch organizes a wide variety of exceptional events, including workshops, industrial tours, seminars, and competitions, all designed to enhance members' knowledge, skills, and experiences. These local and international events offer valuable insights into the latest technological and scientific developments in their respective fields, equipping members with extensive knowledge and hands-on experience that will benefit them in their future careers. One notable event hosted by IEEE LU SB is the IEEE Xtreme Student Competition, which helps participants sharpen their technical expertise while offering them the opportunity to earn recognition. Additionally, IEEE LU SB provides free webinars to its members, further supporting their growth and learning.


                        </p>
                        <p className="text-gray-700 mt-4">
                            To view the list of past and upcoming events, click on the link:
                        </p>

                        {/* Button */}
                        <button className="mt-4 bg-[#045C99] hover:bg-black text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 shadow">
                            <ArrowRight className="w-4 h-4" />
                            All Events
                        </button>
                    </div>

                    {/* Calendar Section */}
                    <div className="md:w-1/3">
                        <h3 className="text-xl font-bold mb-2">EVENT CALENDER</h3>
                        <div className="w-20 h-1 bg-[#045C99]mb-4"></div>
                        <div class="">
                            <div class="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                                <div class="bg-[#045C99] text-white text-center py-4 text-xl font-semibold">
                                    April 2025
                                </div>
                                <div class="grid grid-cols-7 text-center text-gray-700 font-medium bg-gray-100">
                                    <div>Mon</div>
                                    <div>Tue</div>
                                    <div>Wed</div>
                                    <div>Thu</div>
                                    <div>Fri</div>
                                    <div>Sat</div>
                                    <div>Sun</div>
                                </div>
                                <div class="grid grid-cols-7 gap-2 text-center py-4 px-2 text-gray-800">

                                    <div></div><div></div><div></div><div></div>

                                    <div>1</div>
                                    <div>2</div>
                                    <div>3</div>
                                    <div>4</div>
                                    <div>5</div>
                                    <div>6</div>
                                    <div>7</div>
                                    <div class="relative">
                                        8

                                        <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full"></span>
                                    </div>
                                    <div>9</div>
                                    <div>10</div>
                                    <div>11</div>
                                    <div>12</div>
                                    <div>13</div>
                                    <div>14</div>
                                    <div>15</div>
                                    <div>16</div>
                                    <div>17</div>
                                    <div>18</div>
                                    <div>19</div>
                                    <div>20</div>
                                    <div>21</div>
                                    <div>22</div>
                                    <div>23</div>
                                    <div>24</div>
                                    <div>25</div>
                                    <div>26</div>
                                    <div>27</div>
                                    <div>28</div>
                                    <div>29</div>
                                    <div>30</div>

                                </div>
                            </div>
                        </div>

                    </div>


                </div>

            </div>


            <section className="w-[85%]  mx-auto pt-20 pb-10 px-6 md:px-20">
                <div className="  ">
                    {/* Title */}
                    <h2 className="text-3xl font-bold text-black mb-4">
                        Achievements
                    </h2>
                    <div className="w-16 h-1 bg-[#045C99] mb-6"></div>

                    {/* Description */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-5">
                        IEEE LU Student Branch has made notable strides in its journey, with several key achievements marking its progress. Among these, being recognized as a top-performing student branch within Region 10 is a significant accomplishment. In addition, the branch has been acknowledged for its contributions to the IEEE Bangladesh Section, receiving accolades for its active participation and leadership. IEEE LU SB members have also achieved success in various competitions, such as securing high ranks in IEEE’s regional and global contests, including web design, video contests, and technical photo submissions. The branch has earned recognition for its consistent efforts to engage and support its members, providing them with valuable experiences, professional development opportunities, and a platform to showcase their talents. These accomplishments not only enhance the profile of IEEE LU SB but also contribute positively to the career prospects of its members.
                    </p>




                </div>
            </section>




        </div>
    );
};

export default IEEELU;