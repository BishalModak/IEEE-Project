import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";

const SingleMegazine = () => {
    const magazines = useLoaderData();
    const { id } = useParams();
    const singleMagazine = magazines.find(single => single.id == id);
    const [isHovered, setIsHovered] = useState(false);

    // If magazine is not found
    if (!singleMagazine) {
        return (
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold text-red-600 mb-4">Magazine Not Found</h1>
                <p className="text-lg text-gray-700">The magazine you're looking for doesn't exist.</p>
                <a href="/megazine" className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                    Return to Magazines
                </a>
            </div>
        );
    }

   
    const randomViews = Math.floor(Math.random() * 10000) + 1000;
    const randomDownloads = Math.floor(Math.random() * 1000) + 100;
    const randomShares = Math.floor(Math.random() * 500) + 50;

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                    {/* Magazine Header */}
                    <div className="bg-gradient-to-r bg-[#045C99] py-8 px-6 md:px-10">
                        <div className="flex items-center justify-between">
                            <span className="text-white text-sm font-semibold bg-blue-800 px-3 py-1 rounded-full">
                                IEEE Magazine
                            </span>
                            <span className="text-white text-sm">
                                Published: {singleMagazine.date || "May 2025"}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mt-4">
                            {singleMagazine.title}
                        </h1>
                    </div>

                    {/* Main Content */}
                    <div className="p-6 md:p-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            {/* Magazine Image */}
                            <div
                                className="relative rounded-lg overflow-hidden shadow-lg transition-all duration-300"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                style={{
                                    transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                                    transition: 'transform 0.3s ease-in-out'
                                }}
                            >
                                <img
                                    className="w-full h-auto object-cover"
                                    src={singleMagazine.image}
                                    alt={singleMagazine.alt || singleMagazine.title}
                                />

                               
                            </div>

                            {/* Magazine Details */}
                            <div className="flex flex-col justify-between">
                                <div>
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">About This Issue</h2>

                                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                        {singleMagazine.description}
                                    </p>

                                    {/* Additional details */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="text-sm font-medium text-blue-800">Publication</h3>
                                            <p className="text-gray-800">IEEE LU Student Branch</p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="text-sm font-medium text-blue-800">Issue</h3>
                                            <p className="text-gray-800">Volume {Math.floor(Math.random() * 5) + 1}, Issue {Math.floor(Math.random() * 4) + 1}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href={singleMagazine.link}
                                        className="flex-1 flex justify-center items-center gap-2 bg-[#045C99] hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        Download PDF
                                    </a>
                                    
                                </div>
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-3 gap-4 mt-10 border-t border-gray-200 pt-10">
                            <div className="text-center">
                                <h3 className="text-3xl font-bold text-blue-600">{randomViews.toLocaleString()}</h3>
                                <p className="text-gray-600">Views</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-3xl font-bold text-blue-600">{randomDownloads.toLocaleString()}</h3>
                                <p className="text-gray-600">Downloads</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-3xl font-bold text-blue-600">{randomShares.toLocaleString()}</h3>
                                <p className="text-gray-600">Shares</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Articles Section */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Articles In This Issue</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Example featured articles - in a real app you would dynamically generate these */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <div className="flex items-start">
                                <div className="w-2 h-14 bg-blue-600 rounded-full mr-4"></div>
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-800">The Future of Artificial Intelligence</h3>
                                    <p className="text-sm text-gray-600 mt-2">Exploring how AI will shape industries in the coming decade</p>
                                    <div className="flex items-center mt-3">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <span className="text-blue-600 font-semibold">JD</span>
                                        </div>
                                        <span className="ml-2 text-xs text-gray-500">By John Doe</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <div className="flex items-start">
                                <div className="w-2 h-14 bg-green-600 rounded-full mr-4"></div>
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-800">Sustainable Technology Solutions</h3>
                                    <p className="text-sm text-gray-600 mt-2">How green tech is addressing environmental challenges</p>
                                    <div className="flex items-center mt-3">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                            <span className="text-green-600 font-semibold">AS</span>
                                        </div>
                                        <span className="ml-2 text-xs text-gray-500">By Anna Smith</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <div className="flex items-start">
                                <div className="w-2 h-14 bg-purple-600 rounded-full mr-4"></div>
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-800">Cybersecurity Trends</h3>
                                    <p className="text-sm text-gray-600 mt-2">Latest developments in protecting digital assets</p>
                                    <div className="flex items-center mt-3">
                                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                            <span className="text-purple-600 font-semibold">RL</span>
                                        </div>
                                        <span className="ml-2 text-xs text-gray-500">By Robert Lee</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Previous Issues */}
                <div className="mt-16">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Previous Issues</h2>
                        <a href="/megazine" className="text-blue-600 hover:text-blue-800 font-medium">View All</a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[1].map((item) => (
                            <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                                <div className="h-40 bg-gray-200">
                                    <img
                                        src={`../public/img/megazin${Math.floor(Math.random() * 3) + 1}.png`}
                                        alt="Previous Issue"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-800">Tech Horizon Issue #{item}</h3>
                                    <p className="text-xs text-gray-500 mt-1">Q{item} 2024</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleMegazine;