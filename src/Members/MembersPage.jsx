import React from 'react';
import { Link } from 'react-router-dom';

const MembersPage = () => {
    // Category buttons with their respective routes
    const categories = [
        {
            id: 1,
            name: 'Advisor Panel',
            route: '/members/advisorPanel',
            description: 'Meet our distinguished faculty advisors guiding IEEE LU Student Branch',
        },
        {
            id: 2,
            name: 'ExCom',
            route: '/members/excom',
            description: 'Our Executive Committee leading the IEEE LU Student Branch',
        },
        {
            id: 3,
            name: 'Committee',
            route: '/members/committee',
            description: 'Committee members working to make IEEE LU events and activities successful',
        },
        {
            id: 4,
            name: 'Ex ExCom',
            route: '/members/exexcom',
            description: 'The technical team behind IEEE LU Student Branch web presence',
        },
        {
            id: 5,
            name: 'Volunteers',
            route: '/members/volunteers',
            description: 'Dedicated volunteers supporting IEEE LU Student Branch activities',
        }
    ];

    return (
        <div className="bg-gray-100 min-h-screen py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-[#045C99] mb-4">IEEE LU Student Branch Members</h1>
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                    Meet the dedicated team of professionals and students who make the IEEE Leading University Student Branch possible.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-8">
                    {categories.map((category) => (
                        <a
                            key={category.id}
                            href={category.route}
                            className="block transform transition duration-300 hover:-translate-y-2"
                        >
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-transparent hover:border-[#045C99] h-full">
                                <div className="p-6 flex flex-col items-center text-center h-full">
                                    <h3 className="text-2xl font-bold text-[#045C99] mb-4">{category.name}</h3>
                                    <p className="text-gray-600 mb-6 flex-grow">{category.description}</p>
                                    <div className="bg-[#045C99] text-white py-3 px-6 rounded-md hover:bg-blue-300 transition-colors duration-300 mt-auto">
                                        View Members
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MembersPage;