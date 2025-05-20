import React from 'react';
import achievementImg from '../../public/img/achivement.jpg';
import certificate from '../../public/img/certificate.png';

const Achievement = () => {
    return (
        <div className="text-gray-800 font-sans">
            {/* Header Section */}
            <header
                className="relative w-full h-72 bg-cover bg-center flex items-center justify-center text-white"
                style={{ backgroundImage: `url(${achievementImg})` }}
            >
                {/* Blurred Background Layer */}
                <div className="absolute inset-0 bg-cover bg-center filter blur-xs" style={{ backgroundImage: `url(${achievementImg})` }} />



                {/* Text Content */}
                <div className="relative z-2 text-center px-4">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Our <span className="text-[#045C99]">Achievements</span>
                    </h2>
                    <p className="mt-2 text-xl">Celebrating excellence and innovation in IEEE LU Student Branch</p>
                </div>
            </header>


            {/* Achievement Stats */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {[
                        { count: '42+', label: 'Awards Won' },
                        { count: '150+', label: 'Events Organized' },
                        { count: '500+', label: 'Active Members' },
                        { count: '75+', label: 'Projects Completed' },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
                            <h2 className="text-3xl font-extrabold text-[#045C99]">{item.count}</h2>
                            <p className="mt-2">{item.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Award Gallery */}
            <section className="py-16">
                <h1 className="text-3xl font-bold text-center mb-10">Award Gallery</h1>
                <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
                    {[2022, 2023, 2024].map((year) => (
                        <div key={year} className="bg-white rounded shadow p-4 flex flex-col items-center text-center">
                            <img src={certificate} alt={`Award ${year}`} className="w-full h-auto mb-4" />
                            <h4 className="font-semibold">Best Student Branch Award {year}</h4>
                            <p className="text-sm text-gray-600">IEEE Region 10 Excellence Award for outstanding contribution</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16 bg-gray-50">
                <h1 className="text-3xl font-bold text-center mb-10">Achievement Timeline</h1>
                <div className="max-w-4xl mx-auto border-l-4 border-[#045C99] relative space-y-12">
                    {[2022, 2023, 2024].map((year, index) => (
                        <div key={index} className="pl-6 relative">
                            <div className="w-4 h-4 bg-[#045C99] rounded-full absolute -left-2 top-1.5"></div>
                            <h2 className="text-2xl font-bold">{year}</h2>
                            <div className="mt-2">
                                <h4 className="font-semibold">Community Impact Award</h4>
                                <p className="text-sm text-gray-700">Recognition for outstanding social service initiatives</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}

        </div>
    );
};

export default Achievement;