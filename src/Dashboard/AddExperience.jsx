import React, { useState, useEffect } from 'react';
import { FaIdCard, FaCheck } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const AddExperience = () => {
    const [ieeeId, setIeeeId] = useState('');
    const [experience, setExperience] = useState('');
    const location = useLocation();

    useEffect(() => {
        // Get IEEE ID from URL query parameters if available
        const queryParams = new URLSearchParams(location.search);
        const idFromUrl = queryParams.get('id');
        if (idFromUrl) {
            setIeeeId(idFromUrl);
        }
    }, [location]);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            ieeeId,
            experience
        });

        // Show success message
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIeeeId('');
            setExperience('');
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Add Member Experience</h1>
                    <p className="mt-2 text-gray-600">
                        Record IEEE member experiences, achievements, and contributions
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
                    {isSubmitted ? (
                        <div className="flex flex-col items-center justify-center py-12">
                            <div className="rounded-full bg-green-100 p-3 mb-4">
                                <FaCheck className="text-green-600 text-3xl" />
                            </div>
                            <h2 className="text-2xl font-medium text-gray-800 mb-2">Experience Added Successfully!</h2>
                            <p className="text-gray-600">The member experience has been recorded.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* IEEE ID Input */}
                            <div>
                                <label htmlFor="ieeeId" className="block text-sm font-medium text-gray-700 mb-1">
                                    IEEE ID*
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaIdCard className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="ieeeId"
                                        name="ieeeId"
                                        type="text"
                                        value={ieeeId}
                                        onChange={(e) => setIeeeId(e.target.value)}
                                        required
                                        className="pl-10 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md py-3"
                                        placeholder="Enter 8-digit IEEE ID"
                                        pattern="[0-9]{8}"
                                        title="IEEE ID should be an 8-digit number"
                                    />
                                </div>
                                <p className="mt-1 text-xs text-gray-500">
                                    Enter the 8-digit numeric IEEE ID of the member
                                </p>
                            </div>

                            {/* Experience Textarea */}
                            <div>
                                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                                    Member Experience*
                                </label>
                                <textarea
                                    id="experience"
                                    name="experience"
                                    rows={8}
                                    value={experience}
                                    onChange={(e) => setExperience(e.target.value)}
                                    required
                                    className="block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border border-gray-300 rounded-md p-3"
                                    placeholder="Describe the member's experience, contributions, achievements, or participation in IEEE activities..."
                                ></textarea>
                                <p className="mt-1 text-xs text-gray-500">
                                    Include details such as events attended, leadership roles, publications, contributions, awards, etc.
                                </p>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-[#045C99] text-white py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300 flex justify-center items-center"
                                >
                                    Save Member Experience
                                </button>
                            </div>
                        </form>
                    )}
                </div>

                
            </div>
        </div>
    );
};

export default AddExperience;