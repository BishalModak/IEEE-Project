import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import LogisticExecutive from './../Logistic Executive/LogisticExecutive';

const Committee = () => {
    const coordinators = new Array(4).fill({
        name: 'Full Name',
        designation: 'Designation',
        ieeeId: 'IEEE ID',
        imgSrc: '../../public/img/user.png',
        facebook: 'https://www.facebook.com/ieeecslu',
        linkedin: 'https://www.linkedin.com/company/ieeecslu/',
    });
    return (
        <div>
            <section className=" text-white">
                <div className="text-center py-12 bg-black">
                    <h1 className="text-3xl font-bold py-4">IEEE LU Program Coordinator</h1>
                    <p className="text-gray-200">Dedicated professionals building the digital future of IEEE</p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-10 mt-5 px-6 pb-12">
                    {coordinators.map((person, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center  rounded-lg"
                        >
                            <img
                                src={person.imgSrc}
                                alt={person.name}
                                className="w-[200px] h-[200px] rounded-full object-cover  py-8"
                            />
                            <div className="bg-white text-black p-6 w-[80%] rounded shadow-md">
                                <h3 className="text-xl font-semibold">{person.name}</h3>
                                <span className="text-blue-600">{person.designation}</span>
                                <p>{person.ieeeId}</p>
                                <div className="flex justify-center gap-4 text-2xl mt-4">
                                    <a href={person.facebook} target="_blank" rel="noopener noreferrer">
                                        <FaFacebook className="hover:text-blue-600 transition" />
                                    </a>
                                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="hover:text-blue-600 transition" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className=" text-white">
                <div className="text-center py-12 bg-black">
                    <h1 className="text-3xl font-bold py-4">IEEE LU Publicity Coordinator</h1>
                    <p className="text-gray-200">Dedicated professionals building the digital future of IEEE</p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-10 mt-5 px-6 pb-12 ">
                    {coordinators.map((person, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center  rounded-lg"
                        >
                            <img
                                src={person.imgSrc}
                                alt={person.name}
                                className="w-[200px] h-[200px] rounded-full object-cover  py-8"
                            />
                            <div className="bg-white text-black p-6 w-[80%] rounded shadow-md">
                                <h3 className="text-xl font-semibold">{person.name}</h3>
                                <span className="text-blue-600">{person.designation}</span>
                                <p>{person.ieeeId}</p>
                                <div className="flex justify-center gap-4 text-2xl mt-4">
                                    <a href={person.facebook} target="_blank" rel="noopener noreferrer">
                                        <FaFacebook className="hover:text-blue-600 transition" />
                                    </a>
                                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="hover:text-blue-600 transition" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className=" text-white">
                <div className="text-center py-12 bg-black">
                    <h1 className="text-3xl font-bold py-4">IEEE LU Webmaster</h1>
                    <p className="text-gray-200">Dedicated professionals building the digital future of IEEE</p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-10 mt-5 px-6 pb-12 ">
                    {coordinators.map((person, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center  rounded-lg"
                        >
                            <img
                                src={person.imgSrc}
                                alt={person.name}
                                className="w-[200px] h-[200px] rounded-full object-cover  py-8"
                            />
                            <div className="bg-white text-black p-6 w-[80%] rounded shadow-md">
                                <h3 className="text-xl font-semibold">{person.name}</h3>
                                <span className="text-blue-600">{person.designation}</span>
                                <p>{person.ieeeId}</p>
                                <div className="flex justify-center gap-4 text-2xl mt-4">
                                    <a href={person.facebook} target="_blank" rel="noopener noreferrer">
                                        <FaFacebook className="hover:text-blue-600 transition" />
                                    </a>
                                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="hover:text-blue-600 transition" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className=" text-white">
                <div className="text-center py-12 bg-black">
                    <h1 className="text-3xl font-bold py-4">IEEE LU Video Content Executive</h1>
                    <p className="text-gray-200">Dedicated professionals building the digital future of IEEE</p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-10 mt-5 px-6 pb-12 ">
                    {coordinators.map((person, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center  rounded-lg"
                        >
                            <img
                                src={person.imgSrc}
                                alt={person.name}
                                className="w-[200px] h-[200px] rounded-full object-cover  py-8"
                            />
                            <div className="bg-white text-black p-6 w-[80%] rounded shadow-md">
                                <h3 className="text-xl font-semibold">{person.name}</h3>
                                <span className="text-blue-600">{person.designation}</span>
                                <p>{person.ieeeId}</p>
                                <div className="flex justify-center gap-4 text-2xl mt-4">
                                    <a href={person.facebook} target="_blank" rel="noopener noreferrer">
                                        <FaFacebook className="hover:text-blue-600 transition" />
                                    </a>
                                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="hover:text-blue-600 transition" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className=" text-white">
                <div className="text-center py-12 bg-black">
                    <h1 className="text-3xl font-bold py-4">IEEE LU Photography Executive</h1>
                    <p className="text-gray-200">Dedicated professionals building the digital future of IEEE</p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-10 mt-5 px-6 pb-12 ">
                    {coordinators.map((person, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center  rounded-lg"
                        >
                            <img
                                src={person.imgSrc}
                                alt={person.name}
                                className="w-[200px] h-[200px] rounded-full object-cover  py-8"
                            />
                            <div className="bg-white text-black p-6 w-[80%] rounded shadow-md">
                                <h3 className="text-xl font-semibold">{person.name}</h3>
                                <span className="text-blue-600">{person.designation}</span>
                                <p>{person.ieeeId}</p>
                                <div className="flex justify-center gap-4 text-2xl mt-4">
                                    <a href={person.facebook} target="_blank" rel="noopener noreferrer">
                                        <FaFacebook className="hover:text-blue-600 transition" />
                                    </a>
                                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="hover:text-blue-600 transition" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className=" text-white">
                <div className="text-center py-12 bg-black">
                    <h1 className="text-3xl font-bold py-4">IEEE LU Membership Development Coordinator</h1>
                    <p className="text-gray-200">Dedicated professionals building the digital future of IEEE</p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-10 mt-5 px-6 pb-12 ">
                    {coordinators.map((person, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center  rounded-lg"
                        >
                            <img
                                src={person.imgSrc}
                                alt={person.name}
                                className="w-[200px] h-[200px] rounded-full object-cover  py-8"
                            />
                            <div className="bg-white text-black p-6 w-[80%] rounded shadow-md">
                                <h3 className="text-xl font-semibold">{person.name}</h3>
                                <span className="text-blue-600">{person.designation}</span>
                                <p>{person.ieeeId}</p>
                                <div className="flex justify-center gap-4 text-2xl mt-4">
                                    <a href={person.facebook} target="_blank" rel="noopener noreferrer">
                                        <FaFacebook className="hover:text-blue-600 transition" />
                                    </a>
                                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="hover:text-blue-600 transition" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className=" text-white">
                <div className="text-center py-12 bg-black">
                    <h1 className="text-3xl font-bold py-4">IEEE LU Logistic Executive</h1>
                    <p className="text-gray-200">Dedicated professionals building the digital future of IEEE</p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-10 mt-5 px-6 pb-12 ">
                    {coordinators.map((person, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center  rounded-lg"
                        >
                            <img
                                src={person.imgSrc}
                                alt={person.name}
                                className="w-[200px] h-[200px] rounded-full object-cover  py-8"
                            />
                            <div className="bg-white text-black p-6 w-[80%] rounded shadow-md">
                                <h3 className="text-xl font-semibold">{person.name}</h3>
                                <span className="text-blue-600">{person.designation}</span>
                                <p>{person.ieeeId}</p>
                                <div className="flex justify-center gap-4 text-2xl mt-4">
                                    <a href={person.facebook} target="_blank" rel="noopener noreferrer">
                                        <FaFacebook className="hover:text-blue-600 transition" />
                                    </a>
                                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="hover:text-blue-600 transition" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className=" text-white">
                <div className="text-center py-12 bg-black">
                    <h1 className="text-3xl font-bold py-4">IEEE LU Graphic Design Executive</h1>
                    <p className="text-gray-200">Dedicated professionals building the digital future of IEEE</p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-10 mt-5 px-6 pb-12 ">
                    {coordinators.map((person, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center  rounded-lg"
                        >
                            <img
                                src={person.imgSrc}
                                alt={person.name}
                                className="w-[200px] h-[200px] rounded-full object-cover  py-8"
                            />
                            <div className="bg-white text-black p-6 w-[80%] rounded shadow-md">
                                <h3 className="text-xl font-semibold">{person.name}</h3>
                                <span className="text-blue-600">{person.designation}</span>
                                <p>{person.ieeeId}</p>
                                <div className="flex justify-center gap-4 text-2xl mt-4">
                                    <a href={person.facebook} target="_blank" rel="noopener noreferrer">
                                        <FaFacebook className="hover:text-blue-600 transition" />
                                    </a>
                                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="hover:text-blue-600 transition" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className=" text-white">
                <div className="text-center py-12 bg-black">
                    <h1 className="text-3xl font-bold py-4">IEEE LU Chief Reporting Executive</h1>
                    <p className="text-gray-200">Dedicated professionals building the digital future of IEEE</p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-10 mt-5 px-6 pb-12 ">
                    {coordinators.map((person, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center  rounded-lg"
                        >
                            <img
                                src={person.imgSrc}
                                alt={person.name}
                                className="w-[200px] h-[200px] rounded-full object-cover  py-8"
                            />
                            <div className="bg-white text-black p-6 w-[80%] rounded shadow-md">
                                <h3 className="text-xl font-semibold">{person.name}</h3>
                                <span className="text-blue-600">{person.designation}</span>
                                <p>{person.ieeeId}</p>
                                <div className="flex justify-center gap-4 text-2xl mt-4">
                                    <a href={person.facebook} target="_blank" rel="noopener noreferrer">
                                        <FaFacebook className="hover:text-blue-600 transition" />
                                    </a>
                                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="hover:text-blue-600 transition" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className=" text-white">
                <div className="text-center py-12 bg-black">
                    <h1 className="text-3xl font-bold py-4">IEEE LU ACM Coordinator</h1>
                    <p className="text-gray-200">Dedicated professionals building the digital future of IEEE</p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-10 mt-5 px-6 pb-12 ">
                    {coordinators.map((person, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center  rounded-lg"
                        >
                            <img
                                src={person.imgSrc}
                                alt={person.name}
                                className="w-[200px] h-[200px] rounded-full object-cover  py-8"
                            />
                            <div className="bg-white text-black p-6 w-[80%] rounded shadow-md">
                                <h3 className="text-xl font-semibold">{person.name}</h3>
                                <span className="text-blue-600">{person.designation}</span>
                                <p>{person.ieeeId}</p>
                                <div className="flex justify-center gap-4 text-2xl mt-4">
                                    <a href={person.facebook} target="_blank" rel="noopener noreferrer">
                                        <FaFacebook className="hover:text-blue-600 transition" />
                                    </a>
                                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="hover:text-blue-600 transition" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Committee;