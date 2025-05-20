import React from 'react';
import { FaBookOpen, FaVideo, FaFile } from 'react-icons/fa6';

const ResourcesAndRecordings = () => {

    const resources = [
        {
            icon: <FaBookOpen className="text-[#045C99] text-3xl" />,
            title: 'Technical Papers',
            description: 'Access our collection of research papers and technical publications.',
            linkText: 'Browse Papers',
            linkHref: '#',
        },
        {
            icon: <FaVideo className="text-[#045C99] text-3xl" />,
            title: 'Workshop Recordings',
            description: 'Watch recordings of our past workshops and technical sessions.',
            linkText: 'View Videos',
            linkHref: '#',
        },
        {
            icon: <FaFile className="text-[#045C99] text-3xl" />,
            title: 'Presentation Slides',
            description: 'Download presentation materials from our events and workshops.',
            linkText: 'Download Slides',
            linkHref: '#',
        },
    ];
    return (
        <section className="my-24 mx-12">
            <h2 className="text-2xl font-bold text-center text-black mb-10">Resources</h2>
            <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
                {resources.map((item, index) => (
                    <div key={index} className="bg-white p-5 w-72 text-left shadow-md rounded-md">
                        <div className="mb-4">{item.icon}</div>
                        <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                        <a
                            href={item.linkHref}
                            className="inline-block px-3 py-2 text-sm border border-[#045C99] text-[#045C99] rounded hover:bg-[#045C99] hover:text-white transition"
                        >
                            {item.linkText}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ResourcesAndRecordings;