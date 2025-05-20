import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleResearchPaper = () => {
    const { id } = useParams();
    const [paper, setPaper] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/Papers.json')
            .then(res => res.json())
            .then(data => {
                const foundPaper = data.find(p => p.id === parseInt(id));
                setPaper(foundPaper);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching paper:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (!paper) {
        return (
            <div className="max-w-5xl mx-auto py-12 px-4">
                <h1 className="text-3xl font-bold text-red-600">Paper not found</h1>
                <p className="mt-4">The research paper you're looking for doesn't exist or has been removed.</p>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen py-10 px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                {/* Paper Header */}
                <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-8">
                    <div className="flex justify-between items-center">
                        <span className="bg-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                            {paper.status}
                        </span>
                        <span className="text-sm">{paper.date}</span>
                    </div>
                    <h1 className="text-3xl font-bold mt-4">{paper.title}</h1>
                    <div className="flex items-center mt-4">
                        <div className="mr-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                <span className="text-blue-700 text-xl font-bold">
                                    {paper.author.charAt(0)}
                                </span>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">{paper.author}</h2>
                            <p className="text-blue-100">{paper.institution}</p>
                        </div>
                    </div>
                </div>

                {/* Paper Content */}
                <div className="p-8">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {paper.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Main Image */}
                    {/* {paper.image && (
                        <div className="mb-8">
                            <img
                                src={paper.image}
                                alt={paper.title}
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                        </div>
                    )} */}

                    {/* Abstract Section */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Abstract</h3>
                        <div className="bg-gray-50 p-4 rounded-md border-l-4 border-blue-500">
                            <p className="text-gray-700">{paper.abstract}</p>
                        </div>
                    </div>

                    {/* Methodology Section */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Methodology</h3>
                        <p className="text-gray-700">{paper.methodology}</p>
                    </div>

                    {/* Author Information */}
                    <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Author Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="text-blue-600">{paper.mail}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Institution</p>
                                <p>{paper.institution}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Address</p>
                                <p>{paper.address}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Category</p>
                                <p>{paper.category}</p>
                            </div>
                        </div>
                    </div>

                    {/* Funding Information */}
                    {paper.fundingInfo && (
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Funding Information</h3>
                            <p className="text-gray-700">{paper.fundingInfo}</p>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 mt-8">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download PDF
                        </button>
                        
                    </div>
                </div>
            </div>

            {/* Related Papers - Could be implemented when you have more papers */}
            <div className="max-w-5xl mx-auto mt-12">
                <h2 className="text-2xl font-bold mb-6">Related Research Papers</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <span className="text-xs text-blue-600 font-semibold">Artificial Intelligence</span>
                        <h3 className="font-bold mt-2">Machine Learning Approaches in Healthcare</h3>
                        <p className="text-sm text-gray-600 mt-2">An overview of recent applications of machine learning in healthcare diagnostics.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <span className="text-xs text-blue-600 font-semibold">Networking</span>
                        <h3 className="font-bold mt-2">Optimizing Network Infrastructure</h3>
                        <p className="text-sm text-gray-600 mt-2">Research on improving network efficiency using modern technologies.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <span className="text-xs text-blue-600 font-semibold">Data Science</span>
                        <h3 className="font-bold mt-2">Big Data Processing Techniques</h3>
                        <p className="text-sm text-gray-600 mt-2">Exploring methods for handling large datasets in real-time applications.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleResearchPaper;