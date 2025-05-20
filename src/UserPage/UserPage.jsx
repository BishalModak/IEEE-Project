import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserPage = () => {
    // This would normally come from an API or context
    const [userData] = useState({
        name: 'John Doe',
        email: 'john.doe@ieee.org',
        ieeeId: 'IEEE-123456789',
        phoneNumber: '+1 (555) 123-4567',
        memberType: 'Local Member',
        department: 'Computer Science & Engineering',
        university: 'Leading University',
        joinedDate: 'January 15, 2023',
        experience: [
            {
                id: 1,
                position: 'Webmaster',
                duration: 'Jan 2023 - Present',
                description: 'Managed and maintained the IEEE student branch website.'
            },
            {
                id: 2,
                position: 'Publication Coordinator',
                duration: 'Mar 2022 - Dec 2022',
                description: 'Coordinated publication activities for the student branch.'
            }
        ],
        profileImage: 'https://i.ibb.co/7pp5Zcp/person1.jpg', // Default image path
        achievements: [
            { id: 1, title: 'Best Website Award', year: '2024' },
            { id: 2, title: 'IEEE Outstanding Branch Volunteer', year: '2023' }
        ]
    });

    // For demonstration, you would fetch user data from API in a real application
    useEffect(() => {
        // Simulating API fetch
        // const fetchUserData = async () => {
        //   try {
        //     const response = await fetch('/api/user/profile');
        //     const data = await response.json();
        //     setUserData(data);
        //   } catch (error) {
        //     console.error('Error fetching user data:', error);
        //   }
        // };
        // 
        // fetchUserData();
    }, []);
    return (
        <div className="bg-gray-100 min-h-screen py-12 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">

                {/* Header with background */}
                <div className="bg-blue-600 h-40 relative">
                    {/* Navigation link */}
                    <div className="absolute top-4 left-4">
                        <Link to="/" className="text-white hover:text-blue-200">
                            &larr; Back to Home
                        </Link>
                    </div>

                    {/* Profile image */}
                    <div className="absolute -bottom-16 left-8">
                        <img
                            src={userData.profileImage}
                            alt={`${userData.name}'s profile`}
                            className="w-32 h-32 rounded-full border-4 border-white object-cover bg-white"
                        />
                    </div>
                </div>

                {/* User info */}
                <div className="pt-20 px-8 pb-8">
                    <h1 className="text-3xl font-bold text-gray-800">{userData.name}</h1>
                    <p className="text-blue-600 font-medium">{userData.memberType}</p>

                    {/* User details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="space-y-4">
                            <div>
                                <h2 className="text-sm font-medium text-gray-500">Email</h2>
                                <p className="text-gray-800">{userData.email}</p>
                            </div>

                            <div>
                                <h2 className="text-sm font-medium text-gray-500">IEEE ID</h2>
                                <p className="text-gray-800">{userData.ieeeId}</p>
                            </div>

                            <div>
                                <h2 className="text-sm font-medium text-gray-500">Phone Number</h2>
                                <p className="text-gray-800">{userData.phoneNumber}</p>
                            </div>

                            <div>
                                <h2 className="text-sm font-medium text-gray-500">Department</h2>
                                <p className="text-gray-800">{userData.department}</p>
                            </div>

                            <div>
                                <h2 className="text-sm font-medium text-gray-500">University</h2>
                                <p className="text-gray-800">{userData.university}</p>
                            </div>

                            <div>
                                <h2 className="text-sm font-medium text-gray-500">Member Since</h2>
                                <p className="text-gray-800">{userData.joinedDate}</p>
                            </div>
                        </div>

                        {/* Experience Section */}
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">Experience</h2>
                            <div className="space-y-4">
                                {userData.experience.map((exp) => (
                                    <div key={exp.id} className="border-l-2 border-blue-500 pl-4">
                                        <h3 className="font-medium text-gray-800">{exp.position}</h3>
                                        <p className="text-sm text-gray-500">{exp.duration}</p>
                                        <p className="text-sm text-gray-600 mt-1">{exp.description}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Achievements Section */}
                            <h2 className="text-lg font-semibold text-gray-800 mb-4 mt-8">Achievements</h2>
                            <div className="space-y-2">
                                {userData.achievements.map((achievement) => (
                                    <div key={achievement.id} className="flex items-center">
                                        <span className="text-blue-600 mr-2">•</span>
                                        <div>
                                            <p className="font-medium text-gray-800">{achievement.title}</p>
                                            <p className="text-sm text-gray-500">{achievement.year}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

             
                </div>
            </div>
        </div>
    );
};

export default UserPage;
