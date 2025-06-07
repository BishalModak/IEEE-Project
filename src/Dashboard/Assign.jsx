import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaUser, FaIdCard, FaEnvelope, FaArrowLeft, FaTrophy } from 'react-icons/fa';

const Assign = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const achievementId = queryParams.get('achievement');

    const [formData, setFormData] = useState({
        name: '',
        ieeeId: '',
        email: ''
    });

    const [achievement, setAchievement] = useState(null);
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);

    // Mock achievements data (in a real app, this would come from an API or context)
    const achievements = [
        {
            id: 1,
            title: "IEEE Outstanding Branch Counselor Award",
            description: "Recognizes IEEE Student Branch Counselors who have demonstrated exemplary involvement with their Student Branch.",
            category: "Branch Awards",
            year: 2023
        },
        {
            id: 2,
            title: "IEEE Regional Exemplary Student Branch Award",
            description: "Recognizes Student Branches for their outstanding activities, membership growth, and technical programs.",
            category: "Branch Awards",
            year: 2023
        },
        {
            id: 3,
            title: "IEEE WIE Student Branch Affinity Group of the Year",
            description: "Honors exceptional Women in Engineering Student Branch Affinity Groups for their contributions.",
            category: "Special Recognition",
            year: 2023
        },
        {
            id: 4,
            title: "IEEE Student Paper Contest Winner",
            description: "Awarded to students with exceptional research papers presented at IEEE conferences.",
            category: "Individual Awards",
            year: 2023
        },
        {
            id: 5,
            title: "IEEE Richard E. Merwin Student Scholarship",
            description: "Recognizes student leaders who show promise in their academic careers.",
            category: "Scholarships",
            year: 2022
        },
        {
            id: 6,
            title: "IEEE Computer Society Upsilon Pi Epsilon Award",
            description: "Honors academic excellence for students in computer science related fields.",
            category: "Academic Excellence",
            year: 2022
        }
    ];

    useEffect(() => {
        // Find the achievement based on ID
        if (achievementId) {
            const found = achievements.find(ach => ach.id === parseInt(achievementId));
            if (found) {
                setAchievement(found);
            }
        }
        setLoading(false);
    }, [achievementId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you would send this data to your backend
        console.log("Assigning achievement to member:", {
            achievement: achievement,
            member: formData
        });

        // Show success message
        setSuccess(true);

        // Reset form after 2 seconds and redirect back to dashboard
        setTimeout(() => {
            setSuccess(false);
            navigate('/dashboard');
        }, 2000);
    };

    const goBack = () => {
        navigate(-1);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#045C99]"></div>
            </div>
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen p-4 md:p-8">
            <div className="max-w-2xl mx-auto">
                <button
                    onClick={goBack}
                    className="flex items-center text-[#045C99] mb-6 hover:underline"
                >
                    <FaArrowLeft className="mr-2" /> Back to Dashboard
                </button>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-2">Assign Achievement</h1>

                    {achievement ? (
                        <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <div className="flex items-start">
                                <FaTrophy className="text-amber-500 text-2xl mt-1 mr-3" />
                                <div>
                                    <h2 className="font-medium text-lg">{achievement.title}</h2>
                                    <div className="flex items-center mt-1 gap-2">
                                        <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded-full">
                                            {achievement.category}
                                        </span>
                                        <span className="text-gray-500 text-sm">
                                            Year: {achievement.year}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 mt-2 text-sm">
                                        {achievement.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                            <p className="text-yellow-700">No achievement selected. Please go back to the dashboard and select an achievement to assign.</p>
                        </div>
                    )}

                    {success ? (
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-4">
                            <p className="text-green-700">Achievement successfully assigned! Redirecting to dashboard...</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name*
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaUser className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="pl-10 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md py-2 px-3"
                                        placeholder="Enter member's full name"
                                        required
                                    />
                                </div>
                            </div>

                            {/* IEEE ID Input */}
                            <div>
                                <label htmlFor="ieeeId" className="block text-sm font-medium text-gray-700 mb-1">
                                    IEEE ID*
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaIdCard className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        id="ieeeId"
                                        name="ieeeId"
                                        value={formData.ieeeId}
                                        onChange={handleChange}
                                        className="pl-10 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md py-2 px-3"
                                        placeholder="Enter 8-digit IEEE ID"
                                        pattern="[0-9]{8}"
                                        title="IEEE ID should be an 8-digit number"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email*
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaEnvelope className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="pl-10 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md py-2 px-3"
                                        placeholder="Enter member's email address"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={!achievement}
                                    className={`w-full md:w-auto py-2 px-6 rounded-md font-medium transition duration-300 flex justify-center items-center ${achievement
                                        ? 'bg-[#045C99] text-white hover:bg-blue-700'
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                                >
                                    Assign Achievement
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Assign;