import React from 'react';

const About = () => {
    return (
        <div>
            <section className="flex flex-col lg:flex-row items-center px-6 py-10  w-[90%] mx-auto -mt-20">
                <div className="flex-1 ">
                    <h2 className="text-3xl w-[100%] lg:text-start text-center mb-2  font-bold text-gray-900 p-5">
                        About IEEE LU Student Branch
                    </h2>
                    <p className="text-lg text-gray-600 text-justify px-5 mb-2">
                        We are a community of engineering students and professionals dedicated to
                        technical innovation and excellence. Our branch provides opportunities for skill
                        development, networking, and professional growth.
                    </p>
                    <div className="grid grid-cols-2 gap-5 p-5 ">
                        <div className="bg-gray-200/20 p-5 rounded-xl flex flex-col justify-center items-center">
                            <h3 className="text-[#045C99] text-2xl font-bold leading-8 lg:ml-0  ml-2.5">500+</h3>
                            <p className="text-sm text-gray-600 font-bold w-[100%] text-center ">Active Member</p>
                        </div>
                        <div className="bg-gray-200/20 p-5 rounded-xl flex flex-col justify-center items-center">
                            <h3 className="text-[#045C99] text-2xl font-bold leading-8 lg:ml-0  ml-2.5">50+</h3>
                            <p className="text-sm text-gray-600 font-bold w-[100%] text-center">Annual Events</p>
                        </div>
                        <div className="bg-gray-200/20 p-5 rounded-xl flex flex-col justify-center items-center">
                            <h3 className="text-[#045C99] text-2xl font-bold leading-8 lg:ml-0  ml-2.5">20+</h3>
                            <p className="text-sm text-gray-600 font-bold w-[100%] text-center">Technical Workshops</p>
                        </div>
                        <div className="bg-gray-200/20 p-5 rounded-xl flex flex-col justify-center items-center">
                            <h3 className="text-[#045C99] text-2xl font-bold leading-8 lg:ml-0  ml-2.5">10+</h3>
                            <p className="text-sm text-gray-600 font-bold w-[100%] text-center">Industry Partners</p>
                        </div>
                    </div>
                </div>
                <img
                    src="../../../public/img/ieeebaner.jpg"
                    alt="IEEE LU"
                    className="w-[500px] h-[300px] lg:w-[600px] lg:h-[400px] rounded-lg mt-3 lg:mt-0 lg:ml-5"
                />
            </section>
        </div>
    );
};

export default About;