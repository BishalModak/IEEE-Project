import React from 'react';

import megazin1 from '../../public/img/megazin1.png';
import megazin2 from '../../public/img/megazin2.png';
import megazin3 from '../../public/img/megazin3.png';


const Toolkit = () => {
    return (
        <div className="bg-white  text-gray-800">



            {/* Main Content */}
            <div className="container pt-5 mx-auto w-[95%] px-6 pb-16">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold mb-4 ">Brand Resources</h1>
                    <p className="text-lg text-gray-600 mb-6">
                        A centralized hub for IEEE brand assets, templates, and guidelines to maintain consistency
                    </p>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search brand resources..."
                        className="border p-3 w-full max-w-md mx-auto rounded-md shadow-sm"
                    />
                </div>

                {/* Toolkit Grid */}
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {[megazin1, megazin2, megazin3].map((img, i) => {
                        const titles = ["Logo Package", "Color Palette", "Typography"];
                        const descriptions = [
                            "Exploring the latest advancements in technology and their impact on society.",
                            "Showcasing student research projects and technical innovations.",
                            "Annual review of technological achievements and student success stories."
                        ];
                        return (
                            <div key={i} className="text-center bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
                                <img src={img} alt={titles[i]} className="w-full h-48 object-cover rounded-md mb-4" />
                                <h3 className="text-xl font-semibold text-[#045C99] mb-2">{titles[i]}</h3>
                                <p className="text-gray-700">{descriptions[i]}</p>
                            </div>
                        );
                    })}
                </div>
            </div>


        </div>
    );
};

export default Toolkit;
