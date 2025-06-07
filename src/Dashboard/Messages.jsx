import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaEnvelope, FaUser, FaArrowLeft } from 'react-icons/fa';

const Messages = () => {    // State to store messages (using only messages since we don't need to modify them in this demo)
    const [messages] = useState([
        {
            id: 1,
            name: "Dr. Ahmed Khan",
            email: "ahmed.khan@ieee.org",
            subject: "Research Collaboration Opportunity",
            message: "Dear IEEE Team,\n\nI hope this email finds you well. I am writing to inquire about potential research collaboration opportunities in the field of renewable energy. Our university has recently received funding for a project on smart grid technologies, and we are looking for partners with expertise in this area.\n\nLooking forward to your response.\n\nBest regards,\nDr. Ahmed Khan",
            date: "June 3, 2025"
        },
        {
            id: 2,
            name: "Sarah Thompson",
            email: "sarah.t@gmail.com",
            subject: "Membership Inquiry",
            message: "Hello,\n\nI am a final year electrical engineering student and I'm interested in joining IEEE. Could you please provide me with information about the membership process, benefits, and any student discounts that might be available?\n\nThank you,\nSarah",
            date: "June 5, 2025"
        },
        {
            id: 3,
            name: "Michael Lee",
            email: "m.lee@techcorp.com",
            subject: "Speaking Engagement Request",
            message: "Dear IEEE Bangladesh Section,\n\nI represent TechCorp Industries and we are organizing a conference on emerging technologies next month. We would be honored if a representative from your organization could deliver a keynote speech on the impact of AI in engineering.\n\nPlease let me know if this would be possible, and we can discuss the details further.\n\nRegards,\nMichael Lee\nEvent Coordinator, TechCorp Industries",
            date: "June 6, 2025"
        },
        {
            id: 4,
            name: "Priya Sharma",
            email: "priya.s@ieee.org",
            subject: "Workshop Feedback",
            message: "Hello IEEE Team,\n\nI recently attended your workshop on Machine Learning for Engineers and wanted to express my gratitude for such a well-organized event. The hands-on sessions were particularly valuable, and I've already started implementing some of the techniques in my work.\n\nI look forward to participating in more such events in the future.\n\nBest regards,\nPriya Sharma",
            date: "June 2, 2025"
        },
        {
            id: 5,
            name: "Robert Johnson",
            email: "robert.j@university.edu",
            subject: "Technical Paper Review Request",
            message: "Dear IEEE Review Committee,\n\nI have completed a research paper on advancements in quantum computing and would like to submit it for review and potential publication in your journal. Could you please guide me through the submission process?\n\nThe paper explores novel approaches to quantum error correction that could significantly improve qubit stability.\n\nThank you for your consideration.\n\nSincerely,\nProf. Robert Johnson\nDepartment of Computer Science",
            date: "June 4, 2025"
        }
    ]);

    // State for selected message
    const [selectedMessage, setSelectedMessage] = useState(null);

    // Get query parameters from URL
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const emailParam = queryParams.get('email');

    // Find message by email from URL params (if provided)
    useEffect(() => {
        if (emailParam) {
            const foundMessage = messages.find(msg => msg.email === emailParam);
            if (foundMessage) {
                setSelectedMessage(foundMessage);
            }
        }
    }, [emailParam, messages]);

    // Return to message list function
    const handleBackToList = () => {
        setSelectedMessage(null);
    };

    return (
        <div className="bg-white min-h-screen p-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Messages</h1>

                {selectedMessage ? (
                    // Message detail view
                    <div className="bg-white rounded-lg shadow-md p-6 animate-fadeIn">
                        <button
                            onClick={handleBackToList}
                            className="flex items-center text-[#045C99] mb-6 hover:underline"
                        >
                            <FaArrowLeft className="mr-2" /> Back to messages
                        </button>

                        <div className="border-b pb-4 mb-4">
                            <h2 className="text-xl font-semibold text-gray-800">{selectedMessage.subject}</h2>
                            <div className="mt-2 flex items-start">
                                <div className="h-12 w-12 bg-[#045C99] rounded-full flex items-center justify-center text-white font-bold mr-4">
                                    {selectedMessage.name.split(' ').map(name => name[0]).join('')}
                                </div>
                                <div>
                                    <p className="font-medium">{selectedMessage.name}</p>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <FaEnvelope className="mr-2" />
                                        <span>{selectedMessage.email}</span>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">{selectedMessage.date}</p>
                                </div>
                            </div>
                        </div>

                        <div className="whitespace-pre-line text-gray-700">
                            {selectedMessage.message}
                        </div>

                        <div className="mt-8 flex">
                            <button className="bg-[#045C99] text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                                Reply
                            </button>
                            <button className="ml-4 border border-gray-300 px-4 py-2 rounded text-gray-700 hover:bg-gray-100 transition">
                                Mark as Read
                            </button>
                        </div>
                    </div>
                ) : (
                    // Message list view
                    <div className="grid gap-4">
                        {messages.length > 0 ? (
                            messages.map((message) => (
                                <div
                                    key={message.id}
                                    onClick={() => setSelectedMessage(message)}
                                    className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition border-l-4 border-[#045C99]"
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-start">
                                            <div className="h-12 w-12 bg-[#045C99] rounded-full flex items-center justify-center text-white font-bold mr-4">
                                                {message.name.split(' ').map(name => name[0]).join('')}
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-gray-800">{message.name}</h3>
                                                <p className="text-sm text-gray-600">{message.email}</p>
                                                <p className="text-sm font-medium mt-1">{message.subject}</p>
                                                <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                                                    {message.message.replace(/\n/g, ' ')}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-500">{message.date}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12">
                                <FaEnvelope className="mx-auto text-gray-300 text-5xl mb-4" />
                                <h3 className="text-xl font-medium text-gray-600">No Messages</h3>
                                <p className="text-gray-500 mt-2">You don't have any messages yet.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Messages;